import { Venta } from "../types/sale"

function calcularPromedioVentasPorMes(
   ventas: Venta[],
   sedeSeleccionada: string,
   tipoServicioSeleccionado: string,
) {
   const ventasFiltradas = ventas.filter(
      (venta) =>
         (sedeSeleccionada === "Todas" || venta.id_sede === sedeSeleccionada) &&
         (tipoServicioSeleccionado === "Todos" ||
            venta.nombre_servicio === tipoServicioSeleccionado),
   )

   const ventasPorMes = ventasFiltradas.reduce(
      (acc: Record<string, number[]>, venta: Venta) => {
         const fecha = new Date(venta.fecha)
         const mesAno = `${fecha.getFullYear()}-${fecha.getMonth() + 1}`
         if (!acc[mesAno]) {
            acc[mesAno] = []
         }
         acc[mesAno].push(venta.valor)
         return acc
      },
      {},
   )

   return Object.entries(ventasPorMes).map(([mesAno, valores]) => ({
      mesAno,
      promedio: valores.reduce((sum, valor) => sum + valor, 0) / valores.length,
   }))
}

export { calcularPromedioVentasPorMes }
