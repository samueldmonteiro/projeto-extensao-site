import { Github, Linkedin, Mail } from "lucide-react";

const team = [

  {
    name: "Kauâ de Oliveira Lima",
    role: "Full‑stack Dev & UI/UX",
    socials: {
      github: "https://github.com/kaudi",
      linkedin: "https://linkedin.com/in/kaudi",
      email: "mailto:kaudi@example.com",
    },
  },
  {
    name: "Wendrio Frazão Melo",
    role: "Full‑stack Dev & UI/UX",
    socials: {
      github: "https://github.com/wendrio",
      linkedin: "https://linkedin.com/in/wendrio",
      email: "mailto:wendrio@example.com",
    },
  },
  {
    name: "Thiago Oliveira",
    role: "Project Coordinator",
    socials: {
      linkedin: "https://linkedin.com/in/thiagooliveira",
      email: "mailto:thiago@example.com",
    },
  },
  {
    name: "Antônio de Jesus",
    role: "Professor Orientador",
    socials: {
      linkedin: "https://linkedin.com/in/antoniojesus",
      email: "mailto:antonio@example.com",
    },
  },
];

export default function Footer() {
  return (
    <footer className="mt-15 bg-indigo-50 text-gray-800 border-t border-indigo-100 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row sm:justify-between gap-6">
        {/* Team */}
        <ul className="grid grid-cols-2 gap-4 flex-1 max-w-xl">
          {team.map((m) => (
            <li key={m.name} className="flex items-start gap-2">
              <div>
                <p className="font-medium leading-tight">{m.name}</p>
                <p className="text-xs text-gray-600">{m.role}</p>
                <div className="flex gap-2 mt-1">
                  {m.socials.github && (
                    <a href={m.socials.github} target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-indigo-700"><Github className="w-4 h-4"/></a>
                  )}
                  {m.socials.linkedin && (
                    <a href={m.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-indigo-700"><Linkedin className="w-4 h-4"/></a>
                  )}
                  {m.socials.email && (
                    <a href={m.socials.email} aria-label="Email" className="hover:text-indigo-700"><Mail className="w-4 h-4"/></a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* About & Copyright */}
        <div className="sm:w-64">
          <p className="leading-relaxed mb-4">
            Plataforma educacional para aprendizado interativo de trigonometria.
          </p>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Projeto Trigonometria Interativa.</p>
        </div>
      </div>
    </footer>
  );
}
