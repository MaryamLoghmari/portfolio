
import {

  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bootstrap,
  threejs,
  speedy1,

  esprit,
  spring,
  etnafes1,
  iphone1,
  iphone12,
  iphone123,
  resto1,
  resto2,
  resto3,
  angular,
  speedygologo,
  spotlight1,
  spotlight2,
  spotlight3,
  spotlight4,
  spotlight5,
  espritlogo,
  etnafess, apple, resto, fb, insta, WhatsApp, Linked, tttttttt, azerty, greee,


} from "../assets";
export const navItems = [
  {
    name: "Home",
    type: "page",   // whole page
    href: "/",
  },
  {
    name: "About",
    type: "section", // scroll inside homepage
    href: "#about2",
  },
  {
    name: "Projects",
    type: "page",
    href: "#projects",
  },

  {
    name: "Contact",
    type: "section",
    href: "#contact",
  },
];

const bentoSocialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/maryam.loghmari.2025?rdid=NAT3dcq0IJrEC1Lw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BKYR3pGtQ%2F#",
    icon: fb,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/maryam_loghmari/",
    icon: insta,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/maryam-loghmari-maryam-221478382/",
    icon: Linked,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/21623403068",
    icon: WhatsApp,
  },
];


const slides = [
  {
    id: 1,
    title: "Sofi",
    img: "/images/p1.png",
  },
  {
    id: 2,
    title: "Jasmina",
    img: "/images/p2.png",
  },
  {
    id: 3,
    title: "d.tampe",
    img: "/images/p3.png",
  },
  {
    id: 4,
    title: "Blimp.gr",
    img: "/images/p4.png",
  },
  {
    id: 5,
    title: "Hawk Style Design",
    img: "/images/p5.png",
  },
  {
    id: 6,
    title: "Lewis",
    img: "/images/p6.png",
  },
  {
    id: 7,
    title: "Sofi",
    img: "/images/p1.png",
  },
];


const footerIconsList = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "/images/b-fb.svg",
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/",
    icon: "/images/b-insta.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.facebook.com/",
    icon: "/images/b-linked.svg",
  },
  {
    name: "WhatsApp",
    href: "https://www.facebook.com/",
    icon: "/images/b-whatsapp.svg",
  },
];
export const technologies = [
 {
    name: "HTML 5",
    icon: html,
    description: "the internet's granddad, still bussin' fr fr!"
  },
  {
    name: "CSS 3",
    icon: css,
    description: "styling with the ultimate drip, no cap"
  },
  {
    name: "JavaScript",
    icon: javascript,
    description: "yeeting code into the DOM since '95, still breaking stuff daily"
  },
  {
    name: "TypeScript",
    icon: typescript,
    description: "JavaScript's overachieving cousin who's always flexing about types"
  },
  {
    name: "React JS",
    icon: reactjs,
    description: "just a bunch of 'use' hooks pretending to be simple"
  },
  {
    name: "Spring Boot",
    icon: redux,
    description: "Java’s attempt at being 'cool'—still makes you write 10 files for hello world"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    description: "inline styles on steroids, because remembering class names is overrated"
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    description: "the OG CSS framework—everything looks the same but at least it works"
  },
  {
    name: "Node JS",
    icon: nodejs,
    description: "JavaScript’s glow-up—now breaking servers instead of just browsers"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    description: "a database that says 'schema? never heard of her'"
  },
  {
    name: "Three JS",
    icon: threejs,
    description: "for when you want a spinning cube to burn your GPU"
  },
  {
    name: "Git",
    icon: git,
    description: "the only tool where 'force push' feels like playing Russian roulette"
  },
  {
    name: "Figma",
    icon: figma,
    description: "designers' playground—where devs cry about pixel-perfect spacing"
  },
  {
    name: "Docker",
    icon: docker,
    description: "because 'it works on my machine' wasn’t funny anymore"
  },
];
export const myProjects = [
  {
    title: 'Mini- Drone',
    desc: 'This project develops a quadcopter using an ESP32, controlled via smartphone over Wi-Fi. The MPU6050 sensor measures motion and orientation. A PID algorithm stabilizes the drone by adjusting motor speeds.',
    subdesc:
        '  The system ensures smooth and balanced flight.',
    href: 'https://github.com/medihebtbessi/speedyGoPIDev.git',
    texture: [
      tttttttt,

    ],    logo: speedygologo,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: spotlight1,
    tags: [

    ],
  },
  {
    title: 'Mini Manual Hydraulic Press',
    desc: 'The mini manual hydraulic press is a compact and durable tool used for small pressing, bending, or forming tasks. It operates with a hand pump that generates hydraulic pressure, providing strong force with minimal effort.Easy to use and portable, it is ideal for workshops, laboratories, and educational projects.left arrowright arrow',
    subdesc:
        ' Easy to use and portable, it is ideal for workshops, laboratories, and educational projects.left arrowright arrow',
    href: 'https://github.com/medazizdhaya26/esprit.git',
    texture: [
     azerty
    ],    logo: "",
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: spotlight1,
    tags: [

    ],
  },
  {
    title: 'Hand Gesture Control Robot\n',
    desc: 'This project focuses on developing an Internet of Things (IoT)–based system designed to enable remote monitoring and control through internet connectivity. Using sensors and microcontrollers, the system collects real-time data and transmits it to an online platform or mobile application for analysis and control. Users can observe system status, receive alerts, and manage connected devices from any location. The project demonstrates the integration of embedded systems with cloud technology, emphasizing automation, data accessibility, and intelligent decision-making in connected environments.',
    subdesc:
        'The project demonstrates the integration of embedded systems with cloud technology, emphasizing automation, data accessibility, and intelligent decision-making in connected environments.',
    href: 'https://etnafes.com/',
    texture: [greee

    ],    logo: etnafess,
    logoStyle: {
      backgroundColor: '#60f5a1',
      border: '0.2px solid rgba(208,213,221,1)',
      boxShadow: '0px 0px 60px 0px rgba(35,131,96,0.3)',
    },
    spotlight:spotlight3,
    tags: [
      
    ],
  },

];

export {
  bentoSocialLinks,
  slides,
  footerIconsList,
};
