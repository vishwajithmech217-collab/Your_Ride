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

{
  id: "yamaha_fz_v4",
  brand: "Yamaha",
  model: "FZ V4",
  type: "bike",

  ergonomics: {
    seatHeight: 790,
    posture: "upright",
    wheelSize: 17
  },

  usage: {
    city: 80,
    highway: 65
  },

  physical: {
    kerbWeight: 135,
    groundClearance: 165
  },

  segment: "street",
  skillLevel: "beginner"
},
{
  id: "yamaha_r15_v4",
  brand: "Yamaha",
  model: "R15 V4",
  type: "bike",

  ergonomics: {
    seatHeight: 815,
    posture: "sport",
    wheelSize: 17
  },

  usage: {
    city: 55,
    highway: 85
  },

  physical: {
    kerbWeight: 142,
    groundClearance: 170
  },

  segment: "sport",
  skillLevel: "intermediate"
}

{
  id: "re_meteor_350",
  brand: "Royal Enfield",
  model: "Meteor 350",
  type: "bike",

  ergonomics: {
    seatHeight: 765,
    posture: "relaxed",
    wheelSize: 19
  },

  usage: {
    city: 70,
    highway: 80
  },

  physical: {
    kerbWeight: 191,
    groundClearance: 170
  },

  segment: "cruiser",
  skillLevel: "beginner"
},
{
  id: "re_himalayan_411",
  brand: "Royal Enfield",
  model: "Himalayan 411",
  type: "bike",

  ergonomics: {
    seatHeight: 800,
    posture: "upright",
    wheelSize: 21
  },

  usage: {
    city: 60,
    highway: 75
  },

  physical: {
    kerbWeight: 199,
    groundClearance: 220
  },

  segment: "adventure",
  skillLevel: "intermediate"
}

{
  id: "bajaj_pulsar_150",
  brand: "Bajaj",
  model: "Pulsar 150",
  type: "bike",

  ergonomics: {
    seatHeight: 790,
    posture: "upright",
    wheelSize: 17
  },

  usage: {
    city: 85,
    highway: 65
  },

  physical: {
    kerbWeight: 148,
    groundClearance: 165
  },

  segment: "commuter",
  skillLevel: "beginner"
},
{
  id: "bajaj_dominar_400",
  brand: "Bajaj",
  model: "Dominar 400",
  type: "bike",

  ergonomics: {
    seatHeight: 800,
    posture: "upright",
    wheelSize: 17
  },

  usage: {
    city: 65,
    highway: 90
  },

  physical: {
    kerbWeight: 193,
    groundClearance: 157
  },

  segment: "tourer",
  skillLevel: "intermediate"
}

{
  id: "tvs_apache_rtr_160",
  brand: "TVS",
  model: "Apache RTR 160 4V",
  type: "bike",

  ergonomics: {
    seatHeight: 800,
    posture: "sport",
    wheelSize: 17
  },

  usage: {
    city: 75,
    highway: 70
  },

  physical: {
    kerbWeight: 146,
    groundClearance: 180
  },

  segment: "street",
  skillLevel: "beginner"
},
{
  id: "tvs_ronin_225",
  brand: "TVS",
  model: "Ronin 225",
  type: "bike",

  ergonomics: {
    seatHeight: 795,
    posture: "upright",
    wheelSize: 17
  },

  usage: {
    city: 70,
    highway: 75
  },

  physical: {
    kerbWeight: 160,
    groundClearance: 181
  },

  segment: "roadster",
  skillLevel: "beginner"
}