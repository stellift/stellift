export const launchSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": "#empreendimento",
      name: "Mirante Alto",
      description:
        "Lançamento residencial com uma unidade por andar, 4 suítes e 280 m² de área privativa.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Exemplo, 500",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      numberOfAccommodationUnits: 18,
      petsAllowed: true,
    },
    {
      "@type": "RealEstateAgent",
      "@id": "#imobiliaria",
      name: "Casa Alvorada Imóveis",
      identifier: { "@type": "PropertyValue", propertyID: "CRECI-SP", value: "00000-J" },
      telephone: "+55 11 0000-0000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Exemplo, 500",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
  ],
};
