export type Mineral = {
  name: string
  slug: string
  category: string
  industryGroup?: string
  subCategory?: string
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
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
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
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
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
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
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
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Steel & Foundry Raw Materials",
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
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
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
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
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
    industryGroup: "Cross-Industry",
    subCategory: "Industrial Minerals",
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
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
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
    category: "Metallurgical Mineral",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Steel & Foundry Raw Materials",
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
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
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
  },

  // ── Ceramic & Porcelain Industry — Clay & Body Minerals ──────────────────

  {
    name: "Ball Clay",
    slug: "ball-clay",
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
    formula: "Al2O3·2SiO2·2H2O",
    shortDescription: "Highly plastic secondary clay supplied for ceramics, sanitaryware, floor tiles, and stoneware body formulations.",
    overview: "Ball clay is a fine-grained, highly plastic sedimentary clay mineral used extensively in ceramic body formulations. It is prized for its plasticity, green strength, and clean-burning characteristics. Ball clay enhances workability and provides structural integrity in unfired ceramic bodies, making it an essential raw material in tiles, sanitaryware, and tableware production.",
    sourceDetails: {
      sourceName: "Ball Clay Supply Network",
      region: "Multi-Origin",
      country: "India / UK / Ukraine / Turkey",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in washed and processed grades. Supply structured based on plasticity index, particle size distribution, and fired color characteristics."
    },
    contactDetails: {
      exportAvailability: "Containerized export available for industrial ceramic buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al2O3", value: "24–30%" },
      { parameter: "SiO2", value: "50–60%" },
      { parameter: "TiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "LOI", value: "8–14%" },
      { parameter: "Plasticity Index", value: "On request" }
    ],
    applications: [
      { title: "Floor & Wall Tiles", description: "Provides plasticity and green strength in tile body formulations for consistent manufacturing performance." },
      { title: "Sanitaryware", description: "Used in sanitaryware body compositions to achieve workability and high fired strength." },
      { title: "Stoneware & Tableware", description: "Incorporated in stoneware and tableware bodies for improved forming characteristics and fired quality." },
      { title: "Technical Ceramics", description: "Used in specialty ceramic applications requiring controlled plasticity and alumino-silicate mineral input." }
    ],
    industries: ["Ceramics", "Sanitaryware", "Technical Ceramics"],
    technicalProfileLabel: "Download Ball Clay Technical Profile",
    inquiryTitle: "Request Ball Clay Supply",
    image: "/images/minerals/ball-clay.png"
  },

  {
    name: "Quartz Powder",
    slug: "quartz-powder",
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
    formula: "SiO2",
    shortDescription: "Finely milled quartz powder supplied for ceramic bodies, glazes, glass, and construction mineral applications.",
    overview: "Quartz powder is a processed, high-purity silica mineral produced by grinding and classifying quartz rock to fine particle sizes. It serves as a critical silica source in ceramic body formulations, glass batches, glaze compositions, and construction-related applications. Its controlled particle size distribution and chemical consistency make it a preferred industrial silica material.",
    sourceDetails: {
      sourceName: "Processed Quartz Supply",
      region: "Multi-Origin",
      country: "India / Turkey / Norway",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in multiple mesh sizes. Supply structured based on SiO2 purity, Fe2O3 level, and particle size specification."
    },
    contactDetails: {
      exportAvailability: "Containerized and bulk supply available subject to mesh and purity requirements"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "SiO2", value: "98–99.5% min (grade dependent)" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "Al2O3", value: "As per confirmed grade" },
      { parameter: "Whiteness", value: "On request" },
      { parameter: "Mesh Size", value: "As per application (100–400 mesh)" },
      { parameter: "Moisture", value: "On request" }
    ],
    applications: [
      { title: "Ceramic Bodies", description: "Used as a silica source in tile, tableware, and technical ceramic body formulations for controlled shrinkage and fired strength." },
      { title: "Glaze Compositions", description: "Incorporated in ceramic glazes for silica contribution and melt behavior control." },
      { title: "Glass Manufacturing", description: "Used as a high-purity silica batch material in selected glass formulations." },
      { title: "Construction Products", description: "Applied in mortars, adhesives, and specialty construction compounds requiring fine silica mineral input." }
    ],
    industries: ["Ceramics", "Glass", "Construction Materials", "Glazes & Enamels"],
    technicalProfileLabel: "Download Quartz Powder Technical Profile",
    inquiryTitle: "Request Quartz Powder Supply",
    image: "/images/minerals/quartz-powder.png"
  },

  {
    name: "Nepheline Syenite",
    slug: "nepheline-syenite",
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
    formula: "Na3KAl4Si4O16",
    shortDescription: "Low-silica feldspathoidal flux mineral supplied for ceramics, glass, and glaze applications requiring low-temperature vitrification.",
    overview: "Nepheline syenite is a naturally occurring feldspathoidal mineral offering higher alumina and alkali flux content with lower silica compared to conventional feldspar. It enables lower firing temperatures, improved vitrification, and enhanced whiteness in ceramic bodies and glazes. It is commercially valued in tiles, tableware, and glass batches where energy efficiency and surface quality are priorities.",
    sourceDetails: {
      sourceName: "Nepheline Syenite Supply Network",
      region: "Multi-Origin",
      country: "Canada / Norway / Russia",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in standard ceramic and glass grades. Supply structured based on chemical analysis and particle size requirements."
    },
    contactDetails: {
      exportAvailability: "Containerized import supply available for ceramic and glass manufacturers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "SiO2", value: "~60%" },
      { parameter: "Al2O3", value: "~23%" },
      { parameter: "Na2O + K2O", value: "~14–15%" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "CaO", value: "On request" },
      { parameter: "Mesh Size", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Tiles & Bodies", description: "Used as a low-temperature fluxing agent in tile and sanitaryware bodies for improved vitrification at reduced firing temperatures." },
      { title: "Tableware & Porcelain", description: "Enhances whiteness and fired strength in fine tableware and porcelain applications." },
      { title: "Glass Manufacturing", description: "Contributes alkali and alumina to glass batches as an energy-efficient feldspar alternative." },
      { title: "Glaze Systems", description: "Used in glaze compositions to improve melt flow and surface development at lower temperatures." }
    ],
    industries: ["Ceramics", "Glass", "Glazes & Enamels", "Sanitaryware"],
    technicalProfileLabel: "Download Nepheline Syenite Technical Profile",
    inquiryTitle: "Request Nepheline Syenite Supply",
    image: "/images/minerals/nepheline-syenite.png"
  },

  {
    name: "Talc",
    slug: "talc",
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
    formula: "Mg3Si4O10(OH)2",
    shortDescription: "Magnesium silicate mineral supplied for ceramics, paints, plastics, rubber, and paper applications.",
    overview: "Talc is a naturally occurring magnesium silicate mineral valued for its softness, chemical inertness, whiteness, and lubrication properties. In ceramics, it acts as a flux and thermal shock modifier. Across industrial applications, it functions as an extender filler, reinforcing agent, and process aid in paints, plastics, rubber, and paper coatings.",
    sourceDetails: {
      sourceName: "Industrial Talc Supply",
      region: "Multi-Origin",
      country: "India / China / Finland / USA",
      dispatchPorts: ["Mundra", "Kandla", "Nhava Sheva"],
      sourcingNote: "Available in ceramic, cosmetic, and industrial grades. Supply structured based on MgO content, brightness, particle size, and end-use requirements."
    },
    contactDetails: {
      exportAvailability: "Regular containerized export available for industrial buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "MgO", value: "As per confirmed grade / assay" },
      { parameter: "SiO2", value: "As per confirmed grade / assay" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "CaO", value: "On request" },
      { parameter: "Brightness", value: "On request" },
      { parameter: "Mesh / D97", value: "As per application" }
    ],
    applications: [
      { title: "Ceramics & Steatite", description: "Used as a flux and thermal shock modifier in ceramic bodies and steatite technical ceramics." },
      { title: "Paints & Coatings", description: "Functions as an extender filler improving rheology, surface finish, and barrier properties." },
      { title: "Plastics & Polymers", description: "Used to improve stiffness, dimensional stability, and surface quality in polymer compounds." },
      { title: "Paper & Rubber", description: "Applicable in paper coatings and rubber compounds for functional mineral filler performance." }
    ],
    industries: ["Ceramics", "Paints & Coatings", "Plastics", "Paper", "Rubber"],
    technicalProfileLabel: "Download Talc Technical Profile",
    inquiryTitle: "Request Talc Supply",
    image: "/images/minerals/talc.png"
  },

  {
    name: "Wollastonite",
    slug: "wollastonite",
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
    formula: "CaSiO3",
    shortDescription: "Calcium silicate mineral supplied for ceramics, plastics, paints, and specialty industrial applications.",
    overview: "Wollastonite is a naturally occurring calcium metasilicate mineral offering a combination of low moisture absorption, low thermal expansion, high brightness, and acicular crystal morphology. In ceramics, it acts as a flux and reduces fired shrinkage. In plastics and coatings, it functions as a reinforcing filler offering superior performance compared to conventional calcium carbonate.",
    sourceDetails: {
      sourceName: "Wollastonite Supply Network",
      region: "Multi-Origin",
      country: "India / China / USA / Finland",
      dispatchPorts: ["Mundra", "Kandla", "Chennai"],
      sourcingNote: "Available in ceramic and industrial grades with varying aspect ratios and particle size distributions."
    },
    contactDetails: {
      exportAvailability: "Containerized export available for ceramic and industrial buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "CaO", value: "~44–47%" },
      { parameter: "SiO2", value: "~50–52%" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "Al2O3", value: "As per confirmed grade" },
      { parameter: "Brightness", value: "On request" },
      { parameter: "Aspect Ratio", value: "On request" }
    ],
    applications: [
      { title: "Ceramic Bodies & Tiles", description: "Reduces fired shrinkage and thermal expansion in ceramic tile and porcelain body formulations." },
      { title: "Plastics & Composites", description: "Used as a reinforcing mineral filler improving stiffness, impact resistance, and surface quality." },
      { title: "Paints & Coatings", description: "Applied as a functional extender in industrial coatings for improved weathering and mechanical performance." },
      { title: "Refractory Coatings", description: "Used in selected refractory and high-temperature coating applications." }
    ],
    industries: ["Ceramics", "Plastics", "Paints & Coatings", "Refractories"],
    technicalProfileLabel: "Download Wollastonite Technical Profile",
    inquiryTitle: "Request Wollastonite Supply",
    image: "/images/minerals/wollastonite.png"
  },

  {
    name: "Bentonite",
    slug: "bentonite",
    category: "Clay & Body Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Clay & Body Minerals",
    formula: "Al2O3·4SiO2·nH2O",
    shortDescription: "Swelling smectite clay supplied for ceramics, foundry, construction, drilling, and industrial binding applications.",
    overview: "Bentonite is a smectite-group clay mineral with exceptional swelling, binding, and rheological properties. It is used in ceramics as a plasticizer and binder, in foundry as a green sand binder, and in civil engineering and drilling as a sealant and viscosifier. Its montmorillonite content governs its swelling index and commercial suitability for different industrial applications.",
    sourceDetails: {
      sourceName: "Industrial Bentonite Supply",
      region: "Multi-Origin",
      country: "India / Turkey / USA / Greece",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in sodium and calcium grades. Supply structured by swelling index, moisture, and end-use application."
    },
    contactDetails: {
      exportAvailability: "Regular containerized and bulk export supply available"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "Montmorillonite Content", value: "As per confirmed grade" },
      { parameter: "Swelling Index", value: "On request (Na or Ca grade)" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Al2O3", value: "As per confirmed grade" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "pH", value: "On request" }
    ],
    applications: [
      { title: "Ceramics & Binding", description: "Used as a plasticizer and binder in ceramic body mixes for improved green strength and workability." },
      { title: "Foundry Sand Binding", description: "Primary green sand binder in ferrous and non-ferrous foundry moulding operations." },
      { title: "Drilling Fluids", description: "Used as a viscosifier and filtration control agent in oil, gas, and water well drilling operations." },
      { title: "Civil Engineering & Sealing", description: "Applied in pond liners, landfill barriers, and geotechnical sealing systems." }
    ],
    industries: ["Ceramics", "Foundry", "Drilling", "Construction Materials"],
    technicalProfileLabel: "Download Bentonite Technical Profile",
    inquiryTitle: "Request Bentonite Supply",
    image: "/images/minerals/bentonite.png"
  },

  // ── Ceramic & Porcelain Industry — Glaze & Surface Minerals ──────────────

  {
    name: "Zirconium Silicate",
    slug: "zirconium-silicate",
    category: "Glaze & Surface Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Glaze & Surface Minerals",
    formula: "ZrSiO4",
    shortDescription: "Zirconium silicate and zircon flour supplied for ceramic opacification, glaze opacifiers, and refractory applications.",
    overview: "Zirconium silicate is a zirconium-bearing mineral widely used in ceramic glazes as an opacifier, and in refractory systems requiring zirconia contribution. Zircon flour — the ultra-fine milled form — provides superior opacity, whiteness, and chemical resistance in glaze and enamel formulations. It is commercially supplied in milled and micronized grades for tiles, sanitaryware, and specialty ceramic applications.",
    sourceDetails: {
      sourceName: "Zirconium Silicate Supply Network",
      region: "Multi-Origin",
      country: "Australia / South Africa / India",
      dispatchPorts: ["Mundra", "Nhava Sheva", "Fremantle"],
      sourcingNote: "Available in standard and premium grades in multiple particle size distributions for glaze and refractory end uses."
    },
    contactDetails: {
      exportAvailability: "Regular containerized supply available for industrial buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "ZrO2 + HfO2", value: "As per confirmed grade / assay" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "TiO2", value: "As per confirmed grade" },
      { parameter: "D50 / D97", value: "As per application" },
      { parameter: "Whiteness", value: "On request" }
    ],
    applications: [
      { title: "Glaze Opacification", description: "Primary opacifier in ceramic tile, sanitaryware, and tableware glazes for high whiteness and opacity." },
      { title: "Enamel & Surface Coatings", description: "Used in porcelain enamel and specialty coating systems requiring chemical and heat resistance." },
      { title: "Refractory Systems", description: "Applicable in zirconia-containing refractory castables and specialty high-temperature materials." },
      { title: "Digital Printing Base", description: "Used in digital ceramic printing bases requiring controlled opacity and surface characteristics." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Refractories", "Sanitaryware"],
    technicalProfileLabel: "Download Zirconium Silicate Technical Profile",
    inquiryTitle: "Request Zirconium Silicate Supply",
    image: "/images/minerals/zirconium-silicate.png"
  },

  {
    name: "Titanium Dioxide & Rutile Sand",
    slug: "titanium-dioxide",
    category: "Glaze & Surface Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Glaze & Surface Minerals",
    formula: "TiO2",
    shortDescription: "Titanium dioxide and natural rutile sand supplied for ceramic glazes, paints, plastics, and specialty opacification applications.",
    overview: "Titanium dioxide is the most powerful white pigment and opacifier used across ceramics, paints, plastics, and coatings. Natural rutile sand is the primary TiO2-bearing ore used in ceramic glazes and as a raw material for synthetic TiO2 production. In ceramics, both rutile sand and processed TiO2 are used to develop opacity, surface texture, and specialty colour effects in glaze and engobe systems.",
    sourceDetails: {
      sourceName: "TiO2 & Rutile Supply Network",
      region: "Multi-Origin",
      country: "Australia / South Africa / India / Norway",
      dispatchPorts: ["Mundra", "Nhava Sheva", "Fremantle"],
      sourcingNote: "Available as natural rutile sand and processed TiO2 grades. Supply structured by TiO2 content, particle size, and end-use specification."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for ceramic and industrial buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "TiO2", value: "As per confirmed grade / assay" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "ZrO2", value: "On request (rutile)" },
      { parameter: "Particle Size / D50", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "Used in glaze systems for opacity development, matte textures, and specialty crystalline effects." },
      { title: "Paints & Coatings", description: "Primary white pigment and opacifier in architectural and industrial coating formulations." },
      { title: "Plastics & Polymers", description: "Incorporated in plastics for whiteness, UV resistance, and opacity." },
      { title: "Ceramic Engobes", description: "Used in engobe compositions applied between ceramic body and glaze for surface quality improvement." }
    ],
    industries: ["Ceramics", "Paints & Coatings", "Plastics", "Glazes & Enamels"],
    technicalProfileLabel: "Download Titanium Dioxide & Rutile Technical Profile",
    inquiryTitle: "Request Titanium Dioxide / Rutile Sand Supply",
    image: "/images/minerals/titanium-dioxide.png"
  },

  {
    name: "Alumina & Calcined Alumina",
    slug: "alumina",
    category: "Glaze & Surface Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Glaze & Surface Minerals",
    formula: "Al2O3",
    shortDescription: "High-purity alumina and calcined alumina supplied for ceramics, refractories, abrasives, and advanced industrial applications.",
    overview: "Alumina (Al2O3) in its calcined and tabular forms is a critical raw material in advanced ceramics, refractories, abrasives, and specialty industrial applications. Calcined alumina, produced by calcining aluminium hydroxide, offers controlled particle size, high purity, and tailored alpha-phase content for demanding end uses. It is widely used in ceramic glazes, refractory castables, grinding media, and electronics-grade ceramics.",
    sourceDetails: {
      sourceName: "Industrial Alumina Supply",
      region: "Multi-Origin",
      country: "India / China / Australia",
      dispatchPorts: ["Mundra", "Kandla", "Nhava Sheva"],
      sourcingNote: "Available in standard, reactive, and tabular calcined grades. Supply structured by Al2O3 purity, alpha content, particle size, and BET surface area."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for industrial and advanced ceramic buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al2O3", value: "99% min (grade dependent)" },
      { parameter: "Na2O", value: "As per confirmed grade" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "Alpha Phase", value: "On request" },
      { parameter: "D50 / BET", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "Used in glaze formulations to improve fired hardness, surface durability, and chemical resistance." },
      { title: "Refractory Castables", description: "Key ingredient in high-alumina refractory castables and monolithic lining systems." },
      { title: "Abrasives & Grinding Media", description: "Used in abrasive grains, grinding media, and technical ceramic wear parts requiring high hardness." },
      { title: "Advanced Ceramics", description: "Applied in electronics, biomedical, and specialty technical ceramic applications requiring high purity." }
    ],
    industries: ["Ceramics", "Refractories", "Abrasives", "Electronics"],
    technicalProfileLabel: "Download Alumina & Calcined Alumina Technical Profile",
    inquiryTitle: "Request Alumina / Calcined Alumina Supply",
    image: "/images/minerals/alumina.png"
  },

  {
    name: "Zinc Oxide",
    slug: "zinc-oxide",
    category: "Glaze & Surface Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Glaze & Surface Minerals",
    formula: "ZnO",
    shortDescription: "Zinc oxide supplied for ceramic glazes, rubber, paints, and specialty industrial formulations.",
    overview: "Zinc oxide is a versatile industrial mineral used in ceramic glazes as a flux and crystallisation promoter, in rubber as a vulcanisation activator, and in paints and coatings as a corrosion inhibitor and UV absorber. In ceramic applications, it develops matte surface textures, improves glaze adhesion, and contributes to the formation of specialty crystalline finishes.",
    sourceDetails: {
      sourceName: "Industrial Zinc Oxide Supply",
      region: "Multi-Origin",
      country: "India / China / Belgium",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in direct and indirect process grades. Supply structured by ZnO purity, particle size, and application requirement."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for ceramic and industrial buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "ZnO", value: "99% min (grade dependent)" },
      { parameter: "Pb", value: "As per confirmed grade" },
      { parameter: "Cd", value: "As per confirmed grade" },
      { parameter: "Particle Size / D50", value: "As per application" },
      { parameter: "Surface Area (BET)", value: "On request" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "Used in glaze compositions as a flux, crystallisation promoter, and matte effect developer." },
      { title: "Rubber Compounding", description: "Functions as a vulcanisation activator in rubber and elastomer formulations." },
      { title: "Paints & Coatings", description: "Used as a corrosion-inhibiting pigment and UV absorber in industrial coatings." },
      { title: "Specialty Ceramics", description: "Applied in varistor, ferrite, and piezoelectric ceramic formulations." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Rubber", "Paints & Coatings"],
    technicalProfileLabel: "Download Zinc Oxide Technical Profile",
    inquiryTitle: "Request Zinc Oxide Supply",
    image: "/images/minerals/zinc-oxide.png"
  },

  {
    name: "Barium Carbonate",
    slug: "barium-carbonate",
    category: "Glaze & Surface Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Glaze & Surface Minerals",
    formula: "BaCO3",
    shortDescription: "Barium carbonate supplied for ceramic glazes, glass, and specialty industrial formulations requiring baria flux.",
    overview: "Barium carbonate is an important ceramic glaze additive that introduces barium oxide (BaO) into glaze melts after decomposition during firing. It acts as a flux at high temperatures, improves glaze smoothness, suppresses crawling defects, and combats the formation of scum on ceramic bodies. In glass, it improves refractive index and chemical durability.",
    sourceDetails: {
      sourceName: "Industrial Barium Carbonate Supply",
      region: "Multi-Origin",
      country: "China / India / Germany",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in ceramic and industrial grades. Supply structured by BaCO3 purity and particle size specification."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for ceramic and glass buyers"
    },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "BaCO3", value: "99% min" },
      { parameter: "BaSO4", value: "As per confirmed grade" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "Particle Size", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "Introduces BaO flux into glaze systems, improving surface smoothness and suppressing crawling and scum defects." },
      { title: "Glass Formulations", description: "Used in specialty glass to improve refractive index, chemical durability, and brilliance." },
      { title: "Ceramic Body Scum Prevention", description: "Applied in ceramic body formulations to neutralise soluble sulphates and prevent surface discolouration." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Glass", "Chemical Processing"],
    technicalProfileLabel: "Download Barium Carbonate Technical Profile",
    inquiryTitle: "Request Barium Carbonate Supply",
    image: "/images/minerals/barium-carbonate.png"
  },

  {
    name: "Strontium Carbonate",
    slug: "strontium-carbonate",
    category: "Glaze & Surface Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Glaze & Surface Minerals",
    formula: "SrCO3",
    shortDescription: "Strontium carbonate supplied for ceramic glazes, specialty glass, ferrites, and electronic ceramic applications.",
    overview: "Strontium carbonate introduces strontium oxide (SrO) into ceramic glaze and glass systems after decomposition during firing. It acts as a mid-to-high temperature flux, improving glaze surface quality, reducing surface tension, and enhancing fired brilliance. It is also commercially important in ferrite magnets and specialty electronic ceramics.",
    sourceDetails: {
      sourceName: "Industrial Strontium Carbonate Supply",
      region: "Multi-Origin",
      country: "China / Germany / Mexico",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in ceramic, electronic, and industrial grades. Supply structured by SrCO3 purity and particle size specification."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for ceramic and electronic buyers"
    },
    packaging: ["25 kg bags", "50 kg bags"],
    qualityParameters: [
      { parameter: "SrCO3", value: "97–99% min (grade dependent)" },
      { parameter: "BaCO3", value: "As per confirmed grade" },
      { parameter: "CaCO3", value: "As per confirmed grade" },
      { parameter: "Particle Size", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "Introduces SrO as a high-temperature flux improving surface quality, flow, and fired brilliance." },
      { title: "Specialty Glass", description: "Used in CRT glass and specialty optics for refractive index and colour improvement." },
      { title: "Ferrite Magnets", description: "Key raw material in strontium ferrite (SrFe12O19) permanent magnets." },
      { title: "Electronic Ceramics", description: "Used in PTC thermistors and piezoelectric ceramic compositions." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Glass", "Electronics"],
    technicalProfileLabel: "Download Strontium Carbonate Technical Profile",
    inquiryTitle: "Request Strontium Carbonate Supply",
    image: "/images/minerals/strontium-carbonate.png"
  },

  {
    name: "Lithium Feldspar",
    slug: "lithium-feldspar",
    category: "Glaze & Surface Mineral",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Glaze & Surface Minerals",
    formula: "LiAlSi2O6 / LiAlSi4O10",
    shortDescription: "Lithium-bearing feldspathoid minerals (spodumene, petalite, lepidolite) supplied for low-expansion ceramics, glazes, and glass-ceramic applications.",
    overview: "Lithium feldspar encompasses lithium-bearing minerals including spodumene, petalite, and lepidolite, which introduce lithia (Li2O) into ceramic and glass systems. Lithia is a powerful flux that significantly lowers melting temperatures and thermal expansion. These minerals are commercially important in low-expansion glass ceramics, fast-fire tile glazes, and specialty porcelain formulations.",
    sourceDetails: {
      sourceName: "Lithium Mineral Supply Network",
      region: "Multi-Origin",
      country: "Australia / Zimbabwe / Brazil / Portugal",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in spodumene, petalite, and lepidolite grades. Supply structured by Li2O content, mineral type, and particle size requirements."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available subject to origin and grade availability"
    },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Li2O", value: "As per confirmed grade / mineral type" },
      { parameter: "Al2O3", value: "As per confirmed grade" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "Particle Size", value: "As per application" }
    ],
    applications: [
      { title: "Low-Expansion Glass Ceramics", description: "Used in glass-ceramic formulations (e.g., cooktops, telescope mirrors) requiring near-zero thermal expansion." },
      { title: "Fast-Fire Ceramic Glazes", description: "Introduced in glaze compositions as a powerful flux for reduced firing temperatures and fast-fire operations." },
      { title: "Specialty Porcelain", description: "Used in dental, technical, and sanitary porcelain bodies requiring controlled expansion and whiteness." },
      { title: "Glass Manufacturing", description: "Contributes lithia flux to glass batches improving melt efficiency and thermal shock resistance." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Glass", "Technical Ceramics"],
    technicalProfileLabel: "Download Lithium Feldspar Technical Profile",
    inquiryTitle: "Request Lithium Feldspar Supply",
    image: "/images/minerals/lithium-feldspar.png"
  },

  // ── Ceramic & Porcelain Industry — Ceramic Glazes & Frits ────────────────

  {
    name: "Ceramic Frits",
    slug: "ceramic-frits",
    category: "Ceramic Glaze & Frit",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Ceramic Glazes & Frits",
    formula: "Custom glass frit composition (silicate-based)",
    shortDescription: "Pre-melted glass frit compositions supplied for ceramic tile glazes, sanitaryware enamels, and specialty ceramic surface finishes.",
    overview: "Ceramic frits are pre-melted and rapidly quenched glass compositions produced to provide controlled, reproducible glaze and enamel properties in ceramic manufacturing. Fritting insolubilises toxic raw materials (lead, barium, boron), stabilises volatile components, and ensures batch consistency. Frits are used as the principal or partial glaze component in tiles, sanitaryware, tableware, and technical ceramic applications.",
    sourceDetails: {
      sourceName: "Ceramic Frit Supply",
      region: "Multi-Origin",
      country: "Spain / Italy / India / Turkey",
      dispatchPorts: ["Mundra", "Nhava Sheva", "Barcelona", "Genoa"],
      sourcingNote: "Available in transparent, opaque, matte, and specialty frit compositions. Supply structured by application, firing temperature range, and thermal expansion coefficient."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for ceramic tile and sanitaryware manufacturers"
    },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Composition Type", value: "As per frit specification" },
      { parameter: "Firing Temperature", value: "As per application" },
      { parameter: "Thermal Expansion", value: "On request" },
      { parameter: "Particle Size", value: "As per application" },
      { parameter: "Opacity / Transparency", value: "As per specification" }
    ],
    applications: [
      { title: "Tile Glaze Systems", description: "Used as the principal glaze component in floor tiles, wall tiles, and porcelain slab production." },
      { title: "Sanitaryware Enamels", description: "Provides controlled enamel surface on vitreous china and sanitaryware bodies." },
      { title: "Tableware & Artware", description: "Applied in fine tableware, decorative ceramics, and artware glaze formulations." },
      { title: "Specialty Surface Finishes", description: "Used in matte, metallic, crystalline, and specialty effect glaze systems." }
    ],
    industries: ["Ceramics", "Sanitaryware", "Glazes & Enamels", "Tiles"],
    technicalProfileLabel: "Download Ceramic Frits Technical Profile",
    inquiryTitle: "Request Ceramic Frits Supply",
    image: "/images/minerals/ceramic-frits.png"
  },

  {
    name: "Digital Printing Inks",
    slug: "digital-printing-inks",
    category: "Ceramic Glaze & Frit",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Ceramic Glazes & Frits",
    formula: "Pigment-based suspension (inorganic ceramic pigments in carrier)",
    shortDescription: "Inkjet ceramic inks supplied for digital decoration of tiles, slabs, sanitaryware, and technical ceramic surfaces.",
    overview: "Ceramic digital printing inks are precision-engineered suspensions of inorganic ceramic pigments in controlled-viscosity carriers, designed for inkjet printing on ceramic surfaces. They enable photorealistic surface decoration, wood and stone effect printing, and complex design reproduction on tiles, porcelain slabs, and sanitary ware. Pigments are thermally stable and maintain colour integrity through high-temperature firing cycles.",
    sourceDetails: {
      sourceName: "Ceramic Digital Ink Supply",
      region: "Multi-Origin",
      country: "Spain / Italy / Germany",
      dispatchPorts: ["Barcelona", "Genoa", "Mundra"],
      sourcingNote: "Available in full colour ranges and specialty effect inks. Supply structured by colour specification, firing temperature range, and printer compatibility."
    },
    contactDetails: {
      exportAvailability: "Supply available for tile manufacturers and ceramic decoration operations"
    },
    packaging: ["5 kg containers", "25 kg drums", "IBC containers"],
    qualityParameters: [
      { parameter: "Pigment Type", value: "Inorganic ceramic pigment" },
      { parameter: "Viscosity", value: "As per printer specification" },
      { parameter: "Particle Size", value: "Submicron (as per specification)" },
      { parameter: "Firing Temperature", value: "As per application" },
      { parameter: "Colour Gamut", value: "CMYK + specialty colours available" }
    ],
    applications: [
      { title: "Ceramic Tile Decoration", description: "Used in inkjet printers to produce high-resolution wood, stone, and design effects on ceramic tile surfaces." },
      { title: "Porcelain Slab Printing", description: "Applied in large-format porcelain slab production for architectural surface decoration." },
      { title: "Sanitaryware Decoration", description: "Used for decorative printing applications on sanitary porcelain surfaces." },
      { title: "Technical Ceramic Marking", description: "Applicable in industrial and technical ceramic surface marking and identification." }
    ],
    industries: ["Ceramics", "Tiles", "Sanitaryware", "Technical Ceramics"],
    technicalProfileLabel: "Download Digital Printing Inks Technical Profile",
    inquiryTitle: "Request Digital Printing Inks Supply",
    image: "/images/minerals/digital-printing-inks.png"
  },

  {
    name: "Engobes",
    slug: "engobes",
    category: "Ceramic Glaze & Frit",
    industryGroup: "Ceramic & Porcelain Industry",
    subCategory: "Ceramic Glazes & Frits",
    formula: "Ceramic slip composition (clay + minerals + oxides)",
    shortDescription: "Ceramic engobe slips supplied as intermediate surface coatings for tiles, bricks, and ceramic ware to improve colour, texture, and glaze adhesion.",
    overview: "Engobes are ceramic slip coatings applied between the ceramic body and the glaze layer to mask body colour, improve surface uniformity, enhance glaze adhesion, and provide a controlled intermediate ceramic layer. They are formulated from clays, quartz, feldspar, and colouring oxides and must be thermally compatible with both the ceramic body and the applied glaze during firing.",
    sourceDetails: {
      sourceName: "Ceramic Engobe Supply",
      region: "Multi-Origin",
      country: "Spain / Italy / India / Turkey",
      dispatchPorts: ["Barcelona", "Mundra"],
      sourcingNote: "Available in white base and coloured engobe formulations. Supply structured by application substrate, firing temperature, and glaze compatibility."
    },
    contactDetails: {
      exportAvailability: "Supply available for tile and ceramic manufacturing operations"
    },
    packaging: ["25 kg bags (powder)", "Liquid slip on request"],
    qualityParameters: [
      { parameter: "Composition", value: "Clay + feldspar + quartz + additives" },
      { parameter: "Firing Temperature", value: "As per application" },
      { parameter: "Thermal Expansion", value: "Compatible with glaze system" },
      { parameter: "Whiteness / Colour", value: "As per specification" }
    ],
    applications: [
      { title: "Ceramic Tile Manufacturing", description: "Applied between body and glaze to mask body colour and improve surface uniformity in tile production." },
      { title: "Sanitaryware", description: "Used as an intermediate layer on sanitary ware bodies for improved fired surface quality." },
      { title: "Facade & Brick Products", description: "Applied to extruded brick and facade ceramic surfaces for decorative and functional finish." },
      { title: "Technical Ceramics", description: "Used in controlled ceramic systems requiring specific surface dielectric or mechanical properties." }
    ],
    industries: ["Ceramics", "Tiles", "Sanitaryware", "Construction Materials"],
    technicalProfileLabel: "Download Engobes Technical Profile",
    inquiryTitle: "Request Engobes Supply",
    image: "/images/minerals/engobes.png"
  },

  // ── Refractory & Steel Industry — Core Refractory Minerals ───────────────

  {
    name: "Fused Magnesia",
    slug: "fused-magnesia",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "MgO",
    shortDescription: "High-density fused magnesia supplied for premium refractory bricks, steel furnace linings, and electrical insulation applications.",
    overview: "Fused magnesia (FM) is produced by arc-fusion of magnesite or caustic calcined magnesia at temperatures exceeding 2800°C, resulting in large periclase crystals of exceptional purity, density, and thermal stability. It offers superior performance to dead burnt magnesite in applications demanding the highest MgO purity, electrical resistivity, and resistance to corrosion by basic slags. It is used in premium steel refractories, induction furnace linings, and high-temperature electrical insulation.",
    sourceDetails: {
      sourceName: "Fused Magnesia Supply Network",
      region: "Multi-Origin",
      country: "China / Austria / India",
      dispatchPorts: ["Tianjin", "Qingdao", "Mundra"],
      sourcingNote: "Available in multiple purity grades (97–99.9% MgO) and grain sizes. Supply structured for refractory manufacturers and electrical insulation producers."
    },
    contactDetails: {
      exportAvailability: "Bulk and containerized supply available"
    },
    packaging: ["Bulk vessel", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "MgO", value: "97–99.9% min (grade dependent)" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "CaO", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "Bulk Density", value: "3.40–3.58 g/cc (grade dependent)" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "Premium Steel Refractories", description: "Used in magnesia-carbon bricks and castables for EAF, BOF, and ladle linings requiring maximum performance." },
      { title: "Induction Furnace Linings", description: "Applied in coreless induction furnace linings for non-ferrous and steel melting operations." },
      { title: "Electrical Insulation", description: "Used as a high-purity MgO filler in mineral-insulated cables and heating elements." },
      { title: "Non-Ferrous Smelting", description: "Applied in copper, nickel, and platinum smelting furnace refractories." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Electrical Insulation", "Non-Ferrous Metals"],
    technicalProfileLabel: "Download Fused Magnesia Technical Profile",
    inquiryTitle: "Request Fused Magnesia Supply",
    image: "/images/minerals/fused-magnesia.png"
  },

  {
    name: "Chromite Sand",
    slug: "chromite-sand",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "FeCr2O4",
    shortDescription: "Angular chromite sand supplied for foundry moulding, refractory applications, and specialty casting operations.",
    overview: "Chromite sand is a processed chromite mineral in angular sand form, distinct from metallurgical chrome ore in particle size, shape, and end-use. It is primarily used in foundry moulding and core-making as a chemically stable, high-density facing sand that prevents metal penetration and veining defects. In refractories, it is used in chrome-bearing brick formulations and specialty linings.",
    sourceDetails: {
      sourceName: "Chromite Sand Supply",
      region: "Multi-Origin",
      country: "South Africa / Kazakhstan / India",
      dispatchPorts: ["Durban", "Mundra", "Nhava Sheva"],
      sourcingNote: "Available in standard foundry and refractory grades. Supply structured by Cr2O3 content, particle sizing, and AFS grain fineness."
    },
    contactDetails: {
      exportAvailability: "Regular containerized and bulk supply available"
    },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "Cr2O3", value: "As per confirmed grade / assay" },
      { parameter: "Fe2O3 (total)", value: "As per confirmed grade" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Al2O3", value: "On request" },
      { parameter: "AFS Grain Fineness", value: "As per application" },
      { parameter: "Size Distribution", value: "Customized on request" }
    ],
    applications: [
      { title: "Foundry Moulding", description: "Used as facing and backing sand in ferrous and non-ferrous casting moulds to prevent metal penetration and surface defects." },
      { title: "Core Making", description: "Applied in core-making operations for precision casting applications requiring dimensional accuracy." },
      { title: "Refractory Linings", description: "Used in chrome-bearing refractory bricks and monolithic linings for selected high-temperature applications." },
      { title: "Steel Casting", description: "Used as mould facing sand in steel casting operations where veining resistance is critical." }
    ],
    industries: ["Foundry", "Steel & Metallurgy", "Refractories"],
    technicalProfileLabel: "Download Chromite Sand Technical Profile",
    inquiryTitle: "Request Chromite Sand Supply",
    image: "/images/minerals/chromite-sand.png"
  },

  {
    name: "Graphite",
    slug: "graphite",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "C",
    shortDescription: "Natural and synthetic graphite supplied for refractory bricks, electrodes, lubricants, and advanced energy applications.",
    overview: "Graphite is a crystalline form of carbon with exceptional thermal conductivity, lubricity, chemical inertness, and electrical conductivity. In the refractory industry, it is a critical component in magnesia-carbon bricks used in steelmaking furnaces. Natural flake graphite is used in lubricants, foundry coatings, and batteries; synthetic graphite in electrodes, EDM, and advanced applications.",
    sourceDetails: {
      sourceName: "Industrial Graphite Supply",
      region: "Multi-Origin",
      country: "China / India / Mozambique / Canada",
      dispatchPorts: ["Qingdao", "Mundra", "Nacala"],
      sourcingNote: "Available in natural flake, amorphous, and synthetic grades. Supply structured by carbon content, flake size, and end-use specification."
    },
    contactDetails: {
      exportAvailability: "Containerized and bulk supply available"
    },
    packaging: ["25 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "Fixed Carbon", value: "As per confirmed grade (85–99%)" },
      { parameter: "Ash", value: "As per confirmed grade" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "Sulphur", value: "On request" },
      { parameter: "Flake Size", value: "As per application (natural flake)" }
    ],
    applications: [
      { title: "Magnesia-Carbon Bricks", description: "Key ingredient in MgO-C refractory bricks used in steel converter, EAF, and ladle linings." },
      { title: "Lubricants", description: "Used as a dry lubricant and lubricant additive in high-temperature and extreme-pressure applications." },
      { title: "Foundry Coatings", description: "Applied in foundry mould coatings and release agents for improved casting surface quality." },
      { title: "Battery Anode Materials", description: "Natural and synthetic graphite used in lithium-ion battery anode formulations." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Lubricants", "Batteries", "Foundry"],
    technicalProfileLabel: "Download Graphite Technical Profile",
    inquiryTitle: "Request Graphite Supply",
    image: "/images/minerals/graphite.png"
  },

  {
    name: "Brown Fused Alumina",
    slug: "brown-fused-alumina",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "Al2O3",
    shortDescription: "Brown fused alumina supplied for abrasives, refractory castables, surface blasting, and wear-resistant ceramic applications.",
    overview: "Brown fused alumina (BFA) is produced by fusing calcined bauxite in an electric arc furnace at temperatures above 2000°C, yielding a dense, hard, and tough alpha-alumina product. Its combination of hardness, toughness, and chemical stability makes it ideal for bonded and coated abrasives, refractory castables, and surface preparation applications. BFA is one of the most widely used synthetic abrasive materials worldwide.",
    sourceDetails: {
      sourceName: "Brown Fused Alumina Supply",
      region: "Multi-Origin",
      country: "China / India / Russia",
      dispatchPorts: ["Qingdao", "Tianjin", "Mundra"],
      sourcingNote: "Available in multiple grit sizes per FEPA/ANSI standards and refractory grain grades. Supply structured by Al2O3 content, hardness, and application requirement."
    },
    contactDetails: {
      exportAvailability: "Containerized and bulk supply available for abrasive and refractory buyers"
    },
    packaging: ["25 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al2O3", value: "94–97% min (grade dependent)" },
      { parameter: "TiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Grit Size", value: "F4–F220 / P12–P220 / macro and micro grits" },
      { parameter: "Hardness (Mohs)", value: "9" }
    ],
    applications: [
      { title: "Bonded & Coated Abrasives", description: "Used in grinding wheels, sandpaper, abrasive discs, and cutting tools for metal and surface grinding." },
      { title: "Refractory Castables", description: "Key aggregate in high-alumina refractory castables for steel, cement, and petrochemical furnaces." },
      { title: "Surface Preparation", description: "Used in blasting media applications for metallic and industrial surface cleaning and profiling." },
      { title: "Wear-Resistant Ceramics", description: "Applied in ceramic wear tiles, lining systems, and impact-resistant components." }
    ],
    industries: ["Abrasives", "Refractories", "Steel & Metallurgy", "Surface Treatment"],
    technicalProfileLabel: "Download Brown Fused Alumina Technical Profile",
    inquiryTitle: "Request Brown Fused Alumina Supply",
    image: "/images/minerals/brown-fused-alumina.png"
  },

  {
    name: "White Fused Alumina",
    slug: "white-fused-alumina",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "Al2O3",
    shortDescription: "High-purity white fused alumina supplied for precision abrasives, advanced refractories, ceramics, and electronics-grade applications.",
    overview: "White fused alumina (WFA) is produced by fusing high-purity calcined alumina in an electric arc furnace, yielding a product of >99% Al2O3 purity with exceptional hardness, friability, and chemical purity. Compared to brown fused alumina, WFA has higher purity, greater friability, and is preferred in precision grinding, advanced refractories, electronics ceramics, and pharmaceutical polishing applications.",
    sourceDetails: {
      sourceName: "White Fused Alumina Supply",
      region: "Multi-Origin",
      country: "China / India / Austria",
      dispatchPorts: ["Qingdao", "Tianjin", "Mundra"],
      sourcingNote: "Available in standard and premium purity grades across full FEPA grit range. Supply structured by purity, grit size, and end-use specification."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for abrasive and advanced ceramic buyers"
    },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al2O3", value: "99% min" },
      { parameter: "Na2O", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Grit Size", value: "F4–F1200 / micro grits on request" },
      { parameter: "Hardness (Mohs)", value: "9" }
    ],
    applications: [
      { title: "Precision Grinding", description: "Used in precision bonded abrasives for tool and cutter grinding, high-finish surface grinding operations." },
      { title: "Advanced Refractory Castables", description: "Applied in ultra-high purity refractory systems for petrochemical and specialty metallurgical furnaces." },
      { title: "Advanced Ceramics & Electronics", description: "Used in high-purity ceramic substrates, electronic packaging, and semiconductor process components." },
      { title: "Lapping & Polishing", description: "Applied in precision lapping and polishing of optical, electronic, and precision mechanical components." }
    ],
    industries: ["Abrasives", "Refractories", "Electronics", "Technical Ceramics"],
    technicalProfileLabel: "Download White Fused Alumina Technical Profile",
    inquiryTitle: "Request White Fused Alumina Supply",
    image: "/images/minerals/white-fused-alumina.png"
  },

  {
    name: "Silicon Carbide",
    slug: "silicon-carbide",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "SiC",
    shortDescription: "Silicon carbide supplied for refractories, abrasives, kiln furniture, metallurgical de-oxidation, and advanced ceramic applications.",
    overview: "Silicon carbide is a synthetic mineral combining silicon and carbon, offering exceptional hardness, thermal conductivity, chemical resistance, and high-temperature stability. In refractories, SiC-bearing linings provide superior abrasion resistance and thermal shock performance. As an abrasive, it is used for cutting non-ferrous metals and hard ceramics. In metallurgy, it serves as a de-oxidiser and carburiser in iron and steel production.",
    sourceDetails: {
      sourceName: "Industrial Silicon Carbide Supply",
      region: "Multi-Origin",
      country: "China / India / Norway",
      dispatchPorts: ["Qingdao", "Mundra", "Nhava Sheva"],
      sourcingNote: "Available in black and green grades across multiple grit and granular sizes. Supply structured by SiC content, application, and purity requirement."
    },
    contactDetails: {
      exportAvailability: "Containerized and bulk supply available"
    },
    packaging: ["25 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "SiC", value: "88–98% min (grade dependent)" },
      { parameter: "Free Carbon", value: "As per confirmed grade" },
      { parameter: "Free Si", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "Grit / Granular Size", value: "As per application" }
    ],
    applications: [
      { title: "Refractory Linings", description: "Used in SiC-containing refractory bricks and castables for furnaces, kilns, and incinerators requiring abrasion and thermal shock resistance." },
      { title: "Abrasive Products", description: "Used in bonded and coated abrasives for grinding hard and non-ferrous materials including cemented carbide and ceramics." },
      { title: "Kiln Furniture", description: "Applied in SiC kiln furniture (shelves, posts, setters) for ceramic firing operations." },
      { title: "Metallurgical De-oxidation", description: "Used as a de-oxidiser, carburiser, and silicon addition in iron, steel, and ferroalloy production." }
    ],
    industries: ["Refractories", "Abrasives", "Ceramics", "Steel & Metallurgy"],
    technicalProfileLabel: "Download Silicon Carbide Technical Profile",
    inquiryTitle: "Request Silicon Carbide Supply",
    image: "/images/minerals/silicon-carbide.png"
  },

  {
    name: "Mullite",
    slug: "mullite",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "3Al2O3·2SiO2",
    shortDescription: "Synthetic and fused mullite supplied for high-performance refractories, kiln furniture, and advanced technical ceramics.",
    overview: "Mullite is a stable alumino-silicate phase (3Al2O3·2SiO2) with outstanding high-temperature strength, low thermal expansion, excellent thermal shock resistance, and chemical stability. Both fused and sintered mullite grades are used in premium refractories for glass, ceramic, and petrochemical furnaces, as well as in kiln furniture and advanced technical ceramics requiring dimensional stability at high temperatures.",
    sourceDetails: {
      sourceName: "Mullite Supply Network",
      region: "Multi-Origin",
      country: "China / Germany / India",
      dispatchPorts: ["Qingdao", "Mundra"],
      sourcingNote: "Available in sintered and fused grades with varying Al2O3 content. Supply structured by density, chemical analysis, and grain size specification."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for refractory and ceramic buyers"
    },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al2O3", value: "60–77% (grade dependent)" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "TiO2", value: "As per confirmed grade" },
      { parameter: "Bulk Density", value: "On request" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "High-Performance Refractories", description: "Used in mullite bricks, castables, and monolithics for glass furnaces, ceramic kilns, and petrochemical reactors." },
      { title: "Kiln Furniture", description: "Applied in kiln setters, batts, and furniture requiring dimensional stability and thermal shock resistance at high temperatures." },
      { title: "Advanced Technical Ceramics", description: "Used in engineering ceramic components requiring low thermal expansion and high-temperature mechanical stability." },
      { title: "Aerospace & Defense", description: "Applied in selected high-temperature structural ceramic applications." }
    ],
    industries: ["Refractories", "Ceramics", "Glass", "Technical Ceramics"],
    technicalProfileLabel: "Download Mullite Technical Profile",
    inquiryTitle: "Request Mullite Supply",
    image: "/images/minerals/mullite.png"
  },

  {
    name: "Andalusite",
    slug: "andalusite",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "Al2SiO5",
    shortDescription: "Natural andalusite supplied for high-performance refractories, steel ladles, and kilns requiring thermal shock resistance and dimensional stability.",
    overview: "Andalusite is a naturally occurring alumino-silicate polymorph (Al2SiO5) that converts to mullite and silica glass upon heating above ~1350°C, generating a controlled volume expansion that minimises porosity and improves joint integrity in refractory products. It is prized in the refractory industry for its low impurity level, self-sintering behaviour, and superior performance in steel ladles, blast furnace troughs, and ceramic kilns.",
    sourceDetails: {
      sourceName: "Andalusite Supply Network",
      region: "Multi-Origin",
      country: "South Africa / France / China",
      dispatchPorts: ["Durban", "Mundra", "Le Havre"],
      sourcingNote: "Available in calcined and raw grades. Supply structured by Al2O3 content, grain size, and refractory application requirements."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for refractory manufacturers"
    },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al2O3", value: "57–60%" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "TiO2", value: "As per confirmed grade" },
      { parameter: "LOI", value: "On request" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "Steel Ladle Refractories", description: "Used in steel ladle brick formulations for superior thermal shock resistance and slag corrosion resistance." },
      { title: "Blast Furnace Troughs", description: "Applied in cast house and trough refractories for blast furnace operations." },
      { title: "Ceramic Kiln Linings", description: "Used in ceramic and glass kiln linings where thermal cycling resistance is required." },
      { title: "Monolithic Refractory Systems", description: "Incorporated in castable and gunning mix formulations for high-performance monolithic applications." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Glass", "Ceramics"],
    technicalProfileLabel: "Download Andalusite Technical Profile",
    inquiryTitle: "Request Andalusite Supply",
    image: "/images/minerals/andalusite.png"
  },

  {
    name: "Kyanite",
    slug: "kyanite",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "Al2SiO5",
    shortDescription: "Natural kyanite supplied for refractories, mullite synthesis, and high-temperature ceramic applications requiring thermal expansion control.",
    overview: "Kyanite is a naturally occurring alumino-silicate polymorph (Al2SiO5) that, like andalusite and sillimanite, converts to mullite upon high-temperature calcination. Calcined kyanite undergoes controlled expansion and forms high-purity mullite, making it highly valued in refractory formulations, precision investment casting shells, and specialty ceramic systems requiring low shrinkage and high refractoriness.",
    sourceDetails: {
      sourceName: "Kyanite Supply Network",
      region: "Multi-Origin",
      country: "USA / India / Zimbabwe / Brazil",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in raw and calcined grades. Supply structured by Al2O3 content, conversion characteristics, and application requirements."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for refractory and ceramic buyers"
    },
    packaging: ["1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "Al2O3", value: "57–63% (grade dependent)" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "TiO2", value: "On request" },
      { parameter: "LOI", value: "On request" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "Refractory Products", description: "Used in refractory bricks and monolithics where mullite formation and volume stability during service are required." },
      { title: "Investment Casting Shells", description: "Applied in precision investment casting shell systems requiring dimensional accuracy and refractoriness." },
      { title: "Mullite Synthesis", description: "Used as a feedstock for mullite production in refractories and technical ceramics." },
      { title: "Ceramic Bodies", description: "Incorporated in specialty high-temperature ceramic formulations requiring controlled expansion." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Ceramics", "Technical Ceramics"],
    technicalProfileLabel: "Download Kyanite Technical Profile",
    inquiryTitle: "Request Kyanite Supply",
    image: "/images/minerals/kyanite.png"
  },

  {
    name: "Sillimanite",
    slug: "sillimanite",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "Al2SiO5",
    shortDescription: "Natural sillimanite supplied for high-alumina refractories, specialty ceramics, and high-temperature industrial applications.",
    overview: "Sillimanite is the third naturally occurring polymorph of Al2SiO5, alongside kyanite and andalusite. It is found in metamorphic rocks and offers similar high-temperature conversion to mullite with controlled expansion behaviour. It is used in high-alumina refractory bricks, steel industry refractories, specialty ceramics, and selected glass industry applications requiring stable alumino-silicate mineral input.",
    sourceDetails: {
      sourceName: "Sillimanite Supply Network",
      region: "Multi-Origin",
      country: "India / South Africa / Madagascar",
      dispatchPorts: ["Mundra", "Kandla", "Durban"],
      sourcingNote: "Available in raw and processed grades. Supply structured by Al2O3 content, grade purity, and application specification."
    },
    contactDetails: {
      exportAvailability: "Containerized supply available for refractory and ceramic buyers"
    },
    packaging: ["1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "Al2O3", value: "57–63% (grade dependent)" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "TiO2", value: "On request" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "High-Alumina Refractory Bricks", description: "Used in the manufacture of high-alumina bricks for steel, glass, and cement industry furnaces." },
      { title: "Steel Industry Refractories", description: "Applied in tundish linings, ladle bricks, and other steel plant refractory systems." },
      { title: "Specialty Ceramics", description: "Incorporated in specialty high-temperature ceramic bodies requiring stable alumino-silicate phase." },
      { title: "Glass Industry Linings", description: "Used in selected glass furnace refractory applications." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Ceramics", "Glass"],
    technicalProfileLabel: "Download Sillimanite Technical Profile",
    inquiryTitle: "Request Sillimanite Supply",
    image: "/images/minerals/sillimanite.png"
  },

  {
    name: "Chamotte",
    slug: "chamotte",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "Fired fireclay aggregate (Al2O3·SiO2 variable)",
    shortDescription: "Calcined fireclay chamotte supplied for refractory bricks, monolithic linings, and ceramic body formulations requiring grog aggregate.",
    overview: "Chamotte is produced by calcining or firing fireclay or kaolin at high temperatures to produce a stable, low-shrinkage refractory aggregate (grog). It is a fundamental raw material in refractory brick manufacture, monolithic refractory systems, and ceramic body formulations where reduction of shrinkage and thermal shock resistance are required. The Al2O3 content governs the classification and temperature rating of the chamotte grade.",
    sourceDetails: {
      sourceName: "Industrial Chamotte Supply",
      region: "Multi-Origin",
      country: "China / India / Poland / Germany",
      dispatchPorts: ["Qingdao", "Mundra", "Hamburg"],
      sourcingNote: "Available in standard and high-alumina grades. Supply structured by Al2O3 content, grain size, and refractory classification."
    },
    contactDetails: {
      exportAvailability: "Containerized and bulk supply available"
    },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al2O3", value: "30–45% (standard) / 45–55% (HA grade)" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "LOI", value: "<1% (calcined)" },
      { parameter: "Grain Size", value: "As per application (0–1, 1–3, 3–6 mm etc.)" }
    ],
    applications: [
      { title: "Refractory Brick Manufacturing", description: "Used as the primary aggregate in fireclay and high-alumina refractory brick formulations." },
      { title: "Monolithic Refractory Systems", description: "Incorporated in castables, ramming mixes, and gunning materials as graded refractory aggregate." },
      { title: "Ceramic Body Grog", description: "Used in ceramic tile, sanitaryware, and stoneware body formulations as grog for shrinkage control." },
      { title: "Kiln Furniture", description: "Applied in kiln furniture manufacture for thermal shock resistance and dimensional stability." }
    ],
    industries: ["Refractories", "Ceramics", "Steel & Metallurgy"],
    technicalProfileLabel: "Download Chamotte Technical Profile",
    inquiryTitle: "Request Chamotte Supply",
    image: "/images/minerals/chamotte.png"
  },

  {
    name: "Fire Clay",
    slug: "fire-clay",
    category: "Refractory Raw Material",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Core Refractory Minerals",
    formula: "Al2O3·2SiO2·2H2O (variable composition)",
    shortDescription: "Natural refractory clay supplied for fireclay bricks, refractory mortars, monolithic linings, and ceramic body applications.",
    overview: "Fire clay is a naturally occurring refractory clay mineral with sufficient alumina content to withstand high temperatures in industrial furnace and kiln environments. It serves as a plastic binder and filler in fireclay refractory products, and as a raw material for chamotte production. Selection is based on refractoriness under load (RUL), alumina content, plasticity, and mineral purity.",
    sourceDetails: {
      sourceName: "Refractory Fire Clay Supply",
      region: "Multi-Origin",
      country: "India / China / Ukraine / Poland",
      dispatchPorts: ["Mundra", "Kandla", "Qingdao"],
      sourcingNote: "Available in lump, crushed, and washed grades. Supply structured by Al2O3 content, RUL, and plasticity requirements."
    },
    contactDetails: {
      exportAvailability: "Containerized and bulk supply available for refractory manufacturers"
    },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al2O3", value: "25–45% (grade dependent)" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "As per confirmed grade" },
      { parameter: "TiO2", value: "As per confirmed grade" },
      { parameter: "LOI", value: "As per confirmed grade" },
      { parameter: "PCE (Pyrometric Cone Equiv.)", value: "On request" }
    ],
    applications: [
      { title: "Fireclay Refractory Bricks", description: "Primary raw material in fireclay brick manufacture for industrial furnaces and kilns." },
      { title: "Refractory Mortars & Castables", description: "Used as a plastic binder and filler component in refractory mortar and castable formulations." },
      { title: "Chamotte Production", description: "Calcined to produce chamotte aggregate for use in refractory and ceramic applications." },
      { title: "Ceramic Body Applications", description: "Used in selected ceramic body formulations requiring moderate refractoriness and plasticity." }
    ],
    industries: ["Refractories", "Ceramics", "Steel & Metallurgy"],
    technicalProfileLabel: "Download Fire Clay Technical Profile",
    inquiryTitle: "Request Fire Clay Supply",
    image: "/images/minerals/fire-clay.png"
  },

  // ── Refractory & Steel Industry — Steel & Foundry Raw Materials ──────────

  {
    name: "Ferro Manganese",
    slug: "ferro-manganese",
    category: "Ferroalloy",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Steel & Foundry Raw Materials",
    formula: "FeMn",
    shortDescription: "Ferro manganese supplied for steelmaking deoxidation, alloying, and sulphur control in carbon and alloy steel production.",
    overview: "Ferro manganese is a ferroalloy containing manganese and iron, commercially produced in high-carbon (HC), medium-carbon (MC), and low-carbon (LC) grades. It is a primary alloying addition in steelmaking, providing manganese for deoxidation, desulphurisation, and alloy composition control. Manganese improves tensile strength, hardenability, and wear resistance in carbon and alloy steel grades.",
    sourceDetails: {
      sourceName: "Ferro Manganese Supply",
      region: "Multi-Origin",
      country: "China / South Africa / India / Norway",
      dispatchPorts: ["Qingdao", "Durban", "Mundra"],
      sourcingNote: "Available in HC, MC, and LC grades. Supply structured by Mn content, carbon level, and sizing specification."
    },
    contactDetails: {
      exportAvailability: "Bulk and containerized supply available for steelmakers and foundries"
    },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Mn", value: "65–80% (grade dependent)" },
      { parameter: "C", value: "HC: 6–8% / MC: 1–2% / LC: <0.5%" },
      { parameter: "Si", value: "As per confirmed grade" },
      { parameter: "P", value: "As per confirmed grade" },
      { parameter: "S", value: "On request" },
      { parameter: "Size", value: "Lumpy / screened as required" }
    ],
    applications: [
      { title: "Steel Deoxidation", description: "Added to steel as a deoxidiser to remove dissolved oxygen and improve steel cleanliness." },
      { title: "Alloy Composition Control", description: "Used to achieve target manganese content in carbon, structural, and alloy steel grades." },
      { title: "Desulphurisation", description: "Reacts with sulphur to form MnS, improving steel workability and reducing hot-shortness." },
      { title: "Foundry & Cast Iron", description: "Used in foundry operations for manganese alloying of cast iron and steel castings." }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys", "Foundry"],
    technicalProfileLabel: "Download Ferro Manganese Technical Profile",
    inquiryTitle: "Request Ferro Manganese Supply",
    image: "/images/minerals/ferro-manganese.png"
  },

  {
    name: "Silico Manganese",
    slug: "silico-manganese",
    category: "Ferroalloy",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Steel & Foundry Raw Materials",
    formula: "SiMn",
    shortDescription: "Silico manganese supplied as a combined silicon-manganese deoxidiser and alloying agent for steelmaking operations.",
    overview: "Silico manganese is a ferroalloy combining manganese, silicon, and iron, produced by smelting manganese ore with quartzite and coke in submerged arc furnaces. It is widely used in steelmaking as a combined deoxidant and alloying agent, contributing both manganese and silicon to the steel heat simultaneously. Its cost efficiency and dual alloying function make it one of the most commonly used ferroalloys globally.",
    sourceDetails: {
      sourceName: "Silico Manganese Supply",
      region: "Multi-Origin",
      country: "India / China / South Africa / Ukraine",
      dispatchPorts: ["Mundra", "Qingdao", "Durban"],
      sourcingNote: "Available in standard and high manganese grades. Supply structured by Mn, Si, and C content with customer sizing specification."
    },
    contactDetails: {
      exportAvailability: "Bulk and containerized supply available"
    },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Mn", value: "60–70% (grade dependent)" },
      { parameter: "Si", value: "14–20% (grade dependent)" },
      { parameter: "C", value: "As per confirmed grade" },
      { parameter: "P", value: "As per confirmed grade" },
      { parameter: "S", value: "On request" },
      { parameter: "Size", value: "Lumpy / screened as required" }
    ],
    applications: [
      { title: "Steelmaking Deoxidation", description: "Used as a combined Si-Mn deoxidant added during tapping or ladle metallurgy to remove dissolved oxygen." },
      { title: "Silicon & Manganese Alloying", description: "Provides both Si and Mn alloying additions to carbon and structural steel grades in a single addition." },
      { title: "Low-Carbon Steel Production", description: "Applied in carbon steel and HSLA steel production where balanced Si-Mn alloying is required." },
      { title: "Foundry Operations", description: "Used in selected foundry alloy additions for cast steel and ductile iron production." }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys"],
    technicalProfileLabel: "Download Silico Manganese Technical Profile",
    inquiryTitle: "Request Silico Manganese Supply",
    image: "/images/minerals/silico-manganese.png"
  },

  {
    name: "Ferro Chrome",
    slug: "ferro-chrome",
    category: "Ferroalloy",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Steel & Foundry Raw Materials",
    formula: "FeCr",
    shortDescription: "Ferro chrome supplied for stainless steel production, chrome alloying, and specialty steel applications.",
    overview: "Ferro chrome is a ferroalloy of chromium and iron, produced primarily by smelting chrome ore with coke in electric arc or submerged arc furnaces. It is the primary source of chromium addition in stainless steel production, providing corrosion resistance, hardness, and heat resistance. High-carbon ferrochrome (HCFeCr) is used in stainless steel, while charge chrome is used in the integrated melting route.",
    sourceDetails: {
      sourceName: "Ferro Chrome Supply Network",
      region: "Multi-Origin",
      country: "South Africa / India / Kazakhstan / Zimbabwe",
      dispatchPorts: ["Durban", "Mundra", "Aktau"],
      sourcingNote: "Available in charge chrome, high-carbon, and low-carbon grades. Supply structured by Cr content, carbon level, and sizing."
    },
    contactDetails: {
      exportAvailability: "Bulk and containerized supply available for steelmakers"
    },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Cr", value: "50–70% (grade dependent)" },
      { parameter: "C", value: "HC: 6–9% / LC: <0.5%" },
      { parameter: "Si", value: "As per confirmed grade" },
      { parameter: "P", value: "As per confirmed grade" },
      { parameter: "S", value: "On request" },
      { parameter: "Size", value: "As per application" }
    ],
    applications: [
      { title: "Stainless Steel Production", description: "Primary chromium alloying addition in austenitic, ferritic, and martensitic stainless steel production." },
      { title: "Alloy & Tool Steel", description: "Used in chromium-bearing alloy and tool steel grades for wear and corrosion resistance." },
      { title: "Superalloy Manufacturing", description: "Applied in selected nickel and cobalt-base superalloy formulations requiring chromium input." },
      { title: "Specialty Castings", description: "Used in white iron and chromium-bearing casting alloys for abrasion-resistant components." }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys", "Stainless Steel"],
    technicalProfileLabel: "Download Ferro Chrome Technical Profile",
    inquiryTitle: "Request Ferro Chrome Supply",
    image: "/images/minerals/ferro-chrome.png"
  },

  {
    name: "Iron Ore",
    slug: "iron-ore",
    category: "Metallurgical Mineral",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Steel & Foundry Raw Materials",
    formula: "Fe2O3 / Fe3O4",
    shortDescription: "Iron ore supplied for blast furnace ironmaking, direct reduction, and sintering plant operations in integrated steel production.",
    overview: "Iron ore is the primary raw material for iron and steel production globally. Haematite (Fe2O3) and magnetite (Fe3O4) are the dominant commercial iron ore minerals. It is supplied in lump, sinter feed, and pellet feed forms for blast furnace ironmaking, direct reduced iron (DRI) production, and electric arc furnace (EAF) steelmaking. Commercial selection depends on Fe grade, gangue profile, moisture, and sizing.",
    sourceDetails: {
      sourceName: "Global Iron Ore Supply",
      region: "Multi-Origin",
      country: "India / Brazil / Australia / South Africa",
      dispatchPorts: ["Visakhapatnam", "Mundra", "Tubarao", "Port Hedland"],
      sourcingNote: "Available in lump, fines, pellet, and sinter feed grades. Supply structured by Fe content, Al2O3, SiO2 gangue, and LOI specification."
    },
    contactDetails: {
      exportAvailability: "Bulk cargo supply available for integrated steel and DRI plants"
    },
    packaging: ["Bulk cargo", "Cape / Panamax / Supramax vessel"],
    qualityParameters: [
      { parameter: "Fe (Total)", value: "As per confirmed grade / assay" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Al2O3", value: "As per confirmed grade" },
      { parameter: "P", value: "As per confirmed grade" },
      { parameter: "S", value: "On request" },
      { parameter: "Size", value: "Lump / sinter fines / pellet feed" }
    ],
    applications: [
      { title: "Blast Furnace Ironmaking", description: "Primary raw material charged to blast furnaces for hot metal (pig iron) production." },
      { title: "Direct Reduction (DRI/HBI)", description: "Used as pellet/lump feed in gas-based direct reduction plants producing sponge iron for EAF steelmaking." },
      { title: "Sintering Plants", description: "Sinter fines are used in sintering plants to produce sinter burden for blast furnaces." },
      { title: "Foundry Pig Iron", description: "Selected iron ore grades used in foundry pig iron production for cast iron manufacturing." }
    ],
    industries: ["Steel & Metallurgy", "Iron Production", "Foundry"],
    technicalProfileLabel: "Download Iron Ore Technical Profile",
    inquiryTitle: "Request Iron Ore Supply",
    image: "/images/minerals/iron-ore.png"
  },

  {
    name: "Lime",
    slug: "lime",
    category: "Industrial Mineral",
    industryGroup: "Refractory & Steel Industry",
    subCategory: "Steel & Foundry Raw Materials",
    formula: "CaO",
    shortDescription: "Quicklime and hydrated lime supplied for steelmaking slag conditioning, water treatment, construction, and chemical processing.",
    overview: "Lime (quicklime, CaO) is produced by calcining limestone at high temperatures and is an essential industrial mineral with applications spanning steelmaking, water treatment, construction, and chemical processing. In steel production, lime is used in the BOF and EAF as a primary slag-forming material controlling basicity, desulphurisation, and slag fluidity. Hydrated lime (Ca(OH)2) is used in water and flue gas treatment systems.",
    sourceDetails: {
      sourceName: "Industrial Lime Supply",
      region: "Multi-Origin",
      country: "India / Oman / Turkey",
      dispatchPorts: ["Mundra", "Kandla", "Sohar"],
      sourcingNote: "Available in quicklime lump, quicklime powder, and hydrated lime grades. Supply structured by CaO content, reactivity, and end-use requirements."
    },
    contactDetails: {
      exportAvailability: "Bulk and packaged supply available"
    },
    packaging: ["Bulk cargo", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "CaO", value: "As per confirmed grade / assay" },
      { parameter: "MgO", value: "On request" },
      { parameter: "SiO2", value: "As per confirmed grade" },
      { parameter: "Fe2O3", value: "On request" },
      { parameter: "Reactivity (t60)", value: "On request" },
      { parameter: "LOI", value: "On request" }
    ],
    applications: [
      { title: "Steelmaking", description: "Used in BOF and EAF steelmaking as a primary slag-forming agent for basicity control and desulphurisation." },
      { title: "Water Treatment", description: "Applied in municipal and industrial water treatment for pH adjustment and softening." },
      { title: "Construction Materials", description: "Used in mortars, plasters, soil stabilisation, and construction mineral applications." },
      { title: "Chemical Processing", description: "Used in industrial chemical processes including carbide production, pulp bleaching, and acid neutralisation." }
    ],
    industries: ["Steel & Metallurgy", "Construction Materials", "Chemical Processing", "Water Treatment"],
    technicalProfileLabel: "Download Lime Technical Profile",
    inquiryTitle: "Request Lime Supply",
    image: "/images/minerals/lime.png"
  }
];
