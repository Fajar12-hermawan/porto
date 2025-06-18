const base = import.meta.env.BASE_URL;

export const listSkills = [
  {
    name: "javaScript",
    icon: `${base}icons/js.png`,
    link: "https://www.javascript.com/",
  },
  {
    name: "React",
    icon: `${base}icons/react.svg`,
    link: "https://reactjs.org/",
  },
  {
    name: "Tailwind",
    icon: `${base}icons/tailwind.png`,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Phyton",
    icon: `${base}icons/phyton.png`,
    link: "https://www.python.org/",
  },
  {
    name: "Laravel",
    icon: `${base}icons/laravel.png`,
    link: "https://www.laravel.com/",
  },
  {
    name: "MongoDb",
    icon: `${base}icons/mongodb.png`,
    link: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    icon: `${base}icons/postgress.png`,
    link: "https://www.posgresql.com/",
  },
  { name: "PHP", icon: `${base}icons/php.png`, link: "https://www.php.net/" },
  {
    name: "Flutter",
    icon: `${base}icons/flutter.png`,
    link: "https://www.flutter.dev/",
  },
  {
    name: "Java",
    icon: `${base}icons/java.png`,
    link: "https://www.java.com/",
  },
  {
    name: "Ruby",
    icon: `${base}icons/ruby.png`,
    link: "https://www.ruby-lang.org/",
  },
  {
    name: "C++",
    icon: `${base}icons/c++.png`,
    link: "https://www.isocpp.org/",
  },
  {
    name: "Golang",
    icon: `${base}icons/golang.png`,
    link: "https://www.go.dev/",
  },
  { name: "Vue", icon: `${base}icons/vue.png`, link: "https://www.vuejs.dev/" },
  {
    name: "Docker",
    icon: `${base}icons/docker.png`,
    link: "https://www.docker.com/",
  },
  {
    name: "Angular",
    icon: `${base}icons/angular.png`,
    link: "https://www.angular.dev/",
  },
  {
    name: "Typescript",
    icon: `${base}icons/typescript.png`,
    link: "https://www.typescriptlang.dev/",
  },
  { name: "Lua", icon: `${base}icons/lua.png`, link: "https://www.lua.org/" },
  {
    name: "Cypress",
    icon: `${base}icons/cypress.png`,
    link: "https://www.cypress.io/",
  },
  {
    name: "MySQL",
    icon: `${base}icons/mysql.png`,
    link: "https://www.mysql.com/",
  },
];

export const listIndustries = [
  { name: "facabook", icon: `${base}icons/facebook.png` },
  { name: "google", icon: `${base}icons/google.png` },
  { name: "tokopedia", icon: `${base}icons/tokopedia.png` },
  { name: "amazon", icon: `${base}icons/amazon.png` },
];

export const listProjects = [
  {
    title: "Darkblade Studio – Web Platform Development",
    desc: "Developed a fully responsive and scalable web platform for a fantasy game studio...",
    background: `${base}icons/banner-2.jpg`,
    list_tech: [
      { name: "javaScript", icon: `${base}icons/js.png` },
      { name: "React", icon: `${base}icons/react.svg` },
      { name: "Tailwind", icon: `${base}icons/tailwind.png` },
    ],
  },
  {
    title: "Personal Developer Portfolio – GSAP & 3D UI",
    desc: "Created an animated portfolio site with GSAP scroll animations and interactive 3D sections...",
    background: `${base}icons/bannner-1.jpg`,
    list_tech: [
      { name: "React", icon: `${base}icons/react.svg` },
      { name: "Tailwind", icon: `${base}icons/tailwind.png` },
      { name: "javaScript", icon: `${base}icons/js.png` },
    ],
  },
];
