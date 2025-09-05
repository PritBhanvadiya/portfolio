import MatterSimulation from "@/components/MatterSimulation";
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/skills-icons/html.svg" },
  { name: "CSS", icon: "/skills-icons/css-3-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/skills-icons/javascript-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/skills-icons/typescript-official-svgrepo-com.svg" },
  { name: "NextJS", icon: "/skills-icons/nextjs-fill-svgrepo-com.svg" },
  { name: "ReactJS", icon: "/skills-icons/reactjs-svgrepo-com.svg" },
  { name: "Redux", icon: "/skills-icons/redux-svgrepo-com.svg" },
  { name: "Context API"},
  { name: "Tailwind CSS", icon: "/skills-icons/tailwind-css-svgrepo-com.svg" },
  { name: "Bootstrap", icon: "/skills-icons/bootstrap-svgrepo-com.svg" },
  { name: "Framer Motion", icon: "/skills-icons/framer-motion-seeklogo.svg" },
  { name: "GSAP", icon: "/skills-icons/gsap-png.png" },
  { name: "Axios", icon: "/skills-icons/axios.svg" },
  { name: "Fetch API"},
  { name: "Vite", icon: "/skills-icons/vite-svgrepo-com.svg" },
  { name: "Webpack", icon: "/skills-icons/webpack-svgrepo-com.svg" },
  { name: "GitHub", icon: "/skills-icons/github-color-svgrepo-com.svg" },
  { name: "GitLab", icon: "/skills-icons/gitlab-svgrepo-com.svg" },
  { name: "Netlify", icon: "/skills-icons/netlify-svgrepo-com.svg" },
  { name: "Vercel", icon: "/skills-icons/vercel-icon-svgrepo-com.svg" },
  { name: "SEO", icon: "/skills-icons/user-seo-and-web-svgrepo-com.svg" },
  { name: "AI", icon: "/skills-icons/icons8-ai-50.svg" },
  { name: "Shopify", icon: "/skills-icons/shopify-color-svgrepo-com.svg" },
  { name: "Preact", icon: "/skills-icons/preact-svgrepo-com.svg" },
  { name: "SolidJS", icon: "/skills-icons/Solid.js.svg" },
  { name: "SCSS", icon: "/skills-icons/scss2-svgrepo-com.svg" },
  { name: "HubSpot", icon: "/skills-icons/hubspot-svgrepo-com.svg" },
]

export default function SkillsTechstcks() {
  return (
    <main className="full min-h-screen flex items-center justify-center flex-col gap-4">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {skills.map((skill) => (
          <div className="px-3 w-auto flex items-center justify-center gap-1.5 border-2 border-white py-2 min-w-46 rounded-full" key={skill.name}>
            {skill.icon ?
              (<i><Image src={skill.icon} alt="skill" width={24} height={24} /></i>)
              : null
            }
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
      <MatterSimulation />
    </main>
  );
}