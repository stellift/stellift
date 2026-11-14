const address = {
  "@type": "PostalAddress",
  streetAddress: "Rua Exemplo, 100, sala 42",
  addressLocality: "São Paulo",
  addressRegion: "SP",
  addressCountry: "BR",
};

const hours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
];

export const clinicSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "#clinica",
      name: "Clínica Vértice",
      medicalSpecialty: "https://schema.org/Dermatology",
      address,
      telephone: "+55 11 0000-0000",
      openingHoursSpecification: hours,
      priceRange: "R$ 450",
      isAcceptingNewPatients: true,
    },
    {
      "@type": "Physician",
      "@id": "#medica",
      name: "Dra. Lívia Andrade",
      medicalSpecialty: "https://schema.org/Dermatology",
      identifier: [
        { "@type": "PropertyValue", propertyID: "CRM-SP", value: "000000" },
        { "@type": "PropertyValue", propertyID: "RQE", value: "00000" },
      ],
      address,
      openingHoursSpecification: hours,
      parentOrganization: { "@id": "#clinica" },
    },
  ],
};
