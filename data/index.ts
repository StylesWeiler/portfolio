export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I'm willing to work remote or in-person based on company needs",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm passionate about exploring the world",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech Stack",
      description: "Modern & Innovative",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Bachelor's and Master’s in Information Systems Management, emphasis in development.",
      description: "Education",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Curious about my skills & work experience?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Fit4Life",
      des: "Achieve your health and wellness goals using this app written entirely in Swift.",
      img: "/Fit4Life.png",
      iconLists: ["/Swift.png", "/Firebase.svg"],
      link: "https://github.com/StylesWeiler/Fit4Life",
    },
    {
      id: 2,
      title: "KeyCoach - AI Typing Coach",
      des: "Learn proper typing technique with Keycoach, your AI-powered typing coach.",
      img: "/KeyCoach.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://www.keycoa.ch/",
    },
    {
      id: 3,
      title: "Type Invaders",
      des: "Check out this React-based typing game based on the arcade classic \"Space Invaders\" 👾.",     
      img: "/Space.png",
      iconLists: ["/phaser-web.png", "/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://www.keycoa.ch/type-invader",
    },
    {
      id: 4,
      title: "Portfolio",
      des: "View the source code that made this website possible.",
      img: "/Portfolio.png",
      iconLists: ["/ts.svg", "/next.svg", "/tail.svg"],
      link: "https://github.com/StylesWeiler/portfolio",
    },
  ];
  
  export const testimonials = [
    {
      quote: "At Restaurant365, I contributed to the development and enhancement of a Workforce/Payroll product used by over 1,000 businesses nationwide. I built scalable full-stack applications using C#/.NET, optimized APIs for better data exchange, and leveraged AWS services like Lambda and RDS to automate workflows. Additionally, I worked closely with product managers and designers to define requirements, debugged complex issues, and improved system performance through SQL query optimizations.",
      name: "Software Engineer",
      title: "Restaurant365",
    },
    {
      quote: "At eAssist Dental Solutions, I spearheaded the development of a dental scheduling web application, designing both the backend in Node.js/Express and the frontend in React. I built and deployed custom APIs to facilitate real-time data synchronization and enhance user experience. By utilizing Docker and DigitalOcean for deployment, I ensured scalability and reliability in production. I also collaborated with stakeholders to gather feedback and iterated on UI/UX improvements based on real-world use.",
      name: "Full Stack Engineer",
      title: "eAssist Dental Solutions",
    },
    {
      quote: "As a Teaching Assistant for IS 201, I guided students through foundational concepts in information systems, providing hands-on support as they learned SQL, HTML/CSS, VBA, Tableau, and database diagramming. I assisted students in troubleshooting errors, clarifying technical concepts, and reinforcing best practices for data analysis and software development. Through one-on-one and group instruction, I helped students build confidence in problem-solving and applying technology to business use cases, ensuring a strong grasp of course material.",
      name: "Teaching Assistant",
      title: "Brigham Young University"
    },
    {
      quote: "At Bear Country Bees, I conducted a comprehensive security audit, identifying and mitigating over 50 vulnerabilities to prevent data breaches. I designed an optimized MySQL database, significantly improving query efficiency and system reliability. Additionally, I deployed cloud-based solutions using AWS services like Lambda, RDS, and EC2 to enhance scalability and performance. To ensure smooth future development, I documented database structures and security best practices.",
      name: "Database Developer",
      title: "Bear Country Bees",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "R365",
      // img: "/R365-logo.svg",
      nameImg: "/R365.svg",
    },
    {
      id: 2,
      name: "eAssist",
      // img: "/app.svg",
      nameImg: "/eAssist.svg",
    },
    {
      id: 3,
      name: "BYU",
      // img: "/host.svg",
      nameImg: "/BYU.png",
    },
    {
      id: 4,
      name: "Bear Country Bees",
      // img: "/host.svg",
      nameImg: "/BCB.png",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/StylesWeiler"
    },
    {
      id: 2,
      img: "/insta.svg",
      link: "https://www.instagram.com/styles.weiler/"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/styles-weiler/"
    },
  ];