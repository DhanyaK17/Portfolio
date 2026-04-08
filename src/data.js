export const personalData = {
  name: "Dhanya",
  role: "MCA Fresher & Frontend Developer",
  description: "Passionate about building beautiful, responsive, and user-friendly web applications. My Portfolio is a collection of stories told through visuals , codes and ideas",
  profileImage: "/Dhanya.jpeg",
  resumeLink: "/RESUME.pdf",
  badges: [
    { 
      icon: "🎓", 
      text: "MCA Graduate", 
      positionClass: "absolute top-10 -left-10 md:-left-20",
      bgClass: "bg-blue-100"
    },
    { 
      icon: "💻", 
      text: "Frontend Developer", 
      positionClass: "absolute bottom-10 -right-10 md:-right-20",
      bgClass: "bg-pink-100"
    },
    { 
      icon: "✨", 
      text: "Quick Learner", 
      positionClass: "absolute top-1/2 -right-8 md:-right-16 translate-y-[-50%]",
      bgClass: "bg-yellow-100"
    }
  ]
};

export const aboutData = {
  paragraphs: [
    "Hi, I'm Dhanya. A recent MCA (Master of Computer Applications) graduate with a strong passion for front-end web development and creating intuitive digital experiences.",
    "My journey has been filled with challenges and achievements, making me passionate about continuous learning and growth. I hold a BSC.COMPUTER SCIENCE(BSc.CS) degree. I'm always excited to take on new opportunities and contribute my skills to make a positive impact"
  ],
  education: {
    title: "Education-UG",
    subtitle: "Bachelor of Computer Science (BSC.CS)",
    percentage: "84%",
    period: "2021 - 2024"
  },
  development: {
    title: "Development",
    subtitle: "React, JavaScript, HTML/CSS"
  },
  continuousLearning: {
    title: "Education-PG",
    subtitle: "Master of Computer Applications (MCA)",
    percentage: "90%",
    period: "2025 - 2027"
  }
};

export const skillsData = [
  {
    title: "FRONTEND",
    skills: ["REACT", "HTML5", "CSS3", "JAVASCRIPT (ES6+)"]
  },
  {
    title: "BACKEND",
    skills: ["NODE.JS", "EXPRESS", "MONGODB"]
  },
  {
    title: "TOOLS",
    skills: ["GIT", "GITHUB", "VS CODE", "POSTMAN", "NPM"]
  },
  {
    title: "SOFT SKILLS",
    skills: ["PROBLEM SOLVING", "TEAMPLAYER", "COMMUNICATION", "QUICK LEARNER"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'Responsive e-commerce platform built with HTML, CSS and JavaScript. Features product catalog and cart.',
    image: '/ecommerce_preview.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://dhanyak17.github.io/Ecommerce/login.html',
    githubLink: 'https://github.com/DhanyaK17/Ecommerce'
  },
  {
    id: 2,
    title: 'Ticket Management System (TMS)',
    description: 'A responsive Ticket Management System built using React, Node.js, and MongoDB. This application allows users to create, track, and manage support tickets efficiently.',
    image: '/tms_preview.png',
    tags: ['React', 'Node.js', 'MongoDB', 'MERN'],
    liveLink: 'https://tms009.rvscasmcafsd2k25.in/',
    githubLink: 'https://github.com/DhanyaK17/TMS-Project'
  }
];

export const contactData = {
  description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  email: 'dhanyakannan276@gmail.com',
  phone: '+91 9791995197',
  location: 'Tiruppur, Tamil Nadu',
  github: 'https://github.com/DhanyaK17',
  linkedin: 'https://www.linkedin.com/in/dhanyak1223/',
  instagram: 'https://www.instagram.com/__.mz_dhanzz._/'
};

export const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];
