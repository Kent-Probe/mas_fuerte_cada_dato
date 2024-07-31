import * as echarts from "echarts"
import { EChartsOption } from "echarts"
import ReactECharts from "echarts-for-react"

function GraphicsGlobals() {
   return (
      <section className="w-full">
         <div className="mt-10 mb-10">
            <h1 className="text-4xl font-extrabold">Estadisticas</h1>
         </div>
         <div className="flex flex-col gap-3 w-11/12">
            <GraphicHeadquartersExpenses />
            <GraphicHeadquartersIncome />
         </div>
      </section>
   )
}

function GraphicHeadquartersExpenses() {
   const option: EChartsOption = {
      title: {
         text: "Gastos por sedes",
         left: "center",
      },
      tooltip: {
         formatter: function (info) {
            const value = info.value
            const treePathInfo = info.treePathInfo
            const treePath = []
            for (let i = 1; i < treePathInfo.length; i++) {
               treePath.push(treePathInfo[i].name)
            }
            return [
               '<div class="tooltip-title">' +
                  echarts.format.encodeHTML(treePath.join("/")) +
                  "</div>",
               "Gasto: $" + echarts.format.addCommas(value) + " COP",
            ].join("")
         },
      },
      series: [
         {
            name: "Total de gastos",
            type: "treemap",
            upperLabel: {
               show: true,
               height: 30,
            },
            data: [
               {
                  name: "Bogota",
                  value: 1000000,
                  children: [
                     {
                        name: "Cabrera",
                        value: 250000,
                     },
                     {
                        name: "Chicó",
                        value: 110000,
                     },
                     {
                        name: "Carrera 11",
                        value: 200000,
                     },
                     {
                        name: "Calle 90",
                        value: 320000,
                     },
                     {
                        name: "Fontanar",
                        value: 120000,
                     },
                  ],
               },
               {
                  name: "Soacha",
                  value: 500000,
                  children: [
                     {
                        name: "Terreros",
                        value: 200000,
                     },
                     {
                        name: "Antares",
                        value: 300000,
                     },
                  ],
               },
               {
                  name: "Cartagena",
                  value: 800000,
                  children: [
                     {
                        name: "Bocagrande",
                        value: 400000,
                     },
                     {
                        name: "Caribe Plaza",
                        value: 400000,
                     },
                  ],
               },
               {
                  name: "Barranquilla",
                  value: 900000,
                  children: [
                     {
                        name: "Parque Washington",
                        value: 200000,
                     },
                     {
                        name: "Viva Barranquilla",
                        value: 400000,
                     },
                     {
                        name: "Barranquilla",
                        value: 300000,
                     },
                  ],
               },
               {
                  name: "Montería",
                  value: 100000,
                  children: [
                     {
                        name: "Nuestro Montería",
                        value: 100000,
                     },
                  ],
               },
               {
                  name: "Valledupar",
                  value: 150000,
                  children: [
                     {
                        name: "Mayales",
                        value: 150000,
                     },
                  ],
               },
               {
                  name: "Bucaramanga",
                  value: 500000,
                  children: [
                     {
                        name: "Caracolí",
                        value: 200000,
                     },
                     {
                        name: "Cacique",
                        value: 300000,
                     },
                  ],
               },
            ],
         },
      ],
   }
   return (
      <ReactECharts
         className="bg-secondary-150 rounded-lg h-[500px] p-10"
         style={{ height: "500px" }}
         option={option}
      />
   )
}

function GraphicHeadquartersIncome() {
   const option: EChartsOption = {
      title: {
         text: "Ingresos por sedes",
         left: "center",
      },
      tooltip: {
         formatter: function (info) {
            const value = info.value
            const treePathInfo = info.treePathInfo
            const treePath = []
            for (let i = 1; i < treePathInfo.length; i++) {
               treePath.push(treePathInfo[i].name)
            }
            return [
               '<div class="tooltip-title">' +
                  echarts.format.encodeHTML(treePath.join("/")) +
                  "</div>",
               "Ingreso: $" + echarts.format.addCommas(value) + " COP",
            ].join("")
         },
      },
      series: [
         {
            name: "Total de ingresos",
            type: "treemap",
            label: {
               show: true,
               formatter: "{b}",
            },
            upperLabel: {
               show: true,
               height: 30,
            },
            data: [
               {
                  name: "Bogota",
                  value: 56000000,
                  children: [
                     {
                        name: "Cabrera",
                        value: 9000000,
                     },
                     {
                        name: "Chicó",
                        value: 11000000,
                     },
                     {
                        name: "Carrera 11",
                        value: 8000000,
                     },
                     {
                        name: "Calle 90",
                        value: 12000000,
                     },
                     {
                        name: "Fontanar",
                        value: 16000000,
                     },
                  ],
               },
               {
                  name: "Soacha",
                  value: 22000000,
                  children: [
                     {
                        name: "Terreros",
                        value: 11000000,
                     },
                     {
                        name: "Antares",
                        value: 11000000,
                     },
                  ],
               },
               {
                  name: "Cartagena",
                  value: 18000000,
                  children: [
                     {
                        name: "Bocagrande",
                        value: 11000000,
                     },
                     {
                        name: "Caribe Plaza",
                        value: 7000000,
                     },
                  ],
               },
               {
                  name: "Barranquilla",
                  value: 32000000,
                  children: [
                     {
                        name: "Parque Washington",
                        value: 10000000,
                     },
                     {
                        name: "Viva Barranquilla",
                        value: 13000000,
                     },
                     {
                        name: "Barranquilla",
                        value: 9000000,
                     },
                  ],
               },
               {
                  name: "Montería",
                  value: 9000000,
                  children: [
                     {
                        name: "Nuestro Montería",
                        value: 9000000,
                     },
                  ],
               },
               {
                  name: "Valledupar",
                  value: 12000000,
                  children: [
                     {
                        name: "Mayales",
                        value: 12000000,
                     },
                  ],
               },
               {
                  name: "Bucaramanga",
                  value: 26000000,
                  children: [
                     {
                        name: "Caracolí",
                        value: 13000000,
                     },
                     {
                        name: "Cacique",
                        value: 13000000,
                     },
                  ],
               },
            ],
         },
      ],
   }
   return (
      <ReactECharts
         className="bg-secondary-150 rounded-lg h-[500px] p-10"
         style={{ height: "500px" }}
         option={option}
      />
   )
}

export { GraphicsGlobals }
