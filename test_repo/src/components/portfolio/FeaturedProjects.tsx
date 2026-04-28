import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: 'Abasi Store',
    description: 'A full-stack e-commerce application with payment integration using Paystack. It includes features like product browsing, cart management, user authentication, and order tracking.',
    image: 'https://res.cloudinary.com/dvd7wbty8/image/upload/v1766133496/abasiHome_if0crx.png',
    tech: ['React', 'Tailwind CSS', 'Express', 'Node.js', 'MongoDB Atlas', 'Paystack', 'Vercel'],
    metrics: { users: '10+', sales: '5+', uptime: '99.9%' },
    challenge: 'Integration of Payment Gateways and Secure Transactions',
    solution: 'Implemented Paystack APIs with robust error handling and user feedback mechanisms to ensure smooth and secure payment processing.',
    github: '#',
    live: 'https://www.shopabasi.com/'
  },
  {
    title: 'YourChildEducation',
    description: 'A collaborative project between myself and a backend developer that brings schools and teachers together. It offers teachers a platform to apply for jobs while schools can post vacancies and manage applications seamlessly.',
    image: 'https://res.cloudinary.com/dvd7wbty8/image/upload/v1762633960/yourchildeducation_iuvg3m.png',
    tech: ['React', 'Taiwlwind', 'Swagger Docs', 'Vercel', 'Axios', 'Fetch API'],
    metrics: { teams: '500+', tasks: '50K+', satisfaction: '4.8/5' },
    challenge: 'Integrating the backend api with the frontend',
    solution: 'Worked closely with the backend developer to ensure smooth API integration and data flow',
    github: '#',
    live: 'https://www.yourchildeducation.com/'
  },
  {
    title: 'EMW3',
    description: 'A full-stack e-commerce application built with React, Tailwind CSS, and Node.js. It features a user-friendly interface, secure payment integration, and robust backend functionality to provide a seamless shopping experience.',
    image: 'https://res.cloudinary.com/dvd7wbty8/image/upload/v1774880540/emw-landing-page_jkgrts.png',
    tech: ['React', 'Tailwind CSS', 'Express', 'Node.js', 'MongoDB Atlas', 'Paystack', 'Vercel'],
    metrics: { users: '10+', sales: '20+', uptime: '99.9%' },
    challenge: 'Building a scalable and secure e-commerce platform',
    solution: 'Implemented best practices for security and scalability in both frontend and backend development',
    github: '#',
    live: 'https://www.emw3.com.ng/'
  },
  {
    title: 'Innovative Tech',
    description: 'Empowering Businesses with Innovative Tech Solutions. We provide cutting-edge programming, web development, digital marketing, and SEO services to help your business thrive in the digital age.',
    image: 'https://res.cloudinary.com/dvd7wbty8/image/upload/v1762633961/innovative-tech_kb2g9h.png',
    tech: ['React', 'Tailwind CSS', 'Nodemailer', 'Openai'],
    metrics: { clients: '200+', projects: '150+', growth: '+50%' },
    challenge: 'Integratng a chatbot for customer support',
    solution: 'Utilized OpenAI API to build an intelligent chatbot',
    github: 'https://github.com/Abdulsamad25/innovative-tech',
    live: 'https://innovative-tech-two.vercel.app/'
  },
  {
    title: 'Stayest',
    description: 'A modern apartment rental platform that allows users to browse, book, and manage apartment rentals with real-time availability, Paystack integration, and flexible rental periods.',
    image: 'https://res.cloudinary.com/dvd7wbty8/image/upload/v1762633959/Staynest_ii4rpp.png',
    tech: ['React', 'Tailwind CSS', 'Paystack', 'Netlify'],
    metrics: { listings: '1K+', bookings: '3K+', uptime: '99.9%' },
    challenge: 'Implementing real-time availability and payment processing',
    solution: 'Used Paystack API for secure payments and real-time data fetching for availability',
    github: 'https://github.com/Abdulsamad25/apartment-rentals/',
    live: 'http://stayynest.netlify.app/'
  },
  
];

export const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-4 font-serif text-black text-3xl md:text-5xl md:text-center text-start"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#D4AF37] md:mx-auto mb-16 w-20 h-1"
        ></motion.div>

        <div ref={ref} className="gap-8 grid md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all">
                  <p className="opacity-0 group-hover:opacity-100 font-semibold text-white transition-opacity">View Details</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-3 font-bold text-black text-sm md:text-2xl">{project.title}</h3>
                <p className="mb-4 text-gray-700 text-sm md:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-xs md:text-base">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 hover:text-[#D4AF37] text-xs md:text-base transition-colors gray-700" onClick={(e) => e.stopPropagation()}>
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-gray-700 hover:text-[#D4AF37] text-xs md:text-base transition-colors" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-80 object-cover" />
              <button onClick={() => setSelectedProject(null)} className="top-4 right-4 absolute bg-white hover:bg-gray-100 p-2 rounded-full">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="mb-4 font-serif text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>{selectedProject.title}</h2>
              
              <div className="gap-4 grid grid-cols-3 mb-6">
                {Object.entries(selectedProject.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-bold text-[#D4AF37] text-2xl">{value}</p>
                    <p className="text-gray-600 text-sm capitalize">{key}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="mb-2 font-bold text-xl">Challenge</h3>
                <p className="text-gray-700">{selectedProject.challenge}</p>
              </div>

              <div className="mb-6">
                <h3 className="mb-2 font-bold text-xl">Solution</h3>
                <p className="text-gray-700">{selectedProject.solution}</p>
              </div>

              <div className="flex gap-4">
                <a href={selectedProject.github} className="flex flex-1 justify-center items-center gap-2 hover:bg-[#D4AF37] py-3 border-[#D4AF37] border-2 rounded-lg text-[#D4AF37] hover:text-white transition-all">
                  <Github size={20} />
                  View Code
                </a>
                <a href={selectedProject.live} className="flex flex-1 justify-center items-center gap-2 bg-[#D4AF37] hover:bg-[#8B7355] py-3 rounded-lg text-white transition-all">
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
