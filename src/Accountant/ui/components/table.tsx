export default function TableAccountant() {
   return (
      <div className="bg-white pb-4 px-4 rounded-md w-full">
         <div className="flex justify-between w-full pt-6 ">
            <p className="ml-3 text-2xl font-bold">
               Resultados contables de BodyTech
            </p>
            <button className="bg-red-600 p-3 rounded-md text-secondary-100 hover:bg-red-700">
               Descargar pdf
            </button>
         </div>
         <div className="overflow-x-auto mt-6">
            <table className="table-auto border-collapse w-full">
               <thead>
                  <tr className="rounded-lg text-sm font-medium text-gray-700 text-left text-[0.9674rem]">
                     <th className="px-4 py-2 bg-[#f8f8f8] w-[1050px]"></th>
                     <th className="px-4 py-2 bg-[#f8f8f8]">Enero 31/2024</th>
                     <th className="px-4 py-2 bg-[#f8f8f8]">
                        Diciembre 31/2023
                     </th>
                  </tr>
               </thead>
               <tbody className="text-sm font-normal text-gray-700">
                  <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                     <td className="px-4 py-4">Ventas Netas</td>
                     <td className="px-4 py-4">$ 102.000.000</td>
                     <td className="px-4 py-4">$ 46.000.000</td>
                  </tr>
                  <tr className="hover:bg-gray-100 border-gray-200">
                     <td className="px-4 py-4">Impuestos</td>
                     <td className="px-4 py-4">$ 23.100.000</td>
                     <td className="px-4 py-4">$ 8.910.000</td>
                  </tr>
                  <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                     <td className="px-4 py-4 flex items-center">
                        <span className="w-14"></span>Beneficio Bruto
                     </td>
                     <td className="px-4 py-4">$ 56.900.000</td>
                     <td className="px-4 py-4">$ 18.090.000</td>
                  </tr>
                  <tr className="hover:bg-gray-100 border-gray-200">
                     <td className="px-4 py-4">Gastos Operacionales</td>
                     <td className="px-4 py-4">$ 10.000.000</td>
                     <td className="px-4 py-4">$ 5.000.000</td>
                  </tr>
                  <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                     <td className="px-4 py-4 flex items-center">
                        <span className="w-14"></span>Beneficio Operacionales
                     </td>
                     <td className="px-4 py-4">$ 70.000.000</td>
                     <td className="px-4 py-4">$ 27.000.000</td>
                  </tr>
                  <tr className="hover:bg-gray-100 border-gray-200">
                     <td className="px-4 py-4">Impuestos</td>
                     <td className="px-4 py-4">$ 23.100.000</td>
                     <td className="px-4 py-4">$ 8.910.000</td>
                  </tr>
                  <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                     <td className="px-4 py-4 flex items-center">
                        <span className="w-14"></span>Beneficio Neto
                     </td>
                     <td className="px-4 py-4">$ 56.900.000</td>
                     <td className="px-4 py-4">$ 18.090.000</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}
