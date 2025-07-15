import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";

import './index.css';
//import '@material-tailwind/react/tailwind.css'; // for Material Tailwind styles

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here for About, Services, etc. */}
      </Routes>
    </Router>
  );
};

export default App;

