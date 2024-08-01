import { EChartsOption } from "echarts"
import ReactECharts from "echarts-for-react"
import React, { ReactNode, useState } from "react"
import {
   Area,
   AreaChart,
   Bar,
   BarChart,
   CartesianGrid,
   Cell,
   Label,
   Legend,
   Pie,
   PieChart,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from "recharts"
import { ingresos } from "../../../lib/data/ingresos"
import { presupuestos, CantidadSedes as sedes } from "../../../lib/data/sedes"
import { servicios } from "../../../lib/data/services"
import { calcularPromedioVentasPorMes } from "../../../lib/utils/average"
import { calcularEstadisticas, clasificarFecha } from "../../../lib/utils/date"
import { generarVentas } from "../../../lib/utils/generate"

export default function Graphics() {
   return (
      <section className="w-full">
         <div className="mt-10 mb-10">
            <h1 className="text-4xl font-extrabold">Estadisticas</h1>
         </div>
         <div className="flex flex-row flex-wrap gap-3">
            <GraficaEfectoCalendario />
            <GraphicBarSalesByPlans />
            <GraphicPieTypeClient />
            <GraficoMixServicios />
            <GraficoPromedioVentas className="!w-full" />
         </div>
      </section>
   )
}

function Graphic({
   children,
   className,
}: {
   children: ReactNode
   className?: string
}) {
   return (
      <article
         className={
            "w-[calc(50%-0.75rem)] min-h-[300px] bg-secondary-150 p-5 rounded-xl" +
            " " +
            className
         }
      >
         {children}
      </article>
   )
}

function GraficoMixServicios() {
   const COLORS = [
      "#0088FE",
      "#00C49F",
      "#FFBB28",
      "#FF8042",
      "#FF69B4",
      "#7B68EE",
      "#6B8E23",
      "#D2691E",
      "#A52A2A",
      "#20B2AA",
   ]

   const [sedeSeleccionada, setSedeSeleccionada] = useState(
      presupuestos[0].id_sede,
   )

   const datosSedeSeleccionada = presupuestos.find(
      (sede) => sede.id_sede === sedeSeleccionada,
   )

   const dataPie = Object.entries(datosSedeSeleccionada.mix_servicios).map(
      ([key, value]) => ({
         name: key,
         value,
      }),
   )

   return (
      <Graphic>
         <h2>Mix de Servicios - {datosSedeSeleccionada?.nombre_sede}</h2>
         <div>
            <h3 className="text-secondary-500 text-2xl ">Seleccionar Sede:</h3>
            <select
               value={sedeSeleccionada}
               onChange={(e) => setSedeSeleccionada(e.target.value)}
            >
               {presupuestos.map((sede) => (
                  <option key={sede.id_sede} value={sede.id_sede}>
                     {sede.nombre_sede}
                  </option>
               ))}
            </select>
         </div>
         <ResponsiveContainer width="100%" height={300}>
            <PieChart>
               <Pie
                  data={dataPie}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
               >
                  {dataPie.map((entry, index) => (
                     <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                     />
                  ))}
               </Pie>
               <Tooltip />
               <Legend align="right" className="" />
            </PieChart>
         </ResponsiveContainer>
      </Graphic>
   )
}

const GraficaEfectoCalendario = () => {
   const ingresosClasificados = ingresos.map((ingreso) => ({
      ...ingreso,
      tipoDia: clasificarFecha(ingreso.fecha),
   }))
   return (
      <Graphic>
         <ResponsiveContainer width="100%" height={400}>
            <BarChart
               data={calcularEstadisticas(ingresosClasificados)}
               margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="tipoDia" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Bar dataKey="promedio" fill="#8884d8" name="Promedio" />
               <Bar dataKey="maximo" fill="#82ca9d" name="Máximo" />
               <Bar dataKey="minimo" fill="#ffc658" name="Mínimo" />
            </BarChart>
         </ResponsiveContainer>
      </Graphic>
   )
}

function GraphicPieTypeClient() {
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
      <Graphic className="pt-20">
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

const GraficoPromedioVentas: React.FC = ({
   className,
}: {
   className: string
}) => {
   const [sedeSeleccionada, setSedeSeleccionada] = useState<string>("Todas")
   const [tipoServicioSeleccionado, setTipoServicioSeleccionado] =
      useState<string>("Todos")

   const datos = calcularPromedioVentasPorMes(
      generarVentas(1000),
      sedeSeleccionada,
      tipoServicioSeleccionado,
   )

   datos.sort(
      (a, b) => new Date(a.mesAno).getTime() - new Date(b.mesAno).getTime(),
   )

   return (
      <Graphic className={className}>
         <h2 className="mb-2 text-secondary-500 font-bold text-lg">
            Promedio de Ventas por Mes
         </h2>
         <div>
            <div className="w-1/2 mb-2">
               <label htmlFor="sede">Sede: </label>
               <select
                  className="w-[200px]"
                  id="sede"
                  onChange={(e) => setSedeSeleccionada(e.target.value)}
               >
                  <option value="Todas">Todas</option>
                  {sedes.map((sede) => (
                     <option key={sede} value={sede}>
                        {sede}
                     </option>
                  ))}
               </select>
            </div>
            <div className="w-1/2 mb-2">
               <label htmlFor="tipoServicio">Tipo de Servicio: </label>
               <select
                  className="w-[200px]"
                  id="tipoServicio"
                  onChange={(e) => setTipoServicioSeleccionado(e.target.value)}
               >
                  <option value="Todos">Todos</option>
                  {servicios.map((servicio, index) => (
                     <option key={index} value={servicio.nombre}>
                        {servicio.nombre}
                     </option>
                  ))}
               </select>
            </div>
         </div>
         <ResponsiveContainer className="p-3" width="100%" height={300}>
            <AreaChart data={datos}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis
                  dataKey="mesAno"
                  tickFormatter={(tick) =>
                     new Date(tick).toLocaleDateString("es-ES", {
                        month: "short",
                        year: "numeric",
                     })
                  }
                  angle={-45}
                  textAnchor="end"
                  height={100}
               >
                  <Label value="Mes-Año" offset={0} position="insideBottom" />
               </XAxis>
               <YAxis>
                  <Label
                     style={{ padding: 10 }}
                     value="Promedio de Ventas"
                     angle={-90}
                     offset={-10}
                     position="insideBottomLeft"
                  />
               </YAxis>
               <Tooltip />
               <Area
                  type="monotone"
                  dataKey="promedio"
                  stroke="#8884d8"
                  fill="#8884d8"
               />
            </AreaChart>
         </ResponsiveContainer>
      </Graphic>
   )
}

export { Graphics }
