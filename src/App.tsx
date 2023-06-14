import Login from "./Login/Login"
import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp/sign-up"
import Home from "./pages/Home/home"
import NewBlog from "./pages/New Blog/new-blog"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/blog/new" element={<NewBlog/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="*" element={<h1>404 Error</h1>}/>
      </Routes>
    </div>
)
    }

export default App
