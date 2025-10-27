import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./pages/homePage/home";
import Footer from "./component/footer/footer";

// रूट्स बनाएँ
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
], {
  future: {
    v7_startTransition: true,  // warning हटाने के लिए सक्षम करें
  }
});

// मुख्य ऐप कम्पोनेंट
export default function App() {
  return <RouterProvider router={router} />;
}
