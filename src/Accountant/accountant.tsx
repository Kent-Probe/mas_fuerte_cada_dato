import Graphics from "./ui/components/graphics"
import TableAccountant from "./ui/components/table"

export default function Accountant() {
   return (
      <section className="p-10 mt-7 overflow-x-hidden overflow-y-auto">
         <TableAccountant />
         <Graphics />
      </section>
   )
}
