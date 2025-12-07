import React, { useState } from 'react';
import { Menu, X, ChevronRight, Users, BookOpen, TrendingUp, Award, Mail, Phone, MapPin } from 'lucide-react';

// Type Definitions
interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

// Navigation Component
const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId:any) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">
              H
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              The HOKS Club
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'programs', 'consultation', 'blog', 'tools', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className={`capitalize hover:text-amber-400 transition-colors ${
                  activeSection === item ? 'text-amber-400' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'programs', 'consultation', 'blog', 'tools', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-700 rounded text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              Where Ambition Learns
            </span>
            <br />
            <span className="text-white">the Language of Finance</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            From Students to Startups — Learn, Consult, and Grow with India's Premium Finance and Business Club
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('programs')}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center space-x-2 text-white"
            >
              <span>Explore Programs</span>
              <ChevronRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('consultation')}
              className="px-8 py-4 border-2 border-amber-500 rounded-full font-semibold hover:bg-amber-500/10 transition-all text-white"
            >
              Book Consultation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { icon: Users, label: 'Expert Professionals', value: '10+' },
            { icon: BookOpen, label: 'Programs Offered', value: '15+' },
            { icon: TrendingUp, label: 'Success Stories', value: '100+' },
            { icon: Award, label: 'Certifications', value: 'Industry-Ready' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 text-center border border-slate-700 hover:border-amber-500/50 transition-all">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-amber-400" />
              <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            About Us
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              The HOKS Club brings together some of the finest minds in finance, law, and business to create a space where learning meets real-world application. Guided by Chartered Accountants, Company Secretaries, and experienced business consultants, the club bridges the gap between academic knowledge and professional excellence.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              We design programs that turn curiosity into clarity and ambition into action. From students discovering the fundamentals of finance to entrepreneurs refining their business strategy, every initiative at The HOKS Club is built to inspire growth, confidence, and leadership.
            </p>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6">
              <p className="text-amber-400 font-semibold italic">
                "At our core, we believe financial intelligence is not just a skill but a mindset that can shape careers, companies, and the economy itself."
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Why HOKS Club?</h3>
            <div className="space-y-4">
              {[
                'Expert-Led Learning',
                'Certificate Programs',
                'Community Access',
                'Real-World Projects',
                'Professional Guidance'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-amber-400">Our Team</h3>
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-4xl font-bold flex-shrink-0">
                CS
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-amber-400 mb-2">CA. Sathishwaran</h4>
                <p className="text-slate-400 mb-4">Chartered Accountant | Business Consultant | Social Impact Assessor | Finance Educator</p>
                <p className="text-slate-300 leading-relaxed">
                  CA. Sathishwaran is a practicing Chartered Accountant with extensive experience in finance, taxation, and business advisory. He holds a Bachelor's degree in Commerce and a Master's in Business Economics, complemented by professional certifications including FAFD (ICAI) and NISM's Social Impact Assessor.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  His approach combines analytical depth with practical insight, helping businesses build robust financial frameworks and achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Programs Section Component
const ProgramsSection: React.FC = () => {
  const financePrograms = [
    { title: 'Finance for Students', desc: 'Learn the fundamentals of personal finance, taxation, and investment' },
    { title: 'Finance to Industry-Ready Program', desc: 'Gain hands-on corporate finance skills and business communication confidence' },
    { title: 'Corporate Training', desc: 'Custom learning modules for companies' },
    { title: 'Company Accountant Training', desc: 'For aspiring accountants and finance professionals' }
  ];

  const entrepreneurshipPrograms = [
    { title: 'Business Masterclass', desc: 'For business students and startup aspirants' },
    { title: 'Startup Bootcamps', desc: 'Intensive sessions on structuring and scaling your business' },
    { title: 'Workshops & Financial Intelligence Labs', desc: 'Action-packed sessions on finance' },
    { title: 'Accelerator Weekends & Strategy Retreats', desc: 'High-impact collaborative programs' }
  ];

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Our Programs
          </span>
        </h2>
        <p className="text-center text-slate-300 text-lg mb-12 max-w-3xl mx-auto">
          Transformative learning experiences that bridge the gap between academic knowledge and real-world application
        </p>

        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Finance & Industry-Ready Programs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {financePrograms.map((program, idx) => (
                <div key={idx} className="bg-slate-900 rounded-xl p-6 hover:border hover:border-amber-500/50 transition-all border border-transparent">
                  <h4 className="text-xl font-semibold text-white mb-2">{program.title}</h4>
                  <p className="text-slate-400">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Entrepreneurship & Business Excellence</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {entrepreneurshipPrograms.map((program, idx) => (
                <div key={idx} className="bg-slate-900 rounded-xl p-6 hover:border hover:border-amber-500/50 transition-all border border-transparent">
                  <h4 className="text-xl font-semibold text-white mb-2">{program.title}</h4>
                  <p className="text-slate-400">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Consultation Section Component
const ConsultationSection = () => {
  const services = [
    'Business Structure & Setup',
    'Tax Planning & Strategy',
    'Financial Modeling',
    'Legal Guidance',
    'Compliance Management',
    'Funding & Investment'
  ];

  return (
    <section id="consultation" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Consultation & Mentorship
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Expert Guidance</h3>
            <p className="text-slate-300 mb-6">
              Our team includes Chartered Accountants, Company Secretaries, and Bankers — professionals who bring deep practical knowledge to every conversation.
            </p>
            <p className="text-slate-300 mb-6">
              Book a personal consultation to discuss business setup, taxation, compliance, or funding. All consultations are by appointment only.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all text-white">
              Schedule Consultation
            </button>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Consultation Services</h3>
            <div className="space-y-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-slate-300">
                  <ChevronRight className="text-amber-400 flex-shrink-0" size={20} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Blog Section Component
const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Blog
          </span>
        </h2>
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-12 border border-slate-700 text-center">
          <p className="text-slate-400 text-lg">📝 Content needs to be added here. Stay tuned for insights on finance, business, and entrepreneurship.</p>
        </div>
      </div>
    </section>
  );
};

// Tools Section Component
const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Tools
          </span>
        </h2>
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-12 border border-slate-700 text-center">
          <p className="text-slate-400 text-lg">🛠️ Content needs to be added here. Financial tools and calculators coming soon.</p>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-slate-300 text-lg mb-12">
          Whether you're a student ready to learn, an entrepreneur ready to start, or a company ready to train your team — we're here to help you grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center hover:border-amber-500/50 transition-all">
            <Phone className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
            <a href="tel:8807974452" className="text-slate-300 hover:text-amber-400 transition-colors">8807974452</a>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center hover:border-amber-500/50 transition-all">
            <Mail className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <a href="mailto:thehoks01@gmail.com" className="text-slate-300 hover:text-amber-400 break-all transition-colors">thehoks01@gmail.com</a>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 text-center hover:border-amber-500/50 transition-all">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h3 className="text-xl font-semibold mb-2 text-white">Office</h3>
            <p className="text-slate-400 text-sm">📍 Address details to be added</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">
            H
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            The HOKS Club
          </span>
        </div>
        <p className="text-slate-400 mb-4">House of Kanakkars Private Limited</p>
        <p className="text-slate-500 text-sm">© 2024 The HOKS Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
const HoksClubWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId:any) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProgramsSection />
      <ConsultationSection />
      <BlogSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HoksClubWebsite;