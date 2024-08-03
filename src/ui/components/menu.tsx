import { motion, useCycle } from "framer-motion"
import { KeyboardEvent, useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import { useDimensions } from "../../hooks/useDimensions"
import useOnClickOutside from "../../hooks/useOnClickOutside"
import MessageIcon from "../icon/message"
import NavMenu from "./navMenu"

const openChat = {
   open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 10px 10px)`,
      transition: {
         type: "spring",
         stiffness: 20,
         restDelta: 2,
      },
   }),
   closed: {
      clipPath: "circle(30px at 50px 40px)",
      transition: {
         type: "spring",
         stiffness: 400,
         damping: 40,
      },
   },
}

export default function Menu() {
   const [isOpen, toggleOpen] = useCycle(false, true)
   const refButtonOpen = useRef(null)
   const containerRef = useRef(null)
   const chatContainerRef = useRef(null)
   const { height } = useDimensions(containerRef)

   const [chat, setChat] = useState([
      { message: "Hola en que puedo ayudarte!", user: "bot" },
   ])

   useEffect(() => {
      if (chatContainerRef.current) {
         chatContainerRef.current.scrollTop =
            chatContainerRef.current.scrollHeight
      }
   }, [chat])

   useOnClickOutside(containerRef, () => toggleOpenChat, chatContainerRef)

   const toggleOpenChat = () => {
      if (!isOpen) {
         toggleOpen()
      }
   }

   const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.shiftKey && event.key === "Enter") {
         return
      }
      if (event.key === "Enter") {
         event.preventDefault()
         if (event.currentTarget.value.trim() === "") return
         const message = event.currentTarget.value
         event.currentTarget.value = ""
         setChat([...chat, { message, user: "user" }])
      }
   }

   return (
      <main className="grid grid-cols-[300px_minmax(900px,_1fr)] font-nunito h-screen w-full overflow-hidden">
         <header className="bg-secondary-150 w-full h-7 absolute top-0 left-0 -z-10">
            <h4 className="text-right font-bold mr-6">Bodytech</h4>
         </header>
         <NavMenu />
         <Outlet />
         <motion.div
            className={`${!isOpen && "hidden"} fixed top-0 right-0 bottom-0 w-1/3 z-50 transition-all duration-300 ease-in-out`}
         >
            <motion.div
               initial={false}
               animate={isOpen ? "open" : "closed"}
               custom={height}
               ref={containerRef}
            >
               <motion.div
                  className="fixed top-0 right-0 bottom-0 w-1/3 flex flex-col bg-secondary-400 justify-between"
                  variants={openChat}
               >
                  <div
                     className="p-10 mt-5 overflow-y-auto"
                     ref={chatContainerRef}
                  >
                     {chat.map((i, index) => (
                        <div
                           key={index}
                           className={`w-full flex flex-col mb-5 ${i.user === "bot" ? "items-start justify-start" : "items-end justify-end"}`}
                        >
                           <h2 className="text-primary text-lg">{i.user}</h2>
                           <p className="bg-secondary-500 p-5 rounded-md min-w-24 max-w-80 text-white break-words whitespace-pre-wrap">
                              {i.message}
                           </p>
                        </div>
                     ))}
                  </div>
                  <div className="w-full max-h-64 pr-32 p-10 pb-5">
                     <textarea
                        onKeyDown={handleKeyDown}
                        type="text"
                        className="w-full h-full border-primary border-2 outline-primary bg-secondary-400 text-white rounded-xl p-2 resize-none"
                        placeholder="Escribe un mensaje"
                     ></textarea>
                  </div>
               </motion.div>
            </motion.div>
         </motion.div>
         <MessageIcon ref={refButtonOpen} toggle={() => toggleOpen()} />
      </main>
   )
}
