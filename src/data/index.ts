export const HEADER = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Team",
    path: "#",
    child: [
      {
        label: "Our Team",
        path: "/team",
      },
      {
        label: "Join Us",
        path: "/team#join-us",
      },
    ]
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
]