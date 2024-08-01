type Venta = {
   id_venta: string
   id_sede: string
   nombre_servicio: string
   valor: number
   fecha: string
}

type ingresos = {
   id_factura: string
   id_usuario: string
   id_sede: string
   descuento: number
   valor: number
   fecha: string
   tipoDia: string
   concepto: string
   forma_pago: string
   tipo_servicio: string
}

export type { Venta, ingresos }
