import * as echarts from "echarts"
import { EChartsOption } from "echarts"
import ReactECharts from "echarts-for-react"
import React from "react"
import {
   PolarAngleAxis,
   PolarGrid,
   PolarRadiusAxis,
   Radar,
   RadarChart,
   ResponsiveContainer,
   Tooltip,
} from "recharts"
import { sedes } from "../../../lib/data/sedes"
import { formatNumber } from "../../../lib/utils/formattear"

function GraphicsGlobals() {
   return (
      <section className="w-full">
         <div className="mt-10 mb-10">
            <h1 className="text-4xl font-extrabold">Estadisticas</h1>
         </div>
         <div className="flex flex-col gap-3 w-11/12">
            <div className="w-gull flex flex-row justify-between">
               <GraphicVelocity />
               <GraficoCapacidadRadar />
            </div>
            <GraphicHeadquartersExpenses />
            <GraphicHeadquartersIncome />
         </div>
      </section>
   )
}

// function Graphic

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

function GraphicVelocity() {
   const option: EChartsOption = {
      title: {
         text: "Objetivo anual de ventas",
         left: "center",
         top: "0",
      },
      series: [
         {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 260000000000,
            splitNumber: 2,
            itemStyle: {
               color: "#EC6C17",
            },
            progress: {
               show: true,
               width: 30,
            },
            pointer: {
               show: true,
            },
            axisLine: {
               lineStyle: {
                  width: 30,
               },
            },
            axisTick: {
               distance: -45,
               splitNumber: 5,
               lineStyle: {
                  width: 2,
                  color: "#999",
               },
            },
            splitLine: {
               distance: -52,
               length: 14,
               lineStyle: {
                  width: 3,
                  color: "#999",
               },
            },
            axisLabel: {
               distance: -20,

               color: "#999",
               fontSize: 20,
               formatter: function (value) {
                  return formatNumber(value)
               },
            },
            anchor: {
               show: false,
            },
            detail: {
               valueAnimation: true,
               width: "60%",
               lineHeight: 40,
               borderRadius: 8,
               offsetCenter: [0, "140px"],
               fontSize: 35,
               fontWeight: "bolder",
               formatter: function (value) {
                  return formatNumber(value)
               },
               color: "inherit",
            },
            data: [
               {
                  value: 200000000000,
               },
            ],
         },
      ],
   }
   return (
      <div className="w-[calc(50%-0.25rem)] bg-secondary-150 rounded-lg h-[500px] p-10">
         <ReactECharts className="!h-full" option={option} />
      </div>
   )
}

const GraficoCapacidadRadar: React.FC = () => {
   return (
      <div className="w-[calc(50%-0.25rem)] bg-secondary-150 rounded-lg h-[500px] p-10">
         <h2>Capacidad Actual y Máxima por Sede</h2>
         <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={sedes} outerRadius={150}>
               <PolarGrid />
               <PolarAngleAxis dataKey="nombre_sede" />
               <PolarRadiusAxis angle={30} domain={[0, 130]} />
               <Radar
                  name="Capacidad Actual"
                  dataKey="capacidad_actual"
                  stroke="#EC6C17"
                  fill="#EC6C17"
                  fillOpacity={0.8}
               />
               <Radar
                  name="Capacidad Máxima"
                  dataKey="capacidad_maxima"
                  stroke="#212529"
                  fill="#2D3237"
                  fillOpacity={0.2}
               />
               <Tooltip />
            </RadarChart>
         </ResponsiveContainer>
      </div>
   )
}

export { GraphicsGlobals }
