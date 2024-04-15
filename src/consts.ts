import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Koichi Kataoka",
  DESCRIPTION: "Profolio site of Kocihi Kataoka | Software developer",
  AUTHOR: "Koichi Kataoka",
};

// Loader animation
export const loaderAnimation = [
  ".loader",
  { opacity: [1, 0], pointerEvents: "none" },
  { easing: "ease-out" },
];

// Work Page
export const CAREER: Page = {
  TITLE: "Career",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Career",
    HREF: "/career",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  // {
  //   NAME: "Email",
  //   ICON: "email",
  //   TEXT: "markhorn.dev@gmail.com",
  //   HREF: "mailto:markhorn.dev@gmail.com",
  // },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "KKoichi276052",
    HREF: "https://github.com/KKoichi276052",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Koichi Kataoka",
    HREF: "https://www.linkedin.com/in/koichi-kataoka-735b18281/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "片岡宏一 | Koichi Kataoka",
    HREF: "https://twitter.com/56JJuiA49svC8De",
  },
];
