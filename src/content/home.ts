import type { Locale } from "./site";

export type SectionKey = "about" | "areas" | "book" | "contact";

type Section = { id: string; nav: string };

type Area = {
  name: string;
  description: string;
  // Either an email with this subject, or a link to a section of the page.
  action: { label: string; subject: string } | { label: string; section: SectionKey };
  // The book keeps its Spanish title in both languages.
  firstTitle?: { label: string; work: string; by: string; author: string };
};

export type HomeContent = {
  meta: { title: string; description: string };
  languageNav: string;
  mainNav: string;
  sections: Record<SectionKey, Section>;
  eyebrow: string;
  headline: [string, string];
  subtitle: string;
  lede: string;
  cta: { about: string; book: string };
  concept: { label: string; quote: string; body: string; attribution: string };
  about: {
    label: string;
    title: string;
    body: string[];
    pillars: { name: string; text: string }[];
    fields: { label: string; intro: string; items: { name: string; text: string }[] };
  };
  areas: { label: string; title: string; intro: string; items: Area[] };
  book: {
    label: string;
    by: string;
    // Front and back cover, one at a time, with a dot for each.
    gallery: {
      label: string;
      front: { name: string; alt: string };
      back: { name: string; alt: string };
    };
    // Every mention of the title is set in italics.
    paragraphs: string[];
    note?: string;
    buy: string;
    // The line under the button that points to book.otherStoreUrl.
    otherStore?: { question: string; link: string };
  };
  contact: {
    label: string;
    title: string;
    body: string;
    email: string;
    instagram: string;
  };
  footer: {
    tagline: string;
    kind: string;
    explore: string;
    follow: string;
    language: string;
  };
};

export const home: Record<Locale, HomeContent> = {
  es: {
    meta: {
      title: "TuResiliencia · Reconstrucción Humana",
      description:
        "Asociación sin ánimo de lucro dedicada a la Reconstrucción Humana: formación, investigación, publicaciones y cooperación. Novedad editorial: Sobrevivir no es reconstruirse, de Deissy Olarte.",
    },
    languageNav: "Idioma",
    mainNav: "Principal",
    sections: {
      about: { id: "asociacion", nav: "La asociación" },
      areas: { id: "areas", nav: "Áreas" },
      book: { id: "editorial", nav: "Editorial" },
      contact: { id: "contacto", nav: "Contacto" },
    },
    eyebrow: "Asociación TuResiliencia",
    headline: ["Reconstruir vidas", "Transformar realidades"],
    subtitle:
      "Conocimiento, dignidad e innovación al servicio de la Reconstrucción Humana",
    lede: "TuResiliencia es una asociación dedicada a comprender y acompañar cómo las personas rehacen su identidad, sus vínculos y su proyecto de vida después de las experiencias que lo cambian todo.",
    cta: { about: "Conocer la asociación", book: "Descubrir el libro" },
    concept: {
      label: "Reconstrucción Humana",
      quote: "Reconstruirse no es volver al punto de partida.",
      body: "La Reconstrucción Humana comprende a la persona desde aquello que sostiene su existencia: identidad, vínculos, memoria, pertenencia, decisiones, dignidad y sentido. Parte de una convicción: la dignidad de una persona no depende de sus circunstancias ni del momento que atraviesa.",
      attribution: "Deissy Olarte, fundadora de TuResiliencia",
    },
    about: {
      label: "La asociación",
      title: "Conocimiento al servicio de las personas",
      body: [
        "TuResiliencia es una asociación sin ánimo de lucro, de ámbito estatal y con vocación internacional.",
        "Promueve la Reconstrucción Humana, el conocimiento, la inclusión y la innovación a través de la formación, la investigación, la cooperación y las alianzas entre personas, empresas, instituciones y comunidades.",
      ],
      pillars: [
        {
          name: "Conocimiento",
          text: "Investigación, formación y publicaciones para comprender lo que cambia en una persona y lo que la ayuda a rehacerse.",
        },
        {
          name: "Dignidad",
          text: "Cada persona es más que lo que le ha ocurrido: se la mira desde sus capacidades y sus derechos.",
        },
        {
          name: "Innovación",
          text: "Tecnología e inteligencia artificial ética, centradas en las personas y en reducir las brechas digitales.",
        },
      ],
      fields: {
        label: "Ámbitos de actuación",
        intro: "Sus estatutos recogen seis ámbitos de actuación.",
        items: [
          {
            name: "Reconstrucción Humana, inclusión y derechos humanos",
            text: "Personas, familias y comunidades ante la pérdida, el duelo, la migración o la exclusión; igualdad, diversidad y dignidad.",
          },
          {
            name: "Legado, empresa familiar y juventud",
            text: "Continuidad de las empresas familiares, liderazgo joven, envejecimiento activo y conocimiento compartido entre generaciones.",
          },
          {
            name: "Formación, investigación y sello editorial",
            text: "Cursos, jornadas y mentorías, en especial en el ámbito de los cuidados, e investigación publicada con sello propio.",
          },
          {
            name: "Desarrollo rural y cohesión territorial",
            text: "Emprendimiento, empleo y digitalización en los entornos rurales, y redes contra la despoblación.",
          },
          {
            name: "Innovación e inteligencia artificial ética",
            text: "Alfabetización digital y uso responsable de la inteligencia artificial en la educación, los cuidados y el territorio.",
          },
          {
            name: "Cooperación internacional y alianzas",
            text: "Codesarrollo, voluntariado y proyectos con universidades, administraciones, empresas y entidades sociales.",
          },
        ],
      },
    },
    areas: {
      label: "Áreas",
      title: "Una organización, varios caminos",
      intro:
        "Cuatro áreas dan forma a su trabajo. Si la tuya es una universidad, una empresa o una entidad, escríbenos desde la que te interese.",
      items: [
        {
          name: "Academia",
          description:
            "Formación y programas para profesionales, entidades y empresas: derechos humanos, cuidados, diversidad, liderazgo e inteligencia artificial ética.",
          action: { label: "Solicitar formación", subject: "Academia" },
        },
        {
          name: "Cooperación",
          description:
            "Un espacio para idear y poner en marcha proyectos entre España y Latinoamérica, junto a universidades, administraciones y entidades sociales.",
          action: { label: "Proponer un proyecto", subject: "Cooperación" },
        },
        {
          name: "Alianzas",
          description:
            "Para empresas y organizaciones que quieran trabajar con TuResiliencia: bienestar organizacional, impacto social y transferencia de conocimiento.",
          action: { label: "Proponer una alianza", subject: "Alianzas" },
        },
        {
          name: "Editorial",
          description: "Libros y publicaciones de investigación y divulgación.",
          action: { label: "Ver el libro", section: "book" },
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
      gallery: {
        label: "Imágenes del libro",
        front: {
          name: "Portada",
          alt: "Portada de Sobrevivir no es reconstruirse, de Deissy Olarte: dos figuras de piedra con grietas doradas, sentadas espalda con espalda dentro de un círculo dorado.",
        },
        back: {
          name: "Contraportada",
          alt: "Contraportada de Sobrevivir no es reconstruirse. Arriba, la pregunta «¿Y si “ser fuerte” fuera precisamente lo que nos impide reconstruirnos?»; debajo, el texto de presentación de la autora.",
        },
      },
      paragraphs: [
        "Después de una pérdida, todo el mundo pregunta cómo seguir adelante. Casi nadie pregunta qué le ocurre realmente a la persona que lo intenta.",
        "Sobrevivir no es reconstruirse no es un manual de superación ni una guía para «sentirse bien». Es una invitación a mirar de frente lo que el duelo transforma por dentro: la identidad, el cuerpo, los vínculos, la dignidad y la propia idea de futuro.",
        "Desde su investigación y su trabajo en torno al duelo, Deissy Olarte plantea una diferencia esencial: seguir funcionando no significa estar bien. Sobrevivir puede ser apenas el primer paso de una historia que todavía no sabemos cómo contar.",
        "Este libro no ofrece respuestas fáciles. Abre preguntas y acompaña la posibilidad de volver a reconocerse después de lo vivido.",
      ],
      buy: "Comprar en Amazon",
      otherStore: { question: "¿Estás en Latinoamérica?", link: "Cómpralo en Amazon.com" },
    },
    contact: {
      label: "Contacto",
      title: "Hablemos",
      body: "Si representas a una universidad, una empresa o una entidad y quieres colaborar con TuResiliencia, o si quieres saber más sobre su trabajo, aquí nos encuentras.",
      email: "Escríbenos",
      instagram: "Síguenos en Instagram",
    },
    footer: {
      tagline: "Reconstruir vidas. Transformar realidades.",
      kind: "Asociación sin ánimo de lucro",
      explore: "Explorar",
      follow: "Contacto",
      language: "Idioma",
    },
  },
  en: {
    meta: {
      title: "TuResiliencia · Human Reconstruction",
      description:
        "A non-profit association devoted to Human Reconstruction: training, research, publications and cooperation. New book: Sobrevivir no es reconstruirse, by Deissy Olarte.",
    },
    languageNav: "Language",
    mainNav: "Main",
    sections: {
      about: { id: "about", nav: "About" },
      areas: { id: "areas", nav: "Areas" },
      book: { id: "publishing", nav: "Publishing" },
      contact: { id: "contact", nav: "Contact" },
    },
    eyebrow: "TuResiliencia Association",
    headline: ["Rebuilding lives", "Transforming realities"],
    subtitle:
      "Knowledge, dignity and innovation in the service of Human Reconstruction",
    lede: "TuResiliencia is an association devoted to understanding and supporting how people rebuild their identity, their bonds and their life project after the experiences that change everything.",
    cta: { about: "About the association", book: "Discover the book" },
    concept: {
      label: "Human Reconstruction",
      quote: "To rebuild yourself is not to return to where you started.",
      body: "Human Reconstruction understands a person through what sustains their existence: identity, bonds, memory, belonging, decisions, dignity and meaning. It starts from a conviction: a person’s dignity does not depend on their circumstances or on the moment they are going through.",
      attribution: "Deissy Olarte, founder of TuResiliencia",
    },
    about: {
      label: "About",
      title: "Knowledge in the service of people",
      body: [
        "TuResiliencia is a non-profit association based in Spain, working nationwide with an international outlook.",
        "It promotes Human Reconstruction, knowledge, inclusion and innovation through training, research, cooperation and partnerships between people, companies, institutions and communities.",
      ],
      pillars: [
        {
          name: "Knowledge",
          text: "Research, training and publications to understand what changes in a person, and what helps them rebuild.",
        },
        {
          name: "Dignity",
          text: "Every person is more than what has happened to them, and is seen through their abilities and their rights.",
        },
        {
          name: "Innovation",
          text: "Technology and ethical artificial intelligence, centred on people and on closing digital divides.",
        },
      ],
      fields: {
        label: "Fields of action",
        intro: "Its statutes set out six fields of action.",
        items: [
          {
            name: "Human Reconstruction, inclusion and human rights",
            text: "People, families and communities facing loss, grief, migration or exclusion; equality, diversity and dignity.",
          },
          {
            name: "Legacy, family business and youth",
            text: "The continuity of family businesses, young leadership, active ageing and knowledge shared between generations.",
          },
          {
            name: "Training, research and publishing",
            text: "Courses, seminars and mentoring, especially in care, and research published under its own imprint.",
          },
          {
            name: "Rural development and territorial cohesion",
            text: "Entrepreneurship, employment and digital skills in rural areas, and networks against depopulation.",
          },
          {
            name: "Innovation and ethical artificial intelligence",
            text: "Digital literacy and the responsible use of artificial intelligence in education, care and rural life.",
          },
          {
            name: "International cooperation and partnerships",
            text: "Co-development, volunteering and projects with universities, public bodies, companies and social organisations.",
          },
        ],
      },
    },
    areas: {
      label: "Areas",
      title: "One organisation, many paths",
      intro:
        "Four areas shape its work. If you represent a university, a company or an organisation, write to us about the one that interests you.",
      items: [
        {
          name: "Academy",
          description:
            "Training and programmes for professionals, organisations and companies: human rights, care, diversity, leadership and ethical artificial intelligence.",
          action: { label: "Request training", subject: "Academy" },
        },
        {
          name: "Cooperation",
          description:
            "A space to design and launch projects between Spain and Latin America, together with universities, public administrations and social organisations.",
          action: { label: "Propose a project", subject: "Cooperation" },
        },
        {
          name: "Partnerships",
          description:
            "For companies and organisations that want to work with TuResiliencia: organisational wellbeing, social impact and knowledge transfer.",
          action: { label: "Propose a partnership", subject: "Partnerships" },
        },
        {
          name: "Publishing",
          description: "Books and publications for research and a wider readership.",
          action: { label: "See the book", section: "book" },
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
      gallery: {
        label: "Book images",
        front: {
          name: "Front cover",
          alt: "Cover of Sobrevivir no es reconstruirse by Deissy Olarte: two stone figures with golden cracks, sitting back to back inside a golden circle.",
        },
        back: {
          name: "Back cover",
          alt: "Back cover of Sobrevivir no es reconstruirse, in Spanish. At the top, the question “What if ‘being strong’ were precisely what keeps us from rebuilding ourselves?”; below it, the author’s presentation of the book.",
        },
      },
      paragraphs: [
        "After a loss, everyone asks how to move on. Almost no one asks what is really happening to the person who is trying.",
        "Sobrevivir no es reconstruirse is neither a self-help manual nor a guide to “feeling good”. It is an invitation to look squarely at what grief transforms within: identity, the body, bonds, dignity and the very idea of a future.",
        "Drawing on her research and her work on grief, Deissy Olarte makes an essential distinction: to keep functioning is not to be well. Surviving may be only the first step of a story we do not yet know how to tell.",
        "This book offers no easy answers. It opens questions, and it stays with the possibility of recognising oneself again after what one has lived through.",
      ],
      note: "Published in Spanish. The title means “Surviving is not rebuilding yourself”.",
      buy: "Buy on Amazon",
      otherStore: { question: "In the US?", link: "Buy it on Amazon.com" },
    },
    contact: {
      label: "Contact",
      title: "Get in touch",
      body: "If you represent a university, a company or an organisation and would like to work with TuResiliencia, or simply want to know more about what it does, this is where to find us.",
      email: "Write to us",
      instagram: "Follow us on Instagram",
    },
    footer: {
      tagline: "Rebuilding lives. Transforming realities.",
      kind: "Non-profit association",
      explore: "Explore",
      follow: "Contact",
      language: "Language",
    },
  },
};
