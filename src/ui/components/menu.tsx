import { Outlet } from "react-router-dom"
import NavMenu from "./navMenu"

export default function Menu() {
   return (
      <main className="grid grid-cols-[300px_minmax(900px,_1fr)] font-nunito h-screen w-full overflow-hidden">
         <header className="bg-secondary-150 w-full h-7 absolute top-0 left-0 -z-10">
            <h4 className="text-right font-bold mr-6">Bodytech</h4>
         </header>
         <NavMenu />
         <Outlet />
      </main>
   )
}
