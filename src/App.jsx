import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLayout from "./Layout/UserLayout"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
