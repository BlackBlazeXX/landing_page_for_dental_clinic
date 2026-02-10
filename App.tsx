import React, { useState, useEffect, useRef } from 'react';
import { CLINIC_INFO, SERVICES, REVIEWS } from './constants';
import Button from './components/Button';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [isMapActive, setIsMapActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Standard scroll listener for sticky UI
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };

    // Intersection Observer for high-performance reveals
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-mesh overflow-x-hidden" ref={containerRef}>

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-24 md:pb-48 px-6 perspective-1000">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] animate-float -z-10"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[100px] animate-float-delayed -z-10"></div>

        <div className="max-w-6xl mx-auto text-center relative stagger-load">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50/80 backdrop-blur-md text-slate-600 rounded-full text-sm font-medium mb-8 border border-slate-200 cursor-default shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
            </span>
            Surgical & Esthetic Center
          </div>

          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Advanced <br className="hidden md:block" /> Restorative Medicine.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Specialized care for complex dental rehabilitation. <br />
            Full sedation protocols available for anxiety-free treatment.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto text-lg scale-105">
              Book Appointment
            </Button>
            <a href={`https://wa.me/${CLINIC_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto text-lg border-slate-200 glass">
                WhatsApp Now
              </Button>
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              { text: "4.9/5 Google Rating", icon: true },
              { text: "10,000+ Smiles Created" },
              { text: "15+ Years Authority" }
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2 group cursor-default">
                  {stat.icon && (
                    <div className="flex text-yellow-400 group-hover:scale-110 transition-transform duration-500">
                      {[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3-.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                    </div>
                  )}
                  <span className="font-medium text-slate-900 link-underline">{stat.text}</span>
                </div>
                {i < 2 && <div className="w-px h-6 bg-slate-300 hidden md:block"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROBLEM -> RELIEF SECTION */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-slate-800">Patient-Centered Protocols.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-white rounded-2xl border border-slate-200 reveal" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-lg font-semibold mb-4 text-slate-900">The Challenge</h3>
              <p className="text-slate-600 leading-relaxed">
                Complex dental history often involves anxiety, past treatment failures, and functional compromise.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 reveal" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-lg font-semibold mb-4 text-slate-900">The Clinical Standard</h3>
              <p className="text-slate-600 leading-relaxed">
                We utilize a diagnostic-first approach with optional IV sedation to ensure safety, precision, and absolute comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOCTOR & AUTHORITY */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 perspective-1000 reveal">
            <div className="relative group card-3d">
              <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-6 -z-10 group-hover:rotate-12 transition-transform duration-700"></div>
              <img
                src={CLINIC_INFO.doctor.imagePath}
                alt={CLINIC_INFO.doctor.name}
                className="rounded-[3rem] shadow-2xl w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/50 shadow-xl hidden md:block animate-float group-hover:scale-105 transition-transform">
                <p className="font-semibold text-slate-900 text-sm">Clinical Director</p>
                <p className="text-slate-500 text-sm">{CLINIC_INFO.doctor.name}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 reveal" style={{ transitionDelay: '200ms' }}>
            <span className="text-slate-500 font-medium uppercase tracking-widest text-xs">Head of Prosthodontics</span>
            <h2 className="text-3xl md:text-5xl font-semibold mt-4 mb-2 text-slate-900">{CLINIC_INFO.doctor.name}</h2>
            <p className="text-slate-500 text-lg mb-8 font-medium">{CLINIC_INFO.doctor.credentials}</p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {CLINIC_INFO.doctor.bio}
            </p>
            <div className="space-y-4 mb-12">
              {[
                "Board Certified Specialist",
                "Fellow of the International Congress of Oral Implantologists",
                "ADA & AAID Member"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 group reveal" style={{ transitionDelay: `${300 + (idx * 100)}ms` }}>
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  </div>
                  <span className="text-slate-700 font-medium text-lg link-underline">{text}</span>
                </div>
              ))}
            </div>
            <Button onClick={() => setIsModalOpen(true)} variant="secondary" className="px-10">Meet the Team</Button>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-24 px-6 bg-slate-50 perspective-1000">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">Clinical Disciplines</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">Focused interventions for long-term oral health and function.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, idx) => (
              <div key={s.id} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 card-3d group reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl mb-8 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-blue-600 font-bold mb-4 text-sm tracking-wide uppercase">{s.benefit}</p>
                <p className="text-slate-500 text-base mb-8 leading-relaxed">{s.description}</p>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-slate-900 font-semibold text-sm">Outcome:</span>
                  <span className="text-slate-500 text-sm italic group-hover:text-blue-600 transition-colors">{s.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REVIEWS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900">Patient Outcomes.</h2>
            <p className="text-lg text-slate-500">Restoring function and confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((r, i) => (
              <div key={i} className="p-8 bg-slate-50/50 rounded-[2.5rem] relative border border-slate-100/50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="flex text-yellow-400 mb-6 group-hover:scale-105 transition-transform duration-500">
                  {[...Array(r.rating)].map((_, j) => <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3-.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 italic relative z-10 group-hover:text-slate-900 transition-colors">"{r.text}"</p>
                <p className="font-bold text-slate-900 text-lg">— {r.name}</p>
                <div className="absolute top-10 right-10 text-slate-200/50 group-hover:text-blue-100 group-hover:rotate-12 transition-all duration-700">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56929 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56929 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33071 21 4.017 21H1.017Z" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY & SAFETY */}
      <section className="py-32 px-6 bg-slate-900 text-white rounded-t-[4rem] md:rounded-t-[8rem] relative overflow-hidden reveal">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-tight reveal" style={{ transitionDelay: '100ms' }}>Precision Technology. <br />Sterile Protocols.</h2>
              <div className="space-y-10">
                {[
                  {
                    title: "3-Stage Sterilization",
                    desc: "Exceeding hospital standards for patient safety and clinical hygiene.",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  },
                  {
                    title: "Digital Diagnostics",
                    desc: "Ultra-low radiation imaging and digital scans. No messy molds.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 ..." // make sure the full path string is present
                      />
                    ),
                  },
                  {
                    title: "Painless Anesthesia",
                    desc: "Computer-guided delivery for localized, immediate, and painless numbing.",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group cursor-default reveal" style={{ transitionDelay: `${200 + (idx * 150)}ms` }}>
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-[1.5rem] flex items-center justify-center group-hover:bg-blue-600 transition-all duration-700 group-hover:rotate-12">
                      <svg className="w-8 h-8 text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{item.title}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group perspective-1000 reveal" style={{ transitionDelay: '400ms' }}>
              <img src="./assets/images/tech-room.jpg" alt="Clinic Technology" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 card-3d relative z-10" />
              <div className="absolute -top-8 -left-8 glass p-8 rounded-[2rem] border border-white/10 shadow-2xl z-20 text-slate-900 backdrop-blur-3xl animate-float group-hover:scale-110 transition-transform">
                <span className="text-4xl font-bold block mb-1">99%</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Pain Reduction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OFFER + RISK REVERSAL */}
      <section className="py-32 px-6 bg-blue-600 text-white text-center relative overflow-hidden group reveal">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 group-hover:bg-white/10 transition-colors duration-1000"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-semibold mb-10 tracking-tight cursor-default reveal">Begin Your Restoration.</h2>
          <p className="text-xl md:text-2xl mb-16 opacity-90 leading-relaxed font-light reveal" style={{ transitionDelay: '150ms' }}>
            We invite you to a comprehensive diagnostic consultation. <br />
            Includes 3D CBCT imaging, clinical examination, and a detailed treatment roadmap.
          </p>
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 mb-16 reveal" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-medium mb-4">The Consultation Process</h3>
            <p className="text-lg opacity-80 font-light">
              1. Diagnostics & Imaging &nbsp;•&nbsp; 2. Specialist Review &nbsp;•&nbsp; 3. Financial & Treatment Planning
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: '450ms' }}>
            <Button variant="secondary" onClick={() => setIsModalOpen(true)} className="w-full md:w-auto text-2xl px-16 py-8 shadow-2xl scale-110">
              Secure Your Slot Now
            </Button>
          </div>
        </div>
      </section>

      {/* 8. CONTACT & LOCATION */}
      <section className="py-32 px-6 bg-white relative reveal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight reveal">Visit Lumina</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 mb-16">
              {[
                { label: "Location", value: CLINIC_INFO.address },
                { label: "Hours", value: CLINIC_INFO.hours },
                { label: "Phone", value: CLINIC_INFO.phone }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <h4 className="font-bold text-blue-600 uppercase text-xs tracking-[0.2em] mb-3 group-hover:translate-x-1 transition-transform">{item.label}</h4>
                  <p className="text-2xl text-slate-800 font-medium leading-tight link-underline inline-block">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 reveal" style={{ transitionDelay: '300ms' }}>
              <a href={`tel:${CLINIC_INFO.phoneFormatted}`} className="flex-1">
                <Button className="w-full py-6 text-xl">Call Clinic</Button>
              </a>
              <a href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\+/g, '')}`} className="flex-1">
                <Button variant="outline" className="w-full py-6 text-xl border-slate-200 glass">Direct Message</Button>
              </a>
            </div>
          </div>
          <div
            className="group relative perspective-1000 cursor-pointer reveal"
            style={{ transitionDelay: '400ms' }}
            onClick={() => setIsMapActive(true)}
          >
            <div className="h-[600px] w-full bg-slate-100 rounded-[3rem] overflow-hidden relative border border-slate-200 shadow-2xl card-3d">
              <iframe
                src={CLINIC_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`grayscale-[0.5] contrast-[1.1] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 ${isMapActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
              />

              <div className="absolute bottom-6 left-6 glass px-6 py-4 rounded-2xl border border-white/50 shadow-xl pointer-events-none z-20 group-hover:-translate-y-2 transition-transform">
                <p className="text-slate-900 font-bold">Lumina Dental Clinic</p>
                <p className="text-sm text-slate-500">Free valet parking for patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 border-t border-slate-100 text-slate-400 bg-slate-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="text-center md:text-left group cursor-default">
              <span className="text-2xl font-bold text-slate-900 block mb-2 group-hover:text-blue-600 transition-colors">{CLINIC_INFO.name}</span>
              <p className="text-lg italic">{CLINIC_INFO.tagline}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="hover:text-slate-600 transition-colors">© {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blue-600 transition-colors link-underline">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors link-underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 transition-all duration-700 z-50 ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <Button onClick={() => setIsModalOpen(true)} className="w-full text-xl py-6 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          Request Diagnostic Appointment
        </Button>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;