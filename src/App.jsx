import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#013013")

  return (
    <div className="w-full h-screen duration-900"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
 <button
          onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-cream shadow-lg"
          style={{backgroundColor: "lavender"}}
          >Lavender</button>
 <button
          onClick={() => setColor("orange")}
          className="outline-2 px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >orange</button>
 <button
          onClick={() => setColor("white")}
          className="outline-2 px-4 py-1 rounded-full text-cream shadow-lg"
          style={{backgroundColor: "white"}}
          >white</button>
 <button
          onClick={() => setColor("maroon")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "maroon"}}
          >maroon</button>
 <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >purple</button>
          <button
          onClick={() => setColor("magenta")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "magenta"}}
          >magenta</button>
<button
          onClick={() => setColor("cyan")}
          className="outline-none px-4 py-1 rounded-full text-cream shadow-lg"
          style={{backgroundColor: "cyan"}}
          >cyan</button>
<button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >black</button>






          
        </div>
      </div>
    </div>
  )
}

export default App