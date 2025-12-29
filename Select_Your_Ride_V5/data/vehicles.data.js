const VEHICLES = [

  /* =========================
     🏍️ BIKES
  ========================== */

  // 🔵 YAMAHA
  {
    id: "yamaha_mt15",
    brand: "Yamaha",
    model: "MT-15",
    type: "bike",
    seatHeight: 810,
    groundClearance: 170,
    kerbWeight: 141,
    posture: "sport",
    cityBias: 70,
    highwayBias: 80,
    segment: "street",
    wheelSize: 17
  },
  {
    id: "yamaha_r15",
    brand: "Yamaha",
    model: "R15 V4",
    type: "bike",
    seatHeight: 815,
    groundClearance: 170,
    kerbWeight: 142,
    posture: "sport",
    cityBias: 55,
    highwayBias: 85,
    segment: "sport",
    wheelSize: 17
  },

  // 🔴 ROYAL ENFIELD
  {
    id: "re_classic_350",
    brand: "Royal Enfield",
    model: "Classic 350",
    type: "bike",
    seatHeight: 805,
    groundClearance: 170,
    kerbWeight: 195,
    posture: "upright",
    cityBias: 60,
    highwayBias: 85,
    segment: "cruiser",
    wheelSize: 19
  },
  {
    id: "re_hunter_350",
    brand: "Royal Enfield",
    model: "Hunter 350",
    type: "bike",
    seatHeight: 800,
    groundClearance: 150,
    kerbWeight: 181,
    posture: "upright",
    cityBias: 75,
    highwayBias: 70,
    segment: "roadster",
    wheelSize: 17
  },

  // 🟡 BAJAJ
  {
    id: "bajaj_pulsar_ns200",
    brand: "Bajaj",
    model: "Pulsar NS200",
    type: "bike",
    seatHeight: 805,
    groundClearance: 168,
    kerbWeight: 159,
    posture: "sport",
    cityBias: 70,
    highwayBias: 80,
    segment: "street",
    wheelSize: 17
  },

  /* =========================
     🛵 SCOOTERS
  ========================== */

  // 🟡 TVS
  {
    id: "tvs_ntorq_125",
    brand: "TVS",
    model: "Ntorq 125",
    type: "scooter",
    seatHeight: 770,
    groundClearance: 155,
    kerbWeight: 118,
    posture: "relaxed",
    cityBias: 90,
    highwayBias: 40,
    segment: "performance_scooter",
    wheelSize: 12
  },
  {
    id: "tvs_jupiter_125",
    brand: "TVS",
    model: "Jupiter 125",
    type: "scooter",
    seatHeight: 765,
    groundClearance: 163,
    kerbWeight: 108,
    posture: "relaxed",
    cityBias: 92,
    highwayBias: 38,
    segment: "family_scooter",
    wheelSize: 12
  },

  // 🟢 HONDA
  {
    id: "honda_activa_6g",
    brand: "Honda",
    model: "Activa 6G",
    type: "scooter",
    seatHeight: 765,
    groundClearance: 162,
    kerbWeight: 106,
    posture: "relaxed",
    cityBias: 93,
    highwayBias: 35,
    segment: "family_scooter",
    wheelSize: 12
  },

  // ⚡ ELECTRIC
  {
    id: "ather_450x",
    brand: "Ather",
    model: "450X",
    type: "scooter",
    seatHeight: 780,
    groundClearance: 165,
    kerbWeight: 108,
    posture: "upright",
    cityBias: 95,
    highwayBias: 45,
    segment: "electric_scooter",
    wheelSize: 12
  },

  /* =========================
     🚗 CARS
  ========================== */

  // ⚫ HYUNDAI
  {
    id: "hyundai_i20",
    brand: "Hyundai",
    model: "i20",
    type: "car",
    seatHeight: 1650,
    groundClearance: 170,
    kerbWeight: 1035,
    posture: "seated",
    cityBias: 75,
    highwayBias: 80,
    segment: "hatchback",
    wheelSize: 16
  },

  // 🔵 MARUTI
  {
    id: "maruti_swift",
    brand: "Maruti Suzuki",
    model: "Swift",
    type: "car",
    seatHeight: 1635,
    groundClearance: 163,
    kerbWeight: 875,
    posture: "seated",
    cityBias: 85,
    highwayBias: 70,
    segment: "hatchback",
    wheelSize: 15
  },

  /* =========================
     🚙 SUVs
  ========================== */

  // 🔴 KIA
  {
    id: "kia_seltos",
    brand: "Kia",
    model: "Seltos",
    type: "suv",
    seatHeight: 1700,
    groundClearance: 190,
    kerbWeight: 1250,
    posture: "seated",
    cityBias: 70,
    highwayBias: 85,
    segment: "compact_suv",
    wheelSize: 17
  },

  // 🟢 TATA
  {
    id: "tata_nexon",
    brand: "Tata",
    model: "Nexon",
    type: "suv",
    seatHeight: 1690,
    groundClearance: 209,
    kerbWeight: 1200,
    posture: "seated",
    cityBias: 72,
    highwayBias: 83,
    segment: "compact_suv",
    wheelSize: 16
  }

];