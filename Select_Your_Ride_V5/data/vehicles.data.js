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

{
  id: "honda_activa_6g",
  brand: "Honda",
  model: "Activa 6G",
  type: "scooter",

  ergonomics: {
    seatHeight: 765,
    posture: "relaxed",
    wheelSize: 12
  },

  usage: {
    city: 93,
    highway: 35
  },

  physical: {
    kerbWeight: 106,
    groundClearance: 162
  },

  segment: "family_scooter",
  skillLevel: "beginner"
},
{
  id: "honda_dio_125",
  brand: "Honda",
  model: "Dio 125",
  type: "scooter",

  ergonomics: {
    seatHeight: 765,
    posture: "relaxed",
    wheelSize: 12
  },

  usage: {
    city: 90,
    highway: 40
  },

  physical: {
    kerbWeight: 107,
    groundClearance: 160
  },

  segment: "youth_scooter",
  skillLevel: "beginner"
}

{
  id: "tvs_jupiter_125",
  brand: "TVS",
  model: "Jupiter 125",
  type: "scooter",

  ergonomics: {
    seatHeight: 765,
    posture: "relaxed",
    wheelSize: 12
  },

  usage: {
    city: 92,
    highway: 38
  },

  physical: {
    kerbWeight: 108,
    groundClearance: 163
  },

  segment: "family_scooter",
  skillLevel: "beginner"
},
{
  id: "tvs_ntorq_125",
  brand: "TVS",
  model: "Ntorq 125",
  type: "scooter",

  ergonomics: {
    seatHeight: 770,
    posture: "sport",
    wheelSize: 12
  },

  usage: {
    city: 90,
    highway: 40
  },

  physical: {
    kerbWeight: 118,
    groundClearance: 155
  },

  segment: "performance_scooter",
  skillLevel: "beginner"
}

{
  id: "suzuki_access_125",
  brand: "Suzuki",
  model: "Access 125",
  type: "scooter",

  ergonomics: {
    seatHeight: 773,
    posture: "relaxed",
    wheelSize: 12
  },

  usage: {
    city: 90,
    highway: 45
  },

  physical: {
    kerbWeight: 104,
    groundClearance: 160
  },

  segment: "family_scooter",
  skillLevel: "beginner"
},
{
  id: "suzuki_burgman_street",
  brand: "Suzuki",
  model: "Burgman Street",
  type: "scooter",

  ergonomics: {
    seatHeight: 780,
    posture: "relaxed",
    wheelSize: 12
  },

  usage: {
    city: 85,
    highway: 50
  },

  physical: {
    kerbWeight: 111,
    groundClearance: 160
  },

  segment: "maxi_scooter",
  skillLevel: "beginner"
}

{
  id: "yamaha_ray_zr_125",
  brand: "Yamaha",
  model: "Ray ZR 125",
  type: "scooter",

  ergonomics: {
    seatHeight: 785,
    posture: "sport",
    wheelSize: 12
  },

  usage: {
    city: 88,
    highway: 45
  },

  physical: {
    kerbWeight: 99,
    groundClearance: 145
  },

  segment: "youth_scooter",
  skillLevel: "beginner"
}

{
  id: "maruti_swift",
  brand: "Maruti Suzuki",
  model: "Swift",
  type: "car",

  ergonomics: {
    seatHeight: 1635,
    posture: "seated",
    wheelSize: 15
  },

  usage: {
    city: 88,
    highway: 70
  },

  physical: {
    kerbWeight: 875,
    groundClearance: 163
  },

  segment: "hatchback",
  skillLevel: "beginner"
},
{
  id: "maruti_baleno",
  brand: "Maruti Suzuki",
  model: "Baleno",
  type: "car",

  ergonomics: {
    seatHeight: 1650,
    posture: "seated",
    wheelSize: 16
  },

  usage: {
    city: 90,
    highway: 72
  },

  physical: {
    kerbWeight: 925,
    groundClearance: 170
  },

  segment: "premium_hatchback",
  skillLevel: "beginner"
}

{
  id: "hyundai_i20",
  brand: "Hyundai",
  model: "i20",
  type: "car",

  ergonomics: {
    seatHeight: 1650,
    posture: "seated",
    wheelSize: 16
  },

  usage: {
    city: 75,
    highway: 80
  },

  physical: {
    kerbWeight: 1035,
    groundClearance: 170
  },

  segment: "premium_hatchback",
  skillLevel: "beginner"
},
{
  id: "hyundai_verna",
  brand: "Hyundai",
  model: "Verna",
  type: "car",

  ergonomics: {
    seatHeight: 1660,
    posture: "seated",
    wheelSize: 16
  },

  usage: {
    city: 70,
    highway: 85
  },

  physical: {
    kerbWeight: 1150,
    groundClearance: 165
  },

  segment: "sedan",
  skillLevel: "beginner"
}

{
  id: "kia_seltos",
  brand: "Kia",
  model: "Seltos",
  type: "suv",

  ergonomics: {
    seatHeight: 1700,
    posture: "seated",
    wheelSize: 17
  },

  usage: {
    city: 70,
    highway: 85
  },

  physical: {
    kerbWeight: 1250,
    groundClearance: 190
  },

  segment: "compact_suv",
  skillLevel: "beginner"
}

{
  id: "tata_nexon",
  brand: "Tata",
  model: "Nexon",
  type: "suv",

  ergonomics: {
    seatHeight: 1690,
    posture: "seated",
    wheelSize: 16
  },

  usage: {
    city: 72,
    highway: 83
  },

  physical: {
    kerbWeight: 1200,
    groundClearance: 209
  },

  segment: "compact_suv",
  skillLevel: "beginner"
},
{
  id: "tata_harrier",
  brand: "Tata",
  model: "Harrier",
  type: "suv",

  ergonomics: {
    seatHeight: 1710,
    posture: "seated",
    wheelSize: 18
  },

  usage: {
    city: 65,
    highway: 88
  },

  physical: {
    kerbWeight: 1650,
    groundClearance: 205
  },

  segment: "mid_suv",
  skillLevel: "intermediate"
}

{
  id: "mahindra_xuv300",
  brand: "Mahindra",
  model: "XUV 3OO",
  type: "suv",

  ergonomics: {
    seatHeight: 1680,
    posture: "seated",
    wheelSize: 17
  },

  usage: {
    city: 74,
    highway: 82
  },

  physical: {
    kerbWeight: 1230,
    groundClearance: 180
  },

  segment: "compact_suv",
  skillLevel: "beginner"
}