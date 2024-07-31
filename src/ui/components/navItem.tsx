import { NavLink } from "react-router-dom"

export default function NavItem({ to, children }) {
   return (
      <NavLink
         to={to}
         className={({ isActive }) => {
            return `text-center w-full transition-all text-white p-4 border-r-8 border-transparent cursor-pointer hover:border-highlighted hover:bg-secondary-400 ${isActive && "!border-highlighted bg-secondary-400 !border-r-4"}`
         }}
      >
         {children}
      </NavLink>
   )
}
