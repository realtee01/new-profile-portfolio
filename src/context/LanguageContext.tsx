import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'es' | 'de' | 'ar';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.testimonials': 'Testimonials',
    'nav.resume': 'Resume',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contact Me',
    // Home
    'home.greeting': 'Hi There!',
    'home.im': "I'm",
    'home.intro': 'LET ME INTRODUCE',
    'home.myself': 'MYSELF',
    'home.description': 'I create solutions to businesses and brands by bridging the gap between rigorous engineering principles and thoughtful, polished design.',
    'home.connect': "Let's Connect",
    // About
    'about.title1': 'Beyond the',
    'about.title2': 'Screen',
    'about.projects': 'Projects Completed',
    'about.contributions': 'GitHub Contributions',
    // Experience
    'experience.title1': 'My',
    'experience.title2': 'Experience',
    // Testimonials
    'testimonials.title1': 'Verified',
    'testimonials.title2': 'Referrals',
    // Blogs
    'blogs.title1': 'Recent',
    'blogs.title2': 'Writings',
    // Contact
    'contact.title1': "Let's build",
    'contact.title2': 'something real.',
    // Footer
    'footer.designed': 'Designed & Built by Tobiloba Akala.',
    'footer.copyright': 'Copyright',
    // Projects Title
    'projects.title1': 'Selected',
    'projects.title2': 'Works',
    'projects.desc': 'A collection of recent technical challenges and creative explorations.',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.testimonials': 'Témoignages',
    'nav.resume': 'CV',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contactez-moi',
    // Home
    'home.greeting': 'Bonjour !',
    'home.im': "Je suis",
    'home.intro': 'LAISSEZ-MOI ME',
    'home.myself': 'PRÉSENTER',
    'home.description': "Je crée des solutions pour les entreprises et les marques en comblant le fossé entre des principes d'ingénierie rigoureux et un design réfléchi et soigné.",
    'home.connect': 'Se connecter',
    // About
    'about.title1': 'Au-delà de',
    'about.title2': 'l\'écran',
    'about.projects': 'Projets Réalisés',
    'about.contributions': 'Contributions GitHub',
    // Experience
    'experience.title1': 'Mon',
    'experience.title2': 'Expérience',
    // Testimonials
    'testimonials.title1': 'Références',
    'testimonials.title2': 'Vérifiées',
    // Blogs
    'blogs.title1': 'Écrits',
    'blogs.title2': 'Récents',
    // Contact
    'contact.title1': "Construisons",
    'contact.title2': 'quelque chose de réel.',
    // Footer
    'footer.designed': 'Conçu et construit par Tobiloba Akala.',
    'footer.copyright': 'Droits d\'auteur',
    // Projects Title
    'projects.title1': 'Œuvres',
    'projects.title2': 'Sélectionnées',
    'projects.desc': 'Une collection de défis techniques récents et d\'explorations créatives.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.testimonials': 'Testimonios',
    'nav.resume': 'Currículum',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contáctame',
    'home.greeting': '¡Hola!',
    'home.im': "Soy",
    'home.intro': 'PERMÍTEME',
    'home.myself': 'PRESENTARME',
    'home.description': 'Creo soluciones para empresas y marcas al conectar principios de ingeniería rigurosos con un diseño reflexivo y pulido.',
    'home.connect': "Vamos a conectar",
    'about.title1': 'Más allá de la',
    'about.title2': 'Pantalla',
    'about.projects': 'Proyectos Completados',
    'about.contributions': 'Contribuciones en GitHub',
    'experience.title1': 'Mi',
    'experience.title2': 'Experiencia',
    'testimonials.title1': 'Referencias',
    'testimonials.title2': 'Verificadas',
    'blogs.title1': 'Escritos',
    'blogs.title2': 'Recientes',
    'contact.title1': "Construyamos",
    'contact.title2': 'algo real.',
    'footer.designed': 'Diseñado y construido por Tobiloba Akala.',
    'footer.copyright': 'Derechos de autor',
    'projects.title1': 'Obras',
    'projects.title2': 'Seleccionadas',
    'projects.desc': 'Una colección de desafíos técnicos recientes y exploraciones creativas.',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.experience': 'Erfahrung',
    'nav.testimonials': 'Referenzen',
    'nav.resume': 'Lebenslauf',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Kontakt',
    'home.greeting': 'Hallo!',
    'home.im': "Ich bin",
    'home.intro': 'DARF ICH MICH',
    'home.myself': 'VORSTELLEN',
    'home.description': 'Ich entwickle Lösungen für Unternehmen und Marken, indem ich rigorose Konstruktionsprinzipien mit durchdachtem, poliertem Design verbinde.',
    'home.connect': "Lassen Sie uns vernetzen",
    'about.title1': 'Hinter dem',
    'about.title2': 'Bildschirm',
    'about.projects': 'Abgeschlossene Projekte',
    'about.contributions': 'GitHub-Beiträge',
    'experience.title1': 'Meine',
    'experience.title2': 'Erfahrung',
    'testimonials.title1': 'Verifizierte',
    'testimonials.title2': 'Referenzen',
    'blogs.title1': 'Neueste',
    'blogs.title2': 'Artikel',
    'contact.title1': "Lass uns etwas",
    'contact.title2': 'Echtes bauen.',
    'footer.designed': 'Entworfen und entwickelt von Tobiloba Akala.',
    'footer.copyright': 'Urheberrechte',
    'projects.title1': 'Ausgewählte',
    'projects.title2': 'Arbeiten',
    'projects.desc': 'Eine Sammlung kürzlicher technischer Herausforderungen und kreativer Erkundungen.',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.projects': 'مشاريع',
    'nav.experience': 'خبرة',
    'nav.testimonials': 'التوصيات',
    'nav.resume': 'سيرة ذاتية',
    'nav.blogs': 'المدونات',
    'nav.contact': 'اتصل بي',
    'home.greeting': 'أهلاً بك!',
    'home.im': "أنا",
    'home.intro': 'دعني أقدم',
    'home.myself': 'نفسي',
    'home.description': 'أقوم بإنشاء حلول للشركات والعلامات التجارية من خلال سد الفجوة بين مبادئ الهندسة الصارمة والتصميم المدروس والمصقول.',
    'home.connect': "دعنا نتواصل",
    'about.title1': 'ما وراء',
    'about.title2': 'الشاشة',
    'about.projects': 'المشاريع المنجزة',
    'about.contributions': 'مساهمات GitHub',
    'experience.title1': 'خبرتي',
    'experience.title2': 'العملية',
    'testimonials.title1': 'توصيات',
    'testimonials.title2': 'موثوقة',
    'blogs.title1': 'كتابات',
    'blogs.title2': 'حديثة',
    'contact.title1': "دعنا نبني",
    'contact.title2': 'شيئاً حقيقياً.',
    'footer.designed': 'تصميم وبناء بواسطة Tobiloba Akala.',
    'footer.copyright': 'حقوق النشر',
    'projects.title1': 'أعمال',
    'projects.title2': 'مختارة',
    'projects.desc': 'مجموعة من التحديات التقنية الحديثة والاستكشافات الإبداعية.',
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('app_language');
    const isValid = ['en', 'fr', 'es', 'de', 'ar'].includes(savedLanguage as string);
    return isValid ? (savedLanguage as Language) : 'en';
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('app_language', lang);
    setLanguageState(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    // Instead of simple toggle, maybe cycle through them, or leave this if we use a dropdown
    const langs: Language[] = ['en', 'fr', 'es', 'de', 'ar'];
    const nextIndex = (langs.indexOf(language) + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  const t = (key: string): string => {
    const dict = translations[language];
    return (dict as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
