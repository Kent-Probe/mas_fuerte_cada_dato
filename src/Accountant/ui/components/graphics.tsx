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
         formatter: "{b} : {c}",
      },
      series: {
         type: "sankey",
         layout: "none",
         emphasis: {
            focus: "adjacency",
         },
         data: [
            {
               name: "Products",
               value: 67.2,
            },
            {
               name: "Services",
               value: 22.3,
            },
            {
               name: "Revenue",
               value: 89.5,
            },
            {
               name: "Gross profit",
               value: 40.4,
            },
            {
               name: "Cost of sales",
               value: 49.1,
            },
            {
               name: "Operating expenses",
               value: 13.5,
            },
            {
               name: "Operating income",
               value: 27.0,
            },
            {
               name: "Pre-tax pofit",
               value: 27.0,
            },
            {
               name: "R & D",
               value: 7.3,
            },
            {
               name: "Selling, General, Admin",
               value: 6.2,
            },
            {
               name: "Net profit",
               value: 23.0,
            },
            {
               name: "Income tax",
               vallue: 4.0,
            },
         ],
         links: [
            {
               source: "Products",
               target: "Revenue",
               value: 5,
            },
            {
               source: "Services",
               target: "Revenue",
               value: 3,
            },
            {
               source: "Revenue",
               target: "Gross profit",
               value: 8,
            },
            {
               source: "Gross profit",
               target: "Operating income",
               value: 3,
            },
            {
               source: "Gross profit",
               target: "Operating expenses",
               value: 1,
            },
            {
               source: "Operating income",
               target: "Pre-tax pofit",
               value: 2,
            },
            {
               source: "Pre-tax pofit",
               target: "Net profit",
               value: 2,
            },
            {
               source: "Pre-tax pofit",
               target: "Income tax",
               value: 2,
            },
            {
               source: "Operating expenses",
               target: "R & D",
               value: 2,
            },
            {
               source: "Operating expenses",
               target: "Selling, General, Admin",
               value: 2,
            },
            {
               source: "Revenue",
               target: "Cost of sales",
               value: 8,
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
