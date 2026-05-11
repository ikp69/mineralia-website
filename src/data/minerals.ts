export type Mineral = {
  name: string
  slug: string
  category: string
  formula: string
  shortDescription: string
  overview: string
  sourceDetails: {
    sourceName: string
    region: string
    country: string
    address?: string
    dispatchPorts?: string[]
    sourcingNote?: string
  }
  contactDetails: {
    contactPerson?: string
    phone?: string
    email?: string
    exportAvailability?: string
  }
  packaging: string[]
  qualityParameters: {
    parameter: string
    value: string
  }[]
  applications: {
    title: string
    description: string
  }[]
  industries: string[]
  technicalProfileLabel: string
  inquiryTitle: string
  image: string
}

export const minerals: Mineral[] = [
  {
    name: "Calcined Bauxite",
    slug: "bauxite",
    category: "Industrial Mineral",
    formula: "Al2O3·nH2O",
    shortDescription:
      "Aluminum-bearing ore supplied for refractories, cement, abrasives, and metallurgical applications.",
    overview:
      "Bauxite is a commercially important aluminum-bearing mineral used across refractory, metallurgical, abrasive, and cement industries. It is valued for its alumina content, thermal stability, and suitability for downstream processing in industrial applications requiring strength, heat resistance, and mineral consistency.",
    sourceDetails: {
      sourceName: "Global Bauxite Supply Network",
      region: "Multi-Origin",
      country: "India / Guinea / Australia",
      dispatchPorts: ["Mundra", "Kandla", "Vizag"],
      sourcingNote:
        "Available through qualified sourcing channels with commercial options based on grade, alumina content, and end-use requirements."
    },
    contactDetails: {
      exportAvailability: "Bulk export, containerized dispatch, and contract supply available"
    },
    packaging: ["Bulk vessel", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "Al2O3", value: "As per confirmed grade / assay" },
      { parameter: "SiO2", value: "As per confirmed grade / assay" },
      { parameter: "Fe2O3", value: "As per confirmed grade / assay" },
      { parameter: "TiO2", value: "As per confirmed grade / assay" },
      { parameter: "LOI", value: "As per confirmed grade / assay" },
      { parameter: "Moisture", value: "On request" }
    ],
    applications: [
      {
        title: "Refractory Manufacturing",
        description:
          "Used in refractory bricks, castables, and high-temperature linings where alumina-rich mineral input is critical."
      },
      {
        title: "Cement Industry",
        description:
          "Utilized as an alumina-bearing corrective material in cement raw mix formulations."
      },
      {
        title: "Abrasives",
        description:
          "Suitable for selected abrasive and calcined mineral applications depending on grade and processing route."
      },
      {
        title: "Metallurgical Processing",
        description:
          "Commercially relevant as the principal aluminum-bearing ore for downstream alumina and aluminum production."
      }
    ],
    industries: ["Refractories", "Cement", "Abrasives", "Metallurgy"],
    technicalProfileLabel: "Download Calcined Bauxite Technical Profile",
    inquiryTitle: "Request Calcined Bauxite Supply",
    image: "/images/minerals/bauxite.png"
  },

  {
    name: "Chrome Ore",
    slug: "chrome-ore",
    category: "Metallurgical Mineral",
    formula: "FeCr2O4",
    shortDescription:
      "Chromium-bearing ore supplied for ferroalloys, stainless steel, refractories, and foundry applications.",
    overview:
      "Chrome ore is a critical metallurgical mineral used in ferrochrome production, stainless steel manufacturing, refractory systems, and specialty foundry applications. It is valued for its chromium content, thermal resistance, and strategic role in alloy performance.",
    sourceDetails: {
      sourceName: "Global Chrome Ore Supply Network",
      region: "Multi-Origin",
      country: "South Africa / Turkey / Oman",
      dispatchPorts: ["Durban", "Mundra", "Sohar"],
      sourcingNote:
        "Commercial supply can be structured by chrome content, Cr:Fe ratio, size fraction, and end-use specification."
    },
    contactDetails: {
      exportAvailability: "Spot cargo and contract volumes available subject to origin and grade"
    },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Cr2O3", value: "As per confirmed grade / assay" },
      { parameter: "Cr:Fe Ratio", value: "On request" },
      { parameter: "SiO2", value: "On request" },
      { parameter: "Al2O3", value: "On request" },
      { parameter: "MgO", value: "On request" },
      { parameter: "Size", value: "Lumpy / calibrated / fines as required" }
    ],
    applications: [
      {
        title: "Ferroalloy Production",
        description:
          "Used as a feedstock in ferrochrome manufacturing for stainless and alloy steel applications."
      },
      {
        title: "Stainless Steel",
        description:
          "Supports chromium input requirements for corrosion resistance and alloy performance."
      },
      {
        title: "Refractory Systems",
        description:
          "Applicable in selected refractory formulations requiring chrome-bearing mineral input."
      },
      {
        title: "Foundry Applications",
        description:
          "Used in specialty moulding and heat-resistant foundry environments depending on grade."
      }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys", "Refractories", "Foundry"],
    technicalProfileLabel: "Download Chrome Ore Technical Profile",
    inquiryTitle: "Request Chrome Ore Supply",
    image: "/images/minerals/chrome-ore.png"
  },

  {
    name: "Kaolin & Calcined Kaolin",
    slug: "kaolin",
    category: "Industrial Mineral",
    formula: "Al2Si2O5(OH)4 / Al2O3·2SiO2",
    shortDescription:
      "Raw and calcined kaolin supplied for ceramics, refractories, paper, paints, rubber, and advanced industrial applications.",
    overview:
      "Kaolin is a versatile white clay mineral valued for its brightness, fine particle size, and chemical inertness. Calcined Kaolin is produced by thermally processing raw kaolin at high temperatures (600–1100°C), driving off hydroxyl groups and transforming the structure into metakaolin or fully calcined alumino-silicate — offering significantly enhanced hardness, whiteness, opacity, and refractory performance. Together, raw and calcined kaolin serve a wide spectrum of industrial applications from ceramics and paper to refractories and specialty coatings.",
    sourceDetails: {
      sourceName: "Kaolin & Calcined Kaolin Supply Network",
      region: "Multi-Origin",
      country: "India / Turkey / Ukraine / Brazil",
      dispatchPorts: ["Mundra", "Kandla", "Izmir", "Santos"],
      sourcingNote:
        "Available in raw washed, air-classified, and calcined grades. Supply structured based on brightness, particle size distribution, Al2O3 content, and end-use application requirements."
    },
    contactDetails: {
      exportAvailability: "Containerized export and regular industrial supply available in both raw and calcined forms"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al2O3", value: "Raw: 35–38% | Calcined: 40–45%" },
      { parameter: "SiO2", value: "Raw: 45–50% | Calcined: 50–55%" },
      { parameter: "Fe2O3", value: "As per confirmed grade / assay" },
      { parameter: "TiO2", value: "As per confirmed grade / assay" },
      { parameter: "Brightness (ISO)", value: "Raw: 78–86% | Calcined: 88–92%+" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "Residue / Mesh", value: "As per confirmed grade" },
      { parameter: "LOI", value: "Raw: 12–14% | Calcined: <1%" }
    ],
    applications: [
      {
        title: "Ceramics & Sanitaryware",
        description:
          "Both raw and calcined kaolin are used in tiles, sanitaryware, porcelain, and technical ceramics for controlled plasticity, whiteness, and firing behavior."
      },
      {
        title: "Refractories",
        description:
          "Calcined kaolin is a key raw material in refractory castables, bricks, and kiln furniture requiring high alumino-silicate content and thermal stability."
      },
      {
        title: "Paper & Coatings",
        description:
          "Calcined kaolin provides superior opacity and brightness as a coating pigment and filler in paper, paperboard, and specialty coatings."
      },
      {
        title: "Paints, Rubber & Polymers",
        description:
          "Used as a functional extender in paints, rubber compounds, adhesives, and specialty polymer systems for improved mechanical and barrier properties."
      }
    ],
    industries: ["Ceramics", "Refractories", "Paper & Coatings", "Paints & Polymers"],
    technicalProfileLabel: "Download Kaolin & Calcined Kaolin Technical Profile",
    inquiryTitle: "Request Kaolin & Calcined Kaolin Supply",
    image: "/images/minerals/kaolin.png"
  },

  {
    name: "Manganese Ore",
    slug: "manganese-ore",
    category: "Metallurgical Mineral",
    formula: "MnO2 / Mn-bearing ore",
    shortDescription:
      "Manganese-bearing ore supplied for steelmaking, ferroalloy production, and metallurgical processing.",
    overview:
      "Manganese ore is a strategically important metallurgical mineral used primarily in steelmaking and ferroalloy production. It plays an essential role in deoxidation, alloy balance, and metallurgical efficiency, with commercial selection based on manganese content, gangue profile, and sizing.",
    sourceDetails: {
      sourceName: "Global Manganese Ore Supply",
      region: "Multi-Origin",
      country: "South Africa / Gabon / India",
      dispatchPorts: ["Durban", "Port Elizabeth", "Mundra"],
      sourcingNote:
        "Supplied in commercial grades suitable for metallurgical buyers requiring stable quality and supply continuity."
    },
    contactDetails: {
      exportAvailability: "Bulk and containerized dispatch available depending on grade and tonnage"
    },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Mn", value: "As per confirmed grade / assay" },
      { parameter: "Fe", value: "On request" },
      { parameter: "SiO2", value: "On request" },
      { parameter: "Al2O3", value: "On request" },
      { parameter: "P", value: "On request" },
      { parameter: "Size", value: "Lumpy / fines as specified" }
    ],
    applications: [
      {
        title: "Steelmaking",
        description:
          "Used to support alloy balance and metallurgical performance in carbon and alloy steel production."
      },
      {
        title: "Ferroalloy Production",
        description:
          "Serves as a feedstock for manganese alloy manufacturing across industrial steel applications."
      },
      {
        title: "Foundry & Metallurgical Use",
        description:
          "Applicable in downstream metallurgical systems where manganese input is functionally required."
      }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys", "Foundry"],
    technicalProfileLabel: "Download Manganese Ore Technical Profile",
    inquiryTitle: "Request Manganese Ore Supply",
    image: "/images/minerals/manganese-ore.png"
  },

  {
    name: "Feldspar",
    slug: "feldspar",
    category: "Industrial Mineral",
    formula: "KAlSi3O8 / NaAlSi3O8 / mixed feldspathic mineral",
    shortDescription:
      "Feldspar supplied for ceramics, glass, glazes, and industrial mineral blending applications.",
    overview:
      "Feldspar is a commercially important fluxing mineral used in ceramics, glass, glazes, and allied industrial processes. It is selected for its alkali contribution, melting behavior, and role in improving vitrification, finish quality, and process efficiency.",
    sourceDetails: {
      sourceName: "Processed Feldspar Supply",
      region: "Multi-Origin",
      country: "India / Turkey",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote:
        "Available in potash and soda-rich commercial variants subject to end-use and plant requirements."
    },
    contactDetails: {
      exportAvailability: "Regular industrial dispatch available in powder and lump forms"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "K2O / Na2O", value: "As per confirmed grade" },
      { parameter: "SiO2", value: "On request" },
      { parameter: "Al2O3", value: "On request" },
      { parameter: "Fe2O3", value: "On request" },
      { parameter: "Whiteness", value: "On request" },
      { parameter: "Mesh Size", value: "As per application" }
    ],
    applications: [
      {
        title: "Ceramics",
        description:
          "Used in tiles, sanitaryware, tableware, and ceramic bodies requiring controlled flux contribution."
      },
      {
        title: "Glass Manufacturing",
        description:
          "Supports alkali input and process behavior in selected glass formulations."
      },
      {
        title: "Glazes & Enamels",
        description:
          "Used in glaze systems to improve melt characteristics and fired surface development."
      }
    ],
    industries: ["Ceramics", "Glass", "Glazes & Enamels"],
    technicalProfileLabel: "Download Feldspar Technical Profile",
    inquiryTitle: "Request Feldspar Supply",
    image: "/images/minerals/feldspar.png"
  },

  {
    name: "Silica Sand",
    slug: "silica-sand",
    category: "Industrial Mineral",
    formula: "SiO2",
    shortDescription:
      "High-purity silica sand supplied for glass, foundry, ceramics, filtration, and industrial processing.",
    overview:
      "Silica sand is a high-value industrial mineral used across glass manufacturing, foundry operations, ceramics, filtration systems, and selected specialty applications. Commercial selection depends on silica purity, iron content, particle sizing, and end-use compatibility.",
    sourceDetails: {
      sourceName: "Industrial Silica Supply",
      region: "Multi-Origin",
      country: "India / Turkey / Egypt",
      dispatchPorts: ["Mundra", "Kandla", "Alexandria"],
      sourcingNote:
        "Available in application-specific grades for glass, foundry, and industrial processing requirements."
    },
    contactDetails: {
      exportAvailability: "Bulk and container supply available subject to grade and mesh requirement"
    },
    packaging: ["Bulk vessel", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "SiO2", value: "As per confirmed grade / assay" },
      { parameter: "Fe2O3", value: "On request" },
      { parameter: "Al2O3", value: "On request" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "LOI", value: "On request" },
      { parameter: "Mesh Size", value: "As per application" }
    ],
    applications: [
      {
        title: "Glass Manufacturing",
        description:
          "Used as a principal silica source in float glass, container glass, and selected specialty glass applications."
      },
      {
        title: "Foundry Casting",
        description:
          "Supplied in size-controlled grades for moulding and core-making systems."
      },
      {
        title: "Ceramics",
        description:
          "Used in ceramic body and glaze formulations requiring silica contribution and consistency."
      },
      {
        title: "Filtration Media",
        description:
          "Applicable in selected water and industrial filtration systems depending on processed grade."
      }
    ],
    industries: ["Glass", "Foundry", "Ceramics", "Filtration"],
    technicalProfileLabel: "Download Silica Sand Technical Profile",
    inquiryTitle: "Request Silica Sand Supply",
    image: "/images/minerals/silica-sand.png"
  },

  {
    name: "Calcium Carbonate",
    slug: "calcium-carbonate",
    category: "Industrial Mineral",
    formula: "CaCO3",
    shortDescription:
      "Ground and processed calcium carbonate supplied for plastics, paints, paper, construction, and industrial applications.",
    overview:
      "Calcium carbonate is one of the most widely used industrial minerals across fillers, extenders, construction systems, coatings, plastics, and process industries. It is selected based on purity, brightness, particle size distribution, and compatibility with downstream manufacturing requirements.",
    sourceDetails: {
      sourceName: "Processed Calcium Carbonate Supply",
      region: "Multi-Origin",
      country: "India / Vietnam / Egypt",
      dispatchPorts: ["Mundra", "Tuticorin", "Hai Phong"],
      sourcingNote:
        "Available in coated and uncoated commercial grades depending on industrial application."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for industrial and bulk-volume buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "CaCO3", value: "As per confirmed grade / assay" },
      { parameter: "MgO", value: "On request" },
      { parameter: "Brightness", value: "On request" },
      { parameter: "Whiteness", value: "On request" },
      { parameter: "Mesh / D97", value: "As per application" },
      { parameter: "Moisture", value: "On request" }
    ],
    applications: [
      {
        title: "Plastics & Polymers",
        description:
          "Used as a functional filler to improve economics, rigidity, and process performance."
      },
      {
        title: "Paints & Coatings",
        description:
          "Acts as an extender mineral in coatings requiring controlled particle profile and brightness."
      },
      {
        title: "Paper & Filler Systems",
        description:
          "Selected for applications requiring brightness, smoothness, and filler functionality."
      },
      {
        title: "Construction Materials",
        description:
          "Used in compounds, adhesives, sealants, and mineral-based construction systems."
      }
    ],
    industries: ["Plastics", "Paints & Coatings", "Paper", "Construction Materials"],
    technicalProfileLabel: "Download Calcium Carbonate Technical Profile",
    inquiryTitle: "Request Calcium Carbonate Supply",
    image: "/images/minerals/calcium-carbonate.png"
  },

  {
    name: "Dolomite",
    slug: "dolomite",
    category: "Industrial Mineral",
    formula: "CaMg(CO3)2",
    shortDescription:
      "Dolomite supplied for steelmaking, glass, refractories, construction, and flux applications.",
    overview:
      "Dolomite is a calcium-magnesium carbonate mineral used widely in steelmaking, glass, refractories, construction materials, and industrial flux applications. It is valued for its dual calcium and magnesium contribution as well as its role in thermal and process systems.",
    sourceDetails: {
      sourceName: "Industrial Dolomite Supply",
      region: "Multi-Origin",
      country: "India / Oman / Turkey",
      dispatchPorts: ["Mundra", "Kandla", "Sohar"],
      sourcingNote:
        "Available in lump, powder, and graded industrial forms based on end-use requirement."
    },
    contactDetails: {
      exportAvailability: "Regular bulk and packaged export supply available"
    },
    packaging: ["Bulk cargo", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "CaO", value: "As per confirmed grade / assay" },
      { parameter: "MgO", value: "As per confirmed grade / assay" },
      { parameter: "SiO2", value: "On request" },
      { parameter: "Fe2O3", value: "On request" },
      { parameter: "LOI", value: "On request" },
      { parameter: "Size", value: "Lump / powder / graded as required" }
    ],
    applications: [
      {
        title: "Steelmaking",
        description:
          "Used as a flux and conditioning mineral in selected steel and metallurgical operations."
      },
      {
        title: "Refractory Use",
        description:
          "Applicable in refractory systems and high-temperature industrial environments."
      },
      {
        title: "Glass Industry",
        description:
          "Supports selected glass formulations where magnesium and calcium contribution is required."
      },
      {
        title: "Construction Materials",
        description:
          "Used in mineral blends, fillers, and construction-related industrial applications."
      }
    ],
    industries: ["Steel & Metallurgy", "Refractories", "Glass", "Construction Materials"],
    technicalProfileLabel: "Download Dolomite Technical Profile",
    inquiryTitle: "Request Dolomite Supply",
    image: "/images/minerals/dolomite.png"
  },

  {
    name: "Fluorspar",
    slug: "fluorspar",
    category: "Industrial & Metallurgical Mineral",
    formula: "CaF2",
    shortDescription:
      "Fluorspar supplied for metallurgical, chemical, aluminum, and flux-based industrial applications.",
    overview:
      "Fluorspar is a strategically important fluorine-bearing mineral used across metallurgical, aluminum, and chemical processing industries. It is commercially relevant in flux applications and as a feed mineral in downstream fluorochemical value chains. Selection depends on calcium fluoride content, impurity profile, and process suitability.",
    sourceDetails: {
      sourceName: "Multi-Origin Fluorspar Supply",
      region: "Qualified Industrial Supply Channels",
      country: "India / Mongolia / Mexico / South Africa",
      dispatchPorts: ["Mundra", "Kandla", "Durban"],
      sourcingNote:
        "Commercially structured supply available for metallurgical and industrial buyers based on grade, impurity profile, and logistics requirements."
    },
    contactDetails: {
      exportAvailability: "Containerized and contract supply available subject to grade and market conditions"
    },
    packaging: ["1 MT jumbo bags", "Bulk bags", "Containerized dispatch"],
    qualityParameters: [
      { parameter: "CaF2", value: "As per confirmed grade / assay" },
      { parameter: "BaSO4", value: "On request" },
      { parameter: "SiO2", value: "On request" },
      { parameter: "Al2O3", value: "On request" },
      { parameter: "MgO", value: "On request" },
      { parameter: "Fe2O3", value: "On request" },
      { parameter: "CaCO3", value: "On request" },
      { parameter: "Na2O", value: "On request" },
      { parameter: "K2O", value: "On request" },
      { parameter: "TiO2", value: "On request" },
      { parameter: "P2O5", value: "On request" },
      { parameter: "LOI", value: "On request" }
    ],
    applications: [
      {
        title: "Steelmaking",
        description:
          "Used in selected metallurgical operations as a fluxing mineral supporting process behavior and slag control."
      },
      {
        title: "Aluminium Production",
        description:
          "Applicable in aluminum-related industrial systems where fluorine-bearing mineral input is commercially relevant."
      },
      {
        title: "Chemical Processing",
        description:
          "Serves as an important feed mineral in fluorochemical value chains depending on grade and downstream process requirements."
      },
      {
        title: "Industrial Flux Applications",
        description:
          "Used in high-temperature processing environments requiring controlled flux characteristics."
      }
    ],
    industries: ["Steel & Metallurgy", "Aluminium", "Chemical Processing", "Industrial Flux Systems"],
    technicalProfileLabel: "Download Fluorspar Technical Profile",
    inquiryTitle: "Request Fluorspar Supply",
    image: "/images/minerals/fluorspar.png"
  },

  {
    name: "Dead Burnt Magnesite",
    slug: "dead-burnt-magnesite",
    category: "Refractory Raw Material",
    formula: "MgO",
    shortDescription:
      "High-density dead burnt magnesite supplied for refractory bricks, furnace linings, and high-temperature industrial applications.",
    overview:
      "Dead Burnt Magnesite (DBM) is produced by calcining natural magnesite at very high temperatures (1600–2000°C), resulting in a dense, sintered periclase product with extremely low reactivity and high refractoriness. It is one of the most critical raw materials in the refractory industry, used extensively in steel, cement, and non-ferrous metal furnace linings. DBM is valued for its high MgO content, high bulk density, low porosity, and excellent resistance to basic slag attack.",
    sourceDetails: {
      sourceName: "Global DBM Supply Network",
      region: "Multi-Origin",
      country: "China / India / Turkey / North Korea",
      dispatchPorts: ["Mundra", "Kandla", "Tianjin", "Qingdao"],
      sourcingNote:
        "Available in multiple grades based on MgO content, bulk density, and CaO/SiO2 ratio. Supply structured for refractory manufacturers, steel plants, and cement industries."
    },
    contactDetails: {
      exportAvailability: "Bulk vessel, jumbo bags, and containerized dispatch available"
    },
    packaging: ["Bulk vessel", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "MgO", value: "90% – 97% min (grade dependent)" },
      { parameter: "SiO2", value: "As per confirmed grade / assay" },
      { parameter: "CaO", value: "As per confirmed grade / assay" },
      { parameter: "Fe2O3", value: "As per confirmed grade / assay" },
      { parameter: "Al2O3", value: "As per confirmed grade / assay" },
      { parameter: "Bulk Density", value: "3.0 – 3.40 g/cc (grade dependent)" },
      { parameter: "LOI", value: "As per confirmed grade / assay" }
    ],
    applications: [
      {
        title: "Refractory Brick Manufacturing",
        description:
          "Primary raw material for magnesia bricks, magnesia-carbon bricks, and magnesia-chrome bricks used in steel converters, electric arc furnaces, and ladles."
      },
      {
        title: "Steel & Metallurgy",
        description:
          "Used in furnace linings for BOF, EAF, and secondary metallurgy vessels where resistance to high temperature and basic slag is essential."
      },
      {
        title: "Cement Industry",
        description:
          "Used in rotary kiln linings and high-temperature zones in cement production facilities."
      },
      {
        title: "Non-Ferrous Metal Processing",
        description:
          "Applied in copper, lead, zinc, and other non-ferrous smelting furnaces requiring high-purity basic refractory materials."
      }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Cement", "Non-Ferrous Metals"],
    technicalProfileLabel: "Download Dead Burnt Magnesite Technical Profile",
    inquiryTitle: "Request Dead Burnt Magnesite Supply",
    image: "/images/minerals/magnesite.png"
  }
];
