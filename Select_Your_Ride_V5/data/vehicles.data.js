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

{
  id: "honda_cb350",
  brand: "Honda",
  model: "CB 350",
  type: "bike",

  ergonomics: {
    seatHeight: 800,
    posture: "upright",
    wheelSize: 19
  },

  usage: {
    city: 65,
    highway: 85
  },

  physical: {
    kerbWeight: 181,
    groundClearance: 166
  },

  segment: "cruiser",
  skillLevel: "beginner"
},
{
  id: "honda_cb300f",
  brand: "Honda",
  model: "CB300F",
  type: "bike",

  ergonomics: {
    seatHeight: 789,
    posture: "sport",
    wheelSize: 17
  },

  usage: {
    city: 75,
    highway: 70
  },

  physical: {
    kerbWeight: 153,
    groundClearance: 177
  },

  segment: "street",
  skillLevel: "intermediate"
}