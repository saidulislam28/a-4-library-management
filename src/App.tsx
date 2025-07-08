import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./component/shared/Navbar";
import Footer from "./component/shared/Footer";

function App() {
  return (
    <>
      <div className="space-y-8">
        <Navbar />
        <Outlet  />
        <Footer />
      </div>
    </>
  );
}

export default App;
