import { ReactNode } from "react"
import { FieldProps } from "../../../lib/types/props"

function AddOffer() {
   return (
      <section className="w-full">
         <div className="mt-10 mb-10">
            <h1 className="text-4xl font-extrabold">
               Agregar oferta comercial
            </h1>
         </div>
         <AddOfferForm />
      </section>
   )
}

function Field({
   linkLabel,
   label,
   placeholder,
   isTextBottom,
   textBottom,
   className,
   type = "text",
}: FieldProps) {
   return (
      <div className={className}>
         <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for={linkLabel}
         >
            {label}
         </label>
         <input
            className="bg-[#edf2f7] appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            id={linkLabel}
            type={type}
            placeholder={placeholder}
         />
         {isTextBottom && (
            <p className="text-red text-xs italic">{textBottom}</p>
         )}
      </div>
   )
}

function FieldArea({
   linkLabel,
   label,
   placeholder,
   isTextBottom,
   textBottom,
   className,
   type = "text",
}: FieldProps) {
   return (
      <div className={className}>
         <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for={linkLabel}
         >
            {label}
         </label>
         <textarea
            className="bg-[#edf2f7] resize-none appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            id={linkLabel}
            type={type}
            placeholder={placeholder}
         />
         {isTextBottom && (
            <p className="text-red text-xs italic">{textBottom}</p>
         )}
      </div>
   )
}

function Button({
   text,
   className,
   svg,
}: {
   text: string
   className: string
   svg: ReactNode
}) {
   return (
      <div class="flex-initial pl-3">
         <button
            type="button"
            class={`flex items-center px-5 py-2.5 font-medium tracking-wide capitalize rounded-md focus:outline-none transition duration-300 transform active:scale-95 ease-in-out ${className}`}
         >
            {svg}
            <span class="pl-2 mx-1">{text}</span>
         </button>
      </div>
   )
}

function AddOfferForm() {
   return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
         <div className="-mx-3 md:flex md:flex-col w-full mb-6 gap-2">
            <Field
               linkLabel="grid-name"
               label="Nombre de la oferta*"
               placeholder="Ejemplo: 2 pos uno"
               isTextBottom={true}
               textBottom="Los campos con el * son obligatorios."
               className="w-full px-3 mb-6 md:mb-0"
            />
            <FieldArea
               linkLabel="grid-description"
               label="Descripcion*"
               placeholder="Ejemplo: oferta que permite a los clientes invitar a alguien sin consto adicional"
               isTextBottom={false}
               className="w-full px-3 mb-6 md:mb-0"
            />
            <Field
               linkLabel="grid-discount"
               label="Descuento (si aplica)"
               placeholder="Ejemplo: 50%"
               isTextBottom={false}
               className="w-full px-3 mb-6 md:mb-0"
            />
            <Field
               linkLabel="grid-price-special"
               label="Precio Especial (si aplica)"
               placeholder="Ejemplo: $500.000"
               isTextBottom={false}
               className="w-full px-3 mb-6 md:mb-0"
            />
            <Field
               linkLabel="grid-additional-benefits"
               label="Beneficios Adicionales (si aplica)"
               placeholder="Ejemplo: Uso de todas las maquinas"
               isTextBottom={false}
               className="w-full px-3 mb-6 md:mb-0"
            />
            <Field
               linkLabel="grid-restrictions"
               label="Condiciones y restricciones (si aplica)"
               placeholder="Ejemplo: Solo aplicable a membresisas platino"
               isTextBottom={false}
               className="w-full px-3 mb-6 md:mb-0"
            />
            <div class="flex flex-row-reverse p-3">
               <Button
                  text="Guardar"
                  className="hover:bg-[#ba5026] bg-primary focus:bg-primary text-white"
                  svg={
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                     >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                           d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                           opacity=".3"
                        ></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                     </svg>
                  }
               />
               <Button
                  text="Limpiar campos"
                  className="hover:bg-red-200 hover:fill-current hover:text-red-600 text-black"
                  svg={
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                     >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M8 9h8v10H8z" opacity=".3"></path>
                        <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                     </svg>
                  }
               />
            </div>
         </div>
      </div>
   )
}

export default AddOffer
