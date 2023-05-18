
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
import { Provider, useSelector } from 'react-redux';
import store from './Store';
import Signup from './Components/pages/Signup';
import Tracker from './Components/pages/Tracker';



// const routeDefinitions = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//     </Route>
// )
// const router = createBrowserRouter(routeDefinitions);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/Elite", element: <Tracker /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/resources", element: <Resources /> },
        { path: "/logout", element: <Login /> },
        { path: "/login", element: <Home /> },
        { path: "/signup", element: <Signup /> },
      ]
    },

  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
