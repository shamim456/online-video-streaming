
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClassVideoPage from './Pages/classVideoPage/ClassVideoPage';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <ClassVideoPage></ClassVideoPage>}
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
