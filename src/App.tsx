/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Phone, MapPin, Clock, Star, CheckCircle2, 
  Droplets, Sparkles, Home, Building2, ShieldCheck, 
  Menu, X, Leaf, Facebook, MessageCircle, ChevronRight, Wind, ChevronLeft, Quote, Award, Shield
} from 'lucide-react';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const WaveTop = ({ color }: { color: string }) => (
  <div className="w-full overflow-hidden leading-none rotate-180 -mb-1">
    <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
    </svg>
  </div>
);

const WaveBottom = ({ color }: { color: string }) => (
  <div className="w-full overflow-hidden leading-none -mt-1">
    <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill={color}></path>
    </svg>
  </div>
);

const DiagonalTop = ({ color }: { color: string }) => (
  <div className="w-full overflow-hidden leading-none rotate-180 -mb-1">
    <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48V0h1200v120z" fill={color}></path>
    </svg>
  </div>
);

const DiagonalBottom = ({ color }: { color: string }) => (
  <div className="w-full overflow-hidden leading-none -mt-1">
    <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48V0h1200v120z" fill={color}></path>
    </svg>
  </div>
);

const reviewsData = [
  { text: "Very professional — cleaned my entire 2BHK vacant house on time with all necessary equipment. Fully satisfied.", author: "Residential Customer" },
  { text: "Cleaned a very large kitchen for a food manufacturing company. Reasonable price, excellent service, no delays.", author: "Commercial Client" },
  { text: "Cleaned the septic tank using hi-tech machinery. Professional staff, neat work, and reasonable charge.", author: "Facility Manager" },
  { text: "Every minute detail taken care of — cupboards, walls, floors scrubbed by machine, fan cleaning, wall spots. They worked from 8:30 AM to 10:00 PM without stopping. Incredible work.", author: "Homeowner" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviewsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => setActiveReview((prev) => (prev + 1) % reviewsData.length);
  const prevReview = () => setActiveReview((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Sticky Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-brand-green" strokeWidth={2.5} />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-brand-purple leading-none">
                  CLEAN H<span className="lowercase">i</span>ZEN
                </span>
                <span className="text-[10px] font-semibold text-brand-blue tracking-wider uppercase">Professional Housekeeping</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
              <Link to="/#about" className="text-gray-700 hover:text-brand-purple transition-colors">About Us</Link>
              <Link to="/#services" className="text-gray-700 hover:text-brand-purple transition-colors">Services</Link>
              <Link to="/#pricing" className="text-gray-700 hover:text-brand-purple transition-colors">Pricing</Link>
              <Link to="/#reviews" className="text-gray-700 hover:text-brand-purple transition-colors">Reviews</Link>
              <Link to="/#contact" className="text-gray-700 hover:text-brand-purple transition-colors">Contact</Link>
              <button onClick={openModal} className="bg-brand-green hover:bg-[#73b313] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                Book Now <ChevronRight className="w-4 h-4" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-brand-purple" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
            <Link to="/#about" onClick={toggleMenu} className="text-gray-800 font-medium py-2 border-b border-gray-50">About Us</Link>
            <Link to="/#services" onClick={toggleMenu} className="text-gray-800 font-medium py-2 border-b border-gray-50">Services</Link>
            <Link to="/#pricing" onClick={toggleMenu} className="text-gray-800 font-medium py-2 border-b border-gray-50">Pricing</Link>
            <Link to="/#reviews" onClick={toggleMenu} className="text-gray-800 font-medium py-2 border-b border-gray-50">Reviews</Link>
            <Link to="/#contact" onClick={toggleMenu} className="text-gray-800 font-medium py-2 border-b border-gray-50">Contact</Link>
            <button onClick={() => { toggleMenu(); openModal(); }} className="bg-brand-green text-white px-6 py-3 rounded-full font-bold mt-2 text-center">
              Book Now
            </button>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={
          <main>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-blue/5 -z-10"></div>
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Cleaning with Meaning</span>
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-extrabold text-brand-purple leading-tight mb-6">
              Hyderabad's Most <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Affordable</span> Professional Cleaning
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Integrated facility management services with highly trained professionals. We bring state-of-the-art equipment and 10+ years of expertise to every space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openModal} className="bg-brand-green hover:bg-[#73b313] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Book a Service
              </button>
              <a href="tel:+919000574555" className="bg-white border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                +91 90005 74555
              </a>
            </div>
            
            <div className="mt-16 max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-bold text-gray-800 text-lg tracking-tight">Google Reviews</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-gray-900 font-bold text-base">4.7</span>
                    <span className="text-gray-500 text-sm font-medium">(259 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-md border border-white p-6 sm:p-8 rounded-3xl shadow-xl min-h-[180px] flex flex-col justify-center">
                <Quote className="absolute top-4 right-6 w-10 h-10 text-brand-purple/10" />
                
                <div className="overflow-hidden relative">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeReview * 100}%)` }}>
                    {reviewsData.map((review, idx) => (
                      <div key={idx} className="w-full shrink-0 px-2">
                        <p className="text-gray-800 italic mb-4 text-sm sm:text-base leading-relaxed">"{review.text}"</p>
                        <div className="font-bold text-brand-purple text-sm">— {review.author}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white px-3 py-1.5 rounded-full shadow-md border border-gray-100">
                  <button onClick={prevReview} className="text-gray-400 hover:text-brand-purple transition-colors p-1">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex gap-1.5 items-center px-2">
                    {reviewsData.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveReview(idx)}
                        className={`h-2 rounded-full transition-all ${idx === activeReview ? 'bg-brand-purple w-4' : 'bg-gray-300 w-2'}`}
                        aria-label={`Go to review ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <button onClick={nextReview} className="text-gray-400 hover:text-brand-purple transition-colors p-1">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveBottom color="#1D4ED8" />

      {/* About & Why Choose Us Section */}
      <section id="about" className="bg-brand-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl font-extrabold mb-6">10+ Years of Excellence</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Since 2015, Clean HiZEN has been transforming spaces across Hyderabad. We are an integrated facility management service dedicated to providing top-tier cleaning with highly trained professionals and state-of-the-art equipment.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <ShieldCheck className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="font-bold text-xl mb-2">Trained Staff</h3>
                  <p className="text-blue-100 text-sm">Vetted, professional, and highly skilled cleaning experts.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="font-bold text-xl mb-2">Modern Equipment</h3>
                  <p className="text-blue-100 text-sm">Hi-tech machinery for deep cleaning and sanitization.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="font-bold text-xl mb-2">Affordable Pricing</h3>
                  <p className="text-blue-100 text-sm">Transparent, competitive rates with no hidden charges.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Clock className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="font-bold text-xl mb-2">On-Time Service</h3>
                  <p className="text-blue-100 text-sm">Punctual arrivals and efficient service delivery.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full bg-brand-purple/20 absolute -inset-4 blur-2xl"></div>
              <div className="bg-white rounded-3xl p-8 text-gray-800 relative shadow-2xl">
                <h3 className="font-heading text-2xl font-bold text-brand-purple mb-6">Properties We Serve</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Home, text: "Residential (Apartments & Villas)" },
                    { icon: Building2, text: "Offices & Workplaces" },
                    { icon: ShieldCheck, text: "Hospitals & Clinics" },
                    { icon: Home, text: "Schools & Colleges" },
                    { icon: Building2, text: "Hotels, Malls & Retail" },
                    { icon: Sparkles, text: "Food Manufacturing Units" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 font-medium">
                      <div className="bg-brand-green/20 p-2 rounded-lg text-brand-green">
                        <item.icon className="w-5 h-5" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiagonalBottom color="#ffffff" />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-extrabold text-brand-purple mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-brand-blue font-medium">From deep cleaning to specialized sanitization, we handle it all.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="bg-brand-purple/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors text-brand-purple">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-purple mb-4">Deep Cleaning</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Interior & exterior window cleaning</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Bathroom & toilet cleaning</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Kitchen & bedroom cleaning</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Wall & cobweb cleaning</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Move In / Move Out cleaning</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> After Party cleaning</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-purple mb-4">Specialized Care</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Sofa & Carpet Shampooing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Floor cleaning (machine scrubbing)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Marble polishing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Steam Cleaning</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Facade cleaning</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Septic tank cleaning</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="bg-brand-green/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors text-brand-green">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-purple mb-4">Sanitization</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Professional disinfecting</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Home sanitization</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Office sanitization</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> Hospital sanitization</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" /> School sanitization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-extrabold text-brand-purple mb-6">Visual Proof of Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Don't just take our word for it — see the Clean Hizen difference in action. From dirty, neglected spaces to spotless results, our Hyderabad cleaning team restores every detail.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-brand-purple/10 p-3 rounded-2xl h-fit text-brand-purple shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Uncompromising Quality</h4>
                    <p className="text-gray-600">We deliver meticulous results that speak for themselves.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-brand-green/20 p-3 rounded-2xl h-fit text-brand-green shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">100% Satisfaction Guarantee</h4>
                    <p className="text-gray-600">Not happy? We return within 24 hours to fix it.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      <WaveTop color="#6B21A8" />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-brand-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-extrabold mb-4">Transparent Pricing</h2>
            <p className="text-purple-200 text-lg">Premium service at Hyderabad's most affordable rates.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Bathroom Cleaning", price: "₹349", unit: "onwards" },
              { name: "Sofa Cleaning", price: "₹499", unit: "onwards" },
              { name: "Kitchen Cleaning", price: "₹999", unit: "onwards" },
              { name: "Unfurnished Apartment", price: "₹2,599", unit: "onwards" },
              { name: "Carpet Cleaning", price: "₹3", unit: "per sqft" },
              { name: "Marble Cleaning", price: "₹27", unit: "per sqft" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center text-center hover:bg-white/20 transition-colors">
                <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                <div className="mt-auto">
                  <span className="text-sm text-purple-200 mr-1">from</span>
                  <span className="font-heading text-4xl font-extrabold text-brand-green">{item.price}</span>
                  <span className="text-sm text-purple-200 block mt-1">{item.unit}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button onClick={openModal} className="bg-brand-green hover:bg-[#73b313] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              Get a Custom Quote
            </button>
          </div>
        </div>
      </section>

      <DiagonalBottom color="#ffffff" />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-4xl font-extrabold text-brand-purple mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg mb-10">
                Ready to experience the Clean HiZEN difference? Contact us today for bookings or inquiries.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-4 rounded-full text-brand-blue shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Call Us</h4>
                    <a href="tel:+919000574555" className="block text-gray-600 hover:text-brand-purple">+91 90005 74555</a>
                    <a href="tel:+918904579896" className="block text-gray-600 hover:text-brand-purple">+91 89045 79896</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-green/20 p-4 rounded-full text-brand-green shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Visit Us</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Plot No. 204, SSM Residency,<br/>
                      Near Volkwood International School,<br/>
                      Satya Nagar, New Maruthi Nagar,<br/>
                      Kothapet, Hyderabad – 500035,<br/>
                      Telangana, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-purple/10 p-4 rounded-full text-brand-purple shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday – Saturday<br/>7:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="https://wa.me/919000574555" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl overflow-hidden h-[400px] lg:h-auto relative border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.625630145338!2d78.5433216!3d17.3817383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c4a8ca0c57%3A0x402e7865fec2a0de!2sClean%20Hizen-%20Professional%20Housekeeping%20services!5e0!3m2!1sen!2ses!4v1773687978318!5m2!1sen!2ses" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
          </main>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="h-8 w-8 text-brand-green" strokeWidth={2.5} />
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-white leading-none">
                    CLEAN H<span className="lowercase">i</span>ZEN
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Hyderabad's most affordable professional cleaning services. Integrated facility management with highly trained professionals.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/people/Clean-Hizen-Professional-Housekeeping-services/61561193608489/#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/#about" className="hover:text-brand-green transition-colors">About Us</Link></li>
                <li><Link to="/#services" className="hover:text-brand-green transition-colors">Our Services</Link></li>
                <li><Link to="/#pricing" className="hover:text-brand-green transition-colors">Pricing</Link></li>
                <li><Link to="/#contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li>GST: <span className="text-gray-300 font-mono">36AANFC9135H1Z6</span></li>
                <li><Link to="/privacy-policy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-brand-green transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Clean HiZEN. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="bg-white rounded-3xl w-full max-w-md relative z-10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="bg-brand-purple p-6 text-white flex justify-between items-center shrink-0">
              <h3 className="font-heading font-bold text-2xl">Book a Service</h3>
              <button onClick={closeModal} className="text-white/80 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/U7WLG1tAOUENoz8nLBCo" 
                style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                id="U7WLG1tAOUENoz8nLBCo_1773749048210"
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919000574555" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-105"
      >
        <span className="font-bold text-lg tracking-wide hidden sm:inline-block">WhatsApp</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
