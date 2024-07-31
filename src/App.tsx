import { Route, Routes } from "react-router-dom"
import { navItems } from "./lib/constants/navItems"
import Menu from "./ui/components/menu"

function App() {
   return (
      <Routes>
         <Route path="/" element={<Menu />}>
            {navItems.map((item, index) => (
               <Route key={index} path={item.to} element={item.element} />
            ))}
         </Route>
      </Routes>
   )
}

export default App
