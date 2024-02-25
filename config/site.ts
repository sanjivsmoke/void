export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NirmalKumar's Portfolio",
  description: "Welcome to P.C. Nirmal Kumar's portfolio website, showcasing expertise in full-stack web development and photography services. Explore project offerings, experience, and captivating galleries. Get in touch to elevate your digital presence or capture memorable moments..",
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
  data: [
    {
      icon: "/logos_icons/service_icon/webDevelopement.png",
      title: "Web Design & Development",
      about: "Elevate your digital presence with our comprehensive services, offering responsive design and scalable website solutions. We specialize in crafting captivating landing pages and implementing vivid website design for optimal user experience.",
    }, {
      icon: "/logos_icons/service_icon/photography.png",
      title: "Photography  & Digital art",
      about: "Explore our diverse creative services, encompassing image editing, print design, video editing, graphic design, and animation. Let our expert team breathe life into your vision with precision and boundless creativity.",
    }, {
      icon: "/logos_icons/service_icon/seo.png",
      title: "SEO & Digital Marketing",
      about: "Refine your online presence with our holistic optimization suite. Specializing in boosting search rankings, optimizing social media, and perfecting on-page SEO, we analyze performance and content to ensure your digital footprint shines.",
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
export const galleryImage = {
  gImage: [
    "DSC00461.jpg",
    "DSC00467.jpg",
    "DSC00479.jpg",
    "DSC02216-2.jpg",
    "DSC03118.jpg",
    "DSC03274-2-1 (1).jpg",
    "DSC03274-2-1.jpg",
    "DSC03305-2.jpg",
    "DSC03333-2.jpg",
    "DSC03340-2.jpg",
    "DSC03456.jpg",
    "DSC03484-2.jpg",
    "DSC04684.jpg",
    "DSC04889.jpg",
    "DSC04994 (1).jpg",
    "DSC05032.jpg",
    "DSC06597.jpg",
    "DSC07314.jpg",
    "DSC07315.jpg",
    "DSC07317 (1).jpg",
    "DSC07335 (1).jpg",
    "DSC07572.jpg",
    "DSC07601.jpg",
    "DSC07633 (1).jpg",
    "DSC07633.jpg",
    "DSC07653 (1).jpg",
    "DSC07653.jpg"
  ]

}

export const sociallinks = [
  {
    link: "https://github.com/sanjivsmoke",
    iconName: "github"
  },
  {
    link: "https://twitter.com/nirmal022",
    iconName: "twitter"
  },
  {
    link: "https://www.instagram.com/evaz_studio/",
    iconName: "instgram"
  },
]

