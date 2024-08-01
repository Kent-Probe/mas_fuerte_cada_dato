type Sede = {
   id_sede: string
   nombre_sede: string
   ubicacion: string
   capacidad_maxima: number
   capacidad_actual: number
   amenidades: string[]
}

const CantidadSedes = [
   "123",
   "124",
   "125",
   "126",
   "127",
   "128",
   "129",
   "130",
   "131",
   "132",
]

const sedes: Sede[] = [
   {
      id_sede: "001",
      nombre_sede: "Sede Norte",
      ubicacion: "Carrera 15 No. 100 – 15",
      capacidad_maxima: 100,
      capacidad_actual: 85,
      amenidades: ["Sauna", "Spinning", "Pilates", "Musculación"],
   },
   {
      id_sede: "002",
      nombre_sede: "Sede Sur",
      ubicacion: "Avenida 1 No. 20 – 30",
      capacidad_maxima: 120,
      capacidad_actual: 95,
      amenidades: ["Yoga", "Piscina", "CrossFit", "Zumba"],
   },
   {
      id_sede: "003",
      nombre_sede: "Sede Este",
      ubicacion: "Calle 50 No. 5 – 20",
      capacidad_maxima: 80,
      capacidad_actual: 65,
      amenidades: ["Pilates", "Boxeo", "Baile", "Aeróbicos"],
   },
   {
      id_sede: "004",
      nombre_sede: "Sede Oeste",
      ubicacion: "Avenida Siempre Viva No. 742",
      capacidad_maxima: 110,
      capacidad_actual: 90,
      amenidades: ["Musculación", "Cardio", "Spinning", "Natación"],
   },
   {
      id_sede: "005",
      nombre_sede: "Sede Central",
      ubicacion: "Centro Comercial Plaza",
      capacidad_maxima: 95,
      capacidad_actual: 75,
      amenidades: ["Sauna", "Spinning", "Yoga", "Karate"],
   },
   {
      id_sede: "006",
      nombre_sede: "Sede Noroeste",
      ubicacion: "Calle 21 No. 33 – 40",
      capacidad_maxima: 100,
      capacidad_actual: 85,
      amenidades: ["Zumba", "Piscina", "Spinning", "Jiu-Jitsu"],
   },
   {
      id_sede: "007",
      nombre_sede: "Sede Suroeste",
      ubicacion: "Avenida 2 No. 14 – 45",
      capacidad_maxima: 115,
      capacidad_actual: 100,
      amenidades: ["Yoga", "Boxeo", "Pilates", "CrossFit"],
   },
   {
      id_sede: "008",
      nombre_sede: "Sede Noreste",
      ubicacion: "Calle 30 No. 6 – 25",
      capacidad_maxima: 105,
      capacidad_actual: 90,
      amenidades: ["Karate", "Baile", "Musculación", "Natación"],
   },
   {
      id_sede: "009",
      nombre_sede: "Sede Sureste",
      ubicacion: "Avenida 4 No. 10 – 50",
      capacidad_maxima: 98,
      capacidad_actual: 80,
      amenidades: ["Jiu-Jitsu", "Cardio", "Aeróbicos", "Spinning"],
   },
   {
      id_sede: "010",
      nombre_sede: "Sede Metropolitano",
      ubicacion: "Gran Plaza Central",
      capacidad_maxima: 130,
      capacidad_actual: 110,
      amenidades: ["Piscina", "Boxeo", "Sauna", "Spinning"],
   },
]

const presupuestos = [
   {
      id_sede: "001",
      nombre_sede: "Sede Norte",
      objetivo_financiero: 1000000,
      mix_servicios: {
         membresia: 500000,
         clases: 300000,
         productos: 200000,
      },
   },
   {
      id_sede: "002",
      nombre_sede: "Sede Sur",
      objetivo_financiero: 1200000,
      mix_servicios: {
         membresia: 600000,
         clases: 400000,
         productos: 200000,
      },
   },
   {
      id_sede: "003",
      nombre_sede: "Sede Este",
      objetivo_financiero: 800000,
      mix_servicios: {
         membresia: 300000,
         clases: 300000,
         productos: 200000,
      },
   },
   {
      id_sede: "004",
      nombre_sede: "Sede Oeste",
      objetivo_financiero: 1100000,
      mix_servicios: {
         membresia: 400000,
         clases: 400000,
         productos: 300000,
      },
   },
   {
      id_sede: "005",
      nombre_sede: "Sede Central",
      objetivo_financiero: 950000,
      mix_servicios: {
         membresia: 450000,
         clases: 300000,
         productos: 200000,
      },
   },
   {
      id_sede: "006",
      nombre_sede: "Sede Noroeste",
      objetivo_financiero: 1000000,
      mix_servicios: {
         membresia: 400000,
         clases: 300000,
         productos: 300000,
      },
   },
   {
      id_sede: "007",
      nombre_sede: "Sede Suroeste",
      objetivo_financiero: 1150000,
      mix_servicios: {
         membresia: 500000,
         clases: 350000,
         productos: 300000,
      },
   },
   {
      id_sede: "008",
      nombre_sede: "Sede Noreste",
      objetivo_financiero: 1050000,
      mix_servicios: {
         membresia: 450000,
         clases: 350000,
         productos: 250000,
      },
   },
   {
      id_sede: "009",
      nombre_sede: "Sede Sureste",
      objetivo_financiero: 980000,
      mix_servicios: {
         membresia: 400000,
         clases: 300000,
         productos: 280000,
      },
   },
   {
      id_sede: "010",
      nombre_sede: "Sede Metropolitano",
      objetivo_financiero: 1300000,
      mix_servicios: {
         membresia: 600000,
         clases: 400000,
         productos: 300000,
      },
   },
]

export { CantidadSedes, Sede, presupuestos, sedes }
