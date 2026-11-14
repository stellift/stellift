export const dentalSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "#clinica",
  name: "Ápice Odontologia",
  identifier: { "@type": "PropertyValue", propertyID: "CRO-SP", value: "0000" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Exemplo, 250",
    addressLocality: "Campinas",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  telephone: "+55 19 0000-0000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  isAcceptingNewPatients: true,
};
