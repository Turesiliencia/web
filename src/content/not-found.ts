// The page shown for an address that does not exist. One page serves both
// languages, since it can't tell which one the visitor came from: Spanish
// first, then a line in English.
export const notFound = {
  title: "Página no encontrada · TuResiliencia",
  label: "Error 404",
  es: {
    heading: "Página no encontrada",
    body: "La dirección que buscas no existe o ha cambiado. Puedes seguir desde la página de inicio.",
    home: "Volver al inicio",
  },
  en: {
    heading: "Page not found.",
    body: "The address you followed doesn't exist or has changed.",
    home: "Go to the English home page",
  },
};
