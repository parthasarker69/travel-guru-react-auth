import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Route';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='bodyy'>
      <RouterProvider router={router}> </RouterProvider>

    </div>
  );
}

export default App;
