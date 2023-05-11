
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';


import { createBrowserRouter, Link, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../src/Components/pages/Home';
import About from '../src/Components/pages/About';
import Contact from '../src/Components/pages/Contact';
import Resources from '../src/Components/pages/Resources';
import Root from './Components/pages/Root';
import Logout from './Components/pages/Logout';
import Login from './Components/pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resources", element: <Resources /> },
      { path: "/logout", element: <Login /> },
      { path: "/login", element: <Logout /> },
    ]
  },

]);
// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//     </Route>
// )
// const router = createBrowserRouter(routeDefinitions);


function App() {
  return (

    <RouterProvider router={router} />


  );
}

export default App;
