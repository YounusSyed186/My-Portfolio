import { HoverEffect } from "./ui/card-hover-effect";


export function Skills() {
  return (
    <div id="skills" className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id:1,
    title: "Html",
    description:
      "Semantic markup for SEO & accessibility,Responsive layouts with modern HTML5 standards,Form validation & interactive elements,Integration with CSS/JavaScript frameworks,W3C-compliant, cross-browser compatible code",
    link: "https://html.spec.whatwg.org/multipage/",
  },
  {
    id:2,
    title: "CSS",
    description:
    "✔️ Advanced layout techniques (Flexbox, Grid, positioning),Responsive design with media queries (mobile-first approach),CSS animations & transitions for enhanced UX,BEM methodology & maintainable architecture,Cross-browser compatibility & vendor prefixes,CSS preprocessors (Sass/SCSS)",
    link: "https://netflix.com",
  },
  {
    id:3,
    title: "JavaScript",
    description:
      "✔️ DOM manipulation & event handling,ES6+ features (Arrow functions, Destructuring, Template literals),Async programming (Promises, Async/Await),API integration (Fetch, Axios),Basic error handling & debugging,Working with JSON data",
    link: "https://www.javascript.com/",
  },
  {
    id:4,
    title: "React ⚛️",
    description:
      " Component Architecture: Building reusable functional & class components,🗃️ State Management: Proficient with Hooks (useState, useEffect, useContext),🔄 Data Flow: Props drilling, lifting state up, and basic custom hooks,🌐 Routing: Client-side navigation with React Router v6+,🔌 API Integration: Axios/Fetch with async/await for CRUD operations,🧪 Testing: Basic Jest/React Testing Library knowledge",
    link: "https://react.dev/",
  },
  {
    id:5,
    title: "MongoDB",
    description:
      "📊 Database Design: Schema modeling for document databases,🛠️ CRUD Operations: Advanced queries, indexing, and aggregation pipelines,🔐 Security: User roles, authentication, and data validation,🌐 Integration: Connected to Node.js/Express backends (Mongoose ODM),🔄 Data Handling: Bulk operations, transactions, and change streams",
    link: "https://www.mongodb.com/",
  },
  {
    id:6,
    title: "Next.js",
    description:
      "File-based routing system,API routes (Node.js backend endpoints),Built-in CSS/Sass support,Image optimization (next/image)",
    link: "https://nextjs.org/",
  },
  {
    id:7,
    title: "Node.js",
    description:
      "Building RESTful APIs with Express.js,Authentication (JWT, OAuth, Sessions),Database integration (MongoDB/Mongoose, PostgreSQL/Sequelize),Error handling & middleware architecture",
    link: "https://nodejs.org/en",
  },
  {
    id:8,
    title: "Framer Motion",
    description:
      "Fluid animations with motion components,Orchestrated transitions (staggerChildren, delayChildren),Gesture interactions (hover, tap, drag, pan),SVG path drawing & morphing,Layout animations (auto-animate",
    link: "https://motion.dev/",
  },
  
];
