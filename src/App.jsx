import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MyOrderPage } from "./pages"
import { Provider } from "react-redux"
import store from "./context/store"


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyOrderPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App