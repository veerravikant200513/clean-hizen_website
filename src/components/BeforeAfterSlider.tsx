import React, { useState, useRef, useEffect } from 'react';
import { GripVertical, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [cleanImage, setCleanImage] = useState<string | null>(null);
  const [dirtyImage, setDirtyImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateImages = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY });
        
        // Generate clean image
        const cleanResponse = await ai.models.generateContent({
          model: 'gemini-3.1-flash-image-preview',
          contents: {
            parts: [{ text: 'A modern, spotless, perfectly clean and organized living room with white furniture, bright sunlight, highly detailed, photorealistic.' }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
              imageSize: "1K"
            }
          },
        });

        let cleanBase64 = '';
        for (const part of cleanResponse.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            cleanBase64 = `data:image/jpeg;base64,${part.inlineData.data}`;
            break;
          }
        }

        if (cleanBase64) {
          setCleanImage(cleanBase64);
          
          // Generate dirty image using the clean image as reference
          const dirtyResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [
                {
                  inlineData: {
                    data: cleanBase64.split(',')[1],
                    mimeType: 'image/jpeg',
                  },
                },
                {
                  text: 'Make the room look extremely dirty, messy, dusty, with trash on the floor, stains on the furniture, and disorganized.',
                },
              ],
            },
          });

          let dirtyBase64 = '';
          for (const part of dirtyResponse.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
              dirtyBase64 = `data:image/jpeg;base64,${part.inlineData.data}`;
              break;
            }
          }

          if (dirtyBase64) {
            setDirtyImage(dirtyBase64);
          }
        }
      } catch (error) {
        console.error('Error generating images:', error);
      } finally {
        setLoading(false);
      }
    };

    generateImages();
  }, []);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging]);

  if (loading) {
    return (
      <div className="w-full h-[400px] sm:h-[500px] rounded-3xl bg-gray-100 flex flex-col items-center justify-center text-gray-500 shadow-2xl">
        <Loader2 className="w-12 h-12 animate-spin mb-4 text-brand-purple" />
        <p className="font-medium">Generating AI Before/After Images...</p>
      </div>
    );
  }

  return (
    <div 
      ref={sliderRef}
      className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* AFTER Image (Background) */}
      <div 
        className="absolute inset-0 bg-blue-100 flex items-center justify-end p-8 bg-cover bg-center"
        style={cleanImage ? { backgroundImage: `url(${cleanImage})` } : {}}
      >
         <div className="absolute top-6 right-6 bg-brand-blue text-white text-sm font-bold px-5 py-2 rounded-full shadow-md z-10 tracking-wider">
           AFTER
         </div>
         {!cleanImage && (
           <>
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2563eb 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
             <div className="relative z-10 text-brand-blue/40 font-heading font-bold text-4xl sm:text-6xl rotate-90 sm:rotate-0 origin-right">Spotless</div>
           </>
         )}
      </div>

      {/* BEFORE Image (Foreground/Clipped) */}
      <div 
        className="absolute inset-0 bg-stone-200 flex items-center justify-start p-8 border-r-4 border-white z-10 bg-cover bg-center"
        style={{ 
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          ...(dirtyImage ? { backgroundImage: `url(${dirtyImage})` } : {})
        }}
      >
         <div className="absolute top-6 left-6 bg-stone-800 text-white text-sm font-bold px-5 py-2 rounded-full shadow-md z-10 tracking-wider">
           BEFORE
         </div>
         {!dirtyImage && (
           <>
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #292524 0, #292524 2px, transparent 2px, transparent 10px)' }}></div>
             <div className="relative z-10 text-stone-400 font-heading font-bold text-4xl sm:text-6xl -rotate-90 sm:rotate-0 origin-left">Dirty</div>
           </>
         )}
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center text-brand-purple hover:scale-110 transition-transform border-2 border-gray-100">
          <GripVertical className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
