import Home from "./pages/Home"

const App = () => {
  return (
    // Base wrapper: sets up font rendering, minimum screen height, and dark/light responsive background gradients
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-indigo-500 selection:text-white dark:bg-slate-900 dark:text-slate-100 transition-colors duration-200">

      {/* 
        Main layout container: 
        - padding adjusts responsively (p-4 on mobile, p-6 on tablets, p-8 on desktop)
        - max-width clamps the content on massive monitors (max-w-7xl)
        - mx-auto keeps everything perfectly centered
      */}
      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <Home />
      </main>

    </div>
  )
}

export default App