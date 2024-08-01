import {
   diasFestivosColombia2024,
   sabadosYDomingos2024,
} from "../data/ingresos"
import { ingresos } from "../types/sale"
import { Estadistica } from "../types/stats"

function clasificarFecha(fecha: string) {
   const esFestivo = diasFestivosColombia2024.includes(fecha)
   const esFinDeSemana = sabadosYDomingos2024.includes(fecha)

   if (esFestivo) return "Festivo"
   if (esFinDeSemana) return "Fin de Semana"
   return "Día Laboral"
}

function calcularEstadisticas(data: ingresos[]): Estadistica[] {
   const grupos: { [key: string]: number[] } = data.reduce(
      (acc: { [key: string]: number[] }, ingreso: ingresos) => {
         if (!acc[ingreso.tipoDia]) {
            acc[ingreso.tipoDia] = []
         }
         acc[ingreso.tipoDia].push(ingreso.valor)
         return acc
      },
      {},
   )

   const estadisticas: Estadistica[] = Object.entries(grupos).map(
      ([tipoDia, valores]: [string, number[]]) => {
         const suma = valores.reduce((acc, valor) => acc + valor, 0)
         const promedio = suma / valores.length
         const maximo = Math.max(...valores)
         const minimo = Math.min(...valores)

         return { tipoDia, promedio, maximo, minimo }
      },
   )

   return estadisticas
}

export { calcularEstadisticas, clasificarFecha }
