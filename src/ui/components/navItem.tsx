import { NavLink } from "react-router-dom"

export default function NavItem({ to, children }) {
   return (
      <NavLink
         to={to}
         className={({ isActive }) => {
            return `select-none text-center w-full transition-all text-white p-4 border-r-8 border-transparent cursor-pointer hover:border-primary hover:bg-secondary-400 ${isActive && "!border-primary bg-secondary-400 !border-r-4"}`
         }}
      >
         {children}
      </NavLink>
   )
}
