import { CantidadSedes as sedes } from "../data/sedes"
import { servicios } from "../data/services"

function generarVentas(cantidad: number) {
   const ventas = []

   for (let i = 1; i <= cantidad; i++) {
      const sedeIndex = Math.floor(Math.random() * sedes.length)
      const servicioIndex = Math.floor(Math.random() * servicios.length)
      const servicio = servicios[servicioIndex]

      const fecha = new Date(
         2024,
         Math.floor(Math.random() * 7),
         Math.floor(Math.random() * 28) + 1,
      )
      const valorAleatorio =
         servicio.valorBase + Math.floor(Math.random() * 20000) - 10000 // Variación de ±10000

      ventas.push({
         id_venta: `V${i.toString().padStart(3, "0")}`,
         id_sede: sedes[sedeIndex],
         nombre_servicio: servicio.nombre,
         valor: valorAleatorio,
         fecha: fecha.toISOString().split("T")[0],
      })
   }

   return ventas
}

export { generarVentas }
