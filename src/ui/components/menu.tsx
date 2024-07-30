import { Outlet } from "react-router-dom"
import NavMenu from "./navMenu"

export default function Menu() {
   return (
      <main className="grid grid-cols-[300px_minmax(900px,_1fr)] font-nunito">
         <NavMenu />
         <Outlet />
      </main>
   )
}
