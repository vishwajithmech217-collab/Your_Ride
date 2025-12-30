const VEHICLES = [
  {
    id: "yamaha_mt15",
    brand: "Yamaha",
    model: "MT-15",
    type: "bike",

    ergonomics: {
      seatHeight: 810,
      posture: "sport",        // sport | upright | relaxed | seated
      wheelSize: 17
    },

    usage: {
      city: 70,
      highway: 80
    },

    physical: {
      kerbWeight: 141,
      groundClearance: 170
    },

    segment: "street",
    skillLevel: "intermediate" // beginner | intermediate | expert
  },

  {
    id: "re_classic_350",
    brand: "Royal Enfield",
    model: "Classic 350",
    type: "bike",

    ergonomics: {
      seatHeight: 805,
      posture: "upright",
      wheelSize: 19
    },

    usage: {
      city: 60,
      highway: 85
    },

    physical: {
      kerbWeight: 195,
      groundClearance: 170
    },

    segment: "cruiser",
    skillLevel: "beginner"
  }
];