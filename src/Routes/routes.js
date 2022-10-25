import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Courses from "../Pages/Courses/Courses";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Home/>  
        },
        {
          path: '/courses',
          element: <Courses/>  
        }
      ]  
    }
])

export default router;