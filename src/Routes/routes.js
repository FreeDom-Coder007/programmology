import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import EnrollPage from "../Pages/EnrollPage/EnrollPage";
import SignIn from "../Pages/SignIn/SignIn";
import Login from '../Pages/Login/Login';
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

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
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Courses/>  
        },
        {
          path: '/blog',
          element: <Blog/>  
        },
        {
          path: '/signin',
          element: <SignIn/>  
        },
        {
          path: '/login',
          element: <Login/>   
        },
        {
          path: '/enroll-page/:id',
          loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
          element: <EnrollPage/>  
        }
      ]  
    }
])
 
export default router;