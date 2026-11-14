export const lawFirmSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": "#escritorio",
  name: "Lemos Prado Advocacia",
  knowsAbout: ["Direito de família", "Direito das sucessões", "Inventário", "Planejamento sucessório"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Exemplo, 1000, conjunto 81",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: "+55 11 0000-0000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: { "@type": "City", name: "São Paulo" },
  identifier: { "@type": "PropertyValue", propertyID: "Registro OAB/SP", value: "00.000" },
};
