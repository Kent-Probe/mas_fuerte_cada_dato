import { navItems } from "../../lib/constants/navItems"
import Icon from "../icon/icon"
import NavItem from "./navItem"

export default function NavMenu() {
   return (
      <nav className="bg-secondary-500 h-screen rounded-r-xl pt-4">
         <Icon className="flex items-center justify-center mb-4" />
         <div className="flex flex-col justify-between gap-2 ">
            {navItems.map((item, index) => (
               <NavItem key={index} to={item.to}>
                  {item.text}
               </NavItem>
            ))}
         </div>
      </nav>
   )
}
