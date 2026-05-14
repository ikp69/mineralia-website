export type Mineral = {
  name: string
  slug: string
  category: string
  industryGroups: string[]
  subCategory: string
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
  qualityParameters: { parameter: string; value: string }[]
  applications: { title: string; description: string }[]
  industries: string[]
  technicalProfileLabel: string
  inquiryTitle: string
  image: string
}

export const minerals: Mineral[] = [

  // ─── CERAMIC & PORCELAIN INDUSTRY — Clay & Body Minerals ─────────────────

  {
    name: "Kaolin",
    slug: "kaolin",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "Al₂Si₂O₅(OH)₄",
    shortDescription: "Primary white clay mineral supplied for ceramic bodies, paper coatings, paints, and specialty industrial applications.",
    overview: "Kaolin is a fine-grained white clay mineral with low plasticity, high whiteness, and chemical inertness. It is the foundational raw material for porcelain, bone china, and technical ceramic bodies, providing the alumino-silicate framework essential for fired strength and dimensional stability. Its brightness, controlled particle size, and clean-burning character make it indispensable across ceramics, paper, and coatings industries.",
    sourceDetails: {
      sourceName: "Kaolin Supply Network",
      region: "Multi-Origin",
      country: "India / Turkey / Brazil / Ukraine",
      dispatchPorts: ["Mundra", "Kandla", "Izmir", "Santos"],
      sourcingNote: "Available in washed, air-classified, and water-washed grades. Supply structured by brightness, PSD, and Al₂O₃ content."
    },
    contactDetails: { exportAvailability: "Containerized export available for industrial buyers" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "35–38%" },
      { parameter: "SiO₂", value: "45–50%" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Brightness (ISO)", value: "78–86%" },
      { parameter: "LOI", value: "12–14%" }
    ],
    applications: [
      { title: "Porcelain & Technical Ceramics", description: "Core body mineral in porcelain, bone china, and technical ceramic formulations." },
      { title: "Paper Coating & Filling", description: "Used as a coating pigment and filler for brightness and printability in paper." },
      { title: "Paints & Rubber", description: "Functional extender in architectural paints, rubber compounds, and adhesives." }
    ],
    industries: ["Ceramics", "Paper & Coatings", "Paints & Polymers"],
    technicalProfileLabel: "Download Kaolin Technical Profile",
    inquiryTitle: "Request Kaolin Supply",
    image: "/images/minerals/kaolin.png"
  },

  {
    name: "Calcined Kaolin",
    slug: "calcined-kaolin",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "Al₂O₃·2SiO₂",
    shortDescription: "Thermally processed kaolin supplied for refractories, paper opacity, and high-performance ceramic and coating applications.",
    overview: "Calcined kaolin is produced by firing raw kaolin at 600–1100 °C, eliminating hydroxyl groups to create a structurally transformed alumino-silicate with enhanced hardness, whiteness, and opacity. It outperforms raw kaolin in refractory applications, coated paper, and high-brightness coatings, offering significantly reduced LOI and improved abrasion resistance.",
    sourceDetails: {
      sourceName: "Calcined Kaolin Supply Network",
      region: "Multi-Origin",
      country: "India / Turkey / Brazil",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in metakaolin and fully calcined grades. Supply structured by Al₂O₃, brightness, and particle size."
    },
    contactDetails: { exportAvailability: "Containerized export available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "40–45%" },
      { parameter: "SiO₂", value: "50–55%" },
      { parameter: "Brightness (ISO)", value: "88–92%+" },
      { parameter: "LOI", value: "<1%" },
      { parameter: "Fe₂O₃", value: "As per grade" }
    ],
    applications: [
      { title: "Refractory Castables", description: "Key raw material in refractory castables, bricks, and kiln furniture." },
      { title: "Paper Coating Pigment", description: "Superior opacity and brightness as a coating pigment in coated paper and board." },
      { title: "Ceramics", description: "Used in tiles, sanitaryware, and technical ceramics for controlled firing behaviour." }
    ],
    industries: ["Ceramics", "Refractories", "Paper & Coatings"],
    technicalProfileLabel: "Download Calcined Kaolin Technical Profile",
    inquiryTitle: "Request Calcined Kaolin Supply",
    image: "/images/minerals/kaolin.png"
  },

  {
    name: "Ball Clay",
    slug: "ball-clay",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "Al₂O₃·2SiO₂·2H₂O",
    shortDescription: "Highly plastic secondary clay supplied for tiles, sanitaryware, stoneware, and technical ceramic body formulations.",
    overview: "Ball clay is a fine-grained sedimentary clay prized for its exceptional plasticity, green strength, and clean firing characteristics. It enhances workability and structural integrity in unfired ceramic bodies, making it essential in floor tiles, wall tiles, sanitaryware, and stoneware. Its plasticity index and particle size distribution are the key commercial selection criteria.",
    sourceDetails: {
      sourceName: "Ball Clay Supply Network",
      region: "Multi-Origin",
      country: "India / UK / Ukraine / Turkey",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in washed and processed grades by plasticity index and fired colour specification."
    },
    contactDetails: { exportAvailability: "Containerized export available for ceramic buyers" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "24–30%" },
      { parameter: "SiO₂", value: "50–60%" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "LOI", value: "8–14%" },
      { parameter: "Plasticity Index", value: "On request" }
    ],
    applications: [
      { title: "Floor & Wall Tiles", description: "Provides plasticity and green strength in tile body formulations." },
      { title: "Sanitaryware", description: "Used in sanitaryware body compositions for workability and fired strength." },
      { title: "Stoneware & Tableware", description: "Incorporated in stoneware and tableware for improved forming characteristics." }
    ],
    industries: ["Ceramics", "Sanitaryware", "Technical Ceramics"],
    technicalProfileLabel: "Download Ball Clay Technical Profile",
    inquiryTitle: "Request Ball Clay Supply",
    image: "/images/minerals/kaolin.png"
  },

  {
    name: "China Clay",
    slug: "china-clay",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "Al₂Si₂O₅(OH)₄",
    shortDescription: "Premium-grade white kaolin supplied for fine porcelain, bone china, sanitaryware, and high-quality ceramic body applications.",
    overview: "China clay is the trade name for high-purity, high-brightness primary kaolin specifically processed for fine ceramics and porcelain manufacture. It delivers exceptional whiteness, low iron content, and controlled particle size distribution critical for fine china, bone china tableware, and sanitaryware body formulations. China clay from primary deposits offers superior brightness and purity compared to secondary kaolins.",
    sourceDetails: {
      sourceName: "China Clay Supply Network",
      region: "Multi-Origin",
      country: "UK / India / Brazil / Turkey",
      dispatchPorts: ["Mundra", "Santos", "Izmir"],
      sourcingNote: "Available in premium washed and ultra-fine grades. Supply structured by brightness, whiteness, and Fe₂O₃ specification."
    },
    contactDetails: { exportAvailability: "Containerized export available for porcelain and ceramic buyers" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "35–38%" },
      { parameter: "SiO₂", value: "46–50%" },
      { parameter: "Fe₂O₃", value: "<0.5% (premium grade)" },
      { parameter: "TiO₂", value: "<0.3%" },
      { parameter: "Brightness (ISO)", value: "82–88%+" }
    ],
    applications: [
      { title: "Fine Porcelain & Bone China", description: "Primary body material in fine porcelain, bone china, and premium tableware." },
      { title: "Sanitaryware", description: "Used in vitreous china and sanitary ware body formulations requiring high whiteness." },
      { title: "Technical Ceramics", description: "Applied in high-specification ceramic components requiring purity and dimensional accuracy." }
    ],
    industries: ["Ceramics", "Sanitaryware", "Technical Ceramics"],
    technicalProfileLabel: "Download China Clay Technical Profile",
    inquiryTitle: "Request China Clay Supply",
    image: "/images/minerals/kaolin.png"
  },

  {
    name: "Feldspar",
    slug: "feldspar",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "KAlSi₃O₈ / NaAlSi₃O₈",
    shortDescription: "Feldspathic flux mineral supplied for ceramic bodies, glazes, glass, and industrial mineral blending applications.",
    overview: "Feldspar is the most widely used fluxing mineral in ceramics and glass, providing alkali contribution and promoting vitrification at ceramic firing temperatures. It is commercially selected by K₂O and Na₂O balance, iron content, and particle size for tile bodies, sanitaryware, tableware, and glass batch applications.",
    sourceDetails: {
      sourceName: "Processed Feldspar Supply",
      region: "Multi-Origin",
      country: "India / Turkey",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in potash-rich and soda-rich variants in powder and lump forms."
    },
    contactDetails: { exportAvailability: "Regular industrial dispatch available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "K₂O / Na₂O", value: "As per confirmed grade" },
      { parameter: "SiO₂", value: "64–70%" },
      { parameter: "Al₂O₃", value: "17–20%" },
      { parameter: "Fe₂O₃", value: "On request" },
      { parameter: "Mesh Size", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Bodies", description: "Used in tiles, sanitaryware, and tableware bodies as the primary fluxing mineral." },
      { title: "Glazes & Enamels", description: "Improves melt characteristics and fired surface development in glaze systems." },
      { title: "Glass Manufacturing", description: "Contributes alkali and alumina to glass batches." }
    ],
    industries: ["Ceramics", "Glass", "Glazes & Enamels"],
    technicalProfileLabel: "Download Feldspar Technical Profile",
    inquiryTitle: "Request Feldspar Supply",
    image: "/images/minerals/feldspar.png"
  },

  {
    name: "Potash Feldspar",
    slug: "potash-feldspar",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "KAlSi₃O₈",
    shortDescription: "High-potassium feldspar supplied for ceramic bodies, porcelain tiles, and glaze formulations requiring high-temperature vitrification.",
    overview: "Potash feldspar (orthoclase/microcline) is rich in K₂O and promotes higher-temperature vitrification in ceramic bodies, producing harder, more durable fired products. It is the preferred feldspar for porcelain tiles, electrical porcelain, and high-fired whitewares where fired translucency and strength are critical.",
    sourceDetails: {
      sourceName: "Potash Feldspar Supply",
      region: "Multi-Origin",
      country: "India / Turkey / Pakistan",
      dispatchPorts: ["Mundra", "Kandla", "Karachi", "Izmir"],
      sourcingNote: "Available in washed and micronized grades. Supply structured by K₂O content and Fe₂O₃ specification."
    },
    contactDetails: { exportAvailability: "Regular containerized export available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "K₂O", value: "10–14%" },
      { parameter: "Na₂O", value: "<3%" },
      { parameter: "Al₂O₃", value: "17–19%" },
      { parameter: "SiO₂", value: "65–70%" },
      { parameter: "Fe₂O₃", value: "As per grade" }
    ],
    applications: [
      { title: "Porcelain Tiles", description: "Primary flux in porcelain tile body formulations for high-temperature vitrification." },
      { title: "Electrical Porcelain", description: "Used in high-voltage insulators and electrical porcelain for strength and dielectric properties." },
      { title: "Sanitaryware Bodies", description: "Provides fluxing and vitrification in vitreous china formulations." }
    ],
    industries: ["Ceramics", "Technical Ceramics", "Sanitaryware"],
    technicalProfileLabel: "Download Potash Feldspar Technical Profile",
    inquiryTitle: "Request Potash Feldspar Supply",
    image: "/images/minerals/potash-feldspar.png"
  },

  {
    name: "Soda Feldspar",
    slug: "soda-feldspar",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "NaAlSi₃O₈",
    shortDescription: "Sodium-rich feldspar (albite) supplied for fast-fire ceramic tiles, wall tiles, and glass batch applications.",
    overview: "Soda feldspar (albite) has a higher Na₂O content and lower melting temperature than potash feldspar, making it the preferred flux for fast-fire wall tile production and glass batches. Its earlier melt onset reduces firing energy requirements and improves surface quality in low-to-mid temperature ceramic firing cycles.",
    sourceDetails: {
      sourceName: "Soda Feldspar Supply",
      region: "Multi-Origin",
      country: "India / Turkey / Spain",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in standard and low-iron grades. Supply structured by Na₂O content and particle size specification."
    },
    contactDetails: { exportAvailability: "Regular containerized export available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Na₂O", value: "10–12%" },
      { parameter: "K₂O", value: "<1%" },
      { parameter: "Al₂O₃", value: "18–21%" },
      { parameter: "SiO₂", value: "66–70%" },
      { parameter: "Fe₂O₃", value: "As per grade" }
    ],
    applications: [
      { title: "Fast-Fire Wall Tiles", description: "Preferred flux for single-fire and fast-fire wall tile production cycles." },
      { title: "Glass Manufacturing", description: "Contributes Na₂O and Al₂O₃ to container, flat, and specialty glass batches." },
      { title: "Ceramic Glazes", description: "Used in glaze compositions requiring lower melt temperatures and smooth surface finish." }
    ],
    industries: ["Ceramics", "Glass", "Glazes & Enamels"],
    technicalProfileLabel: "Download Soda Feldspar Technical Profile",
    inquiryTitle: "Request Soda Feldspar Supply",
    image: "/images/minerals/soda-feldspar.png"
  },

  {
    name: "Quartz Powder",
    slug: "quartz-powder",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "SiO₂",
    shortDescription: "Finely milled high-purity quartz supplied for ceramic bodies, glazes, glass batch, and construction applications.",
    overview: "Quartz powder is high-purity SiO₂ milled to fine particle sizes for industrial use. As a silica source in ceramic bodies, it controls shrinkage, fired strength, and thermal expansion. In glaze compositions, it contributes silica to the glass network. Its controlled PSD and high SiO₂ content make it preferred over raw silica sand in precision ceramic and coating applications.",
    sourceDetails: {
      sourceName: "Processed Quartz Supply",
      region: "Multi-Origin",
      country: "India / Turkey / Norway",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in 100–400 mesh grades. Supply structured by SiO₂ purity, Fe₂O₃, and PSD."
    },
    contactDetails: { exportAvailability: "Containerized and bulk supply available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "SiO₂", value: "98–99.5% min" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Al₂O₃", value: "As per grade" },
      { parameter: "Mesh Size", value: "100–400 mesh as per application" },
      { parameter: "Moisture", value: "On request" }
    ],
    applications: [
      { title: "Ceramic Bodies", description: "Controls fired shrinkage and thermal expansion in tile and technical ceramic bodies." },
      { title: "Glaze Compositions", description: "Provides silica framework in ceramic glaze formulations." },
      { title: "Construction Products", description: "Used in mortars, adhesives, and mineral-based compounds." }
    ],
    industries: ["Ceramics", "Glass", "Construction Materials", "Glazes & Enamels"],
    technicalProfileLabel: "Download Quartz Powder Technical Profile",
    inquiryTitle: "Request Quartz Powder Supply",
    image: "/images/minerals/silica-sand.png"
  },

  {
    name: "Silica Sand",
    slug: "silica-sand",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "SiO₂",
    shortDescription: "High-purity silica sand supplied for glass, foundry, ceramics, filtration, and industrial processing applications.",
    overview: "Silica sand is a high-value industrial mineral used across glass manufacturing, foundry operations, ceramics, filtration, and specialty applications. Commercial selection depends on silica purity, iron content, particle size distribution, and end-use compatibility.",
    sourceDetails: {
      sourceName: "Industrial Silica Supply",
      region: "Multi-Origin",
      country: "India / Turkey / Egypt",
      dispatchPorts: ["Mundra", "Kandla", "Alexandria"],
      sourcingNote: "Available in glass, foundry, and industrial grades by mesh and purity specification."
    },
    contactDetails: { exportAvailability: "Bulk and container supply available subject to mesh requirement" },
    packaging: ["Bulk vessel", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "SiO₂", value: "As per confirmed grade" },
      { parameter: "Fe₂O₃", value: "On request" },
      { parameter: "Al₂O₃", value: "On request" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "Mesh Size", value: "As per application" }
    ],
    applications: [
      { title: "Glass Manufacturing", description: "Principal silica source in float glass, container glass, and specialty glass." },
      { title: "Foundry Casting", description: "Supplied in size-controlled grades for moulding and core-making." },
      { title: "Ceramics", description: "Used in ceramic body and glaze formulations requiring silica input." },
      { title: "Filtration Media", description: "Applied in water and industrial filtration systems." }
    ],
    industries: ["Glass", "Foundry", "Ceramics", "Filtration"],
    technicalProfileLabel: "Download Silica Sand Technical Profile",
    inquiryTitle: "Request Silica Sand Supply",
    image: "/images/minerals/silica-sand.png"
  },

  {
    name: "Nepheline Syenite",
    slug: "nepheline-syenite",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "Na₃KAl₄Si₄O₁₆",
    shortDescription: "Low-silica feldspathoid flux mineral supplied for ceramics, glass, and glaze applications requiring low-temperature vitrification.",
    overview: "Nepheline syenite offers higher alumina and alkali flux with lower silica than conventional feldspar, enabling reduced firing temperatures and improved vitrification in ceramic bodies and glazes. It is commercially valued for energy efficiency, enhanced whiteness, and fired surface quality in tiles, tableware, and glass batches.",
    sourceDetails: {
      sourceName: "Nepheline Syenite Supply Network",
      region: "Multi-Origin",
      country: "Canada / Norway / Russia",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in standard ceramic and glass grades by chemical analysis and particle size."
    },
    contactDetails: { exportAvailability: "Containerized import supply available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "SiO₂", value: "~60%" },
      { parameter: "Al₂O₃", value: "~23%" },
      { parameter: "Na₂O + K₂O", value: "~14–15%" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Mesh Size", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Tiles & Bodies", description: "Low-temperature fluxing agent improving vitrification at reduced firing temperatures." },
      { title: "Tableware & Porcelain", description: "Enhances whiteness and fired strength in fine tableware and porcelain." },
      { title: "Glaze Systems", description: "Improves melt flow and surface development at lower temperatures." }
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
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "Mg₃Si₄O₁₀(OH)₂",
    shortDescription: "Magnesium silicate mineral supplied for ceramics, paints, plastics, rubber, and paper applications.",
    overview: "Talc is a naturally occurring magnesium silicate mineral valued for its softness, chemical inertness, whiteness, and lubrication properties. In ceramics, it acts as a flux and thermal shock modifier. Across industrial applications it functions as an extender filler, reinforcing agent, and process aid in paints, plastics, rubber, and paper coatings.",
    sourceDetails: {
      sourceName: "Industrial Talc Supply",
      region: "Multi-Origin",
      country: "India / China / Finland",
      dispatchPorts: ["Mundra", "Kandla", "Nhava Sheva"],
      sourcingNote: "Available in ceramic, cosmetic, and industrial grades by MgO content, brightness, and PSD."
    },
    contactDetails: { exportAvailability: "Regular containerized export available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "MgO", value: "As per grade" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Brightness", value: "On request" },
      { parameter: "Mesh / D97", value: "As per application" }
    ],
    applications: [
      { title: "Ceramics & Steatite", description: "Flux and thermal shock modifier in ceramic bodies and steatite technical ceramics." },
      { title: "Paints & Coatings", description: "Extender filler improving rheology and surface finish in industrial coatings." },
      { title: "Plastics & Rubber", description: "Reinforcing mineral filler in polymer compounds for improved stiffness and surface quality." }
    ],
    industries: ["Ceramics", "Paints & Coatings", "Plastics", "Rubber"],
    technicalProfileLabel: "Download Talc Technical Profile",
    inquiryTitle: "Request Talc Supply",
    image: "/images/minerals/talc.png"
  },

  {
    name: "Dolomite",
    slug: "dolomite",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry", "Refractory & Steel Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "CaMg(CO₃)₂",
    shortDescription: "Calcium-magnesium carbonate mineral supplied for ceramics, steelmaking flux, refractories, glass, and construction applications.",
    overview: "Dolomite is a dual calcium-magnesium carbonate mineral with wide industrial application in ceramics as a body flux, in steelmaking as a slag conditioner, and in refractories as a refractory raw material. Its CaO and MgO content after calcination make it valuable across ceramic, metallurgical, and construction sectors.",
    sourceDetails: {
      sourceName: "Industrial Dolomite Supply",
      region: "Multi-Origin",
      country: "India / Oman / Turkey",
      dispatchPorts: ["Mundra", "Kandla", "Sohar"],
      sourcingNote: "Available in lump, powder, and graded industrial forms based on end-use requirement."
    },
    contactDetails: { exportAvailability: "Regular bulk and packaged export supply available" },
    packaging: ["Bulk cargo", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "CaO", value: "As per grade" },
      { parameter: "MgO", value: "As per grade" },
      { parameter: "SiO₂", value: "On request" },
      { parameter: "Fe₂O₃", value: "On request" },
      { parameter: "Size", value: "Lump / powder / graded as required" }
    ],
    applications: [
      { title: "Ceramic Bodies", description: "Used as a flux in ceramic tile and tableware body formulations." },
      { title: "Steelmaking Flux", description: "Conditioning mineral in steel and metallurgical operations for slag control." },
      { title: "Refractory Use", description: "Applied in refractory systems and high-temperature industrial environments." },
      { title: "Construction Materials", description: "Used in mineral blends, fillers, and construction-related applications." }
    ],
    industries: ["Ceramics", "Steel & Metallurgy", "Refractories", "Glass", "Construction Materials"],
    technicalProfileLabel: "Download Dolomite Technical Profile",
    inquiryTitle: "Request Dolomite Supply",
    image: "/images/minerals/dolomite.png"
  },

  {
    name: "Wollastonite",
    slug: "wollastonite",
    category: "Clay & Body Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "CaSiO₃",
    shortDescription: "Calcium silicate mineral supplied for ceramics, plastics, paints, and specialty industrial applications requiring low thermal expansion.",
    overview: "Wollastonite is a naturally occurring calcium metasilicate mineral with low moisture absorption, low thermal expansion, high brightness, and acicular crystal morphology. In ceramics it reduces fired shrinkage and acts as a flux. In plastics and coatings it functions as a reinforcing filler offering superior performance compared to conventional calcium carbonate.",
    sourceDetails: {
      sourceName: "Wollastonite Supply Network",
      region: "Multi-Origin",
      country: "India / China / Finland",
      dispatchPorts: ["Mundra", "Kandla", "Chennai"],
      sourcingNote: "Available in ceramic and industrial grades with varying aspect ratios and particle size distributions."
    },
    contactDetails: { exportAvailability: "Containerized export available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "CaO", value: "~44–47%" },
      { parameter: "SiO₂", value: "~50–52%" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Brightness", value: "On request" },
      { parameter: "Aspect Ratio", value: "On request" }
    ],
    applications: [
      { title: "Ceramic Bodies & Tiles", description: "Reduces fired shrinkage and thermal expansion in tile and porcelain formulations." },
      { title: "Plastics & Composites", description: "Reinforcing mineral filler improving stiffness and surface quality in polymers." },
      { title: "Paints & Coatings", description: "Functional extender in industrial coatings for improved weathering performance." }
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
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Clay & Body Minerals",
    formula: "Al₂O₃·4SiO₂·nH₂O",
    shortDescription: "Swelling smectite clay supplied for ceramics, foundry, drilling, and industrial binding applications.",
    overview: "Bentonite is a smectite-group clay mineral with exceptional swelling, binding, and rheological properties. It is used in ceramics as a plasticizer and binder, in foundry as a green sand binder, and in civil engineering and drilling as a sealant and viscosifier. Montmorillonite content governs its swelling index and commercial suitability.",
    sourceDetails: {
      sourceName: "Industrial Bentonite Supply",
      region: "Multi-Origin",
      country: "India / Turkey / USA / Greece",
      dispatchPorts: ["Mundra", "Kandla", "Izmir"],
      sourcingNote: "Available in sodium and calcium grades by swelling index and moisture specification."
    },
    contactDetails: { exportAvailability: "Regular containerized and bulk export supply available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "Montmorillonite", value: "As per grade" },
      { parameter: "Swelling Index", value: "On request" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "pH", value: "On request" }
    ],
    applications: [
      { title: "Ceramics & Binding", description: "Plasticizer and binder in ceramic body mixes for improved green strength." },
      { title: "Foundry Sand Binding", description: "Primary green sand binder in ferrous and non-ferrous foundry moulding." },
      { title: "Drilling Fluids", description: "Viscosifier and filtration control agent in oil, gas, and water well drilling." }
    ],
    industries: ["Ceramics", "Foundry", "Drilling", "Construction Materials"],
    technicalProfileLabel: "Download Bentonite Technical Profile",
    inquiryTitle: "Request Bentonite Supply",
    image: "/images/minerals/bentonite.png"
  },

  // ─── CERAMIC & PORCELAIN INDUSTRY — Glaze & Surface Minerals ─────────────

  {
    name: "Zirconium Silicate",
    slug: "zirconium-silicate",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "ZrSiO₄",
    shortDescription: "Zirconium silicate opacifier supplied for ceramic glazes, enamel systems, and refractory applications.",
    overview: "Zirconium silicate is the primary opacifier in ceramic tile and sanitaryware glazes, providing white opacity, chemical resistance, and hardness. It is commercially supplied in milled and micronized grades for tiles, sanitaryware, and specialty ceramic applications requiring controlled particle size and high ZrO₂ content.",
    sourceDetails: {
      sourceName: "Zirconium Silicate Supply Network",
      region: "Multi-Origin",
      country: "Australia / South Africa / India",
      dispatchPorts: ["Mundra", "Nhava Sheva", "Fremantle"],
      sourcingNote: "Available in standard and premium grades across multiple particle size distributions."
    },
    contactDetails: { exportAvailability: "Regular containerized supply available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "ZrO₂ + HfO₂", value: "As per grade" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "TiO₂", value: "As per grade" },
      { parameter: "D50 / D97", value: "As per application" }
    ],
    applications: [
      { title: "Glaze Opacification", description: "Primary opacifier in tile, sanitaryware, and tableware glazes for whiteness and opacity." },
      { title: "Enamel & Surface Coatings", description: "Used in porcelain enamel systems requiring chemical and heat resistance." },
      { title: "Refractory Systems", description: "Applied in zirconia-containing refractory castables and specialty linings." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Refractories", "Sanitaryware"],
    technicalProfileLabel: "Download Zirconium Silicate Technical Profile",
    inquiryTitle: "Request Zirconium Silicate Supply",
    image: "/images/minerals/zircon-sand.png"
  },

  {
    name: "Zircon Flour",
    slug: "zircon-flour",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "ZrSiO₄",
    shortDescription: "Ultra-fine milled zircon flour supplied for ceramic glaze opacification, refractory coatings, and investment casting applications.",
    overview: "Zircon flour is zirconium silicate milled to ultra-fine particle sizes (typically D50 < 5 µm), providing superior opacity, surface coverage, and chemical stability in ceramic glaze and refractory coating systems. Its fine particle size enables smooth glaze surfaces and high-efficiency opacification compared to standard zirconium silicate grades.",
    sourceDetails: {
      sourceName: "Zircon Flour Supply Network",
      region: "Multi-Origin",
      country: "Australia / South Africa / Ukraine",
      dispatchPorts: ["Mundra", "Nhava Sheva", "Fremantle"],
      sourcingNote: "Available in standard and ultra-fine grades. Supply structured by D50, D97, and ZrO₂ content."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "ZrO₂ + HfO₂", value: "As per grade" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "D50", value: "<5 µm (ultra-fine grade)" },
      { parameter: "D97", value: "As per specification" }
    ],
    applications: [
      { title: "Ceramic Glaze Opacification", description: "High-efficiency opacifier providing superior whiteness and surface coverage in glazes." },
      { title: "Refractory Coatings", description: "Applied in refractory surface coatings and zirconia-based thermal barriers." },
      { title: "Investment Casting", description: "Used as a refractory filler in investment casting shell systems." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Refractories", "Foundry"],
    technicalProfileLabel: "Download Zircon Flour Technical Profile",
    inquiryTitle: "Request Zircon Flour Supply",
    image: "/images/minerals/zircon-sand.png"
  },

  {
    name: "Rutile Sand",
    slug: "rutile-sand",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "TiO₂",
    shortDescription: "Natural rutile mineral sand supplied for ceramic glaze effects, titanium metal production, and welding electrode applications.",
    overview: "Rutile sand is a naturally occurring TiO₂-bearing heavy mineral with high titanium content and characteristic golden-brown colour. In ceramics, it introduces titanium to create textured matte and crystalline glaze effects. It is also the premium feedstock for chloride-process TiO₂ pigment production and welding electrode coatings.",
    sourceDetails: {
      sourceName: "Rutile Sand Supply Network",
      region: "Multi-Origin",
      country: "Australia / South Africa / Sierra Leone",
      dispatchPorts: ["Fremantle", "Durban", "Mundra"],
      sourcingNote: "Available in standard and premium grades. Supply structured by TiO₂ content, Fe₂O₃, and ZrO₂ levels."
    },
    contactDetails: { exportAvailability: "Containerized and bulk supply available" },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "TiO₂", value: "93–96% (natural rutile)" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "ZrO₂", value: "As per grade" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Size", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glaze Effects", description: "Introduces titanium to create matte, textured, and crystalline glaze effects." },
      { title: "TiO₂ Pigment Feedstock", description: "Premium feedstock for chloride-process titanium dioxide pigment production." },
      { title: "Welding Electrodes", description: "Used as a rutile coating in welding electrode manufacture." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Pigments", "Welding"],
    technicalProfileLabel: "Download Rutile Sand Technical Profile",
    inquiryTitle: "Request Rutile Sand Supply",
    image: "/images/minerals/rutile.png"
  },

  {
    name: "Titanium Dioxide",
    slug: "titanium-dioxide",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "TiO₂",
    shortDescription: "Synthetic titanium dioxide supplied for ceramic glazes, paints, plastics, and specialty opacification applications.",
    overview: "Titanium dioxide is the most powerful white pigment and opacifier, produced in anatase and rutile crystal forms. In ceramics, it develops opacity, matte textures, and specialty colour effects in glaze and engobe systems. As the dominant white pigment globally, it is indispensable in architectural paints, plastics, and industrial coatings.",
    sourceDetails: {
      sourceName: "TiO₂ Supply Network",
      region: "Multi-Origin",
      country: "China / India / Norway / Germany",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in rutile and anatase grades. Supply structured by TiO₂ purity, crystal form, and particle size."
    },
    contactDetails: { exportAvailability: "Containerized supply available for ceramic and industrial buyers" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "TiO₂", value: "98–99%+ (synthetic grade)" },
      { parameter: "Crystal Form", value: "Rutile / Anatase as specified" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "D50", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes & Engobes", description: "Develops opacity, matte surface, and specialty effects in glaze and engobe systems." },
      { title: "Paints & Coatings", description: "Primary white pigment and opacifier in architectural and industrial coatings." },
      { title: "Plastics", description: "Incorporated in plastics for whiteness, UV resistance, and opacity." }
    ],
    industries: ["Ceramics", "Paints & Coatings", "Plastics", "Glazes & Enamels"],
    technicalProfileLabel: "Download Titanium Dioxide Technical Profile",
    inquiryTitle: "Request Titanium Dioxide Supply",
    image: "/images/minerals/rutile.png"
  },

  {
    name: "Alumina",
    slug: "alumina",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "Al₂O₃",
    shortDescription: "High-purity alumina supplied for ceramic glazes, advanced ceramics, refractories, and abrasive applications.",
    overview: "Alumina (Al₂O₃) is a critical raw material in advanced ceramics, refractory systems, and glaze formulations. In ceramic glazes, it increases fired hardness, surface durability, and chemical resistance. Reactive and tabular alumina grades serve distinct roles in refractory castables, technical ceramics, and precision abrasive products.",
    sourceDetails: {
      sourceName: "Industrial Alumina Supply",
      region: "Multi-Origin",
      country: "India / China / Australia",
      dispatchPorts: ["Mundra", "Kandla", "Nhava Sheva"],
      sourcingNote: "Available in standard, reactive, and tabular grades by Al₂O₃ purity, alpha phase, and PSD."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "99% min (grade dependent)" },
      { parameter: "Na₂O", value: "As per grade" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Alpha Phase", value: "On request" },
      { parameter: "D50 / BET", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "Improves fired hardness, surface durability, and chemical resistance in glaze systems." },
      { title: "Refractory Castables", description: "Key ingredient in high-alumina refractory castables and monolithic systems." },
      { title: "Advanced Ceramics", description: "Applied in electronics, biomedical, and technical ceramic applications." }
    ],
    industries: ["Ceramics", "Refractories", "Abrasives", "Electronics"],
    technicalProfileLabel: "Download Alumina Technical Profile",
    inquiryTitle: "Request Alumina Supply",
    image: "/images/minerals/calcined-alumina.png"
  },

  {
    name: "Zinc Oxide",
    slug: "zinc-oxide",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "ZnO",
    shortDescription: "Zinc oxide supplied for ceramic glazes, rubber compounding, paints, and specialty industrial formulations.",
    overview: "Zinc oxide is a versatile industrial mineral used in ceramic glazes as a flux and crystallisation promoter, developing matte surface textures and improving fired adhesion. In rubber it is a vulcanisation activator, and in coatings it provides corrosion inhibition and UV absorption.",
    sourceDetails: {
      sourceName: "Industrial Zinc Oxide Supply",
      region: "Multi-Origin",
      country: "India / China / Belgium",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in direct and indirect process grades by ZnO purity and particle size."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "ZnO", value: "99% min (grade dependent)" },
      { parameter: "Pb", value: "As per grade" },
      { parameter: "Cd", value: "As per grade" },
      { parameter: "D50", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "Flux and crystallisation promoter developing matte and specialty effects in glazes." },
      { title: "Rubber Compounding", description: "Vulcanisation activator in rubber and elastomer formulations." },
      { title: "Paints & Coatings", description: "Corrosion-inhibiting pigment and UV absorber in industrial coatings." }
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
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "BaCO₃",
    shortDescription: "Barium carbonate supplied for ceramic glaze flux, scum prevention in ceramic bodies, and specialty glass applications.",
    overview: "Barium carbonate introduces BaO into ceramic glaze melts after decomposition during firing, acting as a high-temperature flux that improves glaze smoothness and suppresses crawling and scum defects. In glass, it improves refractive index and chemical durability.",
    sourceDetails: {
      sourceName: "Industrial Barium Carbonate Supply",
      region: "Multi-Origin",
      country: "China / India / Germany",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in ceramic and industrial grades by BaCO₃ purity and particle size."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "BaCO₃", value: "99% min" },
      { parameter: "BaSO₄", value: "As per grade" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "Particle Size", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "High-temperature BaO flux improving surface smoothness and suppressing glaze defects." },
      { title: "Body Scum Prevention", description: "Neutralises soluble sulphates in ceramic bodies preventing surface discolouration." },
      { title: "Specialty Glass", description: "Improves refractive index and chemical durability in specialty glass formulations." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Glass"],
    technicalProfileLabel: "Download Barium Carbonate Technical Profile",
    inquiryTitle: "Request Barium Carbonate Supply",
    image: "/images/minerals/calcined-alumina.png"
  },

  {
    name: "Strontium Carbonate",
    slug: "strontium-carbonate",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "SrCO₃",
    shortDescription: "Strontium carbonate supplied for ceramic glazes, specialty glass, ferrite magnets, and electronic ceramic applications.",
    overview: "Strontium carbonate introduces SrO into ceramic glaze and glass systems after decomposition during firing, acting as a mid-to-high temperature flux that improves glaze surface quality and fired brilliance. It is also a key raw material in strontium ferrite permanent magnets and specialty electronic ceramics.",
    sourceDetails: {
      sourceName: "Industrial Strontium Carbonate Supply",
      region: "Multi-Origin",
      country: "China / Germany / Mexico",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in ceramic, electronic, and industrial grades by SrCO₃ purity and PSD."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["25 kg bags", "50 kg bags"],
    qualityParameters: [
      { parameter: "SrCO₃", value: "97–99% min" },
      { parameter: "BaCO₃", value: "As per grade" },
      { parameter: "CaCO₃", value: "As per grade" },
      { parameter: "Particle Size", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Glazes", description: "SrO flux improving surface quality, flow, and fired brilliance in glaze systems." },
      { title: "Ferrite Magnets", description: "Key raw material in strontium ferrite permanent magnet production." },
      { title: "Electronic Ceramics", description: "Used in PTC thermistors and piezoelectric ceramic compositions." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Glass", "Electronics"],
    technicalProfileLabel: "Download Strontium Carbonate Technical Profile",
    inquiryTitle: "Request Strontium Carbonate Supply",
    image: "/images/minerals/calcined-alumina.png"
  },

  {
    name: "Lithium Feldspar",
    slug: "lithium-feldspar",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "LiAlSi₂O₆ / LiAlSi₄O₁₀",
    shortDescription: "Lithium-bearing feldspathoid minerals supplied for low-expansion glass ceramics, fast-fire glazes, and specialty porcelain.",
    overview: "Lithium feldspar encompasses spodumene, petalite, and lepidolite minerals that introduce Li₂O — the most powerful ceramic flux — into ceramic and glass systems. Lithia significantly reduces melting temperatures and thermal expansion, making these minerals commercially critical in fast-fire tile glazes, low-expansion glass ceramics, and specialty porcelain formulations.",
    sourceDetails: {
      sourceName: "Lithium Mineral Supply Network",
      region: "Multi-Origin",
      country: "Australia / Zimbabwe / Brazil / Portugal",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in spodumene, petalite, and lepidolite grades by Li₂O content and mineral type."
    },
    contactDetails: { exportAvailability: "Containerized supply available subject to grade availability" },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Li₂O", value: "As per mineral type and grade" },
      { parameter: "Al₂O₃", value: "As per grade" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" }
    ],
    applications: [
      { title: "Low-Expansion Glass Ceramics", description: "Used in glass-ceramic cooktops and specialty optics requiring near-zero thermal expansion." },
      { title: "Fast-Fire Ceramic Glazes", description: "Powerful flux for reduced firing temperatures in fast-fire tile operations." },
      { title: "Specialty Porcelain", description: "Used in dental, technical, and sanitary porcelain bodies requiring controlled expansion." }
    ],
    industries: ["Ceramics", "Glazes & Enamels", "Glass", "Technical Ceramics"],
    technicalProfileLabel: "Download Lithium Feldspar Technical Profile",
    inquiryTitle: "Request Lithium Feldspar Supply",
    image: "/images/minerals/lithium-feldspar.png"
  },

  {
    name: "Calcined Alumina",
    slug: "calcined-alumina",
    category: "Glaze & Surface Mineral",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Glaze & Surface Minerals",
    formula: "α-Al₂O₃",
    shortDescription: "High-purity calcined alumina supplied for advanced ceramics, refractory castables, abrasives, and precision polishing applications.",
    overview: "Calcined alumina is produced by calcining aluminium hydroxide to form stable alpha-Al₂O₃, with controlled particle size, purity, and crystal structure. It is the primary alumina material for technical ceramics, high-purity refractory castables, abrasive grains, and precision polishing applications requiring maximum hardness and chemical purity.",
    sourceDetails: {
      sourceName: "Calcined Alumina Supply",
      region: "Multi-Origin",
      country: "India / China / Australia",
      dispatchPorts: ["Mundra", "Kandla", "Nhava Sheva"],
      sourcingNote: "Available in standard, reactive, and low-soda grades by Al₂O₃ purity, alpha content, and PSD."
    },
    contactDetails: { exportAvailability: "Containerized supply available for advanced ceramic and refractory buyers" },
    packaging: ["25 kg bags", "50 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "99.0–99.6% min" },
      { parameter: "Na₂O", value: "<0.5%" },
      { parameter: "SiO₂", value: "<0.03%" },
      { parameter: "Fe₂O₃", value: "<0.03%" },
      { parameter: "D50 / BET", value: "As per application" }
    ],
    applications: [
      { title: "Technical Ceramics", description: "Primary alumina for substrate, wear part, and electronic ceramic applications." },
      { title: "Refractory Castables", description: "Key ingredient in ultra-high purity refractory systems for petrochemical furnaces." },
      { title: "Abrasives & Polishing", description: "Used in precision lapping, polishing, and abrasive grain applications." }
    ],
    industries: ["Ceramics", "Refractories", "Abrasives", "Electronics"],
    technicalProfileLabel: "Download Calcined Alumina Technical Profile",
    inquiryTitle: "Request Calcined Alumina Supply",
    image: "/images/minerals/calcined-alumina.png"
  },

  // ─── CERAMIC & PORCELAIN INDUSTRY — Ceramic Glazes & Frits ──────────────

  {
    name: "Ceramic Frits",
    slug: "ceramic-frits",
    category: "Ceramic Glaze & Frit",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Ceramic Glazes & Frits",
    formula: "Custom silicate glass composition",
    shortDescription: "Pre-melted glass frit compositions supplied for ceramic tile glazes, sanitaryware enamels, and specialty ceramic surface finishes.",
    overview: "Ceramic frits are pre-melted and rapidly quenched glass compositions providing controlled, reproducible glaze and enamel properties. Fritting insolubilises reactive raw materials, stabilises volatile components, and ensures batch consistency. They are the principal glaze component in tiles, sanitaryware, tableware, and technical ceramic applications.",
    sourceDetails: {
      sourceName: "Ceramic Frit Supply",
      region: "Multi-Origin",
      country: "Spain / Italy / India / Turkey",
      dispatchPorts: ["Mundra", "Nhava Sheva", "Barcelona"],
      sourcingNote: "Available in transparent, opaque, matte, and specialty compositions by firing temperature and thermal expansion."
    },
    contactDetails: { exportAvailability: "Supply available for tile and sanitaryware manufacturers" },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Composition Type", value: "As per frit specification" },
      { parameter: "Firing Temperature", value: "As per application" },
      { parameter: "Thermal Expansion", value: "On request" },
      { parameter: "Opacity / Transparency", value: "As per specification" }
    ],
    applications: [
      { title: "Tile Glaze Systems", description: "Principal glaze component in floor tiles, wall tiles, and porcelain slab production." },
      { title: "Sanitaryware Enamels", description: "Controlled enamel surface on vitreous china and sanitaryware bodies." },
      { title: "Specialty Surface Finishes", description: "Used in matte, metallic, crystalline, and specialty effect glaze systems." }
    ],
    industries: ["Ceramics", "Sanitaryware", "Glazes & Enamels", "Tiles"],
    technicalProfileLabel: "Download Ceramic Frits Technical Profile",
    inquiryTitle: "Request Ceramic Frits Supply",
    image: "/images/minerals/zircon-sand.png"
  },

  {
    name: "Digital Printing Inks",
    slug: "digital-printing-inks",
    category: "Ceramic Glaze & Frit",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Ceramic Glazes & Frits",
    formula: "Inorganic pigment suspension",
    shortDescription: "Inkjet ceramic inks supplied for digital decoration of tiles, slabs, sanitaryware, and technical ceramic surfaces.",
    overview: "Ceramic digital printing inks are precision-engineered suspensions of inorganic ceramic pigments in controlled-viscosity carriers, designed for inkjet printing on ceramic surfaces. They enable photorealistic surface decoration, wood and stone effects, and complex design reproduction on tiles and porcelain slabs. Pigments maintain colour integrity through high-temperature firing cycles.",
    sourceDetails: {
      sourceName: "Ceramic Digital Ink Supply",
      region: "Multi-Origin",
      country: "Spain / Italy / Germany",
      dispatchPorts: ["Barcelona", "Genoa", "Mundra"],
      sourcingNote: "Available in full CMYK colour ranges and specialty effect inks by firing temperature and printer compatibility."
    },
    contactDetails: { exportAvailability: "Supply available for tile manufacturers and ceramic decoration operations" },
    packaging: ["5 kg containers", "25 kg drums", "IBC containers"],
    qualityParameters: [
      { parameter: "Pigment Type", value: "Inorganic ceramic pigment" },
      { parameter: "Viscosity", value: "As per printer specification" },
      { parameter: "Particle Size", value: "Submicron" },
      { parameter: "Firing Temperature", value: "As per application" }
    ],
    applications: [
      { title: "Ceramic Tile Decoration", description: "High-resolution wood, stone, and design effects on ceramic tile surfaces." },
      { title: "Porcelain Slab Printing", description: "Large-format porcelain slab decoration for architectural surfaces." },
      { title: "Sanitaryware Decoration", description: "Decorative printing on sanitary porcelain surfaces." }
    ],
    industries: ["Ceramics", "Tiles", "Sanitaryware"],
    technicalProfileLabel: "Download Digital Printing Inks Technical Profile",
    inquiryTitle: "Request Digital Printing Inks Supply",
    image: "/images/minerals/rutile.png"
  },

  {
    name: "Engobes",
    slug: "engobes",
    category: "Ceramic Glaze & Frit",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Ceramic Glazes & Frits",
    formula: "Ceramic slip (clay + quartz + feldspar + oxides)",
    shortDescription: "Ceramic engobe slips supplied as intermediate surface coatings for tiles, bricks, and ceramic ware.",
    overview: "Engobes are ceramic slip coatings applied between the ceramic body and the glaze layer to mask body colour, improve surface uniformity, and enhance glaze adhesion. They are formulated from clays, quartz, feldspar, and colouring oxides and must be thermally compatible with both the body and glaze during firing.",
    sourceDetails: {
      sourceName: "Ceramic Engobe Supply",
      region: "Multi-Origin",
      country: "Spain / Italy / India / Turkey",
      dispatchPorts: ["Barcelona", "Mundra"],
      sourcingNote: "Available in white base and coloured formulations by substrate, firing temperature, and glaze compatibility."
    },
    contactDetails: { exportAvailability: "Supply available for tile and ceramic manufacturing operations" },
    packaging: ["25 kg bags (powder)", "Liquid slip on request"],
    qualityParameters: [
      { parameter: "Composition", value: "Clay + feldspar + quartz + additives" },
      { parameter: "Firing Temperature", value: "As per application" },
      { parameter: "Thermal Expansion", value: "Compatible with glaze system" },
      { parameter: "Whiteness / Colour", value: "As per specification" }
    ],
    applications: [
      { title: "Ceramic Tile Manufacturing", description: "Masks body colour and improves surface uniformity between body and glaze." },
      { title: "Sanitaryware", description: "Intermediate layer on sanitary ware bodies for improved fired surface quality." },
      { title: "Facade & Brick Products", description: "Decorative and functional surface finish on extruded brick and facade products." }
    ],
    industries: ["Ceramics", "Tiles", "Sanitaryware", "Construction Materials"],
    technicalProfileLabel: "Download Engobes Technical Profile",
    inquiryTitle: "Request Engobes Supply",
    image: "/images/minerals/kaolin.png"
  },

  {
    name: "Glazes",
    slug: "glazes",
    category: "Ceramic Glaze & Frit",
    industryGroups: ["Ceramic & Porcelain Industry"],
    subCategory: "Ceramic Glazes & Frits",
    formula: "Glassy silicate coating (variable composition)",
    shortDescription: "Ceramic glazes supplied for tiles, sanitaryware, tableware, and technical ceramic surface finishing.",
    overview: "Ceramic glazes are glassy silicate coatings applied to ceramic surfaces that, upon firing, fuse to form a dense, impermeable layer providing aesthetics, hygiene, and mechanical protection. Supplied as ready-to-apply suspensions or dry powder compositions, they are formulated for specific firing temperature ranges, surface effects (matte, gloss, satin), and substrate compatibility.",
    sourceDetails: {
      sourceName: "Ceramic Glaze Supply",
      region: "Multi-Origin",
      country: "Spain / Italy / India / Turkey",
      dispatchPorts: ["Barcelona", "Genoa", "Mundra"],
      sourcingNote: "Available in matte, gloss, satin, and specialty effect formulations. Supply by firing temperature and substrate type."
    },
    contactDetails: { exportAvailability: "Supply available for ceramic tile and tableware manufacturers" },
    packaging: ["25 kg bags (dry)", "Liquid suspension in drums", "1 MT IBC"],
    qualityParameters: [
      { parameter: "Firing Temperature Range", value: "950–1250 °C (as per specification)" },
      { parameter: "Surface Effect", value: "Matte / Gloss / Satin as specified" },
      { parameter: "Thermal Expansion", value: "Compatible with substrate" },
      { parameter: "Colour", value: "As per specification" }
    ],
    applications: [
      { title: "Ceramic Floor & Wall Tiles", description: "Surface glaze providing aesthetics, wear resistance, and impermeability in tile production." },
      { title: "Sanitaryware", description: "Applied to vitreous china and porcelain bodies for hygiene and surface quality." },
      { title: "Tableware & Artware", description: "Used in fine tableware, decorative ceramics, and artware surface finishing." }
    ],
    industries: ["Ceramics", "Tiles", "Sanitaryware", "Glazes & Enamels"],
    technicalProfileLabel: "Download Glazes Technical Profile",
    inquiryTitle: "Request Glazes Supply",
    image: "/images/minerals/glazes.png"
  },

  // ─── REFRACTORY & STEEL INDUSTRY — Core Refractory Minerals ─────────────

  {
    name: "Calcined Bauxite",
    slug: "bauxite",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "Al₂O₃·nH₂O",
    shortDescription: "Aluminum-bearing ore supplied for refractories, cement, abrasives, and metallurgical applications.",
    overview: "Calcined bauxite is a commercially important alumina-rich mineral used across refractory, abrasive, and cement industries. It is valued for its alumina content, thermal stability, and suitability for downstream processing in applications requiring strength, heat resistance, and mineral consistency.",
    sourceDetails: {
      sourceName: "Global Bauxite Supply Network",
      region: "Multi-Origin",
      country: "India / Guinea / Australia",
      dispatchPorts: ["Mundra", "Kandla", "Vizag"],
      sourcingNote: "Available through qualified sourcing channels by grade, alumina content, and end-use requirements."
    },
    contactDetails: { exportAvailability: "Bulk export, containerized dispatch, and contract supply available" },
    packaging: ["Bulk vessel", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "As per confirmed grade" },
      { parameter: "SiO₂", value: "As per confirmed grade" },
      { parameter: "Fe₂O₃", value: "As per confirmed grade" },
      { parameter: "TiO₂", value: "As per confirmed grade" },
      { parameter: "LOI", value: "As per confirmed grade" }
    ],
    applications: [
      { title: "Refractory Manufacturing", description: "Used in refractory bricks, castables, and high-temperature linings." },
      { title: "Cement Industry", description: "Alumina-bearing corrective material in cement raw mix formulations." },
      { title: "Abrasives", description: "Suitable for abrasive and calcined mineral applications by grade." }
    ],
    industries: ["Refractories", "Cement", "Abrasives", "Metallurgy"],
    technicalProfileLabel: "Download Calcined Bauxite Technical Profile",
    inquiryTitle: "Request Calcined Bauxite Supply",
    image: "/images/minerals/bauxite.png"
  },

  {
    name: "DBM (Dead Burnt Magnesite)",
    slug: "dead-burnt-magnesite",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "MgO",
    shortDescription: "High-density dead burnt magnesite supplied for refractory bricks, furnace linings, and high-temperature industrial applications.",
    overview: "Dead Burnt Magnesite (DBM) is produced by calcining natural magnesite at 1600–2000 °C, yielding a dense sintered periclase product with extremely low reactivity and high refractoriness. It is one of the most critical raw materials in the refractory industry, used in steel, cement, and non-ferrous furnace linings, valued for high MgO, high bulk density, and resistance to basic slag attack.",
    sourceDetails: {
      sourceName: "Global DBM Supply Network",
      region: "Multi-Origin",
      country: "China / India / Turkey / North Korea",
      dispatchPorts: ["Mundra", "Kandla", "Tianjin", "Qingdao"],
      sourcingNote: "Available in multiple grades by MgO content, bulk density, and CaO/SiO₂ ratio."
    },
    contactDetails: { exportAvailability: "Bulk vessel, jumbo bags, and containerized dispatch available" },
    packaging: ["Bulk vessel", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "MgO", value: "90–97% min (grade dependent)" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "CaO", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Bulk Density", value: "3.0–3.40 g/cc" }
    ],
    applications: [
      { title: "Refractory Brick Manufacturing", description: "Primary raw material for magnesia, magnesia-carbon, and magnesia-chrome bricks." },
      { title: "Steel & Metallurgy", description: "Furnace linings for BOF, EAF, and secondary metallurgy vessels." },
      { title: "Cement Industry", description: "Rotary kiln linings and high-temperature zones in cement production." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Cement", "Non-Ferrous Metals"],
    technicalProfileLabel: "Download Dead Burnt Magnesite Technical Profile",
    inquiryTitle: "Request Dead Burnt Magnesite Supply",
    image: "/images/minerals/magnesite.png"
  },

  {
    name: "Fused Magnesia",
    slug: "fused-magnesia",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "MgO",
    shortDescription: "High-density fused magnesia supplied for premium refractory bricks, steel furnace linings, and electrical insulation.",
    overview: "Fused magnesia (FM) is produced by arc-fusion of magnesite above 2800 °C, yielding large periclase crystals of exceptional purity, density, and thermal stability. It outperforms DBM in applications demanding maximum MgO purity, electrical resistivity, and resistance to corrosion by basic slags in premium steel refractories and electrical insulation systems.",
    sourceDetails: {
      sourceName: "Fused Magnesia Supply Network",
      region: "Multi-Origin",
      country: "China / Austria / India",
      dispatchPorts: ["Tianjin", "Qingdao", "Mundra"],
      sourcingNote: "Available in 97–99.9% MgO grades and multiple grain sizes for refractory and insulation manufacturers."
    },
    contactDetails: { exportAvailability: "Bulk and containerized supply available" },
    packaging: ["Bulk vessel", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "MgO", value: "97–99.9% min" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "CaO", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Bulk Density", value: "3.40–3.58 g/cc" }
    ],
    applications: [
      { title: "Premium Steel Refractories", description: "MgO-C bricks and castables for EAF, BOF, and ladle linings requiring maximum performance." },
      { title: "Induction Furnace Linings", description: "Applied in coreless induction furnace linings for non-ferrous and steel melting." },
      { title: "Electrical Insulation", description: "High-purity MgO filler in mineral-insulated cables and heating elements." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Electrical Insulation", "Non-Ferrous Metals"],
    technicalProfileLabel: "Download Fused Magnesia Technical Profile",
    inquiryTitle: "Request Fused Magnesia Supply",
    image: "/images/minerals/magnesite.png"
  },

  {
    name: "Chrome Ore",
    slug: "chrome-ore",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "FeCr₂O₄",
    shortDescription: "Chromium-bearing ore supplied for ferroalloys, stainless steel, refractories, and foundry applications.",
    overview: "Chrome ore is a critical metallurgical mineral used in ferrochrome production, stainless steel manufacturing, refractory systems, and specialty foundry applications. It is valued for its chromium content, thermal resistance, and strategic role in alloy performance.",
    sourceDetails: {
      sourceName: "Global Chrome Ore Supply Network",
      region: "Multi-Origin",
      country: "South Africa / Turkey / Oman",
      dispatchPorts: ["Durban", "Mundra", "Sohar"],
      sourcingNote: "Commercial supply can be structured by chrome content, Cr:Fe ratio, size fraction, and end-use specification."
    },
    contactDetails: { exportAvailability: "Spot cargo and contract volumes available subject to origin and grade" },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Cr₂O₃", value: "As per confirmed grade" },
      { parameter: "Cr:Fe Ratio", value: "On request" },
      { parameter: "SiO₂", value: "On request" },
      { parameter: "Al₂O₃", value: "On request" },
      { parameter: "Size", value: "Lumpy / calibrated / fines as required" }
    ],
    applications: [
      { title: "Ferroalloy Production", description: "Feedstock in ferrochrome manufacturing for stainless and alloy steel." },
      { title: "Stainless Steel", description: "Chromium input for corrosion resistance and alloy performance." },
      { title: "Refractory Systems", description: "Used in chrome-bearing refractory formulations for high-temperature linings." }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys", "Refractories", "Foundry"],
    technicalProfileLabel: "Download Chrome Ore Technical Profile",
    inquiryTitle: "Request Chrome Ore Supply",
    image: "/images/minerals/chrome-ore.png"
  },

  {
    name: "Chromite Sand",
    slug: "chromite-sand",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "FeCr₂O₄",
    shortDescription: "Angular chromite sand supplied for foundry moulding, refractory applications, and precision steel casting operations.",
    overview: "Chromite sand is a processed chromite mineral in angular sand form, used primarily in foundry moulding and core-making as a chemically stable, high-density facing sand that prevents metal penetration and veining defects in steel castings. In refractories, it is used in chrome-bearing brick formulations.",
    sourceDetails: {
      sourceName: "Chromite Sand Supply",
      region: "Multi-Origin",
      country: "South Africa / Kazakhstan / India",
      dispatchPorts: ["Durban", "Mundra", "Nhava Sheva"],
      sourcingNote: "Available in standard foundry and refractory grades by Cr₂O₃ content and AFS grain fineness."
    },
    contactDetails: { exportAvailability: "Regular containerized and bulk supply available" },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "Cr₂O₃", value: "As per grade" },
      { parameter: "Fe₂O₃ (total)", value: "As per grade" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "AFS Grain Fineness", value: "As per application" },
      { parameter: "Size Distribution", value: "Customized on request" }
    ],
    applications: [
      { title: "Foundry Moulding", description: "Facing and backing sand in ferrous and non-ferrous casting moulds." },
      { title: "Steel Casting", description: "Mould facing sand in steel casting operations where veining resistance is critical." },
      { title: "Refractory Linings", description: "Used in chrome-bearing refractory bricks for selected high-temperature applications." }
    ],
    industries: ["Foundry", "Steel & Metallurgy", "Refractories"],
    technicalProfileLabel: "Download Chromite Sand Technical Profile",
    inquiryTitle: "Request Chromite Sand Supply",
    image: "/images/minerals/chrome-ore.png"
  },

  {
    name: "Graphite",
    slug: "graphite",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "C",
    shortDescription: "Natural and synthetic graphite supplied for refractory bricks, electrodes, lubricants, and advanced energy applications.",
    overview: "Graphite is a crystalline carbon mineral with exceptional thermal conductivity, lubricity, chemical inertness, and electrical conductivity. It is a critical component in magnesia-carbon refractory bricks for steelmaking furnaces, and is widely used in lubricants, foundry coatings, and battery anode materials.",
    sourceDetails: {
      sourceName: "Industrial Graphite Supply",
      region: "Multi-Origin",
      country: "China / India / Mozambique / Canada",
      dispatchPorts: ["Qingdao", "Mundra", "Nacala"],
      sourcingNote: "Available in natural flake, amorphous, and synthetic grades by fixed carbon content and flake size."
    },
    contactDetails: { exportAvailability: "Containerized and bulk supply available" },
    packaging: ["25 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "Fixed Carbon", value: "85–99% (grade dependent)" },
      { parameter: "Ash", value: "As per grade" },
      { parameter: "Moisture", value: "On request" },
      { parameter: "Sulphur", value: "On request" },
      { parameter: "Flake Size", value: "As per application" }
    ],
    applications: [
      { title: "Magnesia-Carbon Bricks", description: "Key ingredient in MgO-C refractory bricks for steel converter and EAF linings." },
      { title: "Lubricants", description: "Dry lubricant and lubricant additive for high-temperature and extreme-pressure applications." },
      { title: "Battery Anode Materials", description: "Natural and synthetic graphite used in lithium-ion battery anode formulations." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Lubricants", "Batteries"],
    technicalProfileLabel: "Download Graphite Technical Profile",
    inquiryTitle: "Request Graphite Supply",
    image: "/images/minerals/graphite.png"
  },

  {
    name: "Brown Fused Alumina",
    slug: "brown-fused-alumina",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "Al₂O₃",
    shortDescription: "Brown fused alumina supplied for abrasives, refractory castables, surface blasting, and wear-resistant ceramic applications.",
    overview: "Brown fused alumina (BFA) is produced by fusing calcined bauxite in an electric arc furnace above 2000 °C, yielding a dense, hard, and tough alpha-alumina product. Its combination of hardness, toughness, and chemical stability makes it ideal for bonded and coated abrasives, refractory castables, and surface preparation applications.",
    sourceDetails: {
      sourceName: "Brown Fused Alumina Supply",
      region: "Multi-Origin",
      country: "China / India / Russia",
      dispatchPorts: ["Qingdao", "Tianjin", "Mundra"],
      sourcingNote: "Available in multiple grit sizes per FEPA/ANSI standards and refractory grain grades."
    },
    contactDetails: { exportAvailability: "Containerized and bulk supply available" },
    packaging: ["25 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "94–97% min" },
      { parameter: "TiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Grit Size", value: "F4–F220 per FEPA / macro and micro grits" },
      { parameter: "Hardness (Mohs)", value: "9" }
    ],
    applications: [
      { title: "Bonded & Coated Abrasives", description: "Grinding wheels, sandpaper, and cutting tools for metal and surface grinding." },
      { title: "Refractory Castables", description: "High-alumina refractory castables for steel, cement, and petrochemical furnaces." },
      { title: "Surface Preparation", description: "Blasting media for metallic and industrial surface cleaning and profiling." }
    ],
    industries: ["Abrasives", "Refractories", "Steel & Metallurgy", "Surface Treatment"],
    technicalProfileLabel: "Download Brown Fused Alumina Technical Profile",
    inquiryTitle: "Request Brown Fused Alumina Supply",
    image: "/images/minerals/brown-fused-alumina.png"
  },

  {
    name: "White Fused Alumina",
    slug: "white-fused-alumina",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "Al₂O₃",
    shortDescription: "High-purity white fused alumina supplied for precision abrasives, advanced refractories, and electronics-grade ceramic applications.",
    overview: "White fused alumina (WFA) is produced by fusing high-purity calcined alumina in an electric arc furnace, yielding >99% Al₂O₃ purity with exceptional hardness, friability, and chemical purity. Compared to BFA, WFA has higher purity and is preferred in precision grinding, advanced refractories, electronics ceramics, and pharmaceutical polishing.",
    sourceDetails: {
      sourceName: "White Fused Alumina Supply",
      region: "Multi-Origin",
      country: "China / India / Austria",
      dispatchPorts: ["Qingdao", "Tianjin", "Mundra"],
      sourcingNote: "Available in standard and premium purity grades across the full FEPA grit range."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "99% min" },
      { parameter: "Na₂O", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Grit Size", value: "F4–F1200 / micro grits on request" },
      { parameter: "Hardness (Mohs)", value: "9" }
    ],
    applications: [
      { title: "Precision Grinding", description: "Premium bonded abrasives for tool grinding and high-finish surface operations." },
      { title: "Advanced Refractory Castables", description: "Ultra-high purity refractory systems for petrochemical and specialty furnaces." },
      { title: "Lapping & Polishing", description: "Precision lapping of optical, electronic, and precision mechanical components." }
    ],
    industries: ["Abrasives", "Refractories", "Electronics", "Technical Ceramics"],
    technicalProfileLabel: "Download White Fused Alumina Technical Profile",
    inquiryTitle: "Request White Fused Alumina Supply",
    image: "/images/minerals/white-fused-alumina.png"
  },

  {
    name: "Silicon Carbide",
    slug: "silicon-carbide",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "SiC",
    shortDescription: "Silicon carbide supplied for refractories, abrasives, kiln furniture, metallurgical de-oxidation, and advanced ceramic applications.",
    overview: "Silicon carbide is a synthetic mineral offering exceptional hardness, thermal conductivity, chemical resistance, and high-temperature stability. In refractories, SiC provides superior abrasion resistance and thermal shock performance. As an abrasive it is used for cutting hard ceramics and non-ferrous metals. In metallurgy it serves as a de-oxidiser and carburiser.",
    sourceDetails: {
      sourceName: "Industrial Silicon Carbide Supply",
      region: "Multi-Origin",
      country: "China / India / Norway",
      dispatchPorts: ["Qingdao", "Mundra", "Nhava Sheva"],
      sourcingNote: "Available in black and green grades across multiple grit and granular sizes by SiC content and application."
    },
    contactDetails: { exportAvailability: "Containerized and bulk supply available" },
    packaging: ["25 kg bags", "1 MT jumbo bags", "Bulk"],
    qualityParameters: [
      { parameter: "SiC", value: "88–98% min (grade dependent)" },
      { parameter: "Free Carbon", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Grit / Granular Size", value: "As per application" }
    ],
    applications: [
      { title: "Refractory Linings", description: "SiC bricks and castables for furnaces and kilns requiring abrasion and thermal shock resistance." },
      { title: "Kiln Furniture", description: "SiC kiln shelves, posts, and setters for ceramic firing operations." },
      { title: "Abrasive Products", description: "Bonded and coated abrasives for grinding hard materials including cemented carbide." }
    ],
    industries: ["Refractories", "Abrasives", "Ceramics", "Steel & Metallurgy"],
    technicalProfileLabel: "Download Silicon Carbide Technical Profile",
    inquiryTitle: "Request Silicon Carbide Supply",
    image: "/images/minerals/silicon-carbide.png"
  },

  {
    name: "Mullite",
    slug: "mullite",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "3Al₂O₃·2SiO₂",
    shortDescription: "Synthetic and fused mullite supplied for high-performance refractories, kiln furniture, and advanced technical ceramics.",
    overview: "Mullite is a stable alumino-silicate phase with outstanding high-temperature strength, low thermal expansion, excellent thermal shock resistance, and chemical stability. Both fused and sintered mullite grades serve premium refractories for glass, ceramic, and petrochemical furnaces, as well as kiln furniture and advanced technical ceramics.",
    sourceDetails: {
      sourceName: "Mullite Supply Network",
      region: "Multi-Origin",
      country: "China / Germany / India",
      dispatchPorts: ["Qingdao", "Mundra"],
      sourcingNote: "Available in sintered and fused grades with varying Al₂O₃ content, density, and grain size."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["25 kg bags", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "60–77% (grade dependent)" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "Bulk Density", value: "On request" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "High-Performance Refractories", description: "Mullite bricks and castables for glass furnaces, ceramic kilns, and petrochemical reactors." },
      { title: "Kiln Furniture", description: "Setters, batts, and furniture requiring dimensional stability and thermal shock resistance." },
      { title: "Advanced Technical Ceramics", description: "Engineering ceramic components requiring low thermal expansion and high-temperature stability." }
    ],
    industries: ["Refractories", "Ceramics", "Glass", "Technical Ceramics"],
    technicalProfileLabel: "Download Mullite Technical Profile",
    inquiryTitle: "Request Mullite Supply",
    image: "/images/minerals/mullite.png"
  },

  {
    name: "Andalusite",
    slug: "andalusite",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "Al₂SiO₅",
    shortDescription: "Natural andalusite supplied for high-performance refractories, steel ladles, and kilns requiring thermal shock resistance.",
    overview: "Andalusite is a naturally occurring Al₂SiO₅ polymorph that converts to mullite upon heating above ~1350 °C, generating controlled expansion that minimises porosity and improves joint integrity in refractory products. It is prized for its low impurity level, self-sintering behaviour, and superior performance in steel ladles, blast furnace troughs, and ceramic kilns.",
    sourceDetails: {
      sourceName: "Andalusite Supply Network",
      region: "Multi-Origin",
      country: "South Africa / France / China",
      dispatchPorts: ["Durban", "Mundra", "Le Havre"],
      sourcingNote: "Available in calcined and raw grades by Al₂O₃ content, grain size, and refractory application."
    },
    contactDetails: { exportAvailability: "Containerized supply available for refractory manufacturers" },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "57–60%" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "TiO₂", value: "As per grade" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "Steel Ladle Refractories", description: "Superior thermal shock and slag corrosion resistance in steel ladle brick formulations." },
      { title: "Blast Furnace Troughs", description: "Applied in cast house and trough refractories for blast furnace operations." },
      { title: "Monolithic Refractory Systems", description: "Incorporated in castable and gunning mix formulations." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Glass", "Ceramics"],
    technicalProfileLabel: "Download Andalusite Technical Profile",
    inquiryTitle: "Request Andalusite Supply",
    image: "/images/minerals/andalusite.png"
  },

  {
    name: "Kyanite",
    slug: "kyanite",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "Al₂SiO₅",
    shortDescription: "Natural kyanite supplied for refractories, mullite synthesis, and high-temperature ceramic applications.",
    overview: "Kyanite is a naturally occurring Al₂SiO₅ polymorph that converts to mullite on high-temperature calcination, undergoing controlled expansion. It is highly valued in refractory formulations, precision investment casting shells, and specialty ceramic systems requiring low shrinkage and high refractoriness.",
    sourceDetails: {
      sourceName: "Kyanite Supply Network",
      region: "Multi-Origin",
      country: "USA / India / Zimbabwe / Brazil",
      dispatchPorts: ["Mundra", "Nhava Sheva"],
      sourcingNote: "Available in raw and calcined grades by Al₂O₃ content and conversion characteristics."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "57–63%" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "LOI", value: "On request" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "Refractory Products", description: "Mullite formation and volume stability in refractory bricks and monolithics." },
      { title: "Investment Casting Shells", description: "Precision investment casting shell systems requiring refractoriness and dimensional accuracy." },
      { title: "Mullite Synthesis", description: "Feedstock for mullite production in refractories and technical ceramics." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Ceramics", "Technical Ceramics"],
    technicalProfileLabel: "Download Kyanite Technical Profile",
    inquiryTitle: "Request Kyanite Supply",
    image: "/images/minerals/kyanite.png"
  },

  {
    name: "Sillimanite",
    slug: "sillimanite",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "Al₂SiO₅",
    shortDescription: "Natural sillimanite supplied for high-alumina refractories, specialty ceramics, and high-temperature industrial applications.",
    overview: "Sillimanite is the third naturally occurring Al₂SiO₅ polymorph, found in metamorphic rocks. It converts to mullite with controlled expansion behaviour and is used in high-alumina refractory bricks, steel industry refractories, specialty ceramics, and selected glass industry applications.",
    sourceDetails: {
      sourceName: "Sillimanite Supply Network",
      region: "Multi-Origin",
      country: "India / South Africa / Madagascar",
      dispatchPorts: ["Mundra", "Kandla", "Durban"],
      sourcingNote: "Available in raw and processed grades by Al₂O₃ content, grade purity, and application specification."
    },
    contactDetails: { exportAvailability: "Containerized supply available" },
    packaging: ["1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "57–63%" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "TiO₂", value: "On request" },
      { parameter: "Grain Size", value: "As per application" }
    ],
    applications: [
      { title: "High-Alumina Refractory Bricks", description: "Manufacture of high-alumina bricks for steel, glass, and cement furnaces." },
      { title: "Steel Industry Refractories", description: "Applied in tundish linings, ladle bricks, and steel plant refractory systems." },
      { title: "Specialty Ceramics", description: "High-temperature ceramic bodies requiring stable alumino-silicate phase." }
    ],
    industries: ["Refractories", "Steel & Metallurgy", "Ceramics", "Glass"],
    technicalProfileLabel: "Download Sillimanite Technical Profile",
    inquiryTitle: "Request Sillimanite Supply",
    image: "/images/minerals/sillimanite.png"
  },

  {
    name: "Chamotte",
    slug: "chamotte",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "Fired fireclay aggregate (Al₂O₃·SiO₂)",
    shortDescription: "Calcined fireclay chamotte supplied for refractory bricks, monolithic linings, and ceramic body grog applications.",
    overview: "Chamotte is produced by calcining or firing fireclay at high temperatures to produce a stable, low-shrinkage refractory aggregate. It is a fundamental raw material in refractory brick manufacture, monolithic refractory systems, and ceramic body formulations where reduction of shrinkage and improved thermal shock resistance are required.",
    sourceDetails: {
      sourceName: "Industrial Chamotte Supply",
      region: "Multi-Origin",
      country: "China / India / Poland / Germany",
      dispatchPorts: ["Qingdao", "Mundra", "Hamburg"],
      sourcingNote: "Available in standard and high-alumina grades by Al₂O₃ content and grain size specification."
    },
    contactDetails: { exportAvailability: "Containerized and bulk supply available" },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "30–45% (standard) / 45–55% (HA)" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "LOI", value: "<1% (calcined)" },
      { parameter: "Grain Size", value: "0–1, 1–3, 3–6 mm as required" }
    ],
    applications: [
      { title: "Refractory Brick Manufacturing", description: "Primary aggregate in fireclay and high-alumina refractory brick formulations." },
      { title: "Monolithic Refractory Systems", description: "Graded aggregate in castables, ramming mixes, and gunning materials." },
      { title: "Ceramic Body Grog", description: "Used in tile and sanitaryware body formulations for shrinkage control." }
    ],
    industries: ["Refractories", "Ceramics", "Steel & Metallurgy"],
    technicalProfileLabel: "Download Chamotte Technical Profile",
    inquiryTitle: "Request Chamotte Supply",
    image: "/images/minerals/chamotte.png"
  },

  {
    name: "Fire Clay",
    slug: "fire-clay",
    category: "Core Refractory Mineral",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Core Refractory Minerals",
    formula: "Al₂O₃·2SiO₂·2H₂O (variable)",
    shortDescription: "Natural refractory clay supplied for fireclay bricks, refractory mortars, and monolithic lining systems.",
    overview: "Fire clay is a naturally occurring refractory clay mineral with sufficient alumina content to withstand high industrial temperatures. It serves as a plastic binder and filler in fireclay refractory products and as a raw material for chamotte production. Selection is based on refractoriness under load (RUL), alumina content, plasticity, and mineral purity.",
    sourceDetails: {
      sourceName: "Refractory Fire Clay Supply",
      region: "Multi-Origin",
      country: "India / China / Ukraine / Poland",
      dispatchPorts: ["Mundra", "Kandla", "Qingdao"],
      sourcingNote: "Available in lump, crushed, and washed grades by Al₂O₃, RUL, and plasticity requirements."
    },
    contactDetails: { exportAvailability: "Containerized and bulk supply available" },
    packaging: ["1 MT jumbo bags", "25 kg bags", "Bulk"],
    qualityParameters: [
      { parameter: "Al₂O₃", value: "25–45% (grade dependent)" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Fe₂O₃", value: "As per grade" },
      { parameter: "LOI", value: "As per grade" },
      { parameter: "PCE", value: "On request" }
    ],
    applications: [
      { title: "Fireclay Refractory Bricks", description: "Primary raw material in fireclay brick manufacture for industrial furnaces and kilns." },
      { title: "Refractory Mortars & Castables", description: "Plastic binder and filler in refractory mortar and castable formulations." },
      { title: "Chamotte Production", description: "Calcined to produce chamotte aggregate for refractory and ceramic applications." }
    ],
    industries: ["Refractories", "Ceramics", "Steel & Metallurgy"],
    technicalProfileLabel: "Download Fire Clay Technical Profile",
    inquiryTitle: "Request Fire Clay Supply",
    image: "/images/minerals/fire-clay.png"
  },

  // ─── REFRACTORY & STEEL INDUSTRY — Steel & Foundry Raw Materials ─────────

  {
    name: "Manganese Ore",
    slug: "manganese-ore",
    category: "Steel & Foundry Raw Material",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Steel & Foundry Raw Materials",
    formula: "MnO₂ / Mn-bearing ore",
    shortDescription: "Manganese-bearing ore supplied for steelmaking, ferroalloy production, and metallurgical processing.",
    overview: "Manganese ore is a strategically important metallurgical mineral used primarily in steelmaking and ferroalloy production. It plays an essential role in deoxidation, alloy balance, and metallurgical efficiency, with commercial selection based on manganese content, gangue profile, and sizing.",
    sourceDetails: {
      sourceName: "Global Manganese Ore Supply",
      region: "Multi-Origin",
      country: "South Africa / Gabon / India",
      dispatchPorts: ["Durban", "Port Elizabeth", "Mundra"],
      sourcingNote: "Supplied in commercial grades suitable for metallurgical buyers requiring stable quality and supply continuity."
    },
    contactDetails: { exportAvailability: "Bulk and containerized dispatch available depending on grade and tonnage" },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Mn", value: "As per confirmed grade" },
      { parameter: "Fe", value: "On request" },
      { parameter: "SiO₂", value: "On request" },
      { parameter: "P", value: "On request" },
      { parameter: "Size", value: "Lumpy / fines as specified" }
    ],
    applications: [
      { title: "Steelmaking", description: "Supports alloy balance and metallurgical performance in carbon and alloy steel production." },
      { title: "Ferroalloy Production", description: "Feedstock for manganese alloy manufacturing across industrial steel applications." }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys", "Foundry"],
    technicalProfileLabel: "Download Manganese Ore Technical Profile",
    inquiryTitle: "Request Manganese Ore Supply",
    image: "/images/minerals/manganese-ore.png"
  },

  {
    name: "Ferro Manganese",
    slug: "ferro-manganese",
    category: "Steel & Foundry Raw Material",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Steel & Foundry Raw Materials",
    formula: "FeMn",
    shortDescription: "Ferro manganese supplied for steelmaking deoxidation, alloying, and sulphur control in carbon and alloy steel production.",
    overview: "Ferro manganese is a ferroalloy containing manganese and iron, produced in high-carbon (HC), medium-carbon (MC), and low-carbon (LC) grades. It is the primary manganese alloying addition in steelmaking, providing deoxidation, desulphurisation, and alloy composition control. Manganese improves tensile strength, hardenability, and wear resistance.",
    sourceDetails: {
      sourceName: "Ferro Manganese Supply",
      region: "Multi-Origin",
      country: "China / South Africa / India / Norway",
      dispatchPorts: ["Qingdao", "Durban", "Mundra"],
      sourcingNote: "Available in HC, MC, and LC grades by Mn content, carbon level, and sizing specification."
    },
    contactDetails: { exportAvailability: "Bulk and containerized supply available" },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Mn", value: "65–80% (grade dependent)" },
      { parameter: "C", value: "HC: 6–8% / MC: 1–2% / LC: <0.5%" },
      { parameter: "Si", value: "As per grade" },
      { parameter: "P", value: "As per grade" },
      { parameter: "Size", value: "Lumpy / screened as required" }
    ],
    applications: [
      { title: "Steel Deoxidation", description: "Removes dissolved oxygen and improves steel cleanliness during tapping." },
      { title: "Alloy Composition Control", description: "Achieves target manganese content in carbon and structural steel grades." },
      { title: "Desulphurisation", description: "Reacts with sulphur to form MnS, improving steel workability." }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys", "Foundry"],
    technicalProfileLabel: "Download Ferro Manganese Technical Profile",
    inquiryTitle: "Request Ferro Manganese Supply",
    image: "/images/minerals/ferro-manganese.png"
  },

  {
    name: "Silico Manganese",
    slug: "silico-manganese",
    category: "Steel & Foundry Raw Material",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Steel & Foundry Raw Materials",
    formula: "SiMn",
    shortDescription: "Silico manganese supplied as a combined silicon-manganese deoxidiser and alloying agent for steelmaking.",
    overview: "Silico manganese combines manganese, silicon, and iron and is widely used in steelmaking as a cost-efficient combined deoxidant and alloying agent, contributing both Mn and Si to the steel heat simultaneously. Its dual alloying function makes it one of the most commonly used ferroalloys globally.",
    sourceDetails: {
      sourceName: "Silico Manganese Supply",
      region: "Multi-Origin",
      country: "India / China / South Africa / Ukraine",
      dispatchPorts: ["Mundra", "Qingdao", "Durban"],
      sourcingNote: "Available in standard and high-Mn grades by Mn, Si, and C content with customer sizing specification."
    },
    contactDetails: { exportAvailability: "Bulk and containerized supply available" },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Mn", value: "60–70% (grade dependent)" },
      { parameter: "Si", value: "14–20% (grade dependent)" },
      { parameter: "C", value: "As per grade" },
      { parameter: "P", value: "As per grade" },
      { parameter: "Size", value: "Lumpy / screened as required" }
    ],
    applications: [
      { title: "Steelmaking Deoxidation", description: "Combined Si-Mn deoxidant added during tapping or ladle metallurgy." },
      { title: "Silicon & Manganese Alloying", description: "Single addition providing both Si and Mn alloying to carbon and structural steel grades." }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys"],
    technicalProfileLabel: "Download Silico Manganese Technical Profile",
    inquiryTitle: "Request Silico Manganese Supply",
    image: "/images/minerals/silico-manganese.png"
  },

  {
    name: "Ferro Chrome",
    slug: "ferro-chrome",
    category: "Steel & Foundry Raw Material",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Steel & Foundry Raw Materials",
    formula: "FeCr",
    shortDescription: "Ferro chrome supplied for stainless steel production, chrome alloying, and specialty steel applications.",
    overview: "Ferro chrome is a ferroalloy of chromium and iron and the primary source of chromium addition in stainless steel production, providing corrosion resistance, hardness, and heat resistance. High-carbon ferrochrome is used in stainless steel production while charge chrome is used in the integrated melting route.",
    sourceDetails: {
      sourceName: "Ferro Chrome Supply Network",
      region: "Multi-Origin",
      country: "South Africa / India / Kazakhstan / Zimbabwe",
      dispatchPorts: ["Durban", "Mundra", "Aktau"],
      sourcingNote: "Available in charge chrome, high-carbon, and low-carbon grades by Cr content, carbon level, and sizing."
    },
    contactDetails: { exportAvailability: "Bulk and containerized supply available for steelmakers" },
    packaging: ["Bulk cargo", "1 MT jumbo bags"],
    qualityParameters: [
      { parameter: "Cr", value: "50–70% (grade dependent)" },
      { parameter: "C", value: "HC: 6–9% / LC: <0.5%" },
      { parameter: "Si", value: "As per grade" },
      { parameter: "P", value: "As per grade" },
      { parameter: "Size", value: "As per application" }
    ],
    applications: [
      { title: "Stainless Steel Production", description: "Primary chromium alloying addition in austenitic, ferritic, and martensitic stainless steel." },
      { title: "Alloy & Tool Steel", description: "Chromium-bearing alloy and tool steel grades for wear and corrosion resistance." },
      { title: "Specialty Castings", description: "White iron and chromium-bearing casting alloys for abrasion-resistant components." }
    ],
    industries: ["Steel & Metallurgy", "Ferroalloys", "Stainless Steel"],
    technicalProfileLabel: "Download Ferro Chrome Technical Profile",
    inquiryTitle: "Request Ferro Chrome Supply",
    image: "/images/minerals/ferro-chrome.png"
  },

  {
    name: "Iron Ore",
    slug: "iron-ore",
    category: "Steel & Foundry Raw Material",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Steel & Foundry Raw Materials",
    formula: "Fe₂O₃ / Fe₃O₄",
    shortDescription: "Iron ore supplied for blast furnace ironmaking, direct reduction, and sintering plant operations in integrated steel production.",
    overview: "Iron ore is the primary raw material for iron and steel production globally. Haematite (Fe₂O₃) and magnetite (Fe₃O₄) are the dominant commercial minerals. It is supplied in lump, sinter feed, and pellet feed forms for blast furnace ironmaking, direct reduced iron (DRI) production, and EAF steelmaking.",
    sourceDetails: {
      sourceName: "Global Iron Ore Supply",
      region: "Multi-Origin",
      country: "India / Brazil / Australia / South Africa",
      dispatchPorts: ["Visakhapatnam", "Mundra", "Tubarao", "Port Hedland"],
      sourcingNote: "Available in lump, fines, pellet, and sinter feed grades by Fe content, Al₂O₃, SiO₂ gangue, and LOI specification."
    },
    contactDetails: { exportAvailability: "Bulk cargo supply available for integrated steel and DRI plants" },
    packaging: ["Bulk cargo", "Cape / Panamax / Supramax vessel"],
    qualityParameters: [
      { parameter: "Fe (Total)", value: "As per confirmed grade" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Al₂O₃", value: "As per grade" },
      { parameter: "P", value: "As per grade" },
      { parameter: "Size", value: "Lump / sinter fines / pellet feed" }
    ],
    applications: [
      { title: "Blast Furnace Ironmaking", description: "Primary raw material charged to blast furnaces for hot metal production." },
      { title: "Direct Reduction (DRI/HBI)", description: "Pellet/lump feed in gas-based direct reduction plants for sponge iron." },
      { title: "Sintering Plants", description: "Sinter fines for sintering plants producing blast furnace burden." }
    ],
    industries: ["Steel & Metallurgy", "Iron Production", "Foundry"],
    technicalProfileLabel: "Download Iron Ore Technical Profile",
    inquiryTitle: "Request Iron Ore Supply",
    image: "/images/minerals/iron-ore.png"
  },

  {
    name: "Fluorspar",
    slug: "fluorspar",
    category: "Steel & Foundry Raw Material",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Steel & Foundry Raw Materials",
    formula: "CaF₂",
    shortDescription: "Fluorspar supplied for metallurgical flux, aluminum production, chemical processing, and industrial flux applications.",
    overview: "Fluorspar is a strategically important fluorine-bearing mineral used across metallurgical, aluminum, and chemical processing industries. It is commercially relevant in steelmaking as a fluxing mineral and as a feed mineral in downstream fluorochemical value chains. Selection depends on CaF₂ content, impurity profile, and process suitability.",
    sourceDetails: {
      sourceName: "Multi-Origin Fluorspar Supply",
      region: "Multi-Origin",
      country: "India / Mongolia / Mexico / South Africa",
      dispatchPorts: ["Mundra", "Kandla", "Durban"],
      sourcingNote: "Commercially structured supply available for metallurgical and industrial buyers by grade and impurity profile."
    },
    contactDetails: { exportAvailability: "Containerized and contract supply available subject to grade and market conditions" },
    packaging: ["1 MT jumbo bags", "Bulk bags", "Containerized dispatch"],
    qualityParameters: [
      { parameter: "CaF₂", value: "As per confirmed grade" },
      { parameter: "SiO₂", value: "On request" },
      { parameter: "CaCO₃", value: "On request" },
      { parameter: "Fe₂O₃", value: "On request" },
      { parameter: "LOI", value: "On request" }
    ],
    applications: [
      { title: "Steelmaking", description: "Fluxing mineral in metallurgical operations supporting process behaviour and slag control." },
      { title: "Aluminium Production", description: "Applicable in aluminum-related industrial systems requiring fluorine-bearing mineral input." },
      { title: "Chemical Processing", description: "Feed mineral in fluorochemical value chains depending on grade." }
    ],
    industries: ["Steel & Metallurgy", "Aluminium", "Chemical Processing", "Industrial Flux Systems"],
    technicalProfileLabel: "Download Fluorspar Technical Profile",
    inquiryTitle: "Request Fluorspar Supply",
    image: "/images/minerals/fluorspar.png"
  },

  {
    name: "Lime",
    slug: "lime",
    category: "Steel & Foundry Raw Material",
    industryGroups: ["Refractory & Steel Industry"],
    subCategory: "Steel & Foundry Raw Materials",
    formula: "CaO",
    shortDescription: "Quicklime and hydrated lime supplied for steelmaking slag conditioning, water treatment, construction, and chemical processing.",
    overview: "Lime (quicklime, CaO) is produced by calcining limestone and is an essential industrial mineral in steelmaking, water treatment, construction, and chemical processing. In steel production, it is used in BOF and EAF as the primary slag-forming material controlling basicity, desulphurisation, and slag fluidity.",
    sourceDetails: {
      sourceName: "Industrial Lime Supply",
      region: "Multi-Origin",
      country: "India / Oman / Turkey",
      dispatchPorts: ["Mundra", "Kandla", "Sohar"],
      sourcingNote: "Available in quicklime lump, quicklime powder, and hydrated lime grades by CaO content and reactivity."
    },
    contactDetails: { exportAvailability: "Bulk and packaged supply available" },
    packaging: ["Bulk cargo", "1 MT jumbo bags", "25 kg bags"],
    qualityParameters: [
      { parameter: "CaO", value: "As per confirmed grade" },
      { parameter: "MgO", value: "On request" },
      { parameter: "SiO₂", value: "As per grade" },
      { parameter: "Reactivity (t60)", value: "On request" },
      { parameter: "LOI", value: "On request" }
    ],
    applications: [
      { title: "Steelmaking", description: "Primary slag-forming agent in BOF and EAF steelmaking for basicity control and desulphurisation." },
      { title: "Water Treatment", description: "pH adjustment and softening in municipal and industrial water treatment." },
      { title: "Construction Materials", description: "Used in mortars, plasters, soil stabilisation, and construction mineral applications." }
    ],
    industries: ["Steel & Metallurgy", "Construction Materials", "Chemical Processing", "Water Treatment"],
    technicalProfileLabel: "Download Lime Technical Profile",
    inquiryTitle: "Request Lime Supply",
    image: "/images/minerals/lime.png"
  }

];
