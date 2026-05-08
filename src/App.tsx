import { motion } from 'motion/react';
import { 
  Search, 
  Star, 
  Menu, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  Quote,
  TrendingUp,
  Settings,
  Users,
  Shield,
  Layers,
  Zap,
  Database,
  Cpu,
  Mail,
  ChevronRight
} from 'lucide-react';
import { useState, useRef } from 'react';

const HubSyncIcon = ({ size = 24, className = "" }) => (
  <svg 
    viewBox="0 0 100 100" 
    width={size} 
    height={size} 
    className={`${className} fill-current`}
  >
    <rect x="10" y="20" width="15" height="60" rx="7.5" />
    <rect x="42.5" y="30" width="15" height="40" rx="7.5" />
    <rect x="75" y="40" width="15" height="60" rx="7.5" />
  </svg>
);

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 bg-[#0A0A0A] border-b border-white/5"
    >
      <div className="flex-1"></div>
      <div className="hidden lg:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase">
        <a href="#home" className="hover:text-hub-blue transition-colors text-white">Home</a>
        <a href="#solutions" className="flex items-center gap-1 hover:text-hub-blue transition-colors text-white">
          Solutions <ChevronRight size={14} className="rotate-90 opacity-50" />
        </a>
        <a href="#case-study" className="hover:text-hub-blue transition-colors text-white">Case study</a>
        <a href="#careers" className="hover:text-hub-blue transition-colors text-white">Careers</a>
        <a href="#team" className="hover:text-hub-blue transition-colors text-white">Team</a>
        <a href="#news" className="hover:text-hub-blue transition-colors text-white">News</a>
        <a href="#learn" className="hover:text-hub-blue transition-colors text-white">Learn</a>
      </div>
      <div className="flex-1 flex justify-end items-center gap-8">
        <button className="flex items-center gap-2 hover:text-hub-blue transition-colors group">
          <Search size={22} className="text-white group-hover:scale-110 transition-transform" />
          <span className="hidden xl:inline text-[13px] font-bold text-white uppercase">Search</span>
        </button>
        <div className="w-12 h-12 flex items-center justify-center bg-hub-blue rounded-full text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] cursor-pointer hover:scale-110 transition-transform">
          <Star size={20} fill="currentColor" />
        </div>
      </div>
    </motion.nav>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-16 z-40 hidden xl:flex flex-col items-center py-12 border-r border-white/5 bg-black">
      <div className="mb-auto">
        <div className="flex flex-col items-center">
            <div className="[writing-mode:vertical-lr] rotate-180 flex items-center gap-6">
                <span className="text-3xl font-bold tracking-tighter flex flex-row-reverse items-center gap-4">
                   <div className="bg-hub-blue p-2 rounded-lg rotate-90 scale-110 flex items-center justify-center">
                        <HubSyncIcon size={24} className="text-white" />
                   </div>
                   HubSync
                </span>
            </div>
        </div>
      </div>

      <div className="my-auto [writing-mode:vertical-lr] rotate-180 flex items-center gap-4">
        <div className="w-[1px] h-20 bg-white/20"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors cursor-pointer">
           hubsyncservice@gmail.com
        </span>
        <div className="w-1 h-1 rounded-full bg-white/30"></div>
      </div>

      <div className="mt-auto flex flex-col gap-6">
        {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
          <motion.a 
            key={i} 
            href="#" 
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }}
            className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-sm hover:border-hub-blue hover:text-hub-blue transition-all"
          >
            <Icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-32 px-12 lg:pl-32 overflow-hidden bg-[#0A0A0A]">
      <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#001f4d] opacity-50 blur-[200px] pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 items-center w-full z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative -top-6"
        >
          <span className="text-[12px] uppercase tracking-[0.5em] text-white/60 mb-8 block font-sans">
              Hi, WE ARE HUBSYNC TECHNOLOGY COMPANY
          </span>
          
          <h1 className="text-6xl md:text-8xl xl:text-[9.5rem] font-display font-bold leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
            CREATE <br />
            <span className="font-light">CONNECT</span> & <br />
            TRANSFORM
          </h1>
          
          <div className="flex items-center gap-10 mt-0 mb-16">
            <div className="shrink-0 opacity-20">
               <ArrowUpRight size={140} strokeWidth={0.5} className="text-white" />
            </div>
            <div className="max-w-[380px]">
              <p className="text-white text-lg leading-relaxed font-light">
                Digital interactions reimagined—building intuitive experiences that resonate and drive results.
              </p>
            </div>
          </div>

          <div className="absolute top-0 right-1/4 opacity-30">
            <Star className="text-white w-10 h-10 animate-pulse" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
           <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
             {/* Dynamic Glow Background */}
             <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[140px] animate-pulse"></div>
             
             {/* High-Fidelity HubSync Logo Image */}
             <motion.img 
                src="/logo.png" 
                alt="HubSync Logo"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(0,102,255,0.6)]"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
             />
           </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-12 bg-black/60 backdrop-blur-md overflow-hidden">
        <div className="flex animate-[scroll_60s_linear_infinite] w-[400%] gap-40 items-center px-10 opacity-70">
           {['Keiter', 'Frazier & Deeter', 'Grassi', 'Withum+', 'RLB', 'KSM', 'Keiter', 'Frazier & Deeter', 'Grassi', 'Withum+', 'RLB', 'KSM'].map((logo, i) => (
             <span key={i} className="text-2xl md:text-3xl font-display font-medium text-white whitespace-nowrap tracking-[0.3em] uppercase">
               {logo}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 lg:pl-32 bg-hub-dark relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#003366] opacity-60 blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-hub-blue/20 to-transparent border border-white/10 relative group">
              <img 
                src="/corporate.jpg" 
                alt="Our Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hub-dark/80 to-transparent"></div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full flex items-center justify-center border-8 border-hub-dark shadow-2xl overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 p-2"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="text-[7px] font-bold fill-hub-dark uppercase tracking-[0.18em]">
                    <textPath xlinkHref="#circlePath">
                      HUBSYNC TECHNOLOGY AGENCY • HUBSYNC TECHNOLOGY AGENCY •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              
              <img src="/logo.png" alt="HubSync Logo" className="relative w-16 h-16 object-contain z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-hub-blue mb-6">
              <TrendingUp size={20} />
              <span className="uppercase tracking-[0.2em] text-sm font-medium">About</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
              We're a <span className="text-hub-blue">digital-first agency</span> focused on crafting seamless, human-centered web interactions.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-hub-blue font-medium mb-2 flex items-center gap-2">Explore portfolio <ArrowRight size={14} /></p>
                <p className="text-white/40 text-sm">to learn more</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                HubSync's mission is to revolutionize the accounting industry by delivering intelligent, integrated solutions that automate manual processes, enhance client collaboration, and empower firms to operate more efficiently and profitably.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-display font-bold text-white hover:text-hub-blue cursor-pointer transition-colors underline underline-offset-8 decoration-1 decoration-white/20 hover:decoration-hub-blue">
              Automation & Workflow Optimization
            </h4>
            <h4 className="text-xl font-display font-bold text-white hover:text-hub-blue cursor-pointer transition-colors underline underline-offset-8 decoration-1 decoration-white/20 hover:decoration-hub-blue">
              Client Experience Solutions
            </h4>
            <h4 className="text-xl font-display font-bold text-white hover:text-hub-blue cursor-pointer transition-colors underline underline-offset-8 decoration-1 decoration-white/20 hover:decoration-hub-blue">
              Smart Data & Analytics
            </h4>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white uppercase tracking-tight">Our Mission</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              To craft human-centered, innovative digital experiences that connect brands with their audiences through purposeful design, intuitive technology, and seamless interaction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white uppercase tracking-tight">Our Objective</h3>
            <p className="text-white/50 leading-relaxed text-sm">
              To become a leading force in shaping the future of digital interaction—empowering businesses and inspiring the next generation of creatives through meaningful, user-first design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Tax Workflow Automation", desc: "HubSync helps accounting firms work faster and smarter with easy-to-use tools that automate tasks and improve client service." },
    { title: "Client Collaboration Hub", desc: "A centralized, secure portal for document sharing, e-signatures, communication, and task tracking—designed to enhance transparency and client experience." },
    { title: "Analytics & Performance", desc: "Get powerful insights into project status, team performance, and client behavior with customizable dashboards and automated reporting." },
    { title: "Digital Engagement Letters", desc: "Generate, send, and track engagement letters with just a few clicks—boosting efficiency and ensuring compliance across all client engagements." },
    { title: "Seamless Integrations", desc: "Connect HubSync effortlessly with your existing tools, including Outlook, document management systems, and other tax software.", featured: true },
    { title: "AI-Powered Tax Organizers", desc: "Leverage intelligent tax organizers that adapt to each client, helping firms gather and process information faster and more accurately than ever before." },
  ];

  return (
    <section id="services" className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <div 
          className="h-1/3 w-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/black.jpg')", backgroundColor: '#000' }}
        ></div>
        <div 
          className="h-2/3 w-full bg-cover bg-center" 
          style={{ backgroundImage: "url('/blue.avif')", backgroundColor: '#0055FF' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-24 px-4 lg:pl-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-20 gap-8">
          <div>
            <div className="flex items-center gap-2 text-hub-blue mb-4">
              <Zap size={16} fill="currentColor" />
              <span className="uppercase tracking-widest text-[10px] font-black text-white">OUR SERVICE</span>
            </div>
            <h2 className="text-5xl font-display font-medium text-white">Offering versatile <br /> digital services</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <p className="max-w-[400px] text-white/70 text-sm leading-relaxed mt-1">
               HubSync helps accounting firms work faster and smarter with easy-to-use tools that automate tasks and improve client service.
             </p>
             <div className="hidden md:flex gap-4">
                <div className="w-12 h-12 rounded-full border border-white/20 border-dashed flex items-center justify-center relative">
                    <ArrowLeft size={16} className="text-white/40 absolute -left-1 opacity-50" />
                    <ArrowRight size={16} className="text-white/40 absolute -right-1 opacity-50" />
                    <div className="w-full h-[1px] bg-white/20"></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 border-dashed flex items-center justify-center relative">
                    <ArrowLeft size={16} className="text-white/40 absolute -left-1 opacity-50" />
                    <ArrowRight size={16} className="text-white/40 absolute -right-1 opacity-50" />
                    <div className="w-full h-[1px] bg-white/20"></div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-10 rounded-[20px] flex flex-col h-full transition-all duration-500 shadow-2xl relative overflow-hidden ${item.featured ? 'bg-[#00050f] text-white' : 'bg-white text-hub-dark'}`}
            >
              <div className="absolute top-4 right-4 opacity-10 pointer-events-none text-white">
                 <HubSyncIcon size={80} />
              </div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-700 bg-transparent overflow-hidden ${item.featured ? 'opacity-0 pointer-events-none' : ''}`}>
                <img src="/ss.png" alt="icon" className="w-full h-full object-contain" />
              </div>

              <h3 className="text-2xl font-display font-bold mb-6 leading-tight">{item.title}</h3>
              <p className={`text-sm leading-relaxed mb-10 flex-grow font-bold ${item.featured ? 'text-white/70' : 'text-gray-500'}`}>
                {item.desc}
              </p>
              
              <button className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] mt-auto group/btn ${item.featured ? 'text-white' : 'text-hub-dark'}`}>
                LEARN MORE 
                <ArrowRight size={14} className="transition-all duration-300 group-hover/btn:translate-x-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large Bottom Text Wrap-around */}
      <div className="relative w-full overflow-hidden mt-20 pointer-events-none select-none">
          <div className="flex whitespace-nowrap opacity-100">
             <span className="text-[120px] font-display font-bold text-white tracking-widest uppercase flex items-center leading-none">
               ON MARKETING <span className="mx-8 block w-4 h-4 rounded-full bg-white"></span> <span className="opacity-40 font-light" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>TECHNOLOGY</span>
             </span>
          </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 lg:pl-24 bg-hub-dark min-h-screen relative overflow-hidden">
      <div className="absolute -top-40 -left-10 w-[800px] h-[800px] bg-[#003366] opacity-60 blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="flex items-center gap-2 text-hub-blue mb-4">
              <HubSyncIcon size={16} />
              <span className="uppercase tracking-widest text-xs font-bold">PROJECTS</span>
            </div>
            <h2 className="text-5xl font-display font-bold">Checkout our <br /> <span className="text-white/40">exclusive projects</span></h2>
          </div>
          <div className="hidden md:flex gap-4 text-sm font-medium">
             {['All Works', 'Branding', 'Design', 'Development'].map((cat, i) => (
               <button key={i} className={`px-4 py-2 rounded-full transition-colors ${i === 0 ? 'bg-hub-blue text-white' : 'hover:text-hub-blue text-white/50'}`}>
                 {cat}
               </button>
             ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            '/1.jpg',
            '/2.jpg',
            '/new.jpg',
            '/n4.jpg',
            '/n5.jpg',
            '/new6.jpg',
          ].map((url, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl bg-hub-gray border border-white/5 h-80"
            >
              <img src={url} alt={`Project ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-hub-blue/80 opacity-0 group-hover:opacity-90 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                 <h4 className="text-xl font-bold mb-2">Project Case {i+1}</h4>
                 <p className="text-white/70 text-sm mb-6">Digital transformation for modern enterprise systems.</p>
                 <button className="bg-white text-hub-dark p-3 rounded-full">
                    <ArrowUpRight size={24} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative rounded-[40px] overflow-hidden group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
            style={{ backgroundImage: "url('/dark.jpg')", backgroundColor: '#050505' }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>
          
          <div className="relative z-10 py-24 px-8 text-center flex flex-col items-center min-h-[500px] justify-center">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-hub-blue rounded-full flex items-center justify-center border-[10px] border-hub-dark z-20">
              <ArrowDown size={32} className="text-white" />
            </div>

            <div className="flex items-center gap-2 text-hub-blue mb-10 mt-8">
              <HubSyncIcon size={16} />
              <span className="uppercase tracking-[0.4em] text-[11px] font-black text-white">Client Testimonial</span>
            </div>

            <div className="max-w-4xl relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                <Quote size={240} className="text-white" />
              </div>

              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-10 leading-[1.3] relative z-10 px-4">
                “HubSync has completely transformed the way we manage our tax workflows. What used to take weeks is now handled in days—with fewer errors and much better client communication. It’s an essential tool for any modern accounting firm.”
              </h3>

              <div className="flex items-center justify-center gap-6 text-white/70 font-medium relative z-10">
                <div className="w-12 h-[1px] bg-white/30"></div>
                <p className="text-sm md:text-base tracking-tight">
                  <span className="text-white italic">— Sarah Mitchell,</span> Managing Partner, Mitchell & Co. CPAs
                </p>
                <div className="w-12 h-[1px] bg-white/30"></div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden md:flex">
               <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                  <ArrowLeft size={28} strokeWidth={1.5} />
               </button>
            </div>
            <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex">
               <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                  <ArrowRight size={28} strokeWidth={1.5} />
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Process = () => {
    const steps = [
        { id: '1', title: 'Discussion', desc: 'We meet customers in set place to discuss the details about needs and demands before proposing plan.' },
        { id: '2', title: 'Ideas & Concepts', desc: 'We meet customers in set place to discuss the details about needs and demands before proposing plan.' },
        { id: '3', title: 'Testing & Trying', desc: 'We meet customers in set place to discuss the details about needs and demands before proposing plan.' },
    ];

    return (
        <section id="process" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
                <img src="/black.jpg" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10 w-full">
                <div className="bg-[#0A0A0A] rounded-[60px] overflow-hidden border border-white/5 shadow-2xl relative">
                    <div className="grid lg:grid-cols-2">
                        <div className="relative bg-black min-h-[400px] lg:min-h-[600px]">
                            <img 
                                src="/work.jpg" 
                                alt="Process" 
                                className="w-full h-full object-cover rounded-br-[100px]" 
                            />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#0A0A0A] translate-x-[1px] translate-y-[1px]">
                                <div className="w-full h-full bg-[#0A0A0A] rounded-tl-[100px]"></div>
                            </div>
                        </div>

                        <div className="p-12 lg:p-20 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-hub-blue mb-6">
                                <Zap size={16} fill="currentColor" />
                                <span className="uppercase tracking-[0.3em] text-[12px] font-black text-white">Work Process</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-display font-medium text-white mb-10 leading-[1.1]">
                                Proven Process for a <br />
                                <span className="text-white">Growing Your Business</span>
                            </h2>
                            <p className="max-w-xl text-white/50 text-[15px] leading-relaxed mb-12">
                                HubSync's mission is to revolutionize the accounting industry by delivering intelligent, integrated solutions that automate manual processes, enhance client collaboration, and empower firms to operate more efficiently
                            </p>
                        </div>
                    </div>

                    <div className="px-12 lg:px-20 pb-24 lg:-mt-24 relative z-20">
                         <div className="relative pt-12">
                            <div className="absolute top-[48px] left-[15%] right-[10%] h-[1px] bg-white/10 z-0 hidden md:block"></div>
                            
                            <div className="grid md:grid-cols-3 gap-16 relative z-10 lg:pl-[10%]">
                                {steps.map((step, i) => (
                                    <div key={i} className="flex flex-col group">
                                        <div className="w-16 h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white text-xl font-bold mb-10 shadow-2xl transition-transform group-hover:scale-110">
                                            {step.id}
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-white mb-6 underline underline-offset-8 decoration-1 decoration-white/10">{step.title}</h3>
                                        <p className="text-white/30 text-sm leading-relaxed max-w-[300px]">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                         </div>
                    </div>
                </div>

                {}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 px-8">
                    {[
                        { label: 'Years of Experience', value: '25' },
                        { label: 'Projects Completed', value: '1M' },
                        { label: 'Expert Employees', value: '150' },
                        { label: 'Prestigious Award', value: '20' },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left transition-transform hover:-translate-y-2 duration-300">
                            <div className="text-7xl font-display font-medium text-white mb-4 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-[12px] uppercase tracking-[0.3em] text-white/50 font-bold">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Team = () => {
    const members = [
        { name: 'John McGowan', role: 'CEO', image: '/t1.png' },
        { name: 'Paul Madarasz', role: 'COO', image: '/t2.jpg' },
        { name: 'Don Terry', role: 'CRO', image: '/t3.jpg' },
        { name: 'Betsy Weissman', role: 'CMO', image: '/t4.jpg' },
    ];

    return (
        <section id="team" className="py-24 px-4 lg:pl-32 bg-hub-blue min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                  <div>
                    <div className="flex items-center gap-2 text-white mb-4">
                      <HubSyncIcon size={16} />
                      <span className="uppercase tracking-widest text-xs font-bold">OUR TEAM</span>
                    </div>
                    <h2 className="text-5xl font-display font-bold text-white">An incredible Team <br /> of great minds</h2>
                  </div>
                  <p className="max-w-md text-white/80">
                    HubSync's mission is to revolutionize the accounting industry by delivering intelligent, integrated solutions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {members.map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 group"
                        >
                            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 transition-all duration-500">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-lg font-bold text-white text-center font-display">{member.name}</h3>
                            <p className="text-white/60 text-[10px] text-center uppercase tracking-widest mt-1">{member.role}</p>
                            
                            <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {[Facebook, Instagram, Twitter, Youtube].map((Icon, j) => (
                                    <Icon key={j} size={14} className="text-white/60 hover:text-white cursor-pointer" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const News = () => {
    return (
        <section id="news" className="py-24 px-4 lg:pl-32 bg-hub-dark min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <div className="flex items-center gap-2 text-hub-blue mb-4">
                        <HubSyncIcon size={16} />
                        <span className="uppercase tracking-widest text-xs font-bold">LATEST NEWS</span>
                    </div>
                    <h2 className="text-5xl font-display font-bold mb-8">Updates <br /> <span className="text-white/40">What's New With Us</span></h2>
                    
                    <div className="flex gap-8 text-sm font-medium">
                        {['Press', 'Blog', 'Announcements'].map((cat, i) => (
                            <button key={i} className={`hover:text-hub-blue transition-colors ${i === 0 ? 'text-white' : 'text-white/40'}`}>{cat}</button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-video bg-hub-gray rounded-2xl overflow-hidden mb-8 border border-white/5 relative">
                                <img 
                                    src="/news.png" 
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                                    alt="News" 
                                />
                                <div className="absolute top-4 left-4 bg-hub-blue text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter">Technology</div>
                            </div>
                            <h3 className="text-xl font-display font-bold group-hover:text-hub-blue transition-colors mb-4">
                                Powering Efficiency for CPA Firms
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed">
                                For most accounting firms, tracking the progress of tax returns, audits or other engagements is a major challenge.
                            </p>
                            <button className="flex items-center gap-2 text-xs font-bold mt-6 uppercase tracking-widest border-b border-white/10 pb-2 hover:border-hub-blue transition-all">
                                Read Article <ChevronRight size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const Awards = () => {
    return (
        <section id="awards" className="py-32 px-4 lg:pl-32 bg-[#001331] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-black/60 blur-[120px] -mr-40 -mt-40 rounded-full pointer-events-none z-0"></div>
            
            <div className="absolute top-10 right-10 w-[500px] h-[300px] pointer-events-none">
                <div className="relative w-full h-full">
                    <div className="absolute top-0 right-0 text-white font-display">
                        <div className="text-[120px] font-black leading-none tracking-tighter flex items-end">
                            500
                        </div>
                        <div className="flex flex-col items-center mt-[-10px]">
                            <div className="text-[14px] font-bold tracking-tight">Technology <span className="text-[#00FF85]">Fast 500</span> 2024</div>
                            <div className="text-[12px] font-bold uppercase tracking-[0.2em] mt-1">North America</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-2 mb-20 relative z-10">
                    <div className="flex items-center gap-3 text-hub-blue">
                        <div className="w-10 h-[1px] bg-hub-blue"></div>
                        <span className="text-[14px] font-bold uppercase tracking-[0.3em]">AWARDS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                        Award-Winning Innovation: <br />
                        <span className="opacity-50">Recognized by Deloitte.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
                    <div className="relative group p-1 w-full max-w-[450px]">
                        <div className="relative bg-transparent border-[2px] border-white/10 rounded-[60px] p-12 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:border-hub-blue/30 h-full min-h-[500px] justify-center">
                            {}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                            {}
                            <div className="relative mb-8 flex flex-col items-center">
                                <img src="/gold.png" alt="Gold Winner" className="w-[200px] h-auto object-contain" />
                                <div className="text-3xl font-display font-bold text-white mt-4">2023</div>
                            </div>
                            
                            <div className="relative">
                                <h3 className="text-xl font-bold text-white mb-4">Gold Winner</h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    Excellence in Enterprise <br /> Software Design
                                </p>
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Technology Innovation</span>
                                </div>
                            </div>
                        </div>
                        {}
                        <div className="absolute top-1/2 -left-12 w-1 h-32 bg-white/5 -translate-y-1/2 rounded-full hidden lg:block"></div>
                    </div>

                    <div className="flex items-center justify-center lg:pt-20 w-full">
                        <img 
                            src="/2022.png" 
                            alt="Innovation Awards" 
                            className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section id="contact" className="relative pt-40 bg-[#050505] overflow-hidden">
            <div className="absolute top-0 left-0 w-full overflow-hidden border-y border-white/5 py-4">
                <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite] gap-10 opacity-70">
                    {Array(4).fill(null).map((_, i) => (
                        <div key={i} className="flex items-center gap-10">
                            <span className="text-[64px] font-display font-black text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>8728 • TECHNOLOGY • ADVERTISING • BRANDING • STRATEGY • DEVELOPMENT</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-8 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 pb-32">
                    <div className="flex flex-col items-start pt-10">
                        <h2 className="text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
                            Ready to Streamline Your <br /> Workflow?
                        </h2>
                        <p className="text-white/40 text-[15px] mb-12">
                            Click below to get in touch with us.
                        </p>
                        <button className="bg-white text-[#0066FF] px-10 py-5 rounded-xl font-bold transition-all hover:bg-hub-blue hover:text-white hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                            Book a Demo
                        </button>
                    </div>

                    <div className="pt-10">
                        <h4 className="text-white/40 text-[13px] uppercase tracking-[0.2em] font-bold mb-8">Hubsync Link</h4>
                        <div className="flex flex-col gap-5">
                            {['About', 'Solutions', 'Team', 'Brand', 'News'].map((link) => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="text-white text-lg font-medium hover:text-hub-blue transition-colors w-fit">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="pt-10">
                        <h4 className="text-white/40 text-[13px] uppercase tracking-[0.2em] font-bold mb-8">Our Address</h4>
                        <p className="text-white text-lg font-medium mb-6 leading-relaxed max-w-[280px]">
                            213 Marina Street, Los Angeles USA, 665432
                        </p>
                        
                        <div className="relative mt-12 group flex items-center">
                            <div className="bg-hub-blue/20 p-1 pl-4 pr-1 rounded-full flex items-center gap-4 transition-all hover:bg-hub-blue/30 backdrop-blur-sm border border-white/5">
                                <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Send Email</span>
                                <div className="bg-white/10 p-4 rounded-full">
                                    <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <a href="mailto:office@hubsync.com" className="text-white hover:text-hub-blue transition-colors font-medium">
                                office@hubsync.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#0066FF] opacity-30 blur-[150px] -mb-[250px] rounded-full"></div>

            <footer className="bg-hub-blue relative z-20 py-8 px-8 lg:px-20 overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-3">
                        <img src="/hub.png" alt="HubSync" className="h-6 w-auto brightness-0 invert" />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 text-white/70 text-[13px] font-medium">
                        <span>© 2024 HubSync Technology Company</span>
                        <div className="h-4 w-[1px] bg-white/20 hidden lg:block"></div>
                        <span>HubSync Inc.</span>
                        <div className="h-4 w-[1px] bg-white/20 hidden lg:block"></div>
                        <span className="flex items-center gap-2">
                             +1 713-942-8728
                        </span>
                    </div>

                    <div className="flex items-center gap-8 text-[13px] font-bold text-white uppercase tracking-widest">
                        <a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
                        <div className="h-4 w-[1px] bg-white/20"></div>
                        <a href="#" className="hover:opacity-60 transition-opacity">Terms of Use</a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default function App() {
  return (
    <div className="bg-[#050505] selection:bg-hub-blue/30 overflow-x-hidden min-h-screen text-white font-sans">
      <Navbar />
      <Sidebar />
      
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="process"><Process /></div>
        <div id="projects"><Projects /></div>
        <div id="team"><Team /></div>
        <div id="awards"><Awards /></div>
        <div id="news"><News /></div>
        <CTA />
      </main>

      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-hub-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-hub-blue/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
}


