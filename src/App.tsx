import { Route, Routes } from "react-router-dom"
import Dashboard from "./dasboard/dashboard"
import Menu from "./ui/components/menu"

function App() {
   return (
      <Routes>
         <Route path="/" element={<Menu />}>
            <Route path="" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Dashboard />} />
         </Route>
      </Routes>
   )
}

export default App
