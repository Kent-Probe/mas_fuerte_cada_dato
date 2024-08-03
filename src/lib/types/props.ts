type LocalDataPros = {
   title: string
   value: number
   style: string
   classNameTitle?: string
   classNameText?: string
}

type FieldProps = {
   linkLabel: string
   label: string
   placeholder: string
   isTextBottom: boolean
   textBottom: string
   className: string
   type: string
}

export type { FieldProps, LocalDataPros }
