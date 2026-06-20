import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Array from "./pages/Array"
import Object from "./pages/Object"
import ArrayOfObjects from "./pages/ArrayOfObjects"

const App = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_28%),linear-gradient(180deg,#f7fee7_0%,#ffffff_42%,#ecfeff_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-100/80 bg-white/85 p-5 shadow-[0_30px_90px_-45px_rgba(16,185,129,0.45)] backdrop-blur sm:p-8">
        <Navbar />
        <Routes>
          <Route index element={<Navigate to="array" replace />} />
          <Route path="array" element={<Array />} />
          <Route path="object" element={<Object />} />
          <Route path="arrayofobject" element={<ArrayOfObjects />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
