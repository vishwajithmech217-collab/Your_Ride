const VEHICLES = [

  /* ================= BIKES ================= */

  {
    id: "yamaha_mt15",
    brand: "Yamaha",
    model: "MT-15",
    type: "bike",
    ergonomics: { seatHeight: 810, posture: "sport", wheelSize: 17 },
    usage: { city: 70, highway: 80 },
    physical: { kerbWeight: 141, groundClearance: 170 },
    segment: "street",
    skillLevel: "intermediate"
  },

  {
    id: "re_classic_350",
    brand: "Royal Enfield",
    model: "Classic 350",
    type: "bike",
    ergonomics: { seatHeight: 805, posture: "upright", wheelSize: 19 },
    usage: { city: 60, highway: 85 },
    physical: { kerbWeight: 195, groundClearance: 170 },
    segment: "cruiser",
    skillLevel: "beginner"
  },

  {
    id: "honda_cb350",
    brand: "Honda",
    model: "CB 350",
    type: "bike",
    ergonomics: { seatHeight: 800, posture: "upright", wheelSize: 19 },
    usage: { city: 65, highway: 85 },
    physical: { kerbWeight: 181, groundClearance: 166 },
    segment: "cruiser",
    skillLevel: "beginner"
  },

  {
    id: "yamaha_r15_v4",
    brand: "Yamaha",
    model: "R15 V4",
    type: "bike",
    ergonomics: { seatHeight: 815, posture: "sport", wheelSize: 17 },
    usage: { city: 55, highway: 85 },
    physical: { kerbWeight: 142, groundClearance: 170 },
    segment: "sport",
    skillLevel: "intermediate"
  },

  /* ================= SCOOTERS ================= */

  {
    id: "honda_activa_6g",
    brand: "Honda",
    model: "Activa 6G",
    type: "scooter",
    ergonomics: { seatHeight: 765, posture: "relaxed", wheelSize: 12 },
    usage: { city: 93, highway: 35 },
    physical: { kerbWeight: 106, groundClearance: 162 },
    segment: "family_scooter",
    skillLevel: "beginner"
  },

  {
    id: "tvs_ntorq_125",
    brand: "TVS",
    model: "Ntorq 125",
    type: "scooter",
    ergonomics: { seatHeight: 770, posture: "sport", wheelSize: 12 },
    usage: { city: 90, highway: 40 },
    physical: { kerbWeight: 118, groundClearance: 155 },
    segment: "performance_scooter",
    skillLevel: "beginner"
  },

  /* ================= CARS ================= */

  {
    id: "maruti_swift",
    brand: "Maruti Suzuki",
    model: "Swift",
    type: "car",
    ergonomics: { seatHeight: 1635, posture: "seated", wheelSize: 15 },
    usage: { city: 88, highway: 70 },
    physical: { kerbWeight: 875, groundClearance: 163 },
    segment: "hatchback",
    skillLevel: "beginner"
  },

  /* ================= SUVs ================= */

  {
    id: "tata_nexon",
    brand: "Tata",
    model: "Nexon",
    type: "suv",
    ergonomics: { seatHeight: 1690, posture: "seated", wheelSize: 16 },
    usage: { city: 72, highway: 83 },
    physical: { kerbWeight: 1200, groundClearance: 209 },
    segment: "compact_suv",
    skillLevel: "beginner"
  }

];