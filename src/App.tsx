import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Wrench, Zap, Tv, Clock, CheckCircle, Star, ChevronRight, Menu, X, ArrowRight, ShieldCheck, ThumbsUp } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "0971881999";
  const formattedPhone = "+260 97 1881999";
  const whatsappUrl = `https://wa.me/260971881999?text=Hi,%20I%20need%20urgent%20service.`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900 shadow-md py-3' : 'bg-blue-900/95 py-4 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-bold text-lg leading-tight md:text-xl">LUSAKA PRO</h1>
              <span className="text-orange-400 text-xs font-semibold tracking-wider">SERVICES 24/7</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white hover:text-orange-400 transition-colors font-medium">Services</a>
            <a href="#about" className="text-white hover:text-orange-400 transition-colors font-medium">Why Us</a>
            <a href="#areas" className="text-white hover:text-orange-400 transition-colors font-medium">Areas</a>
            <a href="#contact" className="text-white hover:text-orange-400 transition-colors font-medium">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-white hover:text-orange-400 font-bold">
              <Phone className="w-5 h-5" />
              {formattedPhone}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg shadow-green-500/30">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-blue-900 border-t border-blue-800 shadow-xl py-4 pb-6 flex flex-col items-center gap-4">
            <a href="#services" className="text-white text-lg py-2 w-full text-center hover:bg-blue-800" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="text-white text-lg py-2 w-full text-center hover:bg-blue-800" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
            <a href="#areas" className="text-white text-lg py-2 w-full text-center hover:bg-blue-800" onClick={() => setMobileMenuOpen(false)}>Areas Covered</a>
            <div className="flex flex-col gap-3 w-[200px] mt-2">
              <a href={`tel:${phoneNumber}`} className="bg-orange-500 text-white rounded-full py-3 px-4 font-bold text-center flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-green-500 text-white rounded-full py-3 px-4 font-bold text-center flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2069" 
            alt="Technician working" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-transparent to-blue-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 text-orange-400 px-4 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Available 24/7 — Emergency Services Ready
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white max-w-4xl tracking-tight leading-tight mb-6">
            24/7 Plumbing, Electrical & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Dish Installation</span> in Lusaka
          </h2>
          
          <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mb-10 font-medium">
            Fast, reliable, and affordable services — we fix it right the first time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg md:text-xl transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1">
              <Phone className="w-6 h-6 animate-bounce" />
              Call Now {formattedPhone}
            </a>
            
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg md:text-xl transition-all shadow-lg shadow-green-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>
          
          <p className="text-white/80 mt-6 text-sm md:text-base flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            Based at Lusaka City Market, off Lumumba Rd
          </p>
        </div>
      </section>

      {/* Trust & Value Section */}
      <section className="py-10 bg-white shadow-sm relative z-20 -mt-6 rounded-t-3xl md:rounded-none md:mt-0">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <Clock className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-bold text-slate-800">24/7 Emergency</h3>
              <p className="text-sm text-slate-500">Always available</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-3">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800">Free Quotations</h3>
              <p className="text-sm text-slate-500">No hidden fees</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-4 rounded-full mb-3">
                <ThumbsUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800">Affordable Pricing</h3>
              <p className="text-sm text-slate-500">Best rates in Lusaka</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <CheckCircle className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="font-bold text-slate-800">Experienced</h3>
              <p className="text-sm text-slate-500">Tested professionals</p>
            </div>
          </div>
          <p className="text-center font-semibold text-slate-600 mt-8">
            Serving homes and businesses across Lusaka
          </p>
        </div>
      </section>

      {/* Promotion Section (Urgent CTA) */}
      <section className="py-12 bg-gradient-to-br from-orange-500 to-red-600">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white md:w-2/3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl">🔥</span>
              <h3 className="text-2xl md:text-3xl font-bold">Limited Offer</h3>
            </div>
            <p className="text-xl md:text-2xl font-semibold mb-2">FREE Quotations + 30% OFF Labour Charges</p>
            <p className="text-orange-100 font-medium bg-black/20 inline-block px-3 py-1 rounded-md">Available for Lusaka residents — limited time only</p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-xl transition-all shadow-xl shadow-orange-900/20 flex items-center justify-center gap-3 transform hover:scale-105">
              Claim Discount Now <ChevronRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Plumbing */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800" 
                  alt="Plumbing services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
                  <Wrench className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Plumbing</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Pipe repairs
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Leak fixing
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Toilet & sink installation
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Water system maintenance
                  </li>
                </ul>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full inline-block text-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-3 px-4 rounded-xl transition-colors">
                  Book Plumber
                </a>
              </div>
            </div>

            {/* Service 2: Electrical */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                  alt="Electrical services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white p-3 rounded-xl shadow-lg">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Electrical</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Wiring & rewiring
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Fault fixing
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Light installations
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Power troubleshooting
                  </li>
                </ul>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full inline-block text-center border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold py-3 px-4 rounded-xl transition-colors">
                  Book Electrician
                </a>
              </div>
            </div>

            {/* Service 3: Satellite */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1592424005688-668f121d58ee?auto=format&fit=crop&q=80&w=800" 
                  alt="Satellite Dish Installation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-blue-900 text-white p-3 rounded-xl shadow-lg">
                  <Tv className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Dish Installation</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> DSTV installation
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Satellite setup
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> Signal fixing
                  </li>
                  <li className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" /> TV mounting
                  </li>
                </ul>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full inline-block text-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-3 px-4 rounded-xl transition-colors">
                  Book Installer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional technician team" 
                  className="w-full h-auto aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-xl text-blue-900 mb-1">No job too small</h4>
                  <p className="text-slate-600 font-medium">From minor leaks to full rewiring, we handle it all.</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Why Choose Our Team?</h2>
              <p className="text-lg text-slate-600 mb-8 font-medium">
                We know how frustrating household repairs can be. That's why we focus on delivering <span className="text-blue-900 font-bold">fast</span>, <span className="text-blue-900 font-bold">reliable</span>, and <span className="text-blue-900 font-bold">affordable</span> services. Even when others let you down, we show up.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-orange-100 p-3 rounded-full h-fit mt-1">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Fast response time</h4>
                    <p className="text-slate-600">We aim to be at your property anywhere in Lusaka within hours, not days.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit mt-1">
                    <CheckCircle className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Affordable services</h4>
                    <p className="text-slate-600">High-quality work shouldn't cost a fortune. We provide fair, upfront pricing with free quotations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit mt-1">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">24/7 availability</h4>
                    <p className="text-slate-600">Electrical faults and burst pipes don't wait for business hours. Neither do we.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-orange-100 p-3 rounded-full h-fit mt-1">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Covers all Lusaka areas</h4>
                    <p className="text-slate-600">From City Market to Kabulonga, we navigate Lusaka quickly to serve you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-8 rounded-2xl relative">
              <div className="flex text-orange-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg italic text-blue-100 mb-6">"Excellent plumbing work, very organized team. Fixed a leak that was bothering us for weeks in just under an hour."</p>
              <p className="font-bold">— Homeowner, Kabulonga</p>
            </div>
            
            <div className="bg-blue-800 p-8 rounded-2xl relative">
              <div className="flex text-orange-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg italic text-blue-100 mb-6">"Quick response and good service. The technician came at night to fix a power fault. Very reliable when you have an emergency."</p>
              <p className="font-bold">— Shop Manager, City Market</p>
            </div>
            
            <div className="bg-blue-800 p-8 rounded-2xl relative">
              <div className="flex text-orange-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg italic text-blue-100 mb-6">"Affordable and reliable for home repairs. Installed our DSTV perfectly and hid all the cables neatly. Highly recommend."</p>
              <p className="font-bold">— Resident, Chelston</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-4">Real Work Proof</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <img 
              src="https://images.unsplash.com/photo-1607472586893-edb57cbceb42?auto=format&fit=crop&q=80&w=600" 
              alt="Plumbing work" 
              className="w-full aspect-square object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1544903332-9cbce30ab38c?auto=format&fit=crop&q=80&w=600" 
              alt="Electrical panel" 
              className="w-full aspect-square object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
              alt="Office wiring" 
              className="w-full aspect-square object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" 
              alt="Tools close up" 
              className="w-full aspect-square object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">We serve all areas in Lusaka including:</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span className="bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-bold text-lg">City Market</span>
            <span className="bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-bold text-lg">Chilenje</span>
            <span className="bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-bold text-lg">Kalingalinga</span>
            <span className="bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-bold text-lg">Kabulonga</span>
            <span className="bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-bold text-lg">Chelston</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
            {/* Direct Contact Info */}
            <div className="w-full md:w-2/5 flex flex-col bg-blue-900 p-10 text-white">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-8 flex-grow">
                <a href={`tel:${phoneNumber}`} className="flex items-start gap-4 hover:bg-blue-800 p-4 -ml-4 rounded-xl transition-colors">
                  <div className="bg-orange-500 p-3 rounded-full mt-1">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Call Us Direct</p>
                    <p className="text-2xl font-bold">{formattedPhone}</p>
                  </div>
                </a>
                
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:bg-blue-800 p-4 -ml-4 rounded-xl transition-colors">
                  <div className="bg-green-500 p-3 rounded-full mt-1">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">WhatsApp Us</p>
                    <p className="text-2xl font-bold">{formattedPhone}</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4 p-4 -ml-4">
                  <div className="bg-blue-800 p-3 rounded-full mt-1">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-lg font-medium">Lusaka City Market<br />Off Lumumba Rd, Lusaka</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="w-full md:w-3/5 p-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Quick Booking Form</h3>
              <p className="text-slate-600 mb-8 font-medium">Fill out the details below and we will contact you immediately.</p>
              
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your request has been submitted. We will contact you shortly.");
                e.currentTarget.reset();
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                    <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent font-medium" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                    <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent font-medium" placeholder="097 xxx xxxx" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                  <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent font-medium appearance-none">
                    <option value="" disabled selected>Select a service</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="dish">Dish Installation (DSTV)</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Location/Area in Lusaka</label>
                  <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent font-medium" placeholder="e.g. Chilenje, Kabulonga" />
                </div>
                
                <button type="submit" className="w-full bg-blue-900 hover:bg-blue-950 text-white rounded-xl py-4 font-bold text-lg flex justify-center items-center gap-2 transition-colors">
                  Submit Request <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888086925-920a0b06b251?auto=format&fit=crop&q=80&w=2000"
            alt="Electrical work"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Need urgent plumbing or electrical help?</h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-10 font-medium">Call us now — we're available 24/7.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${phoneNumber}`} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-xl md:text-2xl transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1">
              <Phone className="w-6 h-6 animate-pulse" />
              Call Now
            </a>
            
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-xl md:text-2xl transition-all shadow-lg shadow-green-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 pb-28 md:pb-12">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
             <div className="bg-orange-500 p-1.5 rounded-md">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-white font-bold text-xl">LUSAKA PRO SERVICES</h1>
          </div>
          <p className="max-w-md mx-auto mb-8 font-medium">Professional Plumbing, Electrical, and Satellite Dish Installation across Lusaka, Zambia. 24/7 Availability.</p>
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">Why Choose Us</a>
            <a href="#areas" className="hover:text-white transition-colors">Service Areas</a>
          </div>
          <p className="mt-12 text-sm">© {new Date().getFullYear()} Electrician Plumber & Dish Installer Lusaka. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Action Buttons (Mobile Sticky Footer & WhatsApp corner) */}
      
      {/* Floating WhatsApp Bubble (Desktop + Mobile) */}
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-24 right-4 md:bottom-8 md:right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 z-50 flex items-center justify-center animate-bounce">
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-3 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] z-50 flex gap-3">
        <a href={`tel:${phoneNumber}`} className="flex-1 bg-orange-500 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-bold focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          <Phone className="w-5 h-5" /> Call
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex-1 bg-green-500 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-bold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <MessageCircle className="w-5 h-5" /> Chat
        </a>
      </div>

    </div>
  );
}
