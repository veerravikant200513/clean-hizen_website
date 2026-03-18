import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, CalendarCheck, ShieldCheck } from 'lucide-react';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Explicitly track the 'Lead' conversion event for Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-24 pb-12">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white max-w-2xl w-full rounded-3xl shadow-xl overflow-hidden text-center relative">
          
          {/* Header section */}
          <div className="bg-brand-purple py-12 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-blue opacity-90"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <CheckCircle className="w-10 h-10 text-brand-green" />
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
                Booking Confirmed!
              </h1>
              <p className="text-purple-100 text-lg md:text-xl max-w-lg mx-auto font-medium">
                Thank you for choosing Clean HiZEN. Your request has been successfully received.
              </p>
            </div>
          </div>

          {/* Body section */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What happens next?</h2>
            
            <div className="space-y-6 text-left max-w-lg mx-auto mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue shrink-0">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">We'll review your details</h3>
                  <p className="text-gray-600 mt-1">Our team will quickly review your booking requirements and schedule.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-green/20 p-3 rounded-full text-brand-green shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Expect a call from us</h3>
                  <p className="text-gray-600 mt-1">We will contact you shortly to confirm your exact requirements and provide a final quote.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-purple/10 p-3 rounded-full text-brand-purple shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Sit back and relax</h3>
                  <p className="text-gray-600 mt-1">Our professional team will arrive at the scheduled time to transform your space.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-500 mb-6">
                If you have any immediate questions, please call us at <a href="tel:+919000574555" className="text-brand-purple font-semibold hover:underline">+91 90005 74555</a>
              </p>
              
              <Link 
                to="/" 
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-[#73b313] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Home className="w-5 h-5" />
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
