//src/components/AlternatingProjectsPinned.jsx
import AlternatingProjectsPinned from "./ProjectsSection";

const items = [
  {
    id: "Nokryfy",
    live: "https://nokryfyclients2.vercel.app/",
    code: "",
    codePanel: {
      title: "Nokryfy.com — Job Portal",
      subtitle: "client project • job board",
      badge: "MERN • Client",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">Nokryfy</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-4">
          <span className="text-slate-400">name</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Nokryfy.com'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-4">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"Job portal • Recruitment"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-4">
          <span className="text-slate-400">features</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
        </span>,
        <span key="5" className="pl-8">
          <span className="text-slate-200">"Job search & filtering"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="6" className="pl-8">
          <span className="text-slate-200">"Employer job posting"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-8">
          <span className="text-slate-200">"Candidate applications"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-8">
          <span className="text-slate-200">"Resume builder & upload"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9" className="pl-4">
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="10" className="pl-4">
          <span className="text-slate-400">role</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Full-stack development & API integration"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="11">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    },
    shotsPanel: {
      shots: [
        { src: "nokryfy/image.png", caption: "Dashbored- company panel" },
        { src: "nokryfy/home.png", caption: "Home — Job search" },
        {
          src: "nokryfy/totalapplicant.png",
          caption: "Jobs — Total Applicants",
        },
        { src: "nokryfy/profile.png", caption: "Profile — Candidate" },
        { src: "nokryfy/postajob.png", caption: "Job- Job posting form" },
      ],
    },
  },
  {
    id: "loanyfy",
    live: "https://www.loanyfy.com/",
    codePanel: {
      title: "Loanyfy — Details",
      subtitle: "live • colorful",
      badge: "MERN • Hostinger+Render",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">project</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-2">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Business Loans'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-2">
          <span className="text-slate-400">frontend</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "React • Tailwind • SPA routing"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-2">
          <span className="text-slate-400">backend</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Node.js • Express • REST APIs"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="5" className="pl-2">
          <span className="text-slate-400">flows</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
          <span className="text-slate-200">
            "Application","Validation","Admin review","Chatbot"
          </span>
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="6" className="pl-2">
          <span className="text-slate-400">auth</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"JWT • Role‑based access"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-2">
          <span className="text-slate-400">storage</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"MongoDB • S3 (documents)"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-2">
          <span className="text-slate-400">hosting</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Frontend: Hostinger • Backend: Render"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "S3",
        "CI/CD",
      ],
    },
    shotsPanel: {
      badge: "Screens",
      subtitle: "images only",
      title: "Loanyfy UI",
      shots: [
        { src: "/loanyfy.png", caption: "Home — Landing" },
        { src: "/loanyfprodcut.png", caption: "Loans — Product list" },
        { src: "/Loanyfychatbot.png", caption: "Support — Chatbot" },
      ],
    },
  },
];

export default function ProjectsPage() {
  return <AlternatingProjectsPinned items={items} />;
}
