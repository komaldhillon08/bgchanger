import { useState } from 'react'


function App() {
  const [color , setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-5">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-1 rounded-3xl cursor-pointer	" style={{backgroundColor: "red"}}>
             <button onClick={ () => {setColor("red")} } className="outline-none px-4 py-1 rounded-full text-black shadoe-lg cursor-pointer">Red</button>    
          </div>
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-1 rounded-3xl cursor-pointer	" style={{backgroundColor: "Green"}}>
             <button  onClick={ () => {setColor("Green")} } className="outline-none px-4 py-1 rounded-full text-black shadoe-lg cursor-pointer">Green</button>
          </div>
           <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-1 rounded-3xl cursor-pointer	" style={{backgroundColor: "yellow"}}>
              <button  onClick={ () => {setColor("yellow")} } className="outline-none px-4 py-1 rounded-full text-black shadoe-lg cursor-pointer">yellow</button>

          </div>
           <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-1 rounded-3xl cursor-pointer	" style={{backgroundColor: "gray"}}>
              <button  onClick={ () => {setColor("gray")} } className="outline-none px-4 py-1 rounded-full text-black shadoe-lg cursor-pointer">gray</button>
          </div>
        </div>
     </div>
   
    </>
  )
}

export default App
