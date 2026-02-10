/*************************************************
 * AUTO-FIXED BRAND DATA (BIKES + CARS)
 * Works with know.js and model.js
 *************************************************/
window.BRANDS = [];

/* ================= HELPERS ================= */
function normalizeBrand(name) {
  return name?.trim();
}

function addToBrands(brandName, modelObj) {
  brandName = normalizeBrand(brandName);
  if (!brandName) return;

  let brand = window.BRANDS.find(b => b.brand === brandName);
  if (!brand) {
    brand = { brand: brandName, models: [] };
    window.BRANDS.push(brand);
  }

  // prevent duplicate IDs
  if (!brand.models.find(m => m.id === modelObj.id)) {
    brand.models.push(modelObj);
  }
}

/* ================= BIKE DATA ================= */
/* PASTE FULL bike.json CONTENT HERE (ARRAY ONLY) */
const BIKE_DATA = [
  {
    "id": "aprilia_rs_457",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Aprilia",
    "model": "rs 457",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 175,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 457.0,
      "power_raw": "46.9 bhp @ 9400 rpm",
      "torque_raw": "43.5 Nm @ 6700 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "aprilia_rs_660",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Aprilia",
    "model": "RS 660",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 183,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 659.0,
      "power_raw": "98.56 bhp @ 10500 rpm",
      "torque_raw": "67 Nm @ 8500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "aprilia_tuono_457",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Aprilia",
    "model": "Tuono 457",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 175,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 457.0,
      "power_raw": "46.9 bhp @ 9400 rpm",
      "torque_raw": "43.5 Nm @ 6700 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 25.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_rs_200",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Bajaj",
    "model": "Pulsar RS 200",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 167,
      "groundClearance_mm": 157
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 199.5,
      "power_raw": "24.1 bhp @ 9750 rpm",
      "torque_raw": "18.7 Nm @ 8000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_g310_rr",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "BMW",
    "model": "G310 RR",
    "ergonomics": {
      "seatHeight_mm": 811
    },
    "physical": {
      "kerbWeight_kg": 174,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 312.12,
      "power_raw": "33.5 bhp @ 9700 rpm",
      "torque_raw": "27.3 Nm @ 7700 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_s1000_xr",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "BMW",
    "model": "S1000 XR",
    "ergonomics": {
      "seatHeight_mm": 850
    },
    "physical": {
      "kerbWeight_kg": 227,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 999.0,
      "power_raw": "167.62 bhp @ 11000 rpm",
      "torque_raw": "114 Nm @ 9250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 16.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_s1000r",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "BMW",
    "model": "S1000R",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 199,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 999.0,
      "power_raw": "167.6 bhp @ 11000 rpm",
      "torque_raw": "114 Nm @ 9250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 16.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_s1000rr",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "BMW",
    "model": "S1000RR",
    "ergonomics": {
      "seatHeight_mm": 824
    },
    "physical": {
      "kerbWeight_kg": 197,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 999.0,
      "power_raw": "206.51 bhp @ 13750 rpm",
      "torque_raw": "113 Nm @ 11000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 16.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_hypermotard_698_mono",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Ducati",
    "model": "hypermotard 698 mono",
    "ergonomics": {
      "seatHeight_mm": 904
    },
    "physical": {
      "kerbWeight_kg": 159,
      "groundClearance_mm": 235
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 659.0,
      "power_raw": "76.43 bhp @ 9750 rpm",
      "torque_raw": "63 Nm @ 8000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 20.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_hypermotard_950",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Ducati",
    "model": "hypermotard 950",
    "ergonomics": {
      "seatHeight_mm": 870
    },
    "physical": {
      "kerbWeight_kg": 200,
      "groundClearance_mm": 215
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 937.0,
      "power_raw": "112.6 bhp @ 9000 rpm",
      "torque_raw": "96 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.6,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_monster",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Ducati",
    "model": "Monster",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 188,
      "groundClearance_mm": 202
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 937.0,
      "power_raw": "109.96 bhp @ 9250 rpm",
      "torque_raw": "93 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_panigale_v2",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Ducati",
    "model": "panigale v2",
    "ergonomics": {
      "seatHeight_mm": 837
    },
    "physical": {
      "kerbWeight_kg": 200,
      "groundClearance_mm": 128
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 890.0,
      "power_raw": "118 bhp @ 10750 rpm",
      "torque_raw": "93.3 Nm @ 8250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 16.6,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_panigale_v4_r",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Ducati",
    "model": "Panigale V4 R",
    "ergonomics": {
      "seatHeight_mm": 850
    },
    "physical": {
      "kerbWeight_kg": 193.5,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 998.0,
      "power_raw": "221 bhp @ 15750 rpm",
      "torque_raw": "111.3 Nm @ 12000rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 12.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "ferrato_disruptor",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Ferrato",
    "model": "disruptor",
    "ergonomics": {
      "seatHeight_mm": 700
    },
    "physical": {
      "kerbWeight_kg": 164,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": null,
      "power_raw": "6.37 kW",
      "torque_raw": "228 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 129.0,
      "unit": "km_per_charge"
    }
  },
  {
    "id": "hero_karizma_xmr",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Hero",
    "model": "karizma xmr",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 163.5,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 210.0,
      "power_raw": "25.15 bhp @ 9250 rpm",
      "torque_raw": "20.4 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_cb650r",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Honda",
    "model": "CB650R",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 205,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "93.8 bhp @ 12000 rpm",
      "torque_raw": "63 Nm @ 9500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "honda_cbr650r",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Honda",
    "model": "CBR650R",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 209,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "93.8 bhp @ 12000 rpm",
      "torque_raw": "63 Nm @ 9500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_ninja_1100sx",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Kawasaki",
    "model": "ninja 1100sx",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 238,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1099.0,
      "power_raw": "134.1 bhp @ 9000 rpm",
      "torque_raw": "113 Nm @ 7600 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_ninja_300",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Kawasaki",
    "model": "Ninja 300",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 179,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 296.0,
      "power_raw": "38.88 bhp @ 11000 rpm",
      "torque_raw": "26.1 Nm @ 10000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 26.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_ninja_500",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Kawasaki",
    "model": "Ninja 500",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 171,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 451.0,
      "power_raw": "44.7 bhp @ 9000 rpm",
      "torque_raw": "42.6 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 22.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_ninja_650",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Kawasaki",
    "model": "ninja 650",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 196,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "67.3 bhp @ 8000 rpm",
      "torque_raw": "64 Nm @ 6700 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 22.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_ninja_zx10r",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "kawasaki",
    "model": "Ninja ZX-10R",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 207,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 998.0,
      "power_raw": "193 bhp @ 13000 rpm",
      "torque_raw": "112 Nm @ 11400 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 22.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_ninja_zx4r",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Kawasaki",
    "model": "ninja ZX-4R",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 189,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 399.0,
      "power_raw": "76.4 bhp @ 14500 rpm",
      "torque_raw": "39 Nm @ 13000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 20.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_ninja_zx6r",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "kawasaki",
    "model": "Ninja ZX-6R",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 198,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 636.0,
      "power_raw": "122.03 bhp @ 13000 rpm",
      "torque_raw": "69 Nm @ 11000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 23.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_z650",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Kawasaki",
    "model": "Z650",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 191,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "67.31 bhp @ 8000 rpm",
      "torque_raw": "64 Nm @ 6700 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 27.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_z650rs",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Kawasaki",
    "model": "Z650RS",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 192,
      "groundClearance_mm": 125
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "67.07 bhp @ 8000 rpm",
      "torque_raw": "62.1 Nm @ 6700 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 21.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_rr300",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Keeway",
    "model": "RR300",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 165,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 292.4,
      "power_raw": "27.88 bhp @ 8750 rpm",
      "torque_raw": "25 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 36.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_rc_160",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "KTM",
    "model": "RC 160",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 155,
      "groundClearance_mm": 168
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 164.2,
      "power_raw": "18.73 bhp @ 9500 rpm",
      "torque_raw": "15.5 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_rc_200",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "KTM",
    "model": "RC 200",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 160,
      "groundClearance_mm": 158
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 199.5,
      "power_raw": "24.6 bhp @ 10000 rpm",
      "torque_raw": "19.2 Nm @ 8000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 43.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_rc_390",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "KTM",
    "model": "RC 390",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 172,
      "groundClearance_mm": 153
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 373.27,
      "power_raw": "42.9 bhp @ 9000 rpm",
      "torque_raw": "37 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 29.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_gixxer_sf",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Suzuki",
    "model": "Gixxer SF",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 148,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "13.4 bhp @ 8000 rpm",
      "torque_raw": "13.8 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_gixxer_sf_250",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Suzuki",
    "model": "Gixxer SF 250",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 161,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 249.0,
      "power_raw": "26.13 bhp @ 9300 rpm",
      "torque_raw": "22.2 Nm @ 7300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_gixxer_sf_250_flex_fuel",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Suzuki",
    "model": "Gixxer SF 250 Flex Fuel",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 161,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 249.0,
      "power_raw": "26.13 bhp @ 9300 rpm",
      "torque_raw": "22.2 Nm @ 7300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_gsx8r",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Suzuki",
    "model": "GSX-8R",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 205,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 776.0,
      "power_raw": "81.8 bhp @ 8500 rpm",
      "torque_raw": "78 Nm @ 6800 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 23.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_daytona_660",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Triumph",
    "model": "daytona 660",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 201,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 660.0,
      "power_raw": "93.87 bhp @ 11250 rpm",
      "torque_raw": "69 Nm @ 8250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 20.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_speed_triple_1200_rs",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Triumph",
    "model": "Speed Triple 1200 RS",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 199,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1160.0,
      "power_raw": "180.5 bhp @ 10750 rpm",
      "torque_raw": "128 Nm @ 8750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 18.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apche_rr_310",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "TVS",
    "model": "Apche RR 310",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 174,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 312.2,
      "power_raw": "37.48 bhp @ 9800 rpm",
      "torque_raw": "29 Nm @ 7900 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 34.7,
      "unit": "kmpl"
    }
  },
  {
    "id": "ultraviolette_f77_mach_2",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Ultraviolette",
    "model": "f77 mach 2",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 197,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": null,
      "power_raw": "27 Kw",
      "torque_raw": "90Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 211.0,
      "unit": "km_per_charge"
    }
  },
  {
    "id": "ultraviolette_f77_superstreet",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Ultraviolette",
    "model": "f77 superstreet",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 197,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": null,
      "power_raw": "27 Kw",
      "torque_raw": "90Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 211.0,
      "unit": "km_per_charge"
    }
  },
  {
    "id": "yamaha_r15_v4",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Yamaha",
    "model": "R15 V4",
    "ergonomics": {
      "seatHeight_mm": 815
    },
    "physical": {
      "kerbWeight_kg": 141,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": null,
      "power_raw": "18.1 bhp @ 10000 rpm",
      "torque_raw": "14.2 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 51.4,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_r15s",
    "type": "bike",
    "bodyType": "Sport Bike",
    "brand": "Yamaha",
    "model": "R15S",
    "ergonomics": {
      "seatHeight_mm": 815
    },
    "physical": {
      "kerbWeight_kg": 142,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": null,
      "power_raw": "18.1 bhp @ 10000 rpm",
      "torque_raw": "14.2 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 46.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "ampere_magnus_grand",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Ampere",
    "model": "Magnus Grand",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "2.4 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 118.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ampere_nexus",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Ampere",
    "model": "Nexus",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "4 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 100.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "apmere_magnus",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Apmere",
    "model": "Magnus",
    "ergonomics": {
      "seatHeight_mm": 712
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "2.5 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 95.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_sr_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Aprilia",
    "model": "SR 125",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 118,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.45,
      "power_raw": "9.97 bhp @ 7300 rpm",
      "torque_raw": "10.33 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_sr_160",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Aprilia",
    "model": "SR 160",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 118,
      "groundClearance_mm": 169
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 160.03,
      "power_raw": "11.11 bhp @ 7100 rpm",
      "torque_raw": "13.44 Nm @ 5300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_sr_175",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Aprilia",
    "model": "SR 175",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 174.7,
      "power_raw": "13.08 bhp @ 7200 rpm",
      "torque_raw": "14.14 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_strom_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Aprilia",
    "model": "Strom 125",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 118,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.45,
      "power_raw": "9.97 bhp @ 7300 rpm",
      "torque_raw": "10.33 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 38.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_sxr_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Aprilia",
    "model": "SXR 125",
    "ergonomics": {
      "seatHeight_mm": 775
    },
    "physical": {
      "kerbWeight_kg": 129,
      "groundClearance_mm": 161
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.45,
      "power_raw": "9.48 bhp @ 7500 rpm",
      "torque_raw": "10.19 Nm @ 5400 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "aprilia_sxr_160",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Aprilia",
    "model": "SXR 160",
    "ergonomics": {
      "seatHeight_mm": 775
    },
    "physical": {
      "kerbWeight_kg": 129,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 160.03,
      "power_raw": "10.94 bhp @ 7200 rpm",
      "torque_raw": "12.13 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ather_450_apex",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Ather",
    "model": "450 Apex",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 111.6,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "7kW",
      "torque_raw": "26 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 157.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ather_450s",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Ather",
    "model": "450S",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "5.4 kW",
      "torque_raw": "22 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 115.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ather_450x",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Ather",
    "model": "450X",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "6.4 kW",
      "torque_raw": "26 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 126.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ather_rizta",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Ather",
    "model": "rizta",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 125,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "4.3 kW",
      "torque_raw": "22 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 123.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_chetak",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Bajaj",
    "model": "chetak",
    "ergonomics": {
      "seatHeight_mm": 775
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": 168
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "3.1 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 127.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_chetak_c2501",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Bajaj",
    "model": "chetak c2501",
    "ergonomics": {
      "seatHeight_mm": 763
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "1.8 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 113.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bgauss_bg_ruv_350",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Bgauss",
    "model": "BG RUV 350",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 116,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "3.5 kW",
      "torque_raw": "160 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 105.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bgauss_c12",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Bgauss",
    "model": "C12",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 106,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "2.5 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 85.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bgauss_oowah",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Bgauss",
    "model": "Oowah",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 97,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "2.4 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 105.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_c_400_gt",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "BMW",
    "model": "C 400 GT",
    "ergonomics": {
      "seatHeight_mm": 775
    },
    "physical": {
      "kerbWeight_kg": 214,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 350.0,
      "power_raw": "33.5 bhp @ 7500 rpm",
      "torque_raw": "35 Nm @ 5750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 28.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_ce_02",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "BMW",
    "model": "CE 02",
    "ergonomics": {
      "seatHeight_mm": 745
    },
    "physical": {
      "kerbWeight_kg": 142,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "11 kW",
      "torque_raw": "55 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 108.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_ce_04",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "BMW",
    "model": "CE 04",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 231,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "31 kW",
      "torque_raw": "62 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 130.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bounce_infinity_e1",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Bounce",
    "model": "Infinity E1",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 94,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "85 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 70.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "evolet_derby",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Evolet",
    "model": "Derby",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 76,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "0.35 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 90.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "evolet_pony",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Evolet",
    "model": "Pony",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 76,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "0.35 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 90.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "gemopai_astrid_lite",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Gemopai",
    "model": "Astrid Lite",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 95,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "4 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 90.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "gemopai_ryder",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Gemopai",
    "model": "Ryder",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 80,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "0.25 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 90.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "gemopai_ryder_supermax",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Gemopai",
    "model": "Ryder SuperMax",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 80,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "2.7 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 100.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_destini_110",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Hero",
    "model": "Destini 110",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 114,
      "groundClearance_mm": 162
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 110.9,
      "power_raw": "8.07 bhp @ 7250 rpm",
      "torque_raw": "8.87 Nm @ 5750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 56.2,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_destini_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Hero",
    "model": "Destini 125",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 162
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.6,
      "power_raw": "9 bhp @ 7000 rpm",
      "torque_raw": "10.4 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 59.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_destini_prime",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Hero",
    "model": "Destini Prime",
    "ergonomics": {
      "seatHeight_mm": 778
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.6,
      "power_raw": "9 bhp @ 7000 rpm",
      "torque_raw": "10.36 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 49.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_pleasure_plus",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Hero",
    "model": "Pleasure Plus",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 104,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 110.9,
      "power_raw": "8 bhp @ 7000 rpm",
      "torque_raw": "8.7 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 50.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_pleasure_plus_xtec",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Hero",
    "model": "Pleasure Plus Xtec",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 106,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 110.9,
      "power_raw": "8 bhp @ 7000 rpm",
      "torque_raw": "8.7 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 50.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xoom_110",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Hero",
    "model": "Xoom 110",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 110.9,
      "power_raw": "8.05 bhp @ 7250 rpm",
      "torque_raw": "8.7 Nm @ 5750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xoom_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Hero",
    "model": "Xoom 125",
    "ergonomics": {
      "seatHeight_mm": 777
    },
    "physical": {
      "kerbWeight_kg": 120,
      "groundClearance_mm": 164
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.6,
      "power_raw": "9.8 bhp @ 7250 rpm",
      "torque_raw": "10.4 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 52.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xoom_160",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Hero",
    "model": "Xoom 160",
    "ergonomics": {
      "seatHeight_mm": 787
    },
    "physical": {
      "kerbWeight_kg": 142.5,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 156.0,
      "power_raw": "14.6 bhp @ 8000 rpm",
      "torque_raw": "14 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_activa",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Honda",
    "model": "Activa",
    "ergonomics": {
      "seatHeight_mm": 764
    },
    "physical": {
      "kerbWeight_kg": 106,
      "groundClearance_mm": 162
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 109.51,
      "power_raw": "7.88 bhp @ 8000 rpm",
      "torque_raw": "9.05 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 47.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_activa_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Honda",
    "model": "activa 125",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 107,
      "groundClearance_mm": 162
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 123.92,
      "power_raw": "8.3 bhp @ 6500 rpm",
      "torque_raw": "",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 47.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_activa_e",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Honda",
    "model": "Activa e",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 118,
      "groundClearance_mm": 171
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "6 kW",
      "torque_raw": "22 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 102.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_dio",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Honda",
    "model": "dio",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 106,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 109.51,
      "power_raw": "7.75 bhp @ 8000 rpm",
      "torque_raw": "9.03 Nm @ 5250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 48.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_dio_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Honda",
    "model": "Dio 125",
    "ergonomics": {
      "seatHeight_mm": 708
    },
    "physical": {
      "kerbWeight_kg": 105,
      "groundClearance_mm": 171
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 123.92,
      "power_raw": "8.19 bhp @ 6250 rpm",
      "torque_raw": "10.5 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 47.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_qc1",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Honda",
    "model": "QC1",
    "ergonomics": {
      "seatHeight_mm": 704
    },
    "physical": {
      "kerbWeight_kg": 89.5,
      "groundClearance_mm": 169
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "1.8 kW",
      "torque_raw": "77 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 80.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_xadv",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Honda",
    "model": "X-ADV",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 237,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 745.0,
      "power_raw": "57.79 bhp @ 6750 rpm",
      "torque_raw": "",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 27.77,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_sixities_300i",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Keeway",
    "model": "Sixities 300i",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 146,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 278.2,
      "power_raw": "18.4 bhp @ 6500 rpm",
      "torque_raw": "23.5 Nm @ 5750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 27.4,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_vieste_300",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Keeway",
    "model": "Vieste 300",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 147,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 278.2,
      "power_raw": "18.4 bhp @ 6500 rpm",
      "torque_raw": "22 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 29.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_iqube",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "TVS",
    "model": "iqube",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 157
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "4.4 kW",
      "torque_raw": "140 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 94.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_jupiter",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "TVS",
    "model": "jupiter",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 105,
      "groundClearance_mm": 163
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 113.3,
      "power_raw": "7.91 bhp @ 6500 rpm",
      "torque_raw": "9.8 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 53.84,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_jupiter_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "TVS",
    "model": "jupiter 125",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 163
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.8,
      "power_raw": "8.04 bhp @ 6500 rpm",
      "torque_raw": "10.5 Nm @ 4500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 50.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_ntorq_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "TVS",
    "model": "ntorq 125",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 118,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.8,
      "power_raw": "9.25 bhp @ 7000 rpm",
      "torque_raw": "10.5 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 48.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_ntorq_150",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "TVS",
    "model": "ntorq 150",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 149.7,
      "power_raw": "13 bhp",
      "torque_raw": "14.2 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_orbiter",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "TVS",
    "model": "orbiter",
    "ergonomics": {
      "seatHeight_mm": 763
    },
    "physical": {
      "kerbWeight_kg": 112,
      "groundClearance_mm": 169
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "2.5 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 158.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_zest_110",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "TVS",
    "model": "Zest 110",
    "ergonomics": {
      "seatHeight_mm": 760
    },
    "physical": {
      "kerbWeight_kg": 103,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 109.7,
      "power_raw": "7.71 bhp @ 7500 rpm",
      "torque_raw": "8.8 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ultraviolette_tesseract",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Ultraviolette",
    "model": "Tesseract",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 125,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "14.9 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 162.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "vespa_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Vespa",
    "model": "125",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 114,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.0,
      "power_raw": "9.65 bhp",
      "torque_raw": "10.2 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "vespa_150",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Vespa",
    "model": "150",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "10.47 bhp",
      "torque_raw": "10.6 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "vespa_s_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Vespa",
    "model": "S 125",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 114,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.0,
      "power_raw": "9.65 bhp",
      "torque_raw": "10.2 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "vespa_s_150",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Vespa",
    "model": "S 150",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "10.47 bhp",
      "torque_raw": "10.6 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "vespa_zx_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Vespa",
    "model": "ZX 125",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 112,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 124.0,
      "power_raw": "9.65 bhp",
      "torque_raw": "10.2 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 50.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "vida_v2",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "VIDA",
    "model": "V2",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 125,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "6 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 110.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "vida_vx2",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "VIDA",
    "model": "VX2",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 125,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "6 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 110.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "vlf_tennis_1500",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "VLF",
    "model": "Tennis 1500",
    "ergonomics": {
      "seatHeight_mm": 760
    },
    "physical": {
      "kerbWeight_kg": 88,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "1.5 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 130.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_aerox_155",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Yamaha",
    "model": "Aerox 155",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 126,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "14.75 bhp @ 8000 rpm",
      "torque_raw": "13.9 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_facino_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Yamaha",
    "model": "Facino 125",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 99,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 125.0,
      "power_raw": "8.04 bhp @ 6500 rpm",
      "torque_raw": "10.3 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 49.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_ray_zr_125",
    "type": "bike",
    "bodyType": "Scooter",
    "brand": "Yamaha",
    "model": "Ray ZR 125",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 99,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 125.0,
      "power_raw": "8.04 bhp @ 6500 rpm",
      "torque_raw": "10.3 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 49.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_avenger_cruise_220",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Bajaj",
    "model": "Avenger Cruise 220",
    "ergonomics": {
      "seatHeight_mm": 737
    },
    "physical": {
      "kerbWeight_kg": 163,
      "groundClearance_mm": 169
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 220.0,
      "power_raw": "18.76 bhp @ 8500 rpm",
      "torque_raw": "17.55 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 39.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_avenger_street_160",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Bajaj",
    "model": "Avenger Street 160",
    "ergonomics": {
      "seatHeight_mm": 737
    },
    "physical": {
      "kerbWeight_kg": 156,
      "groundClearance_mm": 169
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 160.0,
      "power_raw": "14.79 bhp @ 8500 rpm",
      "torque_raw": "13.7 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "benelli_502c",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Benelli",
    "model": "502C",
    "ergonomics": {
      "seatHeight_mm": 750
    },
    "physical": {
      "kerbWeight_kg": 216,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 500.0,
      "power_raw": "46.8 bhp @ 8500 rpm",
      "torque_raw": "46 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 22.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_r12",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "BMW",
    "model": "R12",
    "ergonomics": {
      "seatHeight_mm": 754
    },
    "physical": {
      "kerbWeight_kg": 227,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1170.0,
      "power_raw": "93.7 bhp @ 6500 rpm",
      "torque_raw": "93.7 bhp @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.6,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_r18",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "BMW",
    "model": "R18",
    "ergonomics": {
      "seatHeight_mm": 740
    },
    "physical": {
      "kerbWeight_kg": 427,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1802.0,
      "power_raw": "89.84 bhp @ 4750 rpm",
      "torque_raw": "158 Nm @ 3000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "brixton_motorcycles_cromwell_1200",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Brixton",
    "model": "Cromwell 1200",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 235,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1222.0,
      "power_raw": "81.8 bhp @ 6550 rpm",
      "torque_raw": "108 Nm @ 3100 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "brixton_motorcycles_cromwell_1200_x",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Brixton",
    "model": "Cromwell 1200 X",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 235,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1222.0,
      "power_raw": "81.8 bhp @ 6550 rpm",
      "torque_raw": "108 Nm @ 3100 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "bsa_gold_star_650",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "BSA",
    "model": "Gold Star 650",
    "ergonomics": {
      "seatHeight_mm": 782
    },
    "physical": {
      "kerbWeight_kg": 201,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 652.0,
      "power_raw": "45.6 bhp @ 6500 rpm",
      "torque_raw": "55 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 25.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_diavel_v4",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Ducati",
    "model": "Diavel V4",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 236,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1158.0,
      "power_raw": "166.28 bhp @ 10750 rpm",
      "torque_raw": "126 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 15.6,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_xdiavel_v4",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Ducati",
    "model": "XDiavel V4",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1158.0,
      "power_raw": "166.28 bhp @ 10750 rpm",
      "torque_raw": "126 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "harleydavidson_breakout",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "Breakout",
    "ergonomics": {
      "seatHeight_mm": 665
    },
    "physical": {
      "kerbWeight_kg": 310,
      "groundClearance_mm": 115
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1923.0,
      "power_raw": "101.9 bhp @ 5020 rpm",
      "torque_raw": "168 Nm @ 3500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_fatboy",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "FatBoy",
    "ergonomics": {
      "seatHeight_mm": 675
    },
    "physical": {
      "kerbWeight_kg": 317,
      "groundClearance_mm": 115
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1868.0,
      "power_raw": "93.87 bhp @ 5020 rpm",
      "torque_raw": "155 Nm @ 3250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 18.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_heritage_classic",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "Heritage Classic",
    "ergonomics": {
      "seatHeight_mm": 680
    },
    "physical": {
      "kerbWeight_kg": 330,
      "groundClearance_mm": 120
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1868.0,
      "power_raw": "93.87 bhp @ 5020 rpm",
      "torque_raw": "155 Nm @ 3250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 18.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_nightster",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "Nightster",
    "ergonomics": {
      "seatHeight_mm": 705
    },
    "physical": {
      "kerbWeight_kg": 221,
      "groundClearance_mm": 110
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 975.0,
      "power_raw": "88.5 bhp @ 7500 rpm",
      "torque_raw": "95 Nm @ 5750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 18.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_nightster_special",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "Nightster Special",
    "ergonomics": {
      "seatHeight_mm": 715
    },
    "physical": {
      "kerbWeight_kg": 225,
      "groundClearance_mm": 120
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 975.0,
      "power_raw": "88.5 bhp @ 7500 rpm",
      "torque_raw": "95 Nm @ 5750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 18.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_road_glide",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "Road Glide",
    "ergonomics": {
      "seatHeight_mm": 720
    },
    "physical": {
      "kerbWeight_kg": 380,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1923.0,
      "power_raw": "107.2 bhp @ 5020 rpm",
      "torque_raw": "175 Nm @ 3500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 16.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_sportster_s",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "Sportster S",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 228,
      "groundClearance_mm": 90
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 125.0,
      "power_raw": "120.69 bhp @ 7500 rpm",
      "torque_raw": "125 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 20.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_street_bob",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "Street Bob",
    "ergonomics": {
      "seatHeight_mm": 680
    },
    "physical": {
      "kerbWeight_kg": 293,
      "groundClearance_mm": 125
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1923.0,
      "power_raw": "91.18 bhp @ 5020 rpm",
      "torque_raw": "156 Nm @ 2750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 18.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_street_glide",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "Street Glide",
    "ergonomics": {
      "seatHeight_mm": 715
    },
    "physical": {
      "kerbWeight_kg": 368,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1923.0,
      "power_raw": "107.2 bhp @ 5020 rpm",
      "torque_raw": "175 Nm @ 3500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 16.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_x440",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "X440",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 190.5,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 440.0,
      "power_raw": "27 bhp @ 6000 rpm",
      "torque_raw": "38 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "harleydavidson_x440_t",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Harley-Davidson",
    "model": "X440 T",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 192,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 440.0,
      "power_raw": "27.37 bhp @ 6000 rpm",
      "torque_raw": "38 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_cb350",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Honda",
    "model": "CB350",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 186,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 348.36,
      "power_raw": "20.7 bhp @ 5500 rpm",
      "torque_raw": "29.5 Nm @ 3000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_cb350c",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Honda",
    "model": "CB350C",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 186,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 348.36,
      "power_raw": "20.7 bhp @ 5500 rpm",
      "torque_raw": "29.5 Nm @ 3000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "indian_101_scout",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "101 Scout",
    "ergonomics": {
      "seatHeight_mm": 680
    },
    "physical": {
      "kerbWeight_kg": 249,
      "groundClearance_mm": 113
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1250.0,
      "power_raw": "112.54 bhp",
      "torque_raw": "109 Nm @ 6300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "indian_chief_bobber_dark_horse",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Chief Bobber Dark Horse",
    "ergonomics": {
      "seatHeight_mm": 662
    },
    "physical": {
      "kerbWeight_kg": 315,
      "groundClearance_mm": 125
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1890.0,
      "power_raw": "",
      "torque_raw": "162 Nm @ 3200 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 14.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "indian_chief_dark_horse",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Chief Dark Horse",
    "ergonomics": {
      "seatHeight_mm": 662
    },
    "physical": {
      "kerbWeight_kg": 304,
      "groundClearance_mm": 125
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1890.0,
      "power_raw": "",
      "torque_raw": "162 Nm @ 3200 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 14.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "indian_scout_bobber",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Scout Bobber",
    "ergonomics": {
      "seatHeight_mm": 665
    },
    "physical": {
      "kerbWeight_kg": 246,
      "groundClearance_mm": 109
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1250.0,
      "power_raw": "106.46 bhp",
      "torque_raw": "108 Nm @ 6300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "indian_scout_classic",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Scout Classic",
    "ergonomics": {
      "seatHeight_mm": 680
    },
    "physical": {
      "kerbWeight_kg": 252,
      "groundClearance_mm": 113
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1250.0,
      "power_raw": "106.46 bhp",
      "torque_raw": "108 Nm @ 6300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "indian_scout_sixty_bobber",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Scout Sixty Bobber",
    "ergonomics": {
      "seatHeight_mm": 649
    },
    "physical": {
      "kerbWeight_kg": 243,
      "groundClearance_mm": 109
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 999.0,
      "power_raw": "86.18 bhp",
      "torque_raw": "87 Nm @ 6200 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "indian_scout_sixty_classic",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Scout Sixty Classic",
    "ergonomics": {
      "seatHeight_mm": 654
    },
    "physical": {
      "kerbWeight_kg": 241,
      "groundClearance_mm": 114
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 999.0,
      "power_raw": "86.18 bhp",
      "torque_raw": "88 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "indian_sport_scout",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Sport Scout",
    "ergonomics": {
      "seatHeight_mm": 680
    },
    "physical": {
      "kerbWeight_kg": 248,
      "groundClearance_mm": 113
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1250.0,
      "power_raw": "106.46 bhp",
      "torque_raw": "108 Nm @ 6300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "indian_sport_scout_sixty",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Sport Scout Sixty",
    "ergonomics": {
      "seatHeight_mm": 654
    },
    "physical": {
      "kerbWeight_kg": 241,
      "groundClearance_mm": 113
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 999.0,
      "power_raw": "86.18 bhp",
      "torque_raw": "87 Nm @ 6200 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "indian_super_scout",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Super Scout",
    "ergonomics": {
      "seatHeight_mm": 680
    },
    "physical": {
      "kerbWeight_kg": 268,
      "groundClearance_mm": 113
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1250.0,
      "power_raw": "106.46 bhp",
      "torque_raw": "108 Nm @ 6300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "indian_super_chief_limited",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Indian",
    "model": "Super Chief Limited",
    "ergonomics": {
      "seatHeight_mm": 665
    },
    "physical": {
      "kerbWeight_kg": 335,
      "groundClearance_mm": 125
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1890.0,
      "power_raw": "",
      "torque_raw": "162 Nm @ 3200 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 14.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "jawa_350",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Jawa",
    "model": "350",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 194,
      "groundClearance_mm": 178
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 334.0,
      "power_raw": "22.26 bhp",
      "torque_raw": "28.1 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 28.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "jawa_42",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Jawa",
    "model": "42",
    "ergonomics": {
      "seatHeight_mm": 788
    },
    "physical": {
      "kerbWeight_kg": 184,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 294.72,
      "power_raw": "26.94 bhp",
      "torque_raw": "26.84 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 32.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "jawa_42_bobber",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Jawa",
    "model": "42 Bobber",
    "ergonomics": {
      "seatHeight_mm": 740
    },
    "physical": {
      "kerbWeight_kg": 185,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 334.0,
      "power_raw": "29.51 bhp",
      "torque_raw": "32.74 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "jawa_42_fj",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Jawa",
    "model": "42 FJ",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 184,
      "groundClearance_mm": 178
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 334.0,
      "power_raw": "28.77 bhp @ 7500 rpm",
      "torque_raw": "29.62 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "jawa_perak",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Jawa",
    "model": "Perak",
    "ergonomics": {
      "seatHeight_mm": 750
    },
    "physical": {
      "kerbWeight_kg": 185,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 334.0,
      "power_raw": "30.2 bhp @ 7500 rpm",
      "torque_raw": "32.74 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_eliminator",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Kawasaki",
    "model": "Eliminator",
    "ergonomics": {
      "seatHeight_mm": 735
    },
    "physical": {
      "kerbWeight_kg": 176,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 451.0,
      "power_raw": "44.7 bhp @ 9000 rpm",
      "torque_raw": "42.6 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 29.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_vulcan_s",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Kawasaki",
    "model": "Vulcan S",
    "ergonomics": {
      "seatHeight_mm": 705
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "59.94 bhp @ 7500 rpm",
      "torque_raw": "61 Nm @ 6600 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "kawasaki_w175",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Kawasaki",
    "model": "W175",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 135,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 177.0,
      "power_raw": "12.8 bhp @ 7500 rpm",
      "torque_raw": "13.2 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_klight_250v",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Keeway",
    "model": "K-Light 250V",
    "ergonomics": {
      "seatHeight_mm": 715
    },
    "physical": {
      "kerbWeight_kg": 179,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 249.0,
      "power_raw": "18.4 bhp @ 8500 rpm",
      "torque_raw": "19 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 32.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_v302c",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Keeway",
    "model": "V302C",
    "ergonomics": {
      "seatHeight_mm": 690
    },
    "physical": {
      "kerbWeight_kg": 167,
      "groundClearance_mm": 158
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 298.0,
      "power_raw": "29.09 bhp @ 8500 rpm",
      "torque_raw": "26.5 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 36.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "qj_motor_src_500",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "QJ Motor",
    "model": "SRC 500",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 205,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 480.0,
      "power_raw": "25.15 bhp @ 5750 rpm",
      "torque_raw": "36 Nm @ 4250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "qj_motor_src_250",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "QJ Motor",
    "model": "SRC 250",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 163,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 249.0,
      "power_raw": "17.16 bhp @ 8000 rpm",
      "torque_raw": "17 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 42.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "qj_motor_srv_300",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "QJ Motor",
    "model": "SRV 300",
    "ergonomics": {
      "seatHeight_mm": 700
    },
    "physical": {
      "kerbWeight_kg": 164,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 296.0,
      "power_raw": "29.88 bhp @ 9000 rpm",
      "torque_raw": "26 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "royal_enfield_classic_350",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Royal Enfield",
    "model": "Classic 350",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 195,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 349.0,
      "power_raw": "20.2 bhp @ 6100 rpm",
      "torque_raw": "27 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_classic_650",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Royal Enfield",
    "model": "Classic 650",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 243,
      "groundClearance_mm": 154
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 647.95,
      "power_raw": "46.39 bhp @ 7250 rpm",
      "torque_raw": "52.3 Nm @ 5650 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 25.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_goan_classic_350",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Royal Enfield",
    "model": "Goan Classic 350",
    "ergonomics": {
      "seatHeight_mm": 750
    },
    "physical": {
      "kerbWeight_kg": 197,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 349.0,
      "power_raw": "20.2 bhp @ 6100 rpm",
      "torque_raw": "27 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 36.2,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_guerrilla",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Royal Enfield",
    "model": "Guerrilla",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 185,
      "groundClearance_mm": 169
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 452.0,
      "power_raw": "39.47 bhp @ 8000 rpm",
      "torque_raw": "40 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 29.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_interceptor_650",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Royal Enfield",
    "model": "Interceptor 650",
    "ergonomics": {
      "seatHeight_mm": 804
    },
    "physical": {
      "kerbWeight_kg": 218,
      "groundClearance_mm": 174
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 648.0,
      "power_raw": "47 bhp @ 7150 rpm",
      "torque_raw": "52 Nm @ 5250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 23.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_meteor_350",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Royal Enfield",
    "model": "Meteor 350",
    "ergonomics": {
      "seatHeight_mm": 765
    },
    "physical": {
      "kerbWeight_kg": 191,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 349.34,
      "power_raw": "20.2 bhp @ 6100 rpm",
      "torque_raw": "27 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 32.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_shot_gun_650",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Royal Enfield",
    "model": "Shot gun 650",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 240,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 648.0,
      "power_raw": "46.3 bhp @ 7250 rpm",
      "torque_raw": "52.3 Nm @ 5650 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 22.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_super_meteor_650",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Royal Enfield",
    "model": "Super Meteor 650",
    "ergonomics": {
      "seatHeight_mm": 740
    },
    "physical": {
      "kerbWeight_kg": 241,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 648.0,
      "power_raw": "46.3 bhp @ 7250 rpm",
      "torque_raw": "52.3 Nm @ 5650 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 23.7,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_bonneveille_speedmaster",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Triumph",
    "model": "Bonneveille Speedmaster",
    "ergonomics": {
      "seatHeight_mm": 705
    },
    "physical": {
      "kerbWeight_kg": 263,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1200.0,
      "power_raw": "76.9 bhp @ 6100 rpm",
      "torque_raw": "106 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 21.7,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_bonneville_bobber",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Triumph",
    "model": "Bonneville Bobber",
    "ergonomics": {
      "seatHeight_mm": 690
    },
    "physical": {
      "kerbWeight_kg": 251,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1200.0,
      "power_raw": "76.9 bhp @ 6100 rpm",
      "torque_raw": "106 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 21.7,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_bonneville_t100",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Triumph",
    "model": "Bonneville T100",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 228,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 900.0,
      "power_raw": "64.1 bhp @ 7400 rpm",
      "torque_raw": "80 Nm @ 3750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 24.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_bonneville_t120",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Triumph",
    "model": "Bonneville T120",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 236,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1200.0,
      "power_raw": "78.9 bhp @ 6550 rpm",
      "torque_raw": "105 Nm @ 3500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 21.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_rocket_3",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Triumph",
    "model": "Rocket 3",
    "ergonomics": {
      "seatHeight_mm": 773
    },
    "physical": {
      "kerbWeight_kg": 304,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 2458.0,
      "power_raw": "165 bhp @ 6000 rpm",
      "torque_raw": "221 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 14.6,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_speed_twin_900",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "Triumph",
    "model": "Speed Twin 900",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 216,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 900.0,
      "power_raw": "64 bhp @ 7500 rpm",
      "torque_raw": "80 Nm @ 3800 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 24.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_ronin",
    "type": "bike",
    "bodyType": "Cruiser",
    "brand": "TVS",
    "model": "Ronin",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 159,
      "groundClearance_mm": 181
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 225.9,
      "power_raw": "20.1 bhp @ 7750 rpm",
      "torque_raw": "19.93 Nm @ 3750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 42.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_ct_110",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Bajaj",
    "model": "CT 110",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 127,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 115.45,
      "power_raw": "8.48 bhp @ 7000 rpm",
      "torque_raw": "9.81 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 70.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_platina_100",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Bajaj",
    "model": "Platina 100",
    "ergonomics": {
      "seatHeight_mm": 807
    },
    "physical": {
      "kerbWeight_kg": 117,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 102.0,
      "power_raw": "7.79 bhp @ 7500 rpm",
      "torque_raw": "8.34 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 75.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_platina_110",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Bajaj",
    "model": "Platina 110",
    "ergonomics": {
      "seatHeight_mm": 807
    },
    "physical": {
      "kerbWeight_kg": 119,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 115.45,
      "power_raw": "8.48 bhp @ 7000 rpm",
      "torque_raw": "9.81 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 70.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_125",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Bajaj",
    "model": "Pulsar 125",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 140,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.4,
      "power_raw": "11.64 bhp @ 8500 rpm",
      "torque_raw": "10.8 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 50.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_150",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Bajaj",
    "model": "Pulsar 150",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 148,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.5,
      "power_raw": "13.8 bhp @ 8500 rpm",
      "torque_raw": "13.25 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 49.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_ns125",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Bajaj",
    "model": "Pulsar NS125",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 144,
      "groundClearance_mm": 179
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.45,
      "power_raw": "11.8 bhp @ 8500 rpm",
      "torque_raw": "11 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 46.9,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_ns160",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Bajaj",
    "model": "Pulsar NS160",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 152,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 160.3,
      "power_raw": "17.03 bhp @ 9000 rpm",
      "torque_raw": "14.6 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 52.2,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_glamour",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Hero",
    "model": "Glamour",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 121.3,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.7,
      "power_raw": "10.39 bhp @ 7500 rpm",
      "torque_raw": "10.4 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 65.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_glamour_xtec",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Hero",
    "model": "Glamour Xtec",
    "ergonomics": {
      "seatHeight_mm": 798
    },
    "physical": {
      "kerbWeight_kg": 122,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.7,
      "power_raw": "10.72 bhp @ 7500 rpm",
      "torque_raw": "10.6 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 53.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_hf_deluxe",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Hero",
    "model": "HF Deluxe",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 110,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 97.2,
      "power_raw": "7.91 bhp @ 8000 rpm",
      "torque_raw": "8.05 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 65.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_passion_plus",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Hero",
    "model": "Passion Plus",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 168
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 97.2,
      "power_raw": "7.91 bhp @ 8000 rpm",
      "torque_raw": "8.05 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 60.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_splendor_plus",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Hero",
    "model": "Splendor Plus",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 112,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 97.2,
      "power_raw": "7.91 bhp @ 8000 rpm",
      "torque_raw": "8.05 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 61.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_splendor_plus_xtec",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Hero",
    "model": "Splendor Plus Xtec",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 112,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 97.2,
      "power_raw": "7.91 bhp @ 8000 rpm",
      "torque_raw": "8.05 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 73.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_super_splendor_xtec",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Hero",
    "model": "Super Splendor Xtec",
    "ergonomics": {
      "seatHeight_mm": 793
    },
    "physical": {
      "kerbWeight_kg": 122,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.7,
      "power_raw": "10.72 bhp @ 7500 rpm",
      "torque_raw": "10.6 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 69.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xtreme_125r",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Hero",
    "model": "Xtreme 125R",
    "ergonomics": {
      "seatHeight_mm": 794
    },
    "physical": {
      "kerbWeight_kg": 136,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.7,
      "power_raw": "11.4 bhp @ 8250 rpm",
      "torque_raw": "10.5 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 66.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_hornet_20",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Honda",
    "model": "Hornet 2.0",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 142,
      "groundClearance_mm": 168
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 184.4,
      "power_raw": "17.03 bhp @ 8500 rpm",
      "torque_raw": "15.9 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 42.3,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_livo",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Honda",
    "model": "Livo",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 112,
      "groundClearance_mm": 163
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 109.51,
      "power_raw": "8.67 bhp @ 7500 rpm",
      "torque_raw": "9.3 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 60.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_shine",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Honda",
    "model": "Shine",
    "ergonomics": {
      "seatHeight_mm": 791
    },
    "physical": {
      "kerbWeight_kg": 113,
      "groundClearance_mm": 162
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 123.94,
      "power_raw": "10.59 bhp @ 7500 rpm",
      "torque_raw": "11 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 55.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_shine_100",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Honda",
    "model": "Shine 100",
    "ergonomics": {
      "seatHeight_mm": 786
    },
    "physical": {
      "kerbWeight_kg": 99,
      "groundClearance_mm": 168
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 98.98,
      "power_raw": "7.28 bhp @ 7500 rpm",
      "torque_raw": "8.05 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 65.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_sp_125",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Honda",
    "model": "SP 125",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 116,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 123.94,
      "power_raw": "10.72 bhp @ 7500 rpm",
      "torque_raw": "10.9 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 62.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_sp160",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Honda",
    "model": "SP160",
    "ergonomics": {
      "seatHeight_mm": 796
    },
    "physical": {
      "kerbWeight_kg": 138,
      "groundClearance_mm": 177
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 162.71,
      "power_raw": "13.27 bhp @ 7500 rpm",
      "torque_raw": "14.58 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 50.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_unicorn",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Honda",
    "model": "Unicorn",
    "ergonomics": {
      "seatHeight_mm": 798
    },
    "physical": {
      "kerbWeight_kg": 139,
      "groundClearance_mm": 187
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 162.71,
      "power_raw": "13 bhp @ 7500 rpm",
      "torque_raw": "14.58 Nm @ 5250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 50.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_sr125",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Keeway",
    "model": "SR125",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 120,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 125.0,
      "power_raw": "9.56 bhp @ 9000 rpm",
      "torque_raw": "8.2 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 46.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_sr250",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Keeway",
    "model": "SR250",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 120,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 223.0,
      "power_raw": "15.78 bhp @ 7500 rpm",
      "torque_raw": "16 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "odysse_evoqis",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Odysse",
    "model": "Evoqis",
    "ergonomics": {
      "seatHeight_mm": 750
    },
    "physical": {
      "kerbWeight_kg": 150,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "4.3 kW",
      "torque_raw": "63 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "revolt_rv400",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Revolt",
    "model": "RV400",
    "ergonomics": {
      "seatHeight_mm": 814
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 215
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "3kw",
      "torque_raw": "",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_gixxer",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Suzuki",
    "model": "Gixxer",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 141,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "13.41 bhp @ 8000 rpm",
      "torque_raw": "13.8 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_gixxer_sf",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Suzuki",
    "model": "Gixxer SF",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 148,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "13.41 bhp @ 8000 rpm",
      "torque_raw": "13.8 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apache_rtr_160",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "TVS",
    "model": "Apache RTR 160",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 137,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 159.7,
      "power_raw": "15.82 bhp @ 8750 rpm",
      "torque_raw": "13.85 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 61.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apache_rtr_180",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "TVS",
    "model": "Apache RTR 180",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 140,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 177.4,
      "power_raw": "16.78 bhp @ 9000 rpm",
      "torque_raw": "15.5 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 42.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apache_rtr_160_4v",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "TVS",
    "model": "Apache RTR 160 4V",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 144,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 159.7,
      "power_raw": "17.31 bhp @ 9250 rpm",
      "torque_raw": "14.73 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 41.4,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_radeon",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "TVS",
    "model": "Radeon",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 113,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 109.7,
      "power_raw": "8.08 bhp @ 7350 rpm",
      "torque_raw": "8.7 Nm @ 4500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 62.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_raider_125",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "TVS",
    "model": "Raider 125",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 123,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.8,
      "power_raw": "11.2 bhp @ 7500 rpm",
      "torque_raw": "11.2 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 56.7,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_sport",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "TVS",
    "model": "Sport",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 112,
      "groundClearance_mm": 175
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 109.7,
      "power_raw": "8.08 bhp @ 7350 rpm",
      "torque_raw": "8.7 Nm @ 4500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 80.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_star_city_plus",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "TVS",
    "model": "Star City Plus",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 172
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 109.7,
      "power_raw": "8.08 bhp @ 7350 rpm",
      "torque_raw": "8.7 Nm @ 4500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 4
    },
    "range": {
      "value": 70.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_fz_fi",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Yamaha",
    "model": "FZ FI",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 135,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "12.2 bhp @ 7250 rpm",
      "torque_raw": "13.3 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 46.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_fz_s_fi",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Yamaha",
    "model": "FZ S FI",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 135,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "12.2 bhp @ 7250 rpm",
      "torque_raw": "13.3 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_fz_x",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Yamaha",
    "model": "FZ X",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 139,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "12.2 bhp @ 7250 rpm",
      "torque_raw": "13.3 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 47.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_mt_15_v2",
    "type": "bike",
    "bodyType": "Commuter",
    "brand": "Yamaha",
    "model": "MT 15 V2",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 141,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "18.1 bhp @ 10000 rpm",
      "torque_raw": "14.1 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 47.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_tuono_660",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Aprilia",
    "model": "Tuono 600",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 183,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 659.0,
      "power_raw": "93.87 bhp @ 10500 rpm",
      "torque_raw": "67 Nm @ 8500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_dominar_250",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Dominar 250",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 180,
      "groundClearance_mm": 157
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 248.0,
      "power_raw": "26.6 bhp",
      "torque_raw": "23.5 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 33.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_dominar_400",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Dominar 400",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 180,
      "groundClearance_mm": 157
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 248.8,
      "power_raw": "26.63 bhp @ 8500 rpm",
      "torque_raw": "23.5 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_freedom",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Freedom",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 147,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 110.0,
      "power_raw": "8.6 bhp",
      "torque_raw": "9.8 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 65.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_150",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Pular 150",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 148,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.5,
      "power_raw": "13.8 bhp @ 8500 rpm",
      "torque_raw": "13.25 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 49.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_220f",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Pulsar 220F",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 160,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 220.0,
      "power_raw": "20.11 bhp @ 8500 rpm",
      "torque_raw": "18.55 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_n125",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Pulsar N125",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 125,
      "groundClearance_mm": 198
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.0,
      "power_raw": "11.8 bhp",
      "torque_raw": "11 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 58.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_n160",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Pulsar N160",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 148,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 164.82,
      "power_raw": "15.68 bhp @ 8750 rpm",
      "torque_raw": "14.65 Nm @ 6750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 51.6,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_n250",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Pulsar N250",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 162,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 249.0,
      "power_raw": "24.1 bhp @ 8750 rpm",
      "torque_raw": "21.5 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 44.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_ns160",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Pulsar NS160",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 152,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 160.3,
      "power_raw": "17.03 bhp @ 9000 rpm",
      "torque_raw": "14.6 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 52.2,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_ns200",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "Pulsar NS200",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 158,
      "groundClearance_mm": 168
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 199.5,
      "power_raw": "24.13 bhp @ 9750 rpm",
      "torque_raw": "18.74 Nm @ 8000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 36.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bajaj_pulsar_ns400z",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Bajaj",
    "model": "NS400Z",
    "ergonomics": {
      "seatHeight_mm": 807
    },
    "physical": {
      "kerbWeight_kg": 174,
      "groundClearance_mm": 168
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 373.0,
      "power_raw": "42.37 bhp @ 8800 rpm",
      "torque_raw": "35 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 32.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "brixton_motorcycles_crossfire_500_x",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Brixton Motorcycles",
    "model": "Crossfire 500 X",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 190,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 486.0,
      "power_raw": "46.9 bhp @ 8500 rpm",
      "torque_raw": "43 Nm @ 6750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "ducati_multistrada_v4",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Ducati",
    "model": "Multistrada V4",
    "ergonomics": {
      "seatHeight_mm": 840
    },
    "physical": {
      "kerbWeight_kg": 240,
      "groundClearance_mm": 220
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 1158.0,
      "power_raw": "170 bhp @ 10500 rpm",
      "torque_raw": "125 Nm @ 8750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 15.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_glamour_x125",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Hero",
    "model": "Glamour X125",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 125.5,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.7,
      "power_raw": "11.4 bhp @ 8250 rpm",
      "torque_raw": "10.5 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 65.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xpulse_200",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Hero",
    "model": "Xpule 200",
    "ergonomics": {
      "seatHeight_mm": 825
    },
    "physical": {
      "kerbWeight_kg": 159,
      "groundClearance_mm": 220
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 199.0,
      "power_raw": "18.9 bhp",
      "torque_raw": "17.35 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xtreme_160r",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Hero",
    "model": "Xtreme 160R",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 139.5,
      "groundClearance_mm": 167
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 163.2,
      "power_raw": "14.79 bhp @ 8500 rpm",
      "torque_raw": "14 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 49.65,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xtreme_160r_4v",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Hero",
    "model": "Xtreme 160R 4V",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 145,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 163.2,
      "power_raw": "16.6 bhp @ 8500 rpm",
      "torque_raw": "16.6 bhp @ 8500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xtreme_250r",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Hero",
    "model": "Xtreme 250R",
    "ergonomics": {
      "seatHeight_mm": 806
    },
    "physical": {
      "kerbWeight_kg": 167.7,
      "groundClearance_mm": 167
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 249.03,
      "power_raw": "29.5 bhp @ 9250 rpm",
      "torque_raw": "25 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 36.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_cb_125_hornet",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Honda",
    "model": "CB 125 Hornet",
    "ergonomics": {
      "seatHeight_mm": 796
    },
    "physical": {
      "kerbWeight_kg": 124,
      "groundClearance_mm": 166
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 123.49,
      "power_raw": "10.99 bhp @ 7500 rpm",
      "torque_raw": "11.2 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 55.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_cb1000_hornet",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Honda",
    "model": "CB1000 Hornet",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 211,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 999.0,
      "power_raw": "155 bhp @ 11000 rpm",
      "torque_raw": "107 Nm @ 9000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "honda_cb750_hornet",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Honda",
    "model": "CB750 Hornet",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 191,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 755.0,
      "power_raw": "90.5 bhp @ 9500 rpm",
      "torque_raw": "75 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "honda_hness_cb350",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Honda",
    "model": "Hness CB350",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 181,
      "groundClearance_mm": 166
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 348.36,
      "power_raw": "20.78 bhp @ 5500 rpm",
      "torque_raw": "30 Nm @ 3000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_hornet_20",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Honda",
    "model": "Horet 2.0",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 142,
      "groundClearance_mm": 167
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 184.0,
      "power_raw": "17 bhp",
      "torque_raw": "16.1 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_nx200",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Honda",
    "model": "NX200",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 147,
      "groundClearance_mm": 167
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 184.0,
      "power_raw": "17 bhp",
      "torque_raw": "16.1 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_unicorn",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Honda",
    "model": "Unicorn",
    "ergonomics": {
      "seatHeight_mm": 798
    },
    "physical": {
      "kerbWeight_kg": 139,
      "groundClearance_mm": 187
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 162.71,
      "power_raw": "13 bhp @ 7500 rpm",
      "torque_raw": "14.58 Nm @ 5250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 50.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hop_electric_oxo",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Hop",
    "model": "Electric OXO",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 140,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "5.2 kW",
      "torque_raw": "175 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "husqvarna_svartpilen_401",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Husqvarna",
    "model": "SvartpiSvartpilen 401",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 171.2,
      "groundClearance_mm": 177
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 399.0,
      "power_raw": "42.9 bhp @ 9000 rpm",
      "torque_raw": "39 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 29.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_klx230",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Kawasaki",
    "model": "KLX230",
    "ergonomics": {
      "seatHeight_mm": 900
    },
    "physical": {
      "kerbWeight_kg": 129,
      "groundClearance_mm": 270
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 233.0,
      "power_raw": "18.74 bhp @ 7800 rpm",
      "torque_raw": "19.1 Nm @ 6200 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "kawasaki_klx230_2024",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Kawasaki",
    "model": "LX230 (2024)",
    "ergonomics": {
      "seatHeight_mm": 880
    },
    "physical": {
      "kerbWeight_kg": 139,
      "groundClearance_mm": 265
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 233.0,
      "power_raw": "18.1 bhp",
      "torque_raw": "18.3 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_klx230r",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Kawasaki",
    "model": "KLX230R",
    "ergonomics": {
      "seatHeight_mm": 900
    },
    "physical": {
      "kerbWeight_kg": 115,
      "groundClearance_mm": 275
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 233.0,
      "power_raw": "18.1 bhp",
      "torque_raw": "18.3 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 38.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_z650",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Kawasaki",
    "model": "Z650",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 191,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "67.3 bhp",
      "torque_raw": "64 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 21.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_k300_sf",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Keeway",
    "model": "K300 SF",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 151,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 292.0,
      "power_raw": "27.5 bhp",
      "torque_raw": "25 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 32.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_160_duke",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "KTM",
    "model": "160 Duke",
    "ergonomics": {
      "seatHeight_mm": 815
    },
    "physical": {
      "kerbWeight_kg": 147,
      "groundClearance_mm": 174
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 164.2,
      "power_raw": "18.73 bhp @ 9500 rpm",
      "torque_raw": "15.5 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 36.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_200_duke",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "KTM",
    "model": "200 Duke",
    "ergonomics": {
      "seatHeight_mm": 822
    },
    "physical": {
      "kerbWeight_kg": 159,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 199.5,
      "power_raw": "24.67 bhp @ 10000 rpm",
      "torque_raw": "19.3 Nm @ 8000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_250_duke",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "KTM",
    "model": "250 Duke",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 162.8,
      "groundClearance_mm": 176
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 249.07,
      "power_raw": "30.57 bhp @ 9250 rpm",
      "torque_raw": "25 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 31.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_390_adventure_r",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "KTM",
    "model": "390 Adventure R",
    "ergonomics": {
      "seatHeight_mm": 855
    },
    "physical": {
      "kerbWeight_kg": 172,
      "groundClearance_mm": 240
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 373.0,
      "power_raw": "43.5 bhp",
      "torque_raw": "37 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_390_adventure_x",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "KTM",
    "model": "390 Adventure X",
    "ergonomics": {
      "seatHeight_mm": 825
    },
    "physical": {
      "kerbWeight_kg": 170,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 373.0,
      "power_raw": "43.5 bhp",
      "torque_raw": "37 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 32.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_390_duke",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "KTM",
    "model": "390 Duke",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 168.3,
      "groundClearance_mm": 183
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 398.63,
      "power_raw": "45.3 bhp @ 8500 rpm",
      "torque_raw": "39 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 29.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_390_enduro_r",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "KTM",
    "model": "390 Enduro R",
    "ergonomics": {
      "seatHeight_mm": 860
    },
    "physical": {
      "kerbWeight_kg": 177,
      "groundClearance_mm": 253
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 398.63,
      "power_raw": "45.37 bhp @ 8500 rpm",
      "torque_raw": "39 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "matter_aera",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Matter",
    "model": "AERA",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 128,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "11.5 kW",
      "torque_raw": "520 Nm (wheel)",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "moto_guzzi_v85_tt",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Moto",
    "model": "Guzzi V85 TT",
    "ergonomics": {
      "seatHeight_mm": 828
    },
    "physical": {
      "kerbWeight_kg": 230,
      "groundClearance_mm": 210
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 853.0,
      "power_raw": "75.09 bhp @ 7750 rpm",
      "torque_raw": "82 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 23.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "moto_morini_seiemmezzo",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Moto",
    "model": "Morini Seiemmezzo",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 215,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "54.24 bhp @ 8250 rpm",
      "torque_raw": "54 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 23.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "oden_rorr",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Oden",
    "model": "Rorr",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 147,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "8kW",
      "torque_raw": "52 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "oden_rorr_ez",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Oden",
    "model": "Rorr EZ",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 138,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "7.5 kW",
      "torque_raw": "52 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "oden_rorr_ez_sigma",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Oden",
    "model": "Rorr EZ Sigma",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 143,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "7.5 kW",
      "torque_raw": "286 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "odysse_vader",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Odysse",
    "model": "Vader",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 128,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "4.5 kW",
      "torque_raw": "170 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ola_roadster",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Ola",
    "model": "Roadster",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 160,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "11 kW",
      "torque_raw": "58 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ola_roadster_pro",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Ola",
    "model": "Roadster Pro",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 195,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "52 kW",
      "torque_raw": "105 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ola_roadster_x",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Ola",
    "model": "Roadster X",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 160,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "11 kW",
      "torque_raw": "58 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ola_roadster_x_plus",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Ola",
    "model": "Roadster X Plus",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 180,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "18 kW",
      "torque_raw": "75 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "pure_ec_etryst_350",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "PURE ",
    "model": "EC Etryst 350",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 120,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "4 kW",
      "torque_raw": "60 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "pure_ev_ecodrift",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "PURE",
    "model": "EcoDrift",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 101,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "3 kW",
      "torque_raw": "40 Nm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "qj_motor_srk_400",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "QJ Motor",
    "model": "Motor SRK 400",
    "ergonomics": {
      "seatHeight_mm": 785
    },
    "physical": {
      "kerbWeight_kg": 186,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 400.0,
      "power_raw": "40.34 bhp @ 9000 rpm",
      "torque_raw": "37 Nm @ 7500 rpm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "revolt_rv_blazex",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Revolt",
    "model": "BlazeX",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 113,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "4.1 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "revolt_rv1",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Revolt",
    "model": "RV1",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "2.8 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "revolt_rv400",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Revolt",
    "model": "RV400",
    "ergonomics": {
      "seatHeight_mm": 814
    },
    "physical": {
      "kerbWeight_kg": 108,
      "groundClearance_mm": 215
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "3kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_bullet_350",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Royal",
    "model": "Enfield Bullet 350",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 195,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 349.0,
      "power_raw": "20.2 bhp @ 6100 rpm",
      "torque_raw": "27 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_hunter_350",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Royal",
    "model": "Enfield Hunter 350",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 181,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 349.34,
      "power_raw": "20.2 bhp @ 6100 rpm",
      "torque_raw": "27 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 36.2,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_gixxer",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Suzuki",
    "model": "Gixxer",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 141,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "13.4 bhp",
      "torque_raw": "13.8 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 38.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_gixxer_250",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Suzuki",
    "model": "Gixer 250",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 156,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 249.0,
      "power_raw": "26.13 bhp @ 9300 rpm",
      "torque_raw": "22.2 Nm @ 7300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_speed_400",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Triumph",
    "model": "Seed 400",
    "ergonomics": {
      "seatHeight_mm": 803
    },
    "physical": {
      "kerbWeight_kg": 179,
      "groundClearance_mm": 164
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 398.15,
      "power_raw": "39.5 bhp @ 8000 rpm",
      "torque_raw": "37.5 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 28.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_speed_t4",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Triumph",
    "model": "Speed T4",
    "ergonomics": {
      "seatHeight_mm": 806
    },
    "physical": {
      "kerbWeight_kg": 180,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 398.15,
      "power_raw": "30.6 bhp @ 7000 rpm",
      "torque_raw": "36 Nm @ 5000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 29.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_speed_twin_1200",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Triumph",
    "model": "Speed Twin 1200",
    "ergonomics": {
      "seatHeight_mm": 809
    },
    "physical": {
      "kerbWeight_kg": 216,
      "groundClearance_mm": 120
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 1200.0,
      "power_raw": "98.6 bhp @ 7250 rpm",
      "torque_raw": "112 Nm @ 4250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 15.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_street_triple_r",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Triumph",
    "model": "Street Triple R",
    "ergonomics": {
      "seatHeight_mm": 826
    },
    "physical": {
      "kerbWeight_kg": 189,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 765.0,
      "power_raw": "118.4 bhp",
      "torque_raw": "79 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_street_triple_rs",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Triumph",
    "model": "Street Triple RS",
    "ergonomics": {
      "seatHeight_mm": 836
    },
    "physical": {
      "kerbWeight_kg": 188,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 765.0,
      "power_raw": "128.2 bhp",
      "torque_raw": "80 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_trident_660",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Triumph",
    "model": "Tident 660",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 189,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 660.0,
      "power_raw": "80 bhp",
      "torque_raw": "64 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 26.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apache_rtr_160",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "TVS",
    "model": "Apache RTR 160",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 137,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 159.7,
      "power_raw": "15.82 bhp @ 8750 rpm",
      "torque_raw": "13.85 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 61.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apache_rtr_160_4v",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "TVS",
    "model": "RTR 160 4V",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 144,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 159.7,
      "power_raw": "17.31 bhp @ 9250 rpm",
      "torque_raw": "14.73 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 41.4,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apache_rtr_180",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "TVS",
    "model": "Apache RTR 180",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 139,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 177.0,
      "power_raw": "16.8 bhp",
      "torque_raw": "15.5 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apache_rtr_200_4v",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "TVS",
    "model": "RTR 200 4V",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 152,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 197.75,
      "power_raw": "20.54 bhp @ 9000 rpm",
      "torque_raw": "17.25 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 41.9,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_apache_rtr_310",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "TVS",
    "model": "Apache RTR 310",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 169,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 312.12,
      "power_raw": "35.08 bhp @ 9700 rpm",
      "torque_raw": "28.7 Nm @ 6650 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ultraviolette_f77_crossover",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Ultraviolette",
    "model": "F77 Crossover",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 207,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "30.2 kW",
      "torque_raw": "100 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ultraviolette_shockwave",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Ultraviolette",
    "model": "Shockwave",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 120,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": null,
      "power_raw": "10.8 kW",
      "torque_raw": "505 nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 0.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_fz_fi",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Yamaha",
    "model": "FZ FI",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 135,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "12.4 bhp",
      "torque_raw": "13.3 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 49.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_fz_rave",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Yamaha",
    "model": "FZ Rave",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 137,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "12.4 bhp",
      "torque_raw": "13.3 Nm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 45.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_fz_s_fi",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Yamaha",
    "model": "FZ S FI",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 49.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_fz_s_hybrid",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Yamaha",
    "model": "FZ S Hybrid",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 136,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 149.0,
      "power_raw": "12.2 bhp @ 7250 rpm",
      "torque_raw": "13.3 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 60.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_mt_15_v2",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Yamaha",
    "model": "MT 15 V2",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 141,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "18.1 bhp @ 10000 rpm",
      "torque_raw": "14.1 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 47.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_xsr_155",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Yamaha",
    "model": "XS 155",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 137,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "18.1 bhp @ 10000 rpm",
      "torque_raw": "14.2 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 47.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yezdi_roadster",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Yezdi",
    "model": "Roadster",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 194,
      "groundClearance_mm": 171
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 334.0,
      "power_raw": "28.7 bhp",
      "torque_raw": "29.62 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "zontes_gk350",
    "type": "bike",
    "bodyType": "Street Bike",
    "brand": "Zontes",
    "model": "GK350",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 188,
      "groundClearance_mm": 151
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 348.0,
      "power_raw": "38.2 bhp @ 9500 rpm",
      "torque_raw": "32.8 Nm @ 7500 rpm",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 26.7,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_z900",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Kawasaki",
    "model": "Z900",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 212,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 948.0,
      "power_raw": "123.6 bhp @ 9500 rpm",
      "torque_raw": "98.6 Nm @ 7700 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 21.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_hayabusa",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Suzuki",
    "model": "Hayabusa",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 266,
      "groundClearance_mm": 125
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1340.0,
      "power_raw": "190 bhp @ 9700 rpm",
      "torque_raw": "142 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 18.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_panigale_v4",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Ducati",
    "model": "Panigale V4",
    "ergonomics": {
      "seatHeight_mm": 850
    },
    "physical": {
      "kerbWeight_kg": 191,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1103.0,
      "power_raw": "219 bhp @ 13500 rpm",
      "torque_raw": "120.9 Nm @ 11250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 12.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_goldwing_tour",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Honda",
    "model": "Goldwing Tour",
    "ergonomics": {
      "seatHeight_mm": 745
    },
    "physical": {
      "kerbWeight_kg": 390,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1833.0,
      "power_raw": "124.7 bhp @ 5500 rpm",
      "torque_raw": "170 Nm @ 4500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 7
    },
    "range": {
      "value": 16.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_h2_sx",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Kawasaki",
    "model": "H2 SX",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 266,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 998.0,
      "power_raw": "197.2 bhp @ 11000 rpm",
      "torque_raw": "137.3 Nm @ 8500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 23.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_z900_2025",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Kawasaki",
    "model": "Z900 (2025)",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 213,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 948.0,
      "power_raw": "122 bhp @ 9500 rpm",
      "torque_raw": "97.4 Nm @ 7700 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 21.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_m_1000_xr",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "BMW",
    "model": "M 1000 XR",
    "ergonomics": {
      "seatHeight_mm": 850
    },
    "physical": {
      "kerbWeight_kg": 223,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 999.0,
      "power_raw": "201 bhp @ 12750 rpm",
      "torque_raw": "113 Nm @ 11000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 15.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_supersport",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Ducati",
    "model": "SuperSport",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 210,
      "groundClearance_mm": 132
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 937.0,
      "power_raw": "108.62 bhp @ 9000 rpm",
      "torque_raw": "108.62 bhp @ 9000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_z_h2",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Kawasaki",
    "model": "Z H2",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 239,
      "groundClearance_mm": 140
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 998.0,
      "power_raw": "197.26 bhp @ 11000 rpm",
      "torque_raw": "137 Nm @ 8500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "ducati_streetfighter_v4",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Ducati",
    "model": "Streetfighter V4",
    "ergonomics": {
      "seatHeight_mm": 845
    },
    "physical": {
      "kerbWeight_kg": 201,
      "groundClearance_mm": 121
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1103.0,
      "power_raw": "205 bhp @ 13000 rpm",
      "torque_raw": "123 Nm @ 11500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 13.15,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_rsv4_1100_factory",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Aprilia",
    "model": "RSV4 1100 Factory",
    "ergonomics": {
      "seatHeight_mm": 851
    },
    "physical": {
      "kerbWeight_kg": 202,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1099.0,
      "power_raw": "213.89 bhp @ 13000 rpm",
      "torque_raw": "125 Nm @ 10500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "kawasaki_ninija_zx10r",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Kawasaki",
    "model": "Ninija ZX-10R",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 207,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 998.0,
      "power_raw": "200.21 bhp @ 13200 rpm",
      "torque_raw": "114.9 Nm @ 11400 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 18.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_ninija_sx_se",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Kawasaki",
    "model": "Ninija SX SE",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 268,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 998.0,
      "power_raw": "197.2 bhp @ 11000 rpm",
      "torque_raw": "137.3 Nm @ 8500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "ducati_streetfighter_v2",
    "type": "bike",
    "bodyType": "Super Bike",
    "brand": "Ducati",
    "model": "Streetfighter V2",
    "ergonomics": {
      "seatHeight_mm": 838
    },
    "physical": {
      "kerbWeight_kg": 200,
      "groundClearance_mm": 131
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 10,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 890.0,
      "power_raw": "118 bhp @ 10750 rpm",
      "torque_raw": "93.3 Nm @ 8250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_continental_gt_650",
    "type": "bike",
    "bodyType": "Caf\ufffd Ride",
    "brand": "Royal Enfield",
    "model": "Continental GT 650",
    "ergonomics": {
      "seatHeight_mm": 804
    },
    "physical": {
      "kerbWeight_kg": 211,
      "groundClearance_mm": 174
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 40,
      "highway_daily": 10,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 648.0,
      "power_raw": "47 bhp @ 7250 rpm",
      "torque_raw": "52 Nm @ 5250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 25.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_thruxton_400",
    "type": "bike",
    "bodyType": "Caf\ufffd Ride",
    "brand": "Triumph",
    "model": "Thruxton 400",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 183,
      "groundClearance_mm": 158
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 40,
      "highway_daily": 10,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 398.0,
      "power_raw": "41.4 bhp @ 9000 rpm",
      "torque_raw": "37.5 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 27.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "husqvarna_vitpilen_250",
    "type": "bike",
    "bodyType": "Caf\ufffd Ride",
    "brand": "Husqvarna",
    "model": "Vitpilen 250",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 163.8,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 40,
      "highway_daily": 10,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 249.0,
      "power_raw": "30.57 bhp @ 9500 rpm",
      "torque_raw": "25 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 37.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_r12_nine_t",
    "type": "bike",
    "bodyType": "Caf\ufffd Ride",
    "brand": "BMW",
    "model": "R12 nine T",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 220,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 40,
      "highway_daily": 10,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 1170.0,
      "power_raw": "107.5 bhp @ 7000 rpm",
      "torque_raw": "115 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.6,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_cb350rs",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Honda",
    "model": "CB350RS",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 180,
      "groundClearance_mm": 168
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 348.36,
      "power_raw": "20.78 bhp @ 5500 rpm",
      "torque_raw": "30 Nm @ 3000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_scrambler_400_x",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Triumph",
    "model": "Scrambler 400X",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 185,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 398.15,
      "power_raw": "39.5 bhp @ 8000 rpm",
      "torque_raw": "37.5 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 27.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_scrambler_400_xc",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Triumph",
    "model": "Scrambler 400XC",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 190,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 398.0,
      "power_raw": "39.5 bhp @ 8000 rpm",
      "torque_raw": "37.5 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 27.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yezdi_scrambler",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Yezdi",
    "model": "Scrambler",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 192,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 334.0,
      "power_raw": "28.7 bhp @ 8000 rpm",
      "torque_raw": "28.2 Nm @ 6750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 23.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_scram_440",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Royal Enfield",
    "model": "Scram 440",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 196,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 443.0,
      "power_raw": "25.4 bhp @ 6250 rpm",
      "torque_raw": "34 Nm @ 4000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "royal_enfield_bear_650",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Royal Enfield",
    "model": "Bear 650",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 216,
      "groundClearance_mm": 184
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 648.0,
      "power_raw": "46.8 bhp @ 7150 rpm",
      "torque_raw": "56.5 Nm @ 5150 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 22.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "moto_morini_seiemmezzo",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Moto",
    "model": "Morini Seiemmezzo",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 215,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "54.24 bhp @ 8250 rpm",
      "torque_raw": "54 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "ducati_scrambler_icon",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Ducati",
    "model": "Scrambler Icon",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 185,
      "groundClearance_mm": 176
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 803.0,
      "power_raw": "71.87 bhp @ 8250 rpm",
      "torque_raw": "65.2 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "benelli_leoncine_500",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Benelli",
    "model": "Leoncine 500",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 207,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 500.0,
      "power_raw": "46.8 bhp @ 8500 rpm",
      "torque_raw": "46 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "triumph_scrambler_900",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Triumph",
    "model": "Scrambler 900",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 223,
      "groundClearance_mm": 157.5
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 900.0,
      "power_raw": "64.1 bhp @ 7250 rpm",
      "torque_raw": "80 Nm @ 3250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 23.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "brixton_motorcycles_crossfire_500_xc",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Brixton Motorcycles",
    "model": "Crossfire 500 X",
    "ergonomics": {
      "seatHeight_mm": 839
    },
    "physical": {
      "kerbWeight_kg": 195,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 486.0,
      "power_raw": "46.9 bhp @ 8500 rpm",
      "torque_raw": "43 Nm @ 6750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "triumph_scrambler_1200",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Triumph",
    "model": "Scrambler 1200",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 228,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 1200.0,
      "power_raw": "89 bhp @ 7000 rpm",
      "torque_raw": "110 Nm @ 4250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "ducati_scrambler_1100",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Ducati",
    "model": "Scrambler 1100",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 206,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 1079.0,
      "power_raw": "84.48 bhp @ 7500 rpm",
      "torque_raw": "88 Nm @ 4750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_scrambler_nightshift",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Ducati",
    "model": "Scrambler Nightshift",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 191,
      "groundClearance_mm": 176
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 803.0,
      "power_raw": "71.87 bhp @ 8250 rpm",
      "torque_raw": "65.2 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_scrambler_full_throttle",
    "type": "bike",
    "bodyType": "Scrambler",
    "brand": "Ducati",
    "model": "Scrambler Full Throttle",
    "ergonomics": {
      "seatHeight_mm": 803
    },
    "physical": {
      "kerbWeight_kg": 185,
      "groundClearance_mm": 176
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 795.0,
      "power_raw": "71.87 bhp @ 8250 rpm",
      "torque_raw": "65.2 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "benelli_trk_520",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Benelli",
    "model": "TRK 520",
    "ergonomics": {
      "seatHeight_mm": 800
    },
    "physical": {
      "kerbWeight_kg": 228,
      "groundClearance_mm": 190
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 500.0,
      "power_raw": "46.8 bhp @ 8500 rpm",
      "torque_raw": "46 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "benelli_trk_520x",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Benelli",
    "model": "TRK 520X",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 235,
      "groundClearance_mm": 210
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 500.0,
      "power_raw": "46.8 bhp @ 8500 rpm",
      "torque_raw": "46 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "bmw_f_900_gs",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "BMW",
    "model": "F 900 GS",
    "ergonomics": {
      "seatHeight_mm": 870
    },
    "physical": {
      "kerbWeight_kg": 219,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 895.0,
      "power_raw": "103.25 bhp @ 8500 rpm",
      "torque_raw": "93 Nm @ 6750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "bmw_f_900_gs_adventer",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "BMW",
    "model": "F 900 GS Adventer",
    "ergonomics": {
      "seatHeight_mm": 875
    },
    "physical": {
      "kerbWeight_kg": 209,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 895.0,
      "power_raw": "103.25 bhp @ 8500 rpm",
      "torque_raw": "93 Nm @ 6750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "bmw_r1300_gs",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "BMW",
    "model": "R1300 GS",
    "ergonomics": {
      "seatHeight_mm": 850
    },
    "physical": {
      "kerbWeight_kg": 237,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1300.0,
      "power_raw": "145 bhp @ 7750 rpm",
      "torque_raw": "149 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "bmw_r1300_gs_adventure",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "BMW",
    "model": "R1300 GS Adventure",
    "ergonomics": {
      "seatHeight_mm": 850
    },
    "physical": {
      "kerbWeight_kg": 269,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1300.0,
      "power_raw": "143.4 bhp @ 7750 rpm",
      "torque_raw": "149 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "ducati_desert_x",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Ducati",
    "model": "Desert X",
    "ergonomics": {
      "seatHeight_mm": 875
    },
    "physical": {
      "kerbWeight_kg": 223,
      "groundClearance_mm": 250
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 937.0,
      "power_raw": "108.6 bhp @ 9250 rpm",
      "torque_raw": "92 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_multistrada_v4_rs",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Ducati",
    "model": "Multistrada V4 RS",
    "ergonomics": {
      "seatHeight_mm": 860
    },
    "physical": {
      "kerbWeight_kg": 260,
      "groundClearance_mm": 218
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1103.0,
      "power_raw": "180 bhp @ 12250 rpm",
      "torque_raw": "118 Nm @ 9500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "harleydavidson_pan_america_1250_special",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Harley-Davidson",
    "model": "PAN America 1250 Special",
    "ergonomics": {
      "seatHeight_mm": 875
    },
    "physical": {
      "kerbWeight_kg": 258,
      "groundClearance_mm": 175
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1252.0,
      "power_raw": "150.19 bhp @ 8750 rpm",
      "torque_raw": "128 Nm @ 6750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "hero_xpulse_200_4v",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Hero",
    "model": "Xpulse 200 4V",
    "ergonomics": {
      "seatHeight_mm": 825
    },
    "physical": {
      "kerbWeight_kg": 159,
      "groundClearance_mm": 220
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 199.6,
      "power_raw": "18.9 bhp @ 8500 rpm",
      "torque_raw": "17.35 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 5
    },
    "range": {
      "value": 38.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xpulse_210",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Hero",
    "model": "Xpulse 210",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 168,
      "groundClearance_mm": 220
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 210.0,
      "power_raw": "24.2 bhp @ 9250 rpm",
      "torque_raw": "20.7 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 37.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_nx500",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Honda",
    "model": "NX500",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 196,
      "groundClearance_mm": 181
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 471.0,
      "power_raw": "46.9 bhp @ 8600 rpm",
      "torque_raw": "43 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 26.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "honda_transalp_xl750",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Honda",
    "model": "Transalp XL750",
    "ergonomics": {
      "seatHeight_mm": 850
    },
    "physical": {
      "kerbWeight_kg": 208,
      "groundClearance_mm": 210
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 755.0,
      "power_raw": "90.5 bhp @ 9500 rpm",
      "torque_raw": "75 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "honda_xadv",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Honda",
    "model": "X-ADV",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 237,
      "groundClearance_mm": 165
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 745.0,
      "power_raw": "57.79 bhp @ 6750 rpm",
      "torque_raw": "69 Nm @ 4750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "kawasaki_versysx_300",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Kawasaki",
    "model": "X 300",
    "ergonomics": {
      "seatHeight_mm": 815
    },
    "physical": {
      "kerbWeight_kg": 175,
      "groundClearance_mm": 180
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 296.0,
      "power_raw": "38.8 bhp @ 11500 rpm",
      "torque_raw": "26 Nm @ 10000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "ktm_1290_super_adventure_s",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "KTM",
    "model": "1290 Super Adventure S",
    "ergonomics": {
      "seatHeight_mm": 869
    },
    "physical": {
      "kerbWeight_kg": 250,
      "groundClearance_mm": 223
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1301.0,
      "power_raw": "158 bhp @ 8750 rpm",
      "torque_raw": "140 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "ktm_250_adventure",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "KTM",
    "model": "250 Adventure",
    "ergonomics": {
      "seatHeight_mm": 825
    },
    "physical": {
      "kerbWeight_kg": 177,
      "groundClearance_mm": 227
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 248.76,
      "power_raw": "30.5 bhp @ 9250 rpm",
      "torque_raw": "25 Nm @ 7250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 31.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_390_adventure",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "KTM",
    "model": "390 Adventure",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 182,
      "groundClearance_mm": 237
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 398.63,
      "power_raw": "45.3 bhp @ 8500 rpm",
      "torque_raw": "39 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 26.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "ktm_890_adventure_r",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "KTM",
    "model": "890 Adventure R",
    "ergonomics": {
      "seatHeight_mm": 880
    },
    "physical": {
      "kerbWeight_kg": 215,
      "groundClearance_mm": 263
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 886.0,
      "power_raw": "103 bhp @ 8000 rpm",
      "torque_raw": "100 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 22.2,
      "unit": "kmpl"
    }
  },
  {
    "id": "moto_morini_xcape",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Moto Morini",
    "model": "X-Cape",
    "ergonomics": {
      "seatHeight_mm": 810
    },
    "physical": {
      "kerbWeight_kg": 215,
      "groundClearance_mm": 175
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "59.17 bhp @ 8250 rpm",
      "torque_raw": "54 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "royal_enfield_himalayan_450",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Royal Enfield",
    "model": "Himalayan 450",
    "ergonomics": {
      "seatHeight_mm": 825
    },
    "physical": {
      "kerbWeight_kg": 196,
      "groundClearance_mm": 230
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 451.65,
      "power_raw": "39.47 bhp @ 8000 rpm",
      "torque_raw": "40 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 30.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "suzuki_vstrom_800_de",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Suzuki",
    "model": "V-Strom 800 DE",
    "ergonomics": {
      "seatHeight_mm": 855
    },
    "physical": {
      "kerbWeight_kg": 232,
      "groundClearance_mm": 220
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 776.0,
      "power_raw": "83 bhp @ 8500 rpm",
      "torque_raw": "78 Nm @ 6800 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "suzuki_vstrom_sx",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Suzuki",
    "model": "Strom SX",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 167,
      "groundClearance_mm": 205
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 249.0,
      "power_raw": "26.1 bhp @ 9300 rpm",
      "torque_raw": "22.2 Nm @ 7300 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 37.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_tiger_1200",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Triumph",
    "model": "Tiger 1200",
    "ergonomics": {
      "seatHeight_mm": 850
    },
    "physical": {
      "kerbWeight_kg": 245,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1160.0,
      "power_raw": "148 bhp @ 9000 rpm",
      "torque_raw": "130 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "triumph_tiger_900",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Triumph",
    "model": "Tiger 900",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 219,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 888.0,
      "power_raw": "106.5 bhp @ 9500 rpm",
      "torque_raw": "90 Nm @ 6850 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "tvs_apache_rtx",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "TVS",
    "model": "Apache RTX",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 180,
      "groundClearance_mm": 200
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 299.0,
      "power_raw": "35.5 bhp @ 9000 rpm",
      "torque_raw": "28.5 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 32.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "yedi_adventure",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Yedi",
    "model": "Adventure",
    "ergonomics": {
      "seatHeight_mm": 815
    },
    "physical": {
      "kerbWeight_kg": 187,
      "groundClearance_mm": 220
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 334.0,
      "power_raw": "29.16 bhp @ 8000 rpm",
      "torque_raw": "29.56 Nm @ 5800 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 32.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "zontes_350t",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Zontes",
    "model": "350T",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 196,
      "groundClearance_mm": 173
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 348.0,
      "power_raw": "38.2 bhp @ 9500 rpm",
      "torque_raw": "32.8 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 29.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_tuareg_660",
    "type": "bike",
    "bodyType": "Adventure",
    "brand": "Aprilia",
    "model": "Tuareg 660",
    "ergonomics": {
      "seatHeight_mm": 860
    },
    "physical": {
      "kerbWeight_kg": 204,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 40,
      "city_occasional": 60,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 659.0,
      "power_raw": "79.12 bhp @ 9250 rpm",
      "torque_raw": "70 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "suzuki_burgman_street_125",
    "type": "bike",
    "bodyType": "Maxi Scooter",
    "brand": "Suzuki",
    "model": "Burgman street 125",
    "ergonomics": {
      "seatHeight_mm": 780
    },
    "physical": {
      "kerbWeight_kg": 110,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 124.0,
      "power_raw": "8.58 bhp @ 6750 rpm",
      "torque_raw": "10 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 58.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "yamaha_aerox_155",
    "type": "bike",
    "bodyType": "Maxi Scooter",
    "brand": "Yamaha",
    "model": "Aerox 155",
    "ergonomics": {
      "seatHeight_mm": 790
    },
    "physical": {
      "kerbWeight_kg": 126,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 155.0,
      "power_raw": "14.75 bhp @ 8000 rpm",
      "torque_raw": "13.9 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "hero_xoom_160",
    "type": "bike",
    "bodyType": "Maxi Scooter",
    "brand": "Hero",
    "model": "Xoom 160",
    "ergonomics": {
      "seatHeight_mm": 787
    },
    "physical": {
      "kerbWeight_kg": 142.5,
      "groundClearance_mm": 155
    },
    "usage": {
      "city_daily": 60,
      "city_occasional": 100,
      "highway_daily": 60,
      "highway_occasional": 60
    },
    "engine": {
      "cc": 156.0,
      "power_raw": "14.6 bhp @ 8000 rpm",
      "torque_raw": "14 Nm @ 6500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 40.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_sxr_160",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Aprilia",
    "model": "SXR 160",
    "ergonomics": {
      "seatHeight_mm": 775
    },
    "physical": {
      "kerbWeight_kg": 129,
      "groundClearance_mm": 160
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 160.3,
      "power_raw": "10.94 bhp @ 7200 rpm",
      "torque_raw": "12.13 Nm @ 5500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 35.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "keeway_vieste_300",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Keeway",
    "model": "Vieste 300",
    "ergonomics": {
      "seatHeight_mm": 770
    },
    "physical": {
      "kerbWeight_kg": 147,
      "groundClearance_mm": 135
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 278.2,
      "power_raw": "18.4 bhp @ 6500 rpm",
      "torque_raw": "22 Nm @ 6000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 29.5,
      "unit": "kmpl"
    }
  },
  {
    "id": "aprilia_sxr_125",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Aprilia",
    "model": "SXR 125",
    "ergonomics": {
      "seatHeight_mm": 775
    },
    "physical": {
      "kerbWeight_kg": 129,
      "groundClearance_mm": 161
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 124.45,
      "power_raw": "9.48 bhp @ 7500 rpm",
      "torque_raw": "10.19 Nm @ 5400 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "honda_goldwing_tour",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Honda",
    "model": "Goldwing tour",
    "ergonomics": {
      "seatHeight_mm": 745
    },
    "physical": {
      "kerbWeight_kg": 390,
      "groundClearance_mm": 130
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1833.0,
      "power_raw": "124.7 bhp @ 5500 rpm",
      "torque_raw": "170 Nm @ 4500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 7
    },
    "range": {
      "value": 16.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "zontes_350x",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Zontes",
    "model": "350X",
    "ergonomics": {
      "seatHeight_mm": 795
    },
    "physical": {
      "kerbWeight_kg": 185,
      "groundClearance_mm": 152
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 348.0,
      "power_raw": "38.2 bhp @ 9500 rpm",
      "torque_raw": "32.8 Nm @ 7500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 36.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "triumph_tiger_sport_660",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Triumph",
    "model": "Tiger Sport 660",
    "ergonomics": {
      "seatHeight_mm": 835
    },
    "physical": {
      "kerbWeight_kg": 206,
      "groundClearance_mm": 162
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 660.0,
      "power_raw": "80 bhp @ 10250 rpm",
      "torque_raw": "64 Nm @ 6250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 22.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_versys_650",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Kawasaki",
    "model": "Versys 650",
    "ergonomics": {
      "seatHeight_mm": 845
    },
    "physical": {
      "kerbWeight_kg": 218,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 649.0,
      "power_raw": "65.7 bhp @ 8500 rpm",
      "torque_raw": "61 Nm @ 7000 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 19.4,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_k_1600",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "BMW",
    "model": "K 1600",
    "ergonomics": {
      "seatHeight_mm": 750
    },
    "physical": {
      "kerbWeight_kg": 344,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1649.0,
      "power_raw": "158 bhp @ 6750 rpm",
      "torque_raw": "158 bhp @ 6750 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kawasaki_versys_1100",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Kawasaki",
    "model": "Versys 1100",
    "ergonomics": {
      "seatHeight_mm": 820
    },
    "physical": {
      "kerbWeight_kg": 257,
      "groundClearance_mm": 150
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1099.0,
      "power_raw": "132.76 bhp @ 9000 rpm",
      "torque_raw": "112 Nm @ 7600 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.8,
      "unit": "kmpl"
    }
  },
  {
    "id": "bmw_k_1250_rt",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "BMW",
    "model": "1250 RT",
    "ergonomics": {
      "seatHeight_mm": 805
    },
    "physical": {
      "kerbWeight_kg": 279,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 1254.0,
      "power_raw": "134.1 bhp @ 7750 rpm",
      "torque_raw": "143 Nm @ 6250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 21.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "ducati_multistrada_v2",
    "type": "bike",
    "bodyType": "Tourer",
    "brand": "Ducati",
    "model": "Multistrada V2",
    "ergonomics": {
      "seatHeight_mm": 830
    },
    "physical": {
      "kerbWeight_kg": 222,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 10,
      "city_occasional": 10,
      "highway_daily": 60,
      "highway_occasional": 100
    },
    "engine": {
      "cc": 890.0,
      "power_raw": "113.98 bhp @ 10750 rpm",
      "torque_raw": "92.1 Nm @ 8250 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": 6
    },
    "range": {
      "value": 17.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_xl_100_heavy_duty",
    "type": "bike",
    "bodyType": "Moped",
    "brand": "TVS",
    "model": "100 Heavy Duty",
    "ergonomics": {
      "seatHeight_mm": 787
    },
    "physical": {
      "kerbWeight_kg": 88,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 99.7,
      "power_raw": "4.3 bhp @ 6000 rpm",
      "torque_raw": "6.5 Nm @ 3500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 55.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "tvs_xl_100_comfort",
    "type": "bike",
    "bodyType": "Moped",
    "brand": "TVS",
    "model": "100 Comfort",
    "ergonomics": {
      "seatHeight_mm": 781
    },
    "physical": {
      "kerbWeight_kg": 89,
      "groundClearance_mm": 145
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": 99.7,
      "power_raw": "4.29 bhp @ 6000 rpm",
      "torque_raw": "6.5 Nm @ 3500 rpm",
      "fuelType": "petrol"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": 55.0,
      "unit": "kmpl"
    }
  },
  {
    "id": "kinetic_green_e_luna",
    "type": "bike",
    "bodyType": "Moped",
    "brand": "Kinetic",
    "model": "Green E Luna",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": 96,
      "groundClearance_mm": 170
    },
    "usage": {
      "city_daily": 100,
      "city_occasional": 100,
      "highway_daily": 10,
      "highway_occasional": 10
    },
    "engine": {
      "cc": null,
      "power_raw": "1.2 kW",
      "torque_raw": "",
      "fuelType": "ev"
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  },
  {
    "id": "",
    "type": "",
    "bodyType": "",
    "brand": "",
    "model": "",
    "ergonomics": {
      "seatHeight_mm": null
    },
    "physical": {
      "kerbWeight_kg": null,
      "groundClearance_mm": null
    },
    "usage": {
      "city_daily": null,
      "city_occasional": null,
      "highway_daily": null,
      "highway_occasional": null
    },
    "engine": {
      "cc": null,
      "power_raw": "",
      "torque_raw": "",
      "fuelType": ""
    },
    "transmission": {
      "gears": null
    },
    "range": {
      "value": null,
      "unit": null
    }
  }
];

/* ================= CAR DATA ================= */
/* PASTE FULL car.json CONTENT HERE (ARRAY ONLY) */
const CAR_DATA = [
 {
   "id": "Maruti Suzuki Dzire",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Maruti",
   "model": "Dzire",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 90,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "22",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Tata Tigor",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Tata",
   "model": "Tigor",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 86,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Revotron"
 },
 {
   "id": "BMW Z4",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "BMW",
   "model": "Z4",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "2998",
   "number_of_cylinder": "6",
   "power_ps": 340,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "RWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "Ferrari 812 GTS",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Ferrari",
   "model": "812 GTS",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "6496",
   "number_of_cylinder": "12",
   "power_ps": 800,
   "torque_nm": 718,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "6",
   "Wheel Drive": "RWD",
   "Engine series": "F140 V12"
 },
 {
   "id": "Ferrari Portofino",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Ferrari",
   "model": "Portofino",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "3855",
   "number_of_cylinder": "8",
   "power_ps": 620,
   "torque_nm": 760,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "F154 Twin-Turbo V8"
 },
 {
   "id": "Lamborghini Huracan EVO Spyder",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Lamborghini",
   "model": "Huracan EVO Spyder",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "5204",
   "number_of_cylinder": "10",
   "power_ps": 640,
   "torque_nm": 600,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "Naturally Aspirated V10"
 },
 {
   "id": "Maserati GranCabrio",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Maserati",
   "model": "GranCabrio",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "4691",
   "number_of_cylinder": "8",
   "power_ps": 460,
   "torque_nm": 520,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "F136 V8"
 },
 {
   "id": "Mercedes-Benz AMG E53 Cabriole",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Mercedes-Benz",
   "model": "AMG E53 Cabriole",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "2999",
   "number_of_cylinder": "6",
   "power_ps": 435,
   "torque_nm": 520,
   "fuelType": "Petrol + Mild Hybrid",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Inline-6 EQ Boost"
 },
 {
   "id": "Mercedes-Benz AMG SL55 Roadster",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Mercedes-Benz",
   "model": "AMG SL55 Roadster",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 476,
   "torque_nm": 700,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "Mercedes-Benz CLE Cabriole",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Mercedes-Benz",
   "model": "CLE Cabriole",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "1999",
   "number_of_cylinder": "4",
   "power_ps": 204,
   "torque_nm": 320,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Mercedes-Benz Maybach SL 680",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Mercedes-Benz",
   "model": "Maybach SL 680",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 585,
   "torque_nm": 800,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "MG Cyberster",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "MG",
   "model": "Cyberster",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 544,
   "torque_nm": 725,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Mini Cooper S Convertible",
   "type": "Car",
   "bodyType": "CONVERTIBLES",
   "brand": "Mini",
   "model": "Cooper S Convertible",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "1998",
   "number_of_cylinder": "4",
   "power_ps": 178,
   "torque_nm": 280,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "Aston Martin DB11",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Aston Martin",
   "model": "DB11",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 535,
   "torque_nm": 675,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "Aston Martin DB12",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Aston Martin",
   "model": "DB12",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 680,
   "torque_nm": 800,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "Aston Martin Vanquish",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Aston Martin",
   "model": "Vanquish",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "5204",
   "number_of_cylinder": "12",
   "power_ps": 573,
   "torque_nm": 620,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "RWD",
   "Engine series": "V12"
 },
 {
   "id": "Aston Martin Vantage",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Aston Martin",
   "model": "Vantage",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 510,
   "torque_nm": 685,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "BMW M2",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "BMW",
   "model": "M2",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "2993",
   "number_of_cylinder": "6",
   "power_ps": 460,
   "torque_nm": 550,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "M TwinPower Turbo"
 },
 {
   "id": "BMW M4",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "BMW",
   "model": "M4",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "2993",
   "number_of_cylinder": "6",
   "power_ps": 510,
   "torque_nm": 650,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "M TwinPower Turbo"
 },
 {
   "id": "BMW M8",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "BMW",
   "model": "M8",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "4395",
   "number_of_cylinder": "8",
   "power_ps": 625,
   "torque_nm": 750,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "M TwinPower Turbo"
 },
 {
   "id": "Ferrari 296 GTB",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Ferrari",
   "model": "296 GTB",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "2992",
   "number_of_cylinder": "6",
   "power_ps": 830,
   "torque_nm": 740,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "RWD",
   "Engine series": "V6 Hybrid"
 },
 {
   "id": "Ferrari 296 GTS",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Ferrari",
   "model": "296 GTS",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "2992",
   "number_of_cylinder": "6",
   "power_ps": 830,
   "torque_nm": 740,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "RWD",
   "Engine series": "V6 Hybrid"
 },
 {
   "id": "Ferrari F8 Tributo",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Ferrari",
   "model": "F8 Tributo",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3902",
   "number_of_cylinder": "8",
   "power_ps": 720,
   "torque_nm": 770,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "Ferrari Roma",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Ferrari",
   "model": "Roma",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "3855",
   "number_of_cylinder": "8",
   "power_ps": 620,
   "torque_nm": 760,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "Lamborghini Revuelto",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Lamborghini",
   "model": "Revuelto",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "6498",
   "number_of_cylinder": "12",
   "power_ps": 1015,
   "torque_nm": 807,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "6",
   "Wheel Drive": "AWD",
   "Engine series": "V12 Hybrid"
 },
 {
   "id": "Lamborghini Temerario",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Lamborghini",
   "model": "Temerario",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3995",
   "number_of_cylinder": "8",
   "power_ps": 800,
   "torque_nm": 730,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo V8 Hybrid"
 },
 {
   "id": "Lotus Emira",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Lotus",
   "model": "Emira",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3456",
   "number_of_cylinder": "6",
   "power_ps": 405,
   "torque_nm": 420,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "11",
   "Wheel Drive": "RWD",
   "Engine series": "Supercharged V6"
 },
 {
   "id": "Maserati Gran Turismo",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Maserati Gran",
   "model": "Gran Turismo",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "2992",
   "number_of_cylinder": "6",
   "power_ps": 490,
   "torque_nm": 600,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "AWD",
   "Engine series": "Nettuno V6"
 },
 {
   "id": "Maserati MC20",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Maserati",
   "model": "MC20",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "2992",
   "number_of_cylinder": "6",
   "power_ps": 630,
   "torque_nm": 730,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "Nettuno V6"
 },
 {
   "id": "Maserati MCPURA",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Maserati",
   "model": "MCPURA",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "2992",
   "number_of_cylinder": "6",
   "power_ps": 630,
   "torque_nm": 730,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "Nettuno V6"
 },
 {
   "id": "McLaren 720S",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "McLaren",
   "model": "720S",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3994",
   "number_of_cylinder": "8",
   "power_ps": 720,
   "torque_nm": 770,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "McLaren 750S",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "McLaren",
   "model": "750S",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3994",
   "number_of_cylinder": "8",
   "power_ps": 750,
   "torque_nm": 800,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "McLaren GT",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "McLaren",
   "model": "GT",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "2",
   "engine_cc": "3994",
   "number_of_cylinder": "8",
   "power_ps": 620,
   "torque_nm": 630,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "Mercedes-Benz AMG CLE",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Mercedes-Benz",
   "model": "AMG CLE",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "1999",
   "number_of_cylinder": "4",
   "power_ps": 408,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Turbo"
 },
 {
   "id": "Mercedes-Benz AMG GLC 43 Coupe",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Mercedes-Benz",
   "model": "AMG GLC 43 Coupe",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1991",
   "number_of_cylinder": "4",
   "power_ps": 421,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Turbo"
 },
 {
   "id": "Mercedes-Benz AMG GLE Coupe",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Mercedes-Benz",
   "model": "AMG GLE Coupe",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2999",
   "number_of_cylinder": "6",
   "power_ps": 435,
   "torque_nm": 560,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Turbo"
 },
 {
   "id": "Porsche 911",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Porsche",
   "model": "911",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "2981",
   "number_of_cylinder": "6",
   "power_ps": 385,
   "torque_nm": 450,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "Flat-6 Turbo"
 },
 {
   "id": "Porsche Cayenne Coupe",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Porsche",
   "model": "Cayenne Coupe",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "2995",
   "number_of_cylinder": "6",
   "power_ps": 353,
   "torque_nm": 500,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Rolls-Royce Spectre",
   "type": "Car",
   "bodyType": "Coupe",
   "brand": "Rolls-Royce",
   "model": "Spectre",
   "citydaily": 10,
   "cityoccasional": 10,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 585,
   "torque_nm": 900,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Bajaj Qute",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Bajaj",
   "model": "Qute",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "4",
   "engine_cc": "216",
   "number_of_cylinder": "1",
   "power_ps": 13,
   "torque_nm": 19,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual",
   "mileage": "35",
   "Wheel Drive": "RWD",
   "Engine series": "DTSi"
 },
 {
   "id": "Citro�n C3",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Citro�n",
   "model": "C3",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 110,
   "torque_nm": 190,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "PureTech"
 },
 {
   "id": "Citro�n eC3",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Citro�n",
   "model": "C3",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 57,
   "torque_nm": 143,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "PMSM"
 },
 {
   "id": "Hyundai Grand i10 Nios",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Hyundai",
   "model": "Grand iGrand i10 Nios",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 83,
   "torque_nm": 114,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Kappa"
 },
 {
   "id": "Hyundai i20",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Hyundai",
   "model": "i20",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 88,
   "torque_nm": 115,
   "fuelType": "Petrol",
   "transmission": "Manual / CVT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Kappa"
 },
 {
   "id": "Hyundai i20 N Line",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Hyundai",
   "model": "i20 N Line",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "998",
   "number_of_cylinder": "3",
   "power_ps": 120,
   "torque_nm": 172,
   "fuelType": "Petrol",
   "transmission": "Manual / DCT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Turbo GDi"
 },
 {
   "id": "Hyundai Prime HB",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Hyundai",
   "model": "Prime HB",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 83,
   "torque_nm": 114,
   "fuelType": "Petrol",
   "transmission": "Manual",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Kappa"
 },
 {
   "id": "Maruti Suzuki Alto K10",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Maruti Suzuki",
   "model": "K10",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "998",
   "number_of_cylinder": "3",
   "power_ps": 67,
   "torque_nm": 90,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "24",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maruti Suzuki Baleno",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Maruti",
   "model": "Baleno",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 90,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "22",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maruti Suzuki S-Presso",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Maruti Suzuki",
   "model": "Presso",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "4",
   "engine_cc": "998",
   "number_of_cylinder": "3",
   "power_ps": 67,
   "torque_nm": 90,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "21",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maruti Suzuki Swift",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Maruti",
   "model": "Swift",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 89,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "22",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Mercedes-Benz AMG A45 S",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Mercedes-Benz",
   "model": "AMG A45 S",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1991",
   "number_of_cylinder": "4",
   "power_ps": 421,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Turbo"
 },
 {
   "id": "MG Comet EV",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "MG",
   "model": "Come EV",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "4",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 42,
   "torque_nm": 110,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD",
   "Engine series": "PMSM"
 },
 {
   "id": "Mini Cooper",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Mini",
   "model": "Cooper",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "4",
   "engine_cc": "1998",
   "number_of_cylinder": "4",
   "power_ps": 178,
   "torque_nm": 280,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "17",
   "Wheel Drive": "FWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "Mini Cooper SE",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Mini",
   "model": "Cooper SE",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "4",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 184,
   "torque_nm": 270,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Electric Drive"
 },
 {
   "id": "Mini Countryman",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Mini",
   "model": "Countryman",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1998",
   "number_of_cylinder": "4",
   "power_ps": 192,
   "torque_nm": 280,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "AWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "Mini Countryman Electric",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Mini",
   "model": "Countryman Electric",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 204,
   "torque_nm": 250,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Electric Drive"
 },
 {
   "id": "Renault Kwid",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Renault",
   "model": "Kwid",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "999",
   "number_of_cylinder": "3",
   "power_ps": 68,
   "torque_nm": 91,
   "fuelType": "Petrol",
   "transmission": "Manual / AMT",
   "mileage": "22",
   "Wheel Drive": "FWD",
   "Engine series": "SCe"
 },
 {
   "id": "Tata Altroz",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Tata",
   "model": "Altroz",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 86,
   "torque_nm": 113,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / DCT",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "Revotron"
 },
 {
   "id": "Tata Tiago",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Tata",
   "model": "Tiago",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 86,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Revotron"
 },
 {
   "id": "Tata Tiago EV",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Tata",
   "model": "Tigo EV",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 75,
   "torque_nm": 114,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Ziptron"
 },
 {
   "id": "Tata Tiago NRG",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Tata",
   "model": "Tigo NRG",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 86,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Revotron"
 },
 {
   "id": "Toyota Glanza",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Toyota",
   "model": "Glanza",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 90,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "22",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Vayve Mobility Eva",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Vayve",
   "model": "Mbility Eva",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "2",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 20,
   "torque_nm": 50,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD",
   "Engine series": "PMSM"
 },
 {
   "id": "Volkswagen Golf GTI",
   "type": "Car",
   "bodyType": "Hatchback",
   "brand": "Volkswagen",
   "model": "Golf GTI",
   "citydaily": 100,
   "cityoccasional": 100,
   "highwaydaily": 60,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 245,
   "torque_nm": 370,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "FWD",
   "Engine series": "TSI"
 },
 {
   "id": "Force Motors Trax Cruiser",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Force",
   "model": "Trax Cruiser",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`10/13",
   "engine_cc": "2596",
   "number_of_cylinder": "4",
   "power_ps": 91,
   "torque_nm": 250,
   "fuelType": "Diesel",
   "transmission": "Manual",
   "mileage": "13",
   "Wheel Drive": "RWD",
   "Engine series": "FM 2.6"
 },
 {
   "id": "Kia Carens",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Kia",
   "model": "Carens",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 160,
   "torque_nm": 253,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "Smartstream"
 },
 {
   "id": "Kia Carens Clavis",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Kia",
   "model": "Carens Clavis",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 160,
   "torque_nm": 253,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "Smartstream"
 },
 {
   "id": "Kia Carens Clavis EV",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Kia",
   "model": "Clans Clavis EV",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 200,
   "torque_nm": 310,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "PMSM"
 },
 {
   "id": "Lexus LM",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Lexus",
   "model": "LM",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`4/7",
   "engine_cc": "2487",
   "number_of_cylinder": "4",
   "power_ps": 250,
   "torque_nm": 239,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "15",
   "Wheel Drive": "AWD",
   "Engine series": "Dynamic Force"
 },
 {
   "id": "Mahindra Marazzo",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Mahindra",
   "model": "Marazzo",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`7/8",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 123,
   "torque_nm": 300,
   "fuelType": "Diesel",
   "transmission": "Manual",
   "mileage": "17.3",
   "Wheel Drive": "FWD",
   "Engine series": "mHawk"
 },
 {
   "id": "Maruti Suzuki Ertiga",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Maruti Suzuki",
   "model": "Ertiga",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 103,
   "torque_nm": 137,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / Auto",
   "mileage": "20.5",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maruti Suzuki XL6",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Maruti Suzuki",
   "model": "XL6",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "6",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 103,
   "torque_nm": 137,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / Auto",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "MG M9",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "MG",
   "model": "M9",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 245,
   "torque_nm": 350,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "MG Windsor EV",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "MG",
   "model": "Windor EV",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 177,
   "torque_nm": 280,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "PMSM"
 },
 {
   "id": "Renault Triber",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Renault",
   "model": "Triber",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "999",
   "number_of_cylinder": "3",
   "power_ps": 72,
   "torque_nm": 96,
   "fuelType": "Petrol",
   "transmission": "Manual / AMT",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "Energy"
 },
 {
   "id": "Toyota Innova Crysta",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Toyota",
   "model": "Innova Crysta",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "2393",
   "number_of_cylinder": "4",
   "power_ps": 150,
   "torque_nm": 343,
   "fuelType": "Diesel",
   "transmission": "Manual / Auto",
   "mileage": "11",
   "Wheel Drive": "RWD",
   "Engine series": "GD"
 },
 {
   "id": "Toyota Innova Hycross",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Toyota",
   "model": "Innova Hycross",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1987",
   "number_of_cylinder": "4",
   "power_ps": 186,
   "torque_nm": 206,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "23",
   "Wheel Drive": "FWD",
   "Engine series": "TNGA"
 },
 {
   "id": "Toyota Rumion",
   "type": "Car",
   "bodyType": "MUV",
   "brand": "Toyota",
   "model": "Rumion",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 103,
   "torque_nm": 137,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / Auto",
   "mileage": "20.5",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Isuzu V-Cross",
   "type": "Car",
   "bodyType": "Pick up",
   "brand": "Isuzu",
   "model": "V-Cross",
   "citydaily": 10,
   "cityoccasional": 40,
   "highwaydaily": 40,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "1898",
   "number_of_cylinder": "4",
   "power_ps": 163,
   "torque_nm": 360,
   "fuelType": "Diesel",
   "transmission": "Manual",
   "mileage": "12.4",
   "Wheel Drive": "4WD",
   "Engine series": "RZ4E-TC"
 },
 {
   "id": "Toyota Hilux",
   "type": "Car",
   "bodyType": "Pick up",
   "brand": "Toyota",
   "model": "Hilux",
   "citydaily": 10,
   "cityoccasional": 40,
   "highwaydaily": 40,
   "highwayoccasional": 60,
   "seating capacity": "5",
   "engine_cc": "2755",
   "number_of_cylinder": "4",
   "power_ps": 204,
   "torque_nm": 500,
   "fuelType": "Diesel",
   "transmission": "Manual / Automatic",
   "mileage": "11.25",
   "Wheel Drive": "4WD",
   "Engine series": "GD Series (2GD-FTV)"
 },
 {
   "id": "Audi A4",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Audi",
   "model": "A4",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 204,
   "torque_nm": 320,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "17",
   "Wheel Drive": "FWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Audi A6",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Audi",
   "model": "A6",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 245,
   "torque_nm": 370,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "FWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Audi A8 L",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Audi",
   "model": "A8 L",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2995",
   "number_of_cylinder": "6",
   "power_ps": 340,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "AWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Audi e-tron GT",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Audi",
   "model": "e-tron GT",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 476,
   "torque_nm": 630,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Audi RS5",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Audi",
   "model": "RS5",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2894",
   "number_of_cylinder": "6",
   "power_ps": 450,
   "torque_nm": 600,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "AWD",
   "Engine series": "RS TFSI"
 },
 {
   "id": "Audi S5 Sportback",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Audi",
   "model": "S5 Sportback",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2995",
   "number_of_cylinder": "6",
   "power_ps": 354,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Bentley Flying Spur",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Bentley",
   "model": "Flying Spur",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "3996",
   "number_of_cylinder": "8",
   "power_ps": 550,
   "torque_nm": 770,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "BMW 2 Series Gran Coupe",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "2 Series Gran Coupe",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1995",
   "number_of_cylinder": "4",
   "power_ps": 190,
   "torque_nm": 280,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "BMW 3 Series LWB",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "3 Series LWB",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1998",
   "number_of_cylinder": "4",
   "power_ps": 258,
   "torque_nm": 400,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "16",
   "Wheel Drive": "RWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "BMW 5 Series",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "5 Series",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1998",
   "number_of_cylinder": "4",
   "power_ps": 258,
   "torque_nm": 400,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "RWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "BMW 7 Series",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "7 Series",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2998",
   "number_of_cylinder": "6",
   "power_ps": 381,
   "torque_nm": 520,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "BMW i4",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "MW i4",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 340,
   "torque_nm": 430,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD",
   "Engine series": "eDrive"
 },
 {
   "id": "BMW i5",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "MW i5",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 340,
   "torque_nm": 430,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "eDrive"
 },
 {
   "id": "BMW i7",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "MW i7",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 544,
   "torque_nm": 745,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "eDrive"
 },
 {
   "id": "BMW M340i",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "M340i",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2998",
   "number_of_cylinder": "6",
   "power_ps": 387,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "13",
   "Wheel Drive": "AWD",
   "Engine series": "M TwinPower"
 },
 {
   "id": "BMW M5",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BMW",
   "model": "M5",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "4395",
   "number_of_cylinder": "8",
   "power_ps": 625,
   "torque_nm": 750,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "M TwinPower"
 },
 {
   "id": "BYD Seal",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "BYD",
   "model": "Seal",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 313,
   "torque_nm": 360,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "Blade Motor"
 },
 {
   "id": "Honda Amaze",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Honda",
   "model": "Amaze",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "4",
   "power_ps": 90,
   "torque_nm": 110,
   "fuelType": "Petrol",
   "transmission": "Manual / CVT",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "i-VTEC"
 },
 {
   "id": "Honda Amaze 2nd Gen",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Honda",
   "model": "Amaze 2nd Gen",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "4",
   "power_ps": 90,
   "torque_nm": 110,
   "fuelType": "Petrol",
   "transmission": "Manual / CVT",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "i-VTEC"
 },
 {
   "id": "Honda City",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Honda",
   "model": "City",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 121,
   "torque_nm": 145,
   "fuelType": "Petrol",
   "transmission": "Manual / CVT",
   "mileage": "17.8",
   "Wheel Drive": "FWD",
   "Engine series": "i-VTEC"
 },
 {
   "id": "Honda City Hybrid eHEV",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Honda",
   "model": "City Hybrid eHEV",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 126,
   "torque_nm": 253,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "27",
   "Wheel Drive": "FWD",
   "Engine series": "Atkinson"
 },
 {
   "id": "Hyundai Aura",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Hyundai",
   "model": "Aura",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 83,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Kappa"
 },
 {
   "id": "Hyundai Verna",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Hyundai",
   "model": "Verna",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 160,
   "torque_nm": 253,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "Turbo GDi"
 },
 {
   "id": "Lexus ES",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Lexus",
   "model": "ES",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2487",
   "number_of_cylinder": "4",
   "power_ps": 218,
   "torque_nm": 221,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "22",
   "Wheel Drive": "FWD",
   "Engine series": "Dynamic Force"
 },
 {
   "id": "Maruti Suzuki Ciaz",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Maruti Suzuki",
   "model": "Ciaz",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 105,
   "torque_nm": 138,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maruti Suzuki Dzire",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Maruti Suzuki",
   "model": "Dzire",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 90,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "22",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maserati Ghibli",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Maserati",
   "model": "Ghibli",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1995",
   "number_of_cylinder": "4",
   "power_ps": 330,
   "torque_nm": 450,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo"
 },
 {
   "id": "Maserati Quattroporte",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Maserati",
   "model": "Quattroporte",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2979",
   "number_of_cylinder": "6",
   "power_ps": 350,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "RWD",
   "Engine series": "Twin-Turbo"
 },
 {
   "id": "Mercedes-Benz A-Class",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "A-Class",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1332",
   "number_of_cylinder": "4",
   "power_ps": 163,
   "torque_nm": 250,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "15",
   "Wheel Drive": "FWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Mercedes-Benz AMG C 43",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "AMG C 43",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1991",
   "number_of_cylinder": "4",
   "power_ps": 408,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Turbo"
 },
 {
   "id": "Mercedes-Benz AMG C63 S E",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "AMG C63 S E",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1991",
   "number_of_cylinder": "4",
   "power_ps": 680,
   "torque_nm": 1020,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Hybrid"
 },
 {
   "id": "Mercedes-Benz AMG EQS",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "AMG EQS",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 761,
   "torque_nm": 1020,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Dual Motor"
 },
 {
   "id": "Mercedes-Benz AMG GT 63",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "AMG GT 63",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 585,
   "torque_nm": 800,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "Mercedes-Benz AMG GT 63 S",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "AMG GT 63 S",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 639,
   "torque_nm": 900,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "Mercedes-Benz AMG S 63 E Performance",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "AMG S 63 E Performance",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 802,
   "torque_nm": 1430,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Hybrid"
 },
 {
   "id": "Mercedes-Benz C-Class",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "C-Class",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1993",
   "number_of_cylinder": "4",
   "power_ps": 204,
   "torque_nm": 300,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "16",
   "Wheel Drive": "RWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Mercedes-Benz E-Class",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "E-Class",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1999",
   "number_of_cylinder": "4",
   "power_ps": 204,
   "torque_nm": 320,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "15",
   "Wheel Drive": "RWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Mercedes-Benz EQS",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "EQS",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 544,
   "torque_nm": 858,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "EQ"
 },
 {
   "id": "Mercedes-Benz Maybach S-Class",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "Maybach S-Class",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 557,
   "torque_nm": 730,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "Mercedes-Benz S-Class",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Mercedes-Benz",
   "model": "S-Class",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2999",
   "number_of_cylinder": "6",
   "power_ps": 367,
   "torque_nm": 500,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "RWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Porsche Panamera",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Porsche",
   "model": "Panamera",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "2894",
   "number_of_cylinder": "6",
   "power_ps": 353,
   "torque_nm": 500,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo"
 },
 {
   "id": "Porsche Taycan",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Porsche",
   "model": "Taycan",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 625,
   "torque_nm": 850,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Rolls-Royce Ghost",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Rolls-Royce",
   "model": "Ghost",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "6749",
   "number_of_cylinder": "12",
   "power_ps": 571,
   "torque_nm": 850,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "RWD",
   "Engine series": "V12"
 },
 {
   "id": "Rolls-Royce Phantom",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Rolls-Royce",
   "model": "Phantom",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "6749",
   "number_of_cylinder": "12",
   "power_ps": 571,
   "torque_nm": 900,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "6",
   "Wheel Drive": "RWD",
   "Engine series": "V12"
 },
 {
   "id": "Skoda Octavia RS",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Skoda",
   "model": "Octavia RS",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 245,
   "torque_nm": 370,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "15",
   "Wheel Drive": "FWD",
   "Engine series": "TSI"
 },
 {
   "id": "Skoda Slavia",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Skoda",
   "model": "Slavia",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 150,
   "torque_nm": 250,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "TSI"
 },
 {
   "id": "Tata Tigor EV",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Tata",
   "model": "Tigor EV",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 75,
   "torque_nm": 170,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Ziptron"
 },
 {
   "id": "Tata Xpres",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Tata",
   "model": "Xpres",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 86,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "Revotron"
 },
 {
   "id": "Tesla Model Y",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Tesla",
   "model": "Model Y",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 384,
   "torque_nm": 510,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Toyota Camry",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Toyota",
   "model": "Camry",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2487",
   "number_of_cylinder": "4",
   "power_ps": 218,
   "torque_nm": 221,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "25",
   "Wheel Drive": "FWD",
   "Engine series": "TNGA"
 },
 {
   "id": "Volkswagen Virtus",
   "type": "Car",
   "bodyType": "Sedan",
   "brand": "Volkswagen",
   "model": "Virtus",
   "citydaily": 60,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 150,
   "torque_nm": 250,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "TSI"
 },
 {
   "id": "Aston Martin DBX",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Aston Martin",
   "model": "DBX",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 707,
   "torque_nm": 900,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "Audi e-tron",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "e-tron",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 408,
   "torque_nm": 664,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Audi Q3",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "Q3",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 190,
   "torque_nm": 320,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "15",
   "Wheel Drive": "FWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Audi Q3 Sportback",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "Q3 Sportback",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 190,
   "torque_nm": 320,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "15",
   "Wheel Drive": "FWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Audi Q5",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "Q5",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 265,
   "torque_nm": 370,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "13",
   "Wheel Drive": "AWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Audi Q7",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "Q7",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "2995",
   "number_of_cylinder": "6",
   "power_ps": 340,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Audi Q8",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "Q8",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2995",
   "number_of_cylinder": "6",
   "power_ps": 340,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "TFSI"
 },
 {
   "id": "Audi Q8 e-tron",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "Q8 e-tron",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 408,
   "torque_nm": 664,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Audi Q8 Sportback e-tron",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "Q8 Sportback e-tron",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 408,
   "torque_nm": 664,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Audi RS Q8 Performance",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Audi",
   "model": "RS Q8 Performance",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "3996",
   "number_of_cylinder": "8",
   "power_ps": 640,
   "torque_nm": 850,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "Bentley Bentayga",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Bentley",
   "model": "Bentayga",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "3996",
   "number_of_cylinder": "8",
   "power_ps": 550,
   "torque_nm": 770,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo V8"
 },
 {
   "id": "BMW iX",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "iX",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 523,
   "torque_nm": 765,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "eDrive"
 },
 {
   "id": "BMW iX1",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "iX1",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 204,
   "torque_nm": 250,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "eDrive"
 },
 {
   "id": "BMW iX1 LWB",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "iX1 LWB",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 204,
   "torque_nm": 250,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "eDrive"
 },
 {
   "id": "BMW X1",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "X1",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1998",
   "number_of_cylinder": "4",
   "power_ps": 192,
   "torque_nm": 280,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "BMW X3",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "X3",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1998",
   "number_of_cylinder": "4",
   "power_ps": 252,
   "torque_nm": 350,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "AWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "BMW X4 M40i",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "X4 M40i",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2998",
   "number_of_cylinder": "6",
   "power_ps": 360,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "M TwinPower"
 },
 {
   "id": "BMW X5",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "X5",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2998",
   "number_of_cylinder": "6",
   "power_ps": 340,
   "torque_nm": 450,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "BMW X7",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "X7",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "2998",
   "number_of_cylinder": "6",
   "power_ps": 340,
   "torque_nm": 450,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "TwinPower Turbo"
 },
 {
   "id": "BMW XM",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BMW",
   "model": "XM",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "4395",
   "number_of_cylinder": "8",
   "power_ps": 653,
   "torque_nm": 800,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "M Hybrid V8"
 },
 {
   "id": "BYD Atto 3",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BYD",
   "model": "Atto 3",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 204,
   "torque_nm": 310,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Blade Motor"
 },
 {
   "id": "BYD Sealion 7",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "BYD",
   "model": "Sealion 7",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 530,
   "torque_nm": 690,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Blade Motor"
 },
 {
   "id": "Citro�n Aircross X",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Citro�n",
   "model": "Aircross X",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 110,
   "torque_nm": 190,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "17",
   "Wheel Drive": "FWD",
   "Engine series": "PureTech"
 },
 {
   "id": "Citro�n Basalt X",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Citro�n",
   "model": "Basalt X",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 110,
   "torque_nm": 190,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "17",
   "Wheel Drive": "FWD",
   "Engine series": "PureTech"
 },
 {
   "id": "Citro�n C5 Aircross",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Citro�n",
   "model": "C5 Aircross",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1998",
   "number_of_cylinder": "4",
   "power_ps": 210,
   "torque_nm": 300,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "FWD",
   "Engine series": "PureTech"
 },
 {
   "id": "Ferrari Purosangue SUV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Ferrari",
   "model": "Purusangue SUV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "6496",
   "number_of_cylinder": "12",
   "power_ps": 725,
   "torque_nm": 716,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "6",
   "Wheel Drive": "AWD",
   "Engine series": "F140 V12"
 },
 {
   "id": "Force Motors Gurkha",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Force",
   "model": "Gurkha",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "2596",
   "number_of_cylinder": "4",
   "power_ps": 140,
   "torque_nm": 320,
   "fuelType": "Diesel",
   "transmission": "Manual",
   "mileage": "12",
   "Wheel Drive": "4WD",
   "Engine series": "FM 2.6"
 },
 {
   "id": "Honda Elevate",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Honda",
   "model": "Elevate",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 121,
   "torque_nm": 145,
   "fuelType": "Petrol",
   "transmission": "Manual / CVT",
   "mileage": "15",
   "Wheel Drive": "FWD",
   "Engine series": "i-VTEC"
 },
 {
   "id": "Hyundai Alcazar",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Hyundai",
   "model": "Alcazar",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "1999",
   "number_of_cylinder": "4",
   "power_ps": 159,
   "torque_nm": 191,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "14",
   "Wheel Drive": "FWD",
   "Engine series": "Smartstream"
 },
 {
   "id": "Hyundai Creta",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Hyundai",
   "model": "Creta",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 160,
   "torque_nm": 253,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "Smartstream"
 },
 {
   "id": "Hyundai Creta Electric",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Hyundai",
   "model": "Creta Electric",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 217,
   "torque_nm": 350,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "PMSM"
 },
 {
   "id": "Hyundai Creta N Line",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Hyundai",
   "model": "Creta N Line",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1482",
   "number_of_cylinder": "4",
   "power_ps": 160,
   "torque_nm": 253,
   "fuelType": "Petrol",
   "transmission": "Manual / DCT",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "Turbo GDi"
 },
 {
   "id": "Hyundai Exter",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Hyundai",
   "model": "Exter",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 83,
   "torque_nm": 113,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / AMT",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "Kappa"
 },
 {
   "id": "Hyundai Ioniq 5",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Hyundai",
   "model": "Ioniq 5",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 305,
   "torque_nm": 605,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "E-GMP"
 },
 {
   "id": "Hyundai Venue",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Hyundai",
   "model": "Venue",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "998",
   "number_of_cylinder": "3",
   "power_ps": 120,
   "torque_nm": 172,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "Turbo GDi"
 },
 {
   "id": "Hyundai Venue N Line",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Hyundai",
   "model": "Venue N Line",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "998",
   "number_of_cylinder": "3",
   "power_ps": 120,
   "torque_nm": 172,
   "fuelType": "Petrol",
   "transmission": "Manual / DCT",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "Turbo GDi"
 },
 {
   "id": "Isuzu MU-X",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Isuzu",
   "model": "MU-X",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1898",
   "number_of_cylinder": "4",
   "power_ps": 163,
   "torque_nm": 360,
   "fuelType": "Diesel",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "RZ4E"
 },
 {
   "id": "Jaguar F-Pace",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Jaguar",
   "model": "F-Pace",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1997",
   "number_of_cylinder": "4",
   "power_ps": 250,
   "torque_nm": 365,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "AWD",
   "Engine series": "Ingenium"
 },
 {
   "id": "Jeep Compass",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Jeep",
   "model": "Compass",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1956",
   "number_of_cylinder": "4",
   "power_ps": 170,
   "torque_nm": 350,
   "fuelType": "Diesel / Petrol",
   "transmission": "Manual / Auto",
   "mileage": "16",
   "Wheel Drive": "FWD / AWD",
   "Engine series": "Multijet"
 },
 {
   "id": "Jeep Grand Cherokee",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Jeep",
   "model": "Grand Cherokee",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1995",
   "number_of_cylinder": "4",
   "power_ps": 272,
   "torque_nm": 400,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo GME"
 },
 {
   "id": "Jeep Meridian",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Jeep",
   "model": "Meridian",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1956",
   "number_of_cylinder": "4",
   "power_ps": 170,
   "torque_nm": 350,
   "fuelType": "Diesel",
   "transmission": "Manual / Auto",
   "mileage": "16",
   "Wheel Drive": "FWD / AWD",
   "Engine series": "Multijet"
 },
 {
   "id": "Jeep Wrangler",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Jeep",
   "model": "Wrangler",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1995",
   "number_of_cylinder": "4",
   "power_ps": 270,
   "torque_nm": 400,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo GME"
 },
 {
   "id": "Kia EV6",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Kia",
   "model": "EV6",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 325,
   "torque_nm": 605,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "E-GMP"
 },
 {
   "id": "Kia EV9",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Kia",
   "model": "EV9",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 385,
   "torque_nm": 700,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "E-GMP"
 },
 {
   "id": "Kia Seltos",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Kia",
   "model": "Seltos",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 160,
   "torque_nm": 253,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "17",
   "Wheel Drive": "FWD",
   "Engine series": "Smartstream"
 },
 {
   "id": "Kia Sonet",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Kia",
   "model": "Sonet",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1493",
   "number_of_cylinder": "4",
   "power_ps": 120,
   "torque_nm": 250,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "Smartstream"
 },
 {
   "id": "Kia Syros",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Kia",
   "model": "Syros",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 160,
   "torque_nm": 253,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "Smartstream"
 },
 {
   "id": "Lamborghini Urus SE",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Lamborghini",
   "model": "Urus SE",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "3996",
   "number_of_cylinder": "8",
   "power_ps": 800,
   "torque_nm": 950,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo V8 Hybrid"
 },
 {
   "id": "Land Rover Defender",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Land Rover",
   "model": "Defender",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`5/7",
   "engine_cc": "2997",
   "number_of_cylinder": "6",
   "power_ps": 400,
   "torque_nm": 550,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "Ingenium"
 },
 {
   "id": "Land Rover Discovery",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Land Rover",
   "model": "Discovery",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "2997",
   "number_of_cylinder": "6",
   "power_ps": 300,
   "torque_nm": 650,
   "fuelType": "Diesel",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "Ingenium"
 },
 {
   "id": "Land Rover Range Rover",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Land Rover",
   "model": "Range Rover",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2997",
   "number_of_cylinder": "6",
   "power_ps": 400,
   "torque_nm": 550,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "Ingenium"
 },
 {
   "id": "Land Rover Range Rover Evoque",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Land Rover",
   "model": "Range Rover Evoque",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1997",
   "number_of_cylinder": "4",
   "power_ps": 249,
   "torque_nm": 365,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "AWD",
   "Engine series": "Ingenium"
 },
 {
   "id": "Land Rover Range Rover Sport",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Land Rover",
   "model": "Range Rover Sport",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2997",
   "number_of_cylinder": "6",
   "power_ps": 400,
   "torque_nm": 550,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "AWD",
   "Engine series": "Ingenium"
 },
 {
   "id": "Land Rover Range Rover Velar",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Land Rover",
   "model": "Range Rover Velar",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1997",
   "number_of_cylinder": "4",
   "power_ps": 250,
   "torque_nm": 365,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "13",
   "Wheel Drive": "AWD",
   "Engine series": "Ingenium"
 },
 {
   "id": "Lexus LX",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Lexus",
   "model": "LX",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "3445",
   "number_of_cylinder": "6",
   "power_ps": 415,
   "torque_nm": 650,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo V6"
 },
 {
   "id": "Lexus NX",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Lexus",
   "model": "NX",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2487",
   "number_of_cylinder": "4",
   "power_ps": 244,
   "torque_nm": 239,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Automatic",
   "mileage": "17",
   "Wheel Drive": "AWD",
   "Engine series": "Dynamic Force"
 },
 {
   "id": "Lexus RX",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Lexus",
   "model": "RX",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2487",
   "number_of_cylinder": "4",
   "power_ps": 247,
   "torque_nm": 316,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Automatic",
   "mileage": "16",
   "Wheel Drive": "AWD",
   "Engine series": "Dynamic Force"
 },
 {
   "id": "Lotus Eletre",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Lotus",
   "model": "Eletre",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 603,
   "torque_nm": 710,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Lotus Emeya",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Lotus",
   "model": "Emeya",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 918,
   "torque_nm": 985,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Mahindra BE 6",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "BE 6",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 286,
   "torque_nm": 380,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD",
   "Engine series": "INGLO"
 },
 {
   "id": "Mahindra BE 6 FE",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "BE 6 FE",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 340,
   "torque_nm": 450,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "INGLO"
 },
 {
   "id": "Mahindra Bolero",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "Bolero",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1493",
   "number_of_cylinder": "3",
   "power_ps": 75,
   "torque_nm": 210,
   "fuelType": "Diesel",
   "transmission": "Manual",
   "mileage": "16",
   "Wheel Drive": "RWD",
   "Engine series": "mHawk"
 },
 {
   "id": "Mahindra Bolero Neo",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "Bolero neo",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1493",
   "number_of_cylinder": "3",
   "power_ps": 100,
   "torque_nm": 260,
   "fuelType": "Diesel",
   "transmission": "Manual",
   "mileage": "17",
   "Wheel Drive": "RWD",
   "Engine series": "mHawk"
 },
 {
   "id": "Mahindra Bolero Neo Plus",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "Bolero neo Plus",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "9",
   "engine_cc": "2184",
   "number_of_cylinder": "4",
   "power_ps": 120,
   "torque_nm": 280,
   "fuelType": "Diesel",
   "transmission": "Manual",
   "mileage": "14",
   "Wheel Drive": "RWD",
   "Engine series": "mHawk"
 },
 {
   "id": "Mahindra Scorpio",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "Scorpio",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "2179",
   "number_of_cylinder": "4",
   "power_ps": 140,
   "torque_nm": 320,
   "fuelType": "Diesel",
   "transmission": "Manual",
   "mileage": "14",
   "Wheel Drive": "RWD",
   "Engine series": "mHawk"
 },
 {
   "id": "Mahindra Scorpio N",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "Scorpio N",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "1997",
   "number_of_cylinder": "4",
   "power_ps": 200,
   "torque_nm": 380,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "15",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "mStallion / mHawk"
 },
 {
   "id": "Mahindra Thar",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "Thar",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "1997",
   "number_of_cylinder": "4",
   "power_ps": 152,
   "torque_nm": 320,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "15",
   "Wheel Drive": "4WD",
   "Engine series": "mStallion / mHawk"
 },
 {
   "id": "Mahindra Thar Roxx",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "Thar Roxx",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1997",
   "number_of_cylinder": "4",
   "power_ps": 175,
   "torque_nm": 380,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "14",
   "Wheel Drive": "4WD",
   "Engine series": "mStallion"
 },
 {
   "id": "Mahindra XEV 9e",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "XEV 9e",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 340,
   "torque_nm": 450,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "INGLO"
 },
 {
   "id": "Mahindra XEV 9S",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "XEV 9S",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 286,
   "torque_nm": 380,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD",
   "Engine series": "INGLO"
 },
 {
   "id": "Mahindra XUV 3XO",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "XUV 3XO",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1197",
   "number_of_cylinder": "3",
   "power_ps": 131,
   "torque_nm": 230,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "TGDi"
 },
 {
   "id": "Mahindra XUV 3XO EV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "XUV 3XO EV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 150,
   "torque_nm": 310,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "INGLO"
 },
 {
   "id": "Mahindra XUV 400",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "XUV 400",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 150,
   "torque_nm": 310,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "INGLO"
 },
 {
   "id": "Mahindra XUV 7XO",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mahindra",
   "model": "XUV 7XO",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1997",
   "number_of_cylinder": "4",
   "power_ps": 200,
   "torque_nm": 380,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "14",
   "Wheel Drive": "AWD",
   "Engine series": "mStallion"
 },
 {
   "id": "Maruti Suzuki Brezza",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Maruti Suzuki",
   "model": "Brezza",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 103,
   "torque_nm": 137,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual / Auto",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maruti Suzuki Fronx",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Maruti Suzuki",
   "model": "Fronx",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "998",
   "number_of_cylinder": "3",
   "power_ps": 100,
   "torque_nm": 147,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "21",
   "Wheel Drive": "FWD",
   "Engine series": "BoosterJet"
 },
 {
   "id": "Maruti Suzuki Grand Vitara",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Maruti Suzuki",
   "model": "Grand Vitara",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 103,
   "torque_nm": 137,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Manual / Auto",
   "mileage": "21�27",
   "Wheel Drive": "FWD / AWD",
   "Engine series": "K-Series / TNGA"
 },
 {
   "id": "Maruti Suzuki Jimny",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Maruti Suzuki",
   "model": "Jimmy",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "4",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 105,
   "torque_nm": 134,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "16",
   "Wheel Drive": "AWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maruti Suzuki Victoris",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Maruti Suzuki",
   "model": "Victoris",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 103,
   "torque_nm": 137,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "K-Series"
 },
 {
   "id": "Maserati Grecale",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Maserati",
   "model": "Grecale",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1995",
   "number_of_cylinder": "4",
   "power_ps": 300,
   "torque_nm": 450,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Maserati Levante",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Maserati",
   "model": "Levante",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2979",
   "number_of_cylinder": "6",
   "power_ps": 350,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo V6"
 },
 {
   "id": "Mercedes-Benz AMG G-Class",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "AMG G-Class",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 585,
   "torque_nm": 850,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "7",
   "Wheel Drive": "AWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "Mercedes-Benz AMG GLA35",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "AMG GLA35",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1991",
   "number_of_cylinder": "4",
   "power_ps": 306,
   "torque_nm": 400,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "13",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Turbo"
 },
 {
   "id": "Mercedes-Benz AMG GLC43 Coupe",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "AMG GLC43 Coupe",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1991",
   "number_of_cylinder": "4",
   "power_ps": 421,
   "torque_nm": 500,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Turbo"
 },
 {
   "id": "Mercedes-Benz AMG GLE",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "AMG GLE",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2999",
   "number_of_cylinder": "6",
   "power_ps": 435,
   "torque_nm": 560,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "AMG Turbo"
 },
 {
   "id": "Mercedes-Benz EQA",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "EQA",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 292,
   "torque_nm": 520,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Mercedes-Benz EQB",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "EQB",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`5/7",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 292,
   "torque_nm": 520,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Mercedes-Benz EQE SUV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "EQE SUV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 408,
   "torque_nm": 858,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Mercedes-Benz EQS SUV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "EQS SUV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 544,
   "torque_nm": 858,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Mercedes-Benz G580 EQ Technology",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "G580 EQ Technology",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 587,
   "torque_nm": 1164,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Quad Motor"
 },
 {
   "id": "Mercedes-Benz G-Class",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "G-Class",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2925",
   "number_of_cylinder": "6",
   "power_ps": 330,
   "torque_nm": 700,
   "fuelType": "Diesel",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "OM656"
 },
 {
   "id": "Mercedes-Benz GLA",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "GLA",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1332",
   "number_of_cylinder": "4",
   "power_ps": 163,
   "torque_nm": 250,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "15",
   "Wheel Drive": "FWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Mercedes-Benz GLC",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "GLC",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1993",
   "number_of_cylinder": "4",
   "power_ps": 258,
   "torque_nm": 400,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Mercedes-Benz GLE",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "GLE",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1999",
   "number_of_cylinder": "4",
   "power_ps": 258,
   "torque_nm": 400,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Mercedes-Benz GLS",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "GLS",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "2999",
   "number_of_cylinder": "6",
   "power_ps": 367,
   "torque_nm": 500,
   "fuelType": "Petrol / Diesel",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Mercedes-Benz Maybach EQS SUV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "Maybach EQS SUV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 658,
   "torque_nm": 950,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Mercedes-Benz Maybach GLS",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Mercedes-Benz",
   "model": "Maybach GLS",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "3982",
   "number_of_cylinder": "8",
   "power_ps": 557,
   "torque_nm": 730,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "8",
   "Wheel Drive": "AWD",
   "Engine series": "AMG V8"
 },
 {
   "id": "MG Astor",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "MG",
   "model": "Astor",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 110,
   "torque_nm": 144,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "15",
   "Wheel Drive": "FWD",
   "Engine series": "VTi-TECH"
 },
 {
   "id": "MG Gloster",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "MG",
   "model": "Gloster",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "1996",
   "number_of_cylinder": "4",
   "power_ps": 215,
   "torque_nm": 480,
   "fuelType": "Diesel",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo"
 },
 {
   "id": "MG Hector",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "MG",
   "model": "Hector",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1956",
   "number_of_cylinder": "4",
   "power_ps": 170,
   "torque_nm": 350,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "14",
   "Wheel Drive": "FWD",
   "Engine series": "Multijet"
 },
 {
   "id": "MG Hector Plus",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "MG",
   "model": "Hector Plus",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "1956",
   "number_of_cylinder": "4",
   "power_ps": 170,
   "torque_nm": 350,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "13",
   "Wheel Drive": "FWD",
   "Engine series": "Multijet"
 },
 {
   "id": "MG ZS EV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "MG",
   "model": "ZS E",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 177,
   "torque_nm": 280,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "PMSM"
 },
 {
   "id": "Nissan Magnite",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Nissan",
   "model": "Magnite",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "999",
   "number_of_cylinder": "3",
   "power_ps": 100,
   "torque_nm": 160,
   "fuelType": "Petrol",
   "transmission": "Manual / CVT",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "HRA0"
 },
 {
   "id": "Nissan X-Trail",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Nissan",
   "model": "X-Trail",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`5/7",
   "engine_cc": "1497",
   "number_of_cylinder": "3",
   "power_ps": 204,
   "torque_nm": 300,
   "fuelType": "Petrol Hybrid",
   "transmission": "Automatic",
   "mileage": "18",
   "Wheel Drive": "AWD",
   "Engine series": "VC-Turbo"
 },
 {
   "id": "Porsche Cayenne",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Porsche",
   "model": "Cayenne",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "2995",
   "number_of_cylinder": "6",
   "power_ps": 353,
   "torque_nm": 500,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Porsche Cayenne EV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Porsche",
   "model": "Cayenne EV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 612,
   "torque_nm": 850,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Porsche Macan",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Porsche",
   "model": "Macan",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 265,
   "torque_nm": 400,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "11",
   "Wheel Drive": "AWD",
   "Engine series": "Turbo"
 },
 {
   "id": "Porsche Macan Turbo EV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Porsche",
   "model": "Macan Turbo EV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 639,
   "torque_nm": 1130,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Renault Kiger",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Renault",
   "model": "Kiger",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "999",
   "number_of_cylinder": "3",
   "power_ps": 100,
   "torque_nm": 160,
   "fuelType": "Petrol",
   "transmission": "Manual / CVT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "HRA0"
 },
 {
   "id": "Rolls-Royce Cullinan",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Rolls-Royce",
   "model": "Cullinan",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "6749",
   "number_of_cylinder": "12",
   "power_ps": 571,
   "torque_nm": 850,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "6",
   "Wheel Drive": "AWD",
   "Engine series": "V12"
 },
 {
   "id": "Skoda Kodiaq",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Skoda",
   "model": "Kodiaq",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1984",
   "number_of_cylinder": "4",
   "power_ps": 190,
   "torque_nm": 320,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "AWD",
   "Engine series": "TSI"
 },
 {
   "id": "Skoda Kushaq",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Skoda",
   "model": "Kushaq",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 150,
   "torque_nm": 250,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "TSI"
 },
 {
   "id": "Skoda Kylaq",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Skoda",
   "model": "Kylaq",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "999",
   "number_of_cylinder": "3",
   "power_ps": 115,
   "torque_nm": 178,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "19",
   "Wheel Drive": "FWD",
   "Engine series": "TSI"
 },
 {
   "id": "Tata Curvv",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Curvv",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 170,
   "torque_nm": 350,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "17",
   "Wheel Drive": "FWD",
   "Engine series": "Revotron"
 },
 {
   "id": "Tata Curvv EV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Cuvv EV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 167,
   "torque_nm": 280,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Ziptron"
 },
 {
   "id": "Tata Fortuner",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Fortuner",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "2755",
   "number_of_cylinder": "4",
   "power_ps": 204,
   "torque_nm": 500,
   "fuelType": "Diesel",
   "transmission": "Manual / Auto",
   "mileage": "10",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "GD"
 },
 {
   "id": "Tata Fortuner Legender",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Fortuner Legender",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "2755",
   "number_of_cylinder": "4",
   "power_ps": 204,
   "torque_nm": 500,
   "fuelType": "Diesel",
   "transmission": "Automatic",
   "mileage": "10",
   "Wheel Drive": "AWD",
   "Engine series": "GD"
 },
 {
   "id": "Tata Harrier",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Harrier",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1956",
   "number_of_cylinder": "4",
   "power_ps": 170,
   "torque_nm": 350,
   "fuelType": "Diesel",
   "transmission": "Manual / Auto",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "Kryotec"
 },
 {
   "id": "Tata Harrier EV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Harrier EV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 250,
   "torque_nm": 450,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Tata Nex EV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Nex EV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 129,
   "torque_nm": 245,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Ziptron"
 },
 {
   "id": "Tata Nexon",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Nexon",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 120,
   "torque_nm": 260,
   "fuelType": "Petrol / Diesel",
   "transmission": "Manual / Auto",
   "mileage": "17",
   "Wheel Drive": "FWD",
   "Engine series": "Revotron"
 },
 {
   "id": "Tata Punch",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Punch",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1199",
   "number_of_cylinder": "3",
   "power_ps": 86,
   "torque_nm": 113,
   "fuelType": "Petrol",
   "transmission": "Manual / AMT",
   "mileage": "20",
   "Wheel Drive": "FWD",
   "Engine series": "Revotron"
 },
 {
   "id": "Tata Punch EV",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Puch EV",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 122,
   "torque_nm": 190,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "Ziptron"
 },
 {
   "id": "Tata Safari",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Safari",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "`6/7",
   "engine_cc": "1956",
   "number_of_cylinder": "4",
   "power_ps": 170,
   "torque_nm": 350,
   "fuelType": "Diesel",
   "transmission": "Manual / Auto",
   "mileage": "16",
   "Wheel Drive": "FWD",
   "Engine series": "Kryotec"
 },
 {
   "id": "Tata Sierra",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Tata",
   "model": "Sierra",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1497",
   "number_of_cylinder": "4",
   "power_ps": 170,
   "torque_nm": 350,
   "fuelType": "Petrol / Electric",
   "transmission": "Automatic",
   "mileage": "16",
   "Wheel Drive": "AWD",
   "Engine series": "Revotron"
 },
 {
   "id": "Toyota Land Cruiser",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Toyota",
   "model": "Land Cruiser",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "3346",
   "number_of_cylinder": "6",
   "power_ps": 309,
   "torque_nm": 700,
   "fuelType": "Diesel",
   "transmission": "Automatic",
   "mileage": "9",
   "Wheel Drive": "AWD",
   "Engine series": "Twin-Turbo"
 },
 {
   "id": "Toyota Urban Cruiser Hyryder",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Toyota",
   "model": "Urban Cruiser Hyryder",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1462",
   "number_of_cylinder": "4",
   "power_ps": 103,
   "torque_nm": 137,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Manual / Auto",
   "mileage": "20�27",
   "Wheel Drive": "FWD / AWD",
   "Engine series": "K-Series / TNGA"
 },
 {
   "id": "Toyota Urban Cruiser Taisor",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Toyota",
   "model": "Urban Cruiser Taisor",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "998",
   "number_of_cylinder": "3",
   "power_ps": 100,
   "torque_nm": 147,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "21",
   "Wheel Drive": "FWD",
   "Engine series": "BoosterJet"
 },
 {
   "id": "VinFast VF 6",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "VinFast",
   "model": "VF 6",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 174,
   "torque_nm": 250,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "FWD",
   "Engine series": "PMSM"
 },
 {
   "id": "VinFast VF 7",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "VinFast",
   "model": "VF 7",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 354,
   "torque_nm": 500,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Volkswagen Taigun",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Volkswagen",
   "model": "Taigun",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 150,
   "torque_nm": 250,
   "fuelType": "Petrol",
   "transmission": "Manual / Auto",
   "mileage": "18",
   "Wheel Drive": "FWD",
   "Engine series": "TSI"
 },
 {
   "id": "Volkswagen Taigun R-Line",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Volkswagen",
   "model": "Taigun R-Line",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1498",
   "number_of_cylinder": "4",
   "power_ps": 150,
   "torque_nm": 250,
   "fuelType": "Petrol",
   "transmission": "Automatic",
   "mileage": "17",
   "Wheel Drive": "FWD",
   "Engine series": "TSI"
 },
 {
   "id": "Volvo EC40",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Volvo",
   "model": "EC40",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 408,
   "torque_nm": 670,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Volvo EX30",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Volvo",
   "model": "Volvo E30",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 272,
   "torque_nm": 343,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "RWD / AWD",
   "Engine series": "PMSM"
 },
 {
   "id": "Volvo EX40",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Volvo",
   "model": "EX40",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "�",
   "number_of_cylinder": "�",
   "power_ps": 408,
   "torque_nm": 670,
   "fuelType": "Electric",
   "transmission": "Automatic",
   "mileage": "�",
   "Wheel Drive": "AWD",
   "Engine series": "Dual Motor"
 },
 {
   "id": "Volvo XC60",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Volvo",
   "model": "XC60",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "5",
   "engine_cc": "1969",
   "number_of_cylinder": "4",
   "power_ps": 250,
   "torque_nm": 350,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Automatic",
   "mileage": "14",
   "Wheel Drive": "AWD",
   "Engine series": "B-Series"
 },
 {
   "id": "Volvo XC90",
   "type": "Car",
   "bodyType": "SUV",
   "brand": "Volvo",
   "model": "XC90",
   "citydaily": 40,
   "cityoccasional": 60,
   "highwaydaily": 60,
   "highwayoccasional": 100,
   "seating capacity": "7",
   "engine_cc": "1969",
   "number_of_cylinder": "4",
   "power_ps": 300,
   "torque_nm": 420,
   "fuelType": "Petrol / Hybrid",
   "transmission": "Automatic",
   "mileage": "12",
   "Wheel Drive": "AWD",
   "Engine series": "B-Series"
 },
 {
   "id": "Maruti Suzuki Eeco",
   "type": "Car",
   "bodyType": "Van",
   "brand": "Maruti Suzuki",
   "model": "Eeco",
   "citydaily": 40,
   "cityoccasional": 40,
   "highwaydaily": 40,
   "highwayoccasional": 60,
   "seating capacity": "`5/7",
   "engine_cc": "1197",
   "number_of_cylinder": "4",
   "power_ps": 80,
   "torque_nm": 104,
   "fuelType": "Petrol / CNG",
   "transmission": "Manual",
   "mileage": "20",
   "Wheel Drive": "RWD",
   "Engine series": "K-Series"
 }
];

/* ================= CONVERT BIKES ================= */
BIKE_DATA.forEach(v => {
  addToBrands(v.brand, {
    id: v.id,
    name: v.model,
    type: "Bike",
    category: v.bodyType,
    engine: v.engine?.power_raw || (v.engine?.cc ? `${v.engine.cc} cc` : "—"),
    launchYear: "—",
    era: v.engine?.fuelType === "ev" ? "electric" : "bs6",
    specs: {
      power: v.engine?.power_raw || "—",
      torque: v.engine?.torque_raw || "—",
      mileage: v.range?.value ? `${v.range.value} ${v.range.unit}` : "—",
      weight: v.physical?.kerbWeight_kg ? `${v.physical.kerbWeight_kg} kg` : "—",
      fuel: v.engine?.fuelType || "—"
    }
  });
});

/* ================= CONVERT CARS ================= */
CAR_DATA.forEach(v => {
  addToBrands(v.brand, {
    id: v.id,
    name: v.model,
    type: "Car",
    category: v.bodyType,
    engine: v.engine_cc ? `${v.engine_cc} cc` : "—",
    launchYear: "—",
    era: v.fuelType?.toLowerCase().includes("electric") ? "electric" : "bs6",
    specs: {
      power: v.power_ps ? `${v.power_ps} PS` : "—",
      torque: v.torque_nm ? `${v.torque_nm} Nm` : "—",
      mileage: v.mileage || "—",
      weight: "—",
      fuel: v.fuelType || "—"
    }
  });
});

/*************************************************
 * DONE — window.BRANDS READY ✅
 *************************************************/
