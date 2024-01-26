export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NirmalKumar's Portfolio",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },

    {
      label: "Contact",
      href: "/contact",
    }
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://www.youtube.com/shorts/_zm1YI9wMx0"
  },
  homeImage:
    [
      {
        lable: "dark",
        href: "/MyImage/NirmalKumar.jpg"
      },
      {
        lable: "light",
        href: "/MyImage/sanji.gif"
      },
    ],
  skillData: [
    {
      title: "JavaScript",
      percentage: 85,

    },
    {
      title: " Next.js",
      percentage: 80,

    },
    {
      title: "Express.js",
      percentage: 80,

    },
    {
      title: " Node.js",
      percentage: 80,

    },
    {
      title: "Postgresql",
      percentage: 75,

    },
    {
      title: "TailWind Css",
      percentage: 75,

    },
  ],
  experience: [
    {
      title: "Full Stack Developer",
      companyName: "Kridas Sports Platform",
      companyInfo: "Kridas is a one platform for all - bringing all stakeholders within the sporting industry together.- Sectember 2022 to present",
      image: "/logos_icons/solar-system.png"
    }, {
      title: "Front-End Developer",
      companyName: "Crud Operation",
      companyInfo: "CRUD Operations is a technology wise creative company doing extensive projects in the field of Website Designing, Website Development.- May 2022 to Sectember 2022",
      image: "/logos_icons/earth.png"
    }
  ],
  data: [
    {
      icon: "<TwitterIcon />",
      title: "Web Design & Development",
      about: [
        "Landing Page",
        "Web Hosting",
        "SEO optimized",
        "Amazon web service",
        "Responsive  UI/UX Design"
      ],
    }, {
      icon: "",
      title: "Photography  & Digital art",
      about: [
        "Image Editing",
        "Print Design",
        "Video Editing",
        "Graphic Design",
        "Animation",
      ],
    }, {
      icon: "",
      title: "SEO & Digital Marketing",
      about: [
        "Higher Search Rankings",
        "Social Media Optimization",
        "On-Page SEO",
        "Analyze performance",
        "Content Optimization"
      ],
    },
  ]

};
export const myInformation = {
  tabs: [
    {
      id: "Intro",
      label: "Intro",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "About",
      label: "About",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: "videos",
      label: "Videos",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
};