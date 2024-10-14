import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RouteLayout from './RouteLayout';
import MainPage from './components/MainPage';
import Registration from './components/Registration';
import Image from './components/Image';
import UserProfile from './components/UserProfile'; 


function App() {
  {/*create browser router Object */}
  const Router=createBrowserRouter([
    {
      path:'/',
      element : <RouteLayout></RouteLayout>,
      children:[
        {
          path:'/',
          element:<Registration></Registration>
        },
        {
          path:'/mainPage',
          element:<MainPage></MainPage>
        },
        {
          path:'/img',
          element:<Image></Image>

        },
        {
          path:'/user',
          element:<UserProfile></UserProfile>

        }
      ]
    }
  ])
  return (
    <div className='cat' >
      <RouterProvider router={Router}></RouterProvider>
      
    </div>
  );
}
export default App;