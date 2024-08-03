import Accountant from "../../Accountant/accountant"
import Dashboard from "../../dasboard/dashboard"
import HeadquartersStats from "../../headquarters/headquartersStats"
import Offers from "../../offers/offers"

export const navItems = [
   { to: "/", text: "Home", element: <Dashboard /> },
   {
      to: "/headquartersStats",
      text: "Estadisticas de sedes",
      element: <HeadquartersStats />,
   },
   {
      to: "/accountant",
      text: "Informacion contable",
      element: <Accountant />,
   },
   {
      to: "/addOffer",
      text: "Agregar oferta",
      element: <Offers />,
   },
]
