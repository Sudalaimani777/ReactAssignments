import Input from "./components/Input"
import { InputProvider } from "./context/InputContext"
import Content from "./components/Content"

const App = () => {
  return (
    <>
      <InputProvider>
        {/* Full-screen wrapper centering content vertically and horizontally */}
        <main className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
          
          {/* Card layout box constraining structural width */}
          <div className="w-full max-w-xl flex flex-col items-center gap-8 p-8 bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100 dark:bg-slate-900 dark:border-slate-800 dark:shadow-none">
            
            <header className="text-center">
              <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-1">
                Ref Playground
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Real-time DOM sync without unnecessary parent tree updates
              </p>
            </header>

            {/* Input Element Section */}
            <div className="w-full flex justify-center">
              <Input />
            </div>

            {/* Visual divider line between Input and Content */}
            <hr className="w-full border-slate-100 dark:border-slate-800" />

            {/* Content Output Section */}
            <div className="w-full min-h-[4rem] flex items-center justify-center">
              <Content />
            </div>

          </div>
        </main>
      </InputProvider>
    </>
  )
}

export default App
