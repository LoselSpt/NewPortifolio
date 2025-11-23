export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    image?: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Education {
    institution: string;
    course: string;
    period?: string;
    description?: string;
}

export interface Profile {
    name: string;
    title: string;
    about: string;
    location: string;
    email: string;
    phone: string;
    social: {
        linkedin?: string;
        github?: string;
    };
    experiences: Experience[];
    education: Education[];
    projects: Project[];
    skills: Skill[];
}

export const profileData: Profile = {
    name: "João Vitor Santos de Souza",
    title: "Desenvolvedor Front-End | Análise e Desenvolvimento de Sistemas",
    location: "Araguari / MG",
    email: "joaovitorspt123@gmail.com",
    phone: "(31) 97223-8988",
    social: {
        linkedin: "https://www.linkedin.com/in/losel/",
        github: "https://github.com/LoselSpt"
    },
    about: `Estudante de programação com foco em Front-End, com experiência em JavaScript, HTML e CSS.
Sou uma pessoa prática e que gosta de desafios. Aprender faz parte do meu dia a dia, e os desafios me mantêm sempre motivado a descobrir as melhores soluções.

Perfil Comportamental: Planejador (estruturado, organizado) e Analítico (foco na qualidade e precisão).`,
    experiences: [
        {
            company: "Mega Tejotao",
            role: "Auditor de Estoque",
            period: "06/2025 - Atual",
            description: "Gestão de Suprimentos e Logística."
        },
        {
            company: "Mega Tejotao",
            role: "Repositor",
            period: "03/2025 - 06/2025",
            description: "Controle de Estoque."
        },
        {
            company: "Workana",
            role: "Freelancer",
            period: "07/2024 - 01/2025",
            description: "Programação Orientada a Objetos (POO)."
        },
        {
            company: "WordBuild",
            role: "Desenvolvedor",
            period: "05/2020 - Atual",
            description: "Desenvolvimento criativo e resolução de problemas."
        }
    ],
    education: [
        {
            institution: "IMEPAC",
            course: "Análise e Desenvolvimento de Sistemas (Bacharelado)",
            period: "2º Período",
            description: ""
        },
        {
            institution: "Alura (Oracle Next Education)",
            course: "Programa F2 T6 Back-end",
            period: "303 horas",
            description: "Java, Linguagens de Programação Back-end."
        }
    ],
    projects: [
        {
            title: "Página de Portfólio",
            description: "Site de portfólio pessoal demonstrando conhecimentos em desenvolvimento web.",
            technologies: ["HTML5", "CSS3", "JavaScript", "POO"],
            link: "https://portfolio-amber-sigma.vercel.app/"
        },
        {
            title: "Site de Criptografia",
            description: "Ferramenta web para criptografia e descriptografia de mensagens.",
            technologies: ["HTML5", "CSS3", "JavaScript", "POO"],
            link: "https://discriptografio.vercel.app/"
        },
        {
            title: "Projeto NeoHorizon",
            description: "Desenvolvimento de Interface Gráfica e Softwares. Liderança e Planejamento.",
            technologies: ["Figma", "SQL Server", "Gestão"],
            link: "https://www.figma.com/proto/e6nFCMbL2xymePeUb4rfNf?node-id=0-1&t=N7S5p71nyXglD-vXm-6"
        }
    ],
    skills: [
        {
            category: "Front-End",
            items: ["HTML5", "CSS3", "JavaScript", "Figma", "Sketch"]
        },
        {
            category: "Back-End",
            items: ["Python", "Java", "C", "SQL Server"]
        },
        {
            category: "Metodologias & Soft Skills",
            items: ["POO", "DDD", "Análise de Requisitos", "Liderança", "Trabalho em Equipe", "Adaptabilidade"]
        },
        {
            category: "Idiomas",
            items: ["Português (Nativo)", "Espanhol (Básico)", "Inglês (Elementar)"]
        }
    ]
};
