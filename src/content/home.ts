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
  book: {
    label: string;
    by: string;
    coverAlt: string;
    // Every mention of the title is set in italics.
    paragraphs: string[];
    note?: string;
    buy: string;
  };
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
    book: {
      label: "Novedad editorial",
      by: "de",
      coverAlt:
        "Portada de Sobrevivir no es reconstruirse, de Deissy Olarte: dos figuras de piedra con grietas doradas, sentadas espalda con espalda dentro de un círculo dorado.",
      paragraphs: [
        "Después de una pérdida, todo el mundo pregunta cómo seguir adelante. Casi nadie pregunta qué le ocurre realmente a la persona que lo intenta.",
        "Sobrevivir no es reconstruirse no es un manual de superación ni una guía para «sentirse bien». Es una invitación a mirar de frente lo que el duelo transforma por dentro: la identidad, el cuerpo, los vínculos, la dignidad y la propia idea de futuro.",
        "Desde su investigación y su trabajo en torno al duelo, Deissy Olarte plantea una diferencia esencial: seguir funcionando no significa estar bien. Sobrevivir puede ser apenas el primer paso de una historia que todavía no sabemos cómo contar.",
        "Este libro no ofrece respuestas fáciles. Abre preguntas y acompaña la posibilidad de volver a reconocerse después de lo vivido.",
      ],
      buy: "Comprar en Amazon",
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
    book: {
      label: "New book",
      by: "by",
      coverAlt:
        "Cover of Sobrevivir no es reconstruirse by Deissy Olarte: two stone figures with golden cracks, sitting back to back inside a golden circle.",
      paragraphs: [
        "After a loss, everyone asks how to move on. Almost no one asks what is really happening to the person who is trying.",
        "Sobrevivir no es reconstruirse is neither a self-help manual nor a guide to “feeling good”. It is an invitation to look squarely at what grief transforms within: identity, the body, bonds, dignity and the very idea of a future.",
        "Drawing on her research and her work on grief, Deissy Olarte makes an essential distinction: to keep functioning is not to be well. Surviving may be only the first step of a story we do not yet know how to tell.",
        "This book offers no easy answers. It opens questions, and it stays with the possibility of recognising oneself again after what one has lived through.",
      ],
      note: "Published in Spanish. The title means “Surviving is not rebuilding yourself”.",
      buy: "Buy on Amazon",
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
