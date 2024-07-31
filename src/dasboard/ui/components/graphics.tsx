import * as echarts from "echarts"
import { EChartsOption } from "echarts"
import ReactECharts from "echarts-for-react"
import { ReactNode } from "react"
import geoJSON from "../../../lib/geo/colombia.json"

echarts.registerMap("colombia", geoJSON)

export default function Graphics() {
   return (
      <section className="w-full">
         <div className="mt-10 mb-10">
            <h1 className="text-4xl font-extrabold">Estadisticas</h1>
         </div>
         <div className="flex flex-row flex-wrap gap-3">
            <GraphicPie />
            <GraphicBarSalesByPlans />
         </div>
      </section>
   )
}

function Graphic({ children }: { children: ReactNode }) {
   return (
      <article className="w-[calc(50%-0.75rem)] max-h-[300px] bg-secondary-150 p-5 rounded-xl">
         {children}
      </article>
   )
}

function GraphicPie() {
   const option: EChartsOption = {
      title: {
         text: "Tipos de clientes",
         subtext: "bodytech",
         left: "center",
      },
      tooltip: {
         trigger: "item",
      },
      legend: {
         orient: "vertical",
         left: "left",
         align: "left",
      },
      series: [
         {
            name: "Tipos de clientes",
            type: "pie",
            radius: "50%",
            data: [
               { value: 2000, name: "Nuevos" },
               { value: 735, name: "Renovados" },
               { value: 580, name: "Recuperados" },
            ],
            emphasis: {
               itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
               },
            },
         },
      ],
   }
   return (
      <Graphic>
         <ReactECharts option={option} />
      </Graphic>
   )
}

function GraphicBarSalesByPlans() {
   const option: EChartsOption = {
      xAxis: {
         type: "category",
         data: ["Platino", "Oro", "Plata", "Bronce", "Básico", "Premiun"],
      },
      yAxis: {
         type: "value",
      },
      series: [
         {
            data: [50, 100, 150, 80, 70, 110],
            type: "bar",
         },
      ],
   }
   return (
      <Graphic>
         <ReactECharts option={option} />
      </Graphic>
   )
}

export { Graphics }
