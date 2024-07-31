import { EChartsOption } from "echarts"
import EChartsReact from "echarts-for-react"

export default function Graphics() {
   return (
      <section className="w-full">
         <div className="mt-10 mb-10">
            <h1 className="text-4xl font-extrabold">Informacion contable</h1>
         </div>
         <div className="flex flex-row flex-wrap gap-3">
            <GraphicSankey />
         </div>
      </section>
   )
}

function GraphicSankey() {
   const option: EChartsOption = {
      title: {
         text: "Sankey Diagram",
         right: "right",
         subtext: "Example",
      },
      toolbox: {
         orient: "vertical",
         show: true,
         left: "left",
         top: "top",
         feature: {
            saveAsImage: {
               show: true,
               title: "Guardar",
            },
         },
      },
      tooltip: {
         trigger: "item",
         triggerOn: "mousemove",
      },
      series: {
         type: "sankey",
         layout: "none",
         emphasis: {
            focus: "adjacency",
         },
         data: [
            {
               name: "a",
            },
            {
               name: "b",
            },
            {
               name: "a1",
            },
            {
               name: "a2",
            },
            {
               name: "b1",
            },
            {
               name: "c",
            },
         ],
         links: [
            {
               source: "a",
               target: "a1",
               value: 5,
            },
            {
               source: "a",
               target: "a2",
               value: 3,
            },
            {
               source: "b",
               target: "b1",
               value: 8,
            },
            {
               source: "a",
               target: "b1",
               value: 3,
            },
            {
               source: "b1",
               target: "a1",
               value: 1,
            },
            {
               source: "b1",
               target: "c",
               value: 2,
            },
         ],
      },
   }

   return (
      <EChartsReact
         className="bg-secondary-150 rounded-3xl h-[600px] p-4"
         style={{ height: 600, width: "100%" }}
         option={option}
      />
   )
}
