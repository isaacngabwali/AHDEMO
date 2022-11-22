const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "About",
    href: "/about",
    subNavItems: [
      { id: 2, name: "Teams", href: "/volunteers" },
      { id: 3, name: "Gallery", href: "/gallery" },
      //{ id: 4, name: "Become a Volunteer", href: "/become-volunteer" },
    ],
  },
  {
    id: 3,
    name: "Our Projects",
    href: "/causes",
    subNavItems: [
      { id: 1, name: "Projects Details", href: "/causes-details" },
    ],
  },
  {
    id: 4,
    name: "Blogs",
    href: "/news",
    subNavItems: [
      { id: 2, name: "Blog Details", href: "/news-details" },
    ],
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

export default navItems;

export const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-dribbble", link: "" },
  { icon: "fa-instagram", link: "" },
];
