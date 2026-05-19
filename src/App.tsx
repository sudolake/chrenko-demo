import { motion, useScroll, useTransform } from "motion/react";
import { 
  Scale, 
  Users, 
  Briefcase, 
  Home, 
  Heart, 
  ShieldCheck, 
  FileText, 
  Gavel, 
  Clock, 
  Euro, 
  MapPin, 
  Phone, 
  Mail,
  Languages,
  CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-brand-navy" : "text-white"}`}>
            JUDr. Miloš CHRENKO
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isScrolled ? "text-brand-gold" : "text-brand-gold"}`}>
            Advokátska Kancelária
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {["Pôsobnosť", "Služby", "Odmena", "Kontakt"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-300 ${isScrolled ? "text-brand-navy hover:text-brand-gold" : "text-white/80 hover:text-white"}`}
            >
              {item}
            </a>
          ))}
          <div className="h-4 w-px bg-brand-gold/30" />
          <div className={`flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? "text-brand-navy" : "text-white"}`}>
            <Languages size={14} className="text-brand-gold" />
            <span>EN</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, label }: { title: string; subtitle?: string; label?: string }) => (
  <div className="relative mb-16">
    {label && (
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-4 block">
        {label}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-4 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-500 max-w-2xl font-light italic">
        {subtitle}
      </p>
    )}
  </div>
);

const ServiceCard = ({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 border-b border-r border-slate-100 group hover:bg-brand-navy hover:text-white transition-all duration-500"
  >
    <div className="mb-6 text-brand-gold group-hover:text-white transition-colors">
      <Icon size={32} strokeWidth={1} />
    </div>
    <h3 className="text-xl font-serif font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="text-sm opacity-70 group-hover:opacity-100 flex items-start space-x-2">
          <span className="mt-1 text-brand-gold">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

// --- Main Page ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-brand-navy">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://i.ibb.co/RT7Kjkqv/image.png" 
            alt="Law Office" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              Etablovaná od roku 2009
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-8 font-medium">
              Profesionálna <br />
              <span className="text-brand-gold/90">právna pomoc.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="max-w-md">
                <p className="text-white/70 text-lg font-light leading-relaxed">
                  Poskytujeme komplexné právne služby pre domácich aj zahraničných klientov na celom území Slovenskej republiky so sídlom v Trnave.
                </p>
              </div>
              <a 
                href="#kontakt"
                className="inline-flex items-center space-x-4 bg-brand-gold text-white px-8 py-4 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 group"
              >
                <span className="uppercase text-xs font-bold tracking-widest">Konzultácia</span>
                <Briefcase size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-10 bottom-10 hidden lg:block">
           <span className="vertical-text text-white/30 text-[10px] uppercase tracking-[0.5em] font-bold">
             TRNAVA • SLOVENSKO • EURÓPA
           </span>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section id="pôsobnosť" className="py-24 bg-brand-paper">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              label="O KANCELÁRII"
              title="Individuálny prístup, absolútna dôvera."
              subtitle="Naším primárnym cieľom je presadenie záujmu klienta v súlade so zákonom."
            />
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Advokátska kancelária JUDr. Miloša Chrenka pôsobí na trhu od roku 2009. Sme odborným partnerom, ktorý vás prevedie spleťou právnych vzťahov s dôrazom na mlčanlivosť a profesionalitu.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-200">
                <div>
                  <h4 className="text-3xl font-serif text-brand-navy mb-1 tracking-tight">15+</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Rokov praxe</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-brand-navy mb-1 tracking-tight">Elektronicky</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Komunikácia s úradmi</p>
                </div>
              </div>
              <p className="text-sm italic">
                "Spoluprácu s klientom chápeme nielen ako riešenie konkrétneho problému, ale ako budovanie silného partnerstva."
              </p>
            </div>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/5] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            >
              <img 
                src="https://i.ibb.co/0jhg2WZk/image.png" 
                alt="Architecture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 bg-brand-navy text-white p-8 rounded-2xl max-w-xs shadow-2xl hidden md:block">
              <CheckCircle2 className="text-brand-gold mb-4" size={32} />
              <p className="text-sm font-light leading-relaxed">
                Spolupracujeme s exekútormi, notármi, daňovými poradcami a súdnymi znalcami pre komplexnosť vašich požiadaviek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="služby" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            label="PRÁVNE OBLASTI"
            title="Špecializované právne služby"
            subtitle="Ponúkame odbornú pomoc v hlavných odvetviach slovenského právneho poriadku."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100">
            <ServiceCard 
              icon={Home}
              title="Občianske & Majetkové"
              items={[
                "Zmluvná agenda (kúpne, darovacie)",
                "Autorizácia zmlúv o prevode nehnuteľností",
                "Riešenie majetkových sporov",
                "Ochrana osobnosti",
                "Vymáhanie pohľadávok"
              ]}
            />
            <ServiceCard 
              icon={Briefcase}
              title="Obchodné právo"
              items={[
                "Založenie a zmeny spoločností",
                "Korporátna agenda",
                "Zastupovanie pred registrovými súdmi",
                "Vymáhanie obchodných pohľadávok",
                "Obchodné zmluvy"
              ]}
            />
            <ServiceCard 
              icon={Heart}
              title="Rodinné právo"
              items={[
                "Rozvody a úprava práv k maloletým",
                "Výživné",
                "Vyporiadanie BSM",
                "Osvojenie dieťaťa"
              ]}
            />
            <ServiceCard 
              icon={Users}
              title="Pozemkové & Susedské"
              items={[
                "Nároky voči užívateľom (štát, družstvá)",
                "Reštitučné nároky",
                "Susedské spory"
              ]}
            />
            <ServiceCard 
              icon={ShieldCheck}
              title="Trestné právo"
              items={[
                "Obhajoba v prípravnom konaní",
                "Zastupovanie na hlavnom pojednávaní",
                "Podmienečné prepustenie",
                "Nároky poškodených"
              ]}
            />
            <ServiceCard 
              icon={Briefcase}
              title="Pracovné právo"
              items={[
                "Neplatnosť skončenia pomeru",
                "Mzdové nároky",
                "Náhrada škody a úrazy",
                "Pracovné zmluvy"
              ]}
            />
            <ServiceCard 
              icon={FileText}
              title="Dedičské právo"
              items={[
                "Spisovanie závetov",
                "Listiny o vydedení",
                "Zastupovanie v dedičskom konaní"
              ]}
            />
            <ServiceCard 
              icon={Gavel}
              title="Ústavné & Medzinárodné"
              items={[
                "Ústavné sťažnosti (prieťahy, majetok)",
                "Sťažnosti na ESĽP",
                "Medzinárodné právne vzťahy"
              ]}
            />
            <ServiceCard 
              icon={Scale}
              title="Správne právo"
              items={[
                "Správne a priestupkové konanie",
                "Právne poradenstvo",
                "Zastupovanie pred úradmi"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Arbitration Special Section */}
       <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <img 
          src="https://i.ibb.co/Gf5kZzym/image.png" 
          alt="Scales" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">
            SLOVENSKÝ STÁLY ROZHODCOVSKÝ SÚD
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
            Rýchlejšie a lacnejšie riešenie majetkových sporov.
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            JUDr. Miloš Chrenko je rozhodcom Slovenského stáleho rozhodcovského súdu. Riešime tuzemské i medzinárodné občianskoprávne a obchodnoprávne spory.
          </p>
          <a 
            href="https://www.ssrs.sk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 border-b border-brand-gold text-brand-gold pb-1 hover:text-white hover:border-white transition-all text-sm uppercase tracking-widest font-bold"
          >
            <span>Viac informácií na ssrs.sk</span>
          </a>
        </div>
      </section>

      {/* Fees / Odmena */}
      <section id="odmena" className="py-24 bg-brand-paper">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
             <SectionHeader 
               label="TRANSPARENTNOSŤ"
               title="Odmena za právne služby"
               subtitle="Vychádzame z platnej advokátskej tarify (Vyhláška MS SR č. 655/2004 Z. z.)."
             />
             <div className="bg-brand-gold/10 border border-brand-gold/20 p-6 rounded-xl">
               <p className="text-xs uppercase tracking-widest font-bold text-brand-navy mb-1 italic">Dôležitá informácia</p>
               <p className="text-sm text-slate-700">JUDr. Miloš Chrenko nie je platiteľom DPH. Dohodnutá cena je konečná.</p>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { icon: Clock, title: "Hodinová", desc: "Podľa počtu hodín (60 EUR / hod.)" },
               { icon: Euro, title: "Paušálna", desc: "Založenie s.r.o. od 300 EUR, kúpna zmluva od 200 EUR." },
               { icon: Scale, title: "Podielová", desc: "Podiel na hodnote veci pri úspechu (5-20 %)." },
               { icon: FileText, title: "Tarifná", desc: "Podľa počtu úkonov a hodnoty veci (od 120 EUR / úkon)." },
               { icon: Scale, title: "Kombinovaná", desc: "Zľavnená tarifná + podielová odmena v prípade úspechu." },
               { icon: CheckCircle2, title: "Individuálne zľavy", desc: "Až do 50 % s ohľadom na osobné pomery klienta." },
             ].map((fee, idx) => (
               <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 group hover:border-brand-gold transition-all duration-300">
                 <fee.icon className="text-brand-gold mb-6" size={24} />
                 <h4 className="text-lg font-serif font-bold mb-2">{fee.title}</h4>
                 <p className="text-sm text-slate-500 font-light">{fee.desc}</p>
               </div>
             ))}
           </div>
           
           <div className="mt-12 text-center">
             <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
               Uprednostňujeme tarifnú odmenu, kde klient platí reálne vykonané úkony. Pri dlhodobej spolupráci je možná výhodná paušálna dohoda.
             </p>
           </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="kontakt" className="bg-brand-navy text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="col-span-1">
             <div className="flex flex-col mb-8">
              <span className="font-serif font-bold text-2xl tracking-tight">
                JUDr. Miloš CHRENKO
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-brand-gold">
                Advokátska Kancelária
              </span>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Profesionálne právne zastupovanie s dôrazom na mlčanlivosť a individuálny prístup od roku 2009.
            </p>
          </div>

          <div className="space-y-8">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Kancelária v Trnave</h5>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-brand-gold shrink-0" />
                <p className="text-sm font-light">Miesto podnikania: <br /> <span className="opacity-70 italic whitespace-nowrap">Trnava, Slovenská republika</span></p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={20} className="text-brand-gold shrink-0" />
                <p className="text-sm font-light">+421 (Kontaktujte nás e-mailom)</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={20} className="text-brand-gold shrink-0" />
                <p className="text-sm font-light">milos.chrenko@advokat.sk</p>
              </div>
            </div>
          </div>

          <div>
             <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Pošlite nám správu</h5>
             <form className="space-y-4">
               <input 
                 type="text" 
                 placeholder="Vaše meno" 
                 className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
               />
               <input 
                 type="email" 
                 placeholder="Váš e-mail" 
                 className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
               />
               <textarea 
                 placeholder="Váš právny dopyt" 
                 rows={3}
                 className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors"
               />
               <button className="w-full bg-brand-gold text-white font-bold uppercase text-[10px] tracking-widest py-4 rounded-lg hover:bg-white hover:text-brand-navy transition-all">
                 Odoslať dopyt
               </button>
             </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            © {new Date().getFullYear()} JUDr. Miloš Chrenko. Všetky práva vyhradené.
          </p>
          <div className="flex space-x-6 text-[10px] text-white/30 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-brand-gold transition-colors">GDPR</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Podmienky</a>
            <a href="https://www.sak.sk" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">SAK</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
