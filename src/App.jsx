
import ProductCartProvider from "./context/ProductCartProvider"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <ProductCartProvider>
      <AppRoutes />
    </ProductCartProvider>
  )
}

export default App