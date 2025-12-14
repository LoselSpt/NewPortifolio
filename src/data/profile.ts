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
    repoUrl?: string;
    imageUrl?: string;
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
    title: "Desenvolvedor Front-End & Back-End | Análise e Desenvolvimento de Sistemas",
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
            company: "MBC Ferramentas e peças agriculas",
            role: "Auxiliar de Comercio",
            period: "12/2025 - Atual",
            description: "Auxiliar de operações e expanção"
        },
        {
            company: "Mega Tejotao",
            role: "Auditor de Estoque",
            period: "06/2025 - 12/2025",
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
            period: "3º Período",
            description: "Logica de programação, Algoritmos e programação, Banco de dados,"
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
            link: "https://portifolio-amber-sigma.vercel.app/",
            repoUrl: "https://github.com/LoselSpt/Portifolio-.git",
            imageUrl: "/images/projects/portfolio-preview.png"
        },
        {
            title: "Site de Criptografia",
            description: "Ferramenta web para criptografia e descriptografia de mensagens.",
            technologies: ["HTML5", "CSS3", "JavaScript", "POO"],
            link: "https://discriptografio.vercel.app/",
            repoUrl: "https://github.com/LoselSpt/Challenge-Decodificador",
            imageUrl: "/images/projects/crypto-preview.png"
        },
        {
            title: "Projeto NeoHorizon",
            description: "Desenvolvimento de Interface Gráfica e Softwares. Liderança e Planejamento.",
            technologies: ["Figma", "SQL Server", "Gestão"],
            link: "https://www.figma.com/proto/e6nFCMbL2xymePeUb4rfNf?node-id=0-1&t=N7S5p71nyXglD-vXm-6",
            repoUrl: "",
            imageUrl: "/images/projects/neohorizon-preview.png"
        },
        {
            title: "Clinica HealthWay (ERP)",
            description: "Líder Técnico na construção de um ERP completo para gestão de clínicas médicas. Foco em integridade de dados (ACID), arquitetura em camadas e gestão de equipe.",
            technologies: ["Java 17", "Swing", "MySQL 8", "JDBC", "Maven", "Trello"],
            link: "",
            repoUrl: "https://github.com/LoselSpt/ClinicaHealthWay.git",
            imageUrl: "/images/projects/healthway-preview.png"
        },
        {
            title: "Calculadora Logística",
            description: "Aplicação web interativa para automatizar cálculos logísticos, custos de viagem e divisão de lucros.",
            technologies: ["HTML5", "CSS3", "JavaScript ES6+"],
            link: "",
            repoUrl: "https://github.com/LoselSpt/Frete-inacabado-.git",
            imageUrl: "/images/projects/calculadora-preview.png"
        }
    ],
    skills: [
        {
            category: "Front-End",
            items: ["HTML5", "CSS3", "JavaScript", "Figma", "Sketch", "Java Swing"]
        },
        {
            category: "Back-End",
            items: ["Python", "Java", "C", "SQL Server", "MySQL", "JDBC", "Maven"]
        },
        {
            category: "Metodologias & Soft Skills",
            items: ["POO", "DDD", "Análise de Requisitos", "Liderança", "Trabalho em Equipe", "Adaptabilidade", "Trello"]
        },
        {
            category: "Idiomas",
            items: ["Português (Nativo)", "Espanhol (Básico)", "Inglês (Elementar)"]
        }
    ]
};
