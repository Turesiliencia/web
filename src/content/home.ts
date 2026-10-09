import type { Locale } from "./site";

type Area = {
  name: string;
  description: string;
  // The book keeps its Spanish title in both languages.
  firstTitle?: { label: string; work: string; by: string; author: string };
};

export type HomeContent = {
  meta: { title: string; description: string };
  languageNav: string;
  status: string;
  headline: [string, string];
  subtitle: string;
  lede: string;
  concept: { label: string; quote: string; body: string; attribution: string };
  areas: { label: string; items: Area[] };
  contact: { title: string; body: string; email: string; instagram: string };
  footer: string;
};

export const home: Record<Locale, HomeContent> = {
  es: {
    meta: {
      title: "TuResiliencia · Reconstrucción Humana",
      description:
        "TuResiliencia es una asociación dedicada a la Reconstrucción Humana: formación, investigación, publicaciones y cooperación. Nueva web en preparación.",
    },
    languageNav: "Idioma",
    status: "Próximamente",
    headline: ["Reconstruir vidas", "Transformar realidades"],
    subtitle:
      "Conocimiento, dignidad e innovación al servicio de la Reconstrucción Humana",
    lede: "TuResiliencia es una asociación dedicada a comprender y acompañar cómo las personas rehacen su identidad, sus vínculos y su proyecto de vida después de las experiencias que lo cambian todo. Estamos preparando una nueva web para la formación, la investigación, las publicaciones y la cooperación.",
    concept: {
      label: "Reconstrucción Humana",
      quote: "Reconstruirse no es volver al punto de partida.",
      body: "La Reconstrucción Humana comprende a la persona desde aquello que sostiene su existencia: identidad, vínculos, memoria, pertenencia, decisiones, dignidad y sentido. Parte de una convicción: la dignidad de una persona no depende de sus circunstancias ni del momento que atraviesa.",
      attribution: "Deissy Olarte, fundadora de TuResiliencia",
    },
    areas: {
      label: "Lo que estamos preparando",
      items: [
        {
          name: "Academia",
          description:
            "Formación y programas para profesionales, entidades y empresas: derechos humanos, cuidados, diversidad, liderazgo e inteligencia artificial ética.",
        },
        {
          name: "Cooperación",
          description:
            "Un espacio para idear y poner en marcha proyectos entre España y Latinoamérica, junto a universidades, administraciones y entidades sociales.",
        },
        {
          name: "Alianzas",
          description:
            "Para empresas y organizaciones que quieran trabajar con TuResiliencia: bienestar organizacional, impacto social y transferencia de conocimiento.",
        },
        {
          name: "Editorial",
          description: "Libros y publicaciones de investigación y divulgación.",
          firstTitle: {
            label: "Primer título",
            work: "Sobrevivir no es reconstruirse",
            by: "de",
            author: "Deissy Olarte",
          },
        },
      ],
    },
    contact: {
      title: "Mientras tanto",
      body: "Si representas a una universidad, una empresa o una entidad y quieres conocer el proyecto, o si prefieres seguir de cerca lo que viene, aquí nos encuentras.",
      email: "Escríbenos",
      instagram: "Síguenos en Instagram",
    },
    footer: "Web en preparación",
  },
  en: {
    meta: {
      title: "TuResiliencia · Human Reconstruction",
      description:
        "TuResiliencia is an association devoted to Human Reconstruction: training, research, publications and cooperation. New website in preparation.",
    },
    languageNav: "Language",
    status: "Coming soon",
    headline: ["Rebuilding lives", "Transforming realities"],
    subtitle:
      "Knowledge, dignity and innovation in the service of Human Reconstruction",
    lede: "TuResiliencia is an association devoted to understanding and supporting how people rebuild their identity, their bonds and their life project after the experiences that change everything. We are preparing a new website for training, research, publications and cooperation.",
    concept: {
      label: "Human Reconstruction",
      quote: "To rebuild yourself is not to return to where you started.",
      body: "Human Reconstruction understands a person through what sustains their existence: identity, bonds, memory, belonging, decisions, dignity and meaning. It starts from a conviction: a person’s dignity does not depend on their circumstances or on the moment they are going through.",
      attribution: "Deissy Olarte, founder of TuResiliencia",
    },
    areas: {
      label: "What we are preparing",
      items: [
        {
          name: "Academy",
          description:
            "Training and programmes for professionals, organisations and companies: human rights, care, diversity, leadership and ethical artificial intelligence.",
        },
        {
          name: "Cooperation",
          description:
            "A space to design and launch projects between Spain and Latin America, together with universities, public administrations and social organisations.",
        },
        {
          name: "Partnerships",
          description:
            "For companies and organisations that want to work with TuResiliencia: organisational wellbeing, social impact and knowledge transfer.",
        },
        {
          name: "Publishing",
          description: "Books and publications for research and a wider readership.",
          firstTitle: {
            label: "First title",
            work: "Sobrevivir no es reconstruirse",
            by: "by",
            author: "Deissy Olarte",
          },
        },
      ],
    },
    contact: {
      title: "In the meantime",
      body: "If you represent a university, a company or an organisation and would like to know more about the project, or would simply like to follow what is coming, this is where to find us.",
      email: "Write to us",
      instagram: "Follow us on Instagram",
    },
    footer: "Website in preparation",
  },
};
