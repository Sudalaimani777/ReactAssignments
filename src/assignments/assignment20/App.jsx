import { LoginProvider } from "./context/LoginContext"
import { RegisterProvider } from "./context/RegisterContext"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <AppRoutes />
        </LoginProvider>
      </RegisterProvider>
    </>
  )
}

export default App