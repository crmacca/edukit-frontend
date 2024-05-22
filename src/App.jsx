import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from "./pages/landing/LoginPage";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    }
  ])

  return (
    <div className="App font-inter">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
