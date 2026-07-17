/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG or image
};

const greeting = {
  username: "Abdulrahman Ilah",
  title: "Hi all, I'm Abdulrahman",
  subTitle: emoji(
    "A multidisciplinary creative and software developer based in Kano, Nigeria. I uniquely combine design thinking, software engineering, and business insights to build premium solutions that are visually stunning, technically functional, and commercially effective. 🚀"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdulrahmanilah",
  linkedin: "https://www.linkedin.com/in/abdulman-ilah-4612b5357",
  gmail: "abdulrahmanilah4@gmail.com",
  instagram: "https://www.instagram.com/abdulrahman_ilah",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BRIDGING DESIGN THINKING AND SOFTWARE ENGINEERING",
  skills: [
    emoji(
      "⚡ Develop highly functional full-stack applications with Python, Django, React, and PostgreSQL"
    ),
    emoji(
      "⚡ Design premium brand identities, luxury packaging, and print media with CMYK/300DPI precision"
    ),
    emoji(
      "⚡ Craft stunning UI/UX experiences — wireframes, prototypes, design systems, and pixel-perfect interfaces using Figma"
    ),
    emoji(
      "⚡ Direct product photography, food styling, and luxury editorial aesthetic concepts"
    ),
    emoji(
      "⚡ Integrate cloud services (AWS Textract, S3) and automate data workflows, web scraping, and POS synchronizations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "git-alt",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "adobe illustrator",
      fontAwesomeClassname: "fas fa-pen-nib"
    },
    {
      skillName: "adobe photoshop",
      fontAwesomeClassname: "fas fa-paint-brush"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northwest University Kano",
      logo: require("./assets/images/northwest_university_logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
      desc: "Graduated with a solid foundation in software systems, database management, and computer architectures.",
      descBullets: [
        "Focused on algorithms, software architecture, and modern web systems",
        "Applied software engineering principles to real-world solutions"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Graphic Design & Branding",
      progressPercentage: "95%"
    },
    {
      Stack: "Software Engineering & Architecture",
      progressPercentage: "90%"
    },
    {
      Stack: "Business Strategy & E-commerce Operations",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Data Analyst",
      company: "Aviation & Operations Group",
      companylogo: require("./assets/images/airline_analytics_logo.jpg"),
      date: "July 2022 – Present",
      desc: "Driving airline operations efficiency through data pipelines, automated competitor intelligence, and custom cloud-based monitoring solutions.",
      descBullets: [
        "Built a competitor fare monitoring pipeline (Django, Playwright, PostgreSQL) scraping 7-8 airlines, replacing manual checks on 16 routes.",
        "Rebuilt aircraft parts inventory tracking (1,537 parts), adding validations, SUMIF analytics, and storekeeper WhatsApp triggers.",
        "Designed and proposed a cloud-based fuel tracking system to transition operation workflows from photo logs to AWS Textract automation."
      ]
    },
    {
      role: "Founder & Creative Director",
      company: "Legacy Designs",
      companylogo: require("./assets/images/legacy_designs_logo.jpg"),
      date: "January 2018 – Present",
      desc: "Running a solo creative agency designing premium print branding, editorial visual identities, and luxury-aesthetic web solutions.",
      descBullets: [
        "Created custom, high-converting single-file business websites with dark-luxury aesthetics and interactive scroll animations.",
        "Designed high-DPI packaging and print branding guidelines for luxury and consumer brands.",
        "Directed styling and product photography for clients including Foodies Corner, Ummiey's Luxury Palace, Neltech Aluminium, MNM Solar Power, and Ammar Electrical Engineering."
      ]
    }
  ]
};

// Your Open Source Section to View Your Github Pinned Projects
const openSource = {
  showGithubProfile: "false",
  display: false // Set false to hide the generic GitHub API fetch section
};

// Featured Projects
const bigProjects = {
  title: "Featured Projects",
  subtitle: "CREATIVE & TECHNICAL SOLUTIONS",

  softwareProjects: [
    {
      projectName: "ChopNextDoor",
      projectDesc:
        "A hyperlocal food marketplace connecting home cooks with Kano customers. Built using React 19, TypeScript, Django REST Framework, PostgreSQL, Firebase Auth, and AWS S3, featuring a story-based ordering system that replaces manual Instagram DM ordering.",
      techStack: [
        "React 19",
        "TypeScript",
        "Django REST Framework",
        "PostgreSQL",
        "Firebase Auth",
        "AWS S3"
      ]
    },
    {
      projectName: "Banklytik",
      projectDesc:
        "A Django financial reconciliation application that accepts PDF bank statements, utilizes AWS Textract for table extraction, and cleanses transaction data. Integrates LLM features for automated financial processing and insights.",
      techStack: ["Django", "Python", "AWS Textract", "LLMs", "Pandas"],
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/abdulrahmanilah/banklytik"
        }
      ]
    },
    {
      projectName: "Bike Dispatch & Delivery Layer",
      projectDesc:
        "An SMS-first delivery dispatch platform designed for Kano couriers using keypad phones. Integrates a Django backend with Africa's Talking SMS services, Termii, and the WhatsApp Business API.",
      techStack: [
        "Django",
        "Termii",
        "Africa's Talking API",
        "WhatsApp Business API"
      ]
    },
    {
      projectName: "Kano Supermarket POS Sync SaaS",
      projectDesc:
        "A retail integration agent syncing legacy QuickBooks desktop POS databases with live online storefronts. Implements a custom Python background daemon and a secure Django backend.",
      techStack: ["Python", "Django", "QuickBooks POS API", "SaaS"]
    },
    {
      projectName: "WhatsApp Inventory & Chatbot Service",
      projectDesc:
        "Automated chat bot and commerce system for Instagram-based sellers and local traders. Enables live inventory updates and orders via WhatsApp.",
      techStack: ["Python", "WhatsApp API", "Chatbot", "Commerce"]
    }
  ],

  designProjects: [
    {
      projectName: "Legacy Designs Web & Branding Portfolio",
      projectDesc:
        "Editorial branding, typography design, and responsive single-file websites featuring dark-luxury aesthetics, custom SVG illustrations, and high-conversion WhatsApp call-to-actions.",
      techStack: ["Graphic Design", "Branding", "UI/UX", "HTML/CSS"]
    },
    {
      projectName: "Foodies Corner Branding & Creative Direction",
      projectDesc:
        "Full visual brand identity, social media graphics, food styling, and packaging direction for a premium food concept.",
      techStack: ["Branding", "Food Photography", "Packaging Design"]
    },
    {
      projectName: "Ummiey's Luxury Palace Identity",
      projectDesc:
        "Branding materials, print packaging layouts, and luxury aesthetic product positioning for a high-end consumer store.",
      techStack: ["Branding", "Product Styling", "Packaging Concepts"]
    }
  ],

  display: true
};

const achievementSection = {
  display: false
};

const blogSection = {
  display: false
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const resumeSection = {
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ✉️"),
  subtitle:
    "Let's collaborate on software development, graphic design, or branding projects. My inbox is always open.",
  number: "",
  email_address: "abdulrahmanilah4@gmail.com"
};

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

const tedTalksSection = {
  display: false
};

const policeGuideSection = {
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  tedTalksSection,
  policeGuideSection
};
