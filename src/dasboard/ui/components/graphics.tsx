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
import { typeClient } from "../../../lib/constants/clientes"
import { COLORS_GRAPHICS } from "../../../lib/constants/colors"
import { client } from "../../../lib/data/clients"
import { ingresos } from "../../../lib/data/ingresos"
import { presupuestos, CantidadSedes as sedes } from "../../../lib/data/sedes"
import { servicios } from "../../../lib/data/services"
import { LocalDataPros } from "../../../lib/types/props"
import { calcularPromedioVentasPorMes } from "../../../lib/utils/average"
import { calcularEstadisticas, clasificarFecha } from "../../../lib/utils/date"
import { generarVentas } from "../../../lib/utils/generate"

export default function Graphics() {
   return (
      <section className="w-full">
         <div className="mt-10 mb-10 flex flex-row justify-between">
            <h1 className="text-4xl font-extrabold">Estadisticas</h1>
            <h1>Filtros</h1>
         </div>
         <LabelsDatas />
         <div className="flex flex-row flex-wrap gap-3 justify-between">
            <GraphicBarSalesByPlans />
            <GraficaEfectoCalendario />
            <GraphicPieTypeClient />
            <GraficoMixServicios />
            <GraficoPromedioVentas className="!w-full" />
         </div>
      </section>
   )
}

function LabelsDatas() {
   const gastos = 130000
   const ingresos = 150000
   const rentabildiad = gastos / ingresos
   return (
      <div className="my-5 flex flex-row flex-wrap justify-between">
         <LabelData title="Gastos" value={gastos} style="currency" />
         <LabelData title="Ingresos" value={ingresos} style="currency" />
         <LabelData
            title="Rentabilidad"
            value={rentabildiad}
            style="percent"
            classNameText="text-info-400"
         />
      </div>
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

function LabelData({
   title,
   value,
   style,
   classNameText,
   classNameTitle,
}: LocalDataPros) {
   return (
      <Graphic className="!w-[500px] !min-h-[150px] relative overflow-hidden select-none">
         <h2
            className={`text-2xl text-secondary-500 font-bold mb-4 ${classNameTitle}`}
         >
            {title}
         </h2>
         <p className={`text-4xl ${classNameText}`}>
            ${" "}
            {value.toLocaleString("Es-es", {
               currency: "COP",
               style,
               maximumFractionDigits: 1,
            })}
         </p>
         <div className="before:content-['_s'] before:absolute before:w-[200px] before:h-[200px] before:rotate-45 before:top-0 before:-right-36 before:bg-highlighted before:blur-xl"></div>
      </Graphic>
   )
}

function GraficoMixServicios() {
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
                  labelLine={false}
                  label={({ name }) => name}
               >
                  {dataPie.map((entry, index) => (
                     <Cell
                        cursor={"pointer"}
                        key={`cell-${index}`}
                        fill={COLORS_GRAPHICS[index % COLORS_GRAPHICS.length]}
                     />
                  ))}
               </Pie>
               <Tooltip
                  label={"name"}
                  formatter={(value, name) => [
                     value.toLocaleString("es-ES", {
                        currency: "COP",
                        style: "currency",
                        maximumFractionDigits: 0,
                     }),
                     name,
                  ]}
               />
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
         <h3 className="text-center text-secondary-500 text-xl font-bold">
            Gráfico de barras
         </h3>
         <ResponsiveContainer width="100%" height={300}>
            <BarChart
               data={calcularEstadisticas(ingresosClasificados)}
               margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="tipoDia" />
               <YAxis />
               <Tooltip
                  formatter={(value) => {
                     return value.toLocaleString("es-ES", {
                        maximumFractionDigits: 1,
                     })
                  }}
               />
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
   let newType = 0
   let renovados = 0
   let recuperados = 0
   const data = []
   for (const key of client) {
      if (
         key.tipo_cliente.nombre.toLowerCase() === typeClient.NEW.toLowerCase()
      ) {
         newType++
      }
      if (
         key.tipo_cliente.nombre.toLowerCase() ===
         typeClient.RENOVATED.toLowerCase()
      ) {
         renovados++
      }
      if (
         key.tipo_cliente.nombre.toLowerCase() ===
         typeClient.RECOVERED.toLowerCase()
      ) {
         recuperados++
      }
   }
   data.push(
      { value: newType, name: "Nuevos" },
      { value: renovados, name: "Renovados" },
      { value: recuperados, name: "Recuperados" },
   )
   const option: EChartsOption = {
      title: {
         text: "Tipos de clientes",
         subtext: "bodytech",
         left: "center",
      },
      tooltip: {
         trigger: "item",
         valueFormatter(value) {
            return `${value?.toLocaleString("es-ES", {
               currency: "COP",
               style: "currency",
               maximumFractionDigits: 0,
            })}`
         },
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
            data,
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
      title: {
         text: "Ventas por Plan",
         subtext: "bodytech",
         left: "center",
      },
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
         <h2 className="mb-2 text-center text-secondary-500 font-bold text-lg">
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
