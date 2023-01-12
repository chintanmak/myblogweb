import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Admin/pages/Login";
import Dashboard from "./Admin/pages/Dashboard";

import Index from "./Components/Frontend/pages/Index";
import Newpost from "./Admin/pages/Newpost";
import Allpost from "./Admin/pages/Allpost";
import Signup from "./Admin/pages/Signup";
import Accounts from "./Admin/pages/Accounts";
import About from "./Components/Frontend/pages/About";
import Navbar from "./Components/Frontend/pages/Navbar";
import Contact from "./Components/Frontend/pages/Contact";

function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/admin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        
          
          
            <Route path="/Dashboard" element={<Dashboard />} >
              <Route path="/Dashboard/newpost" element={<Newpost />} />
              <Route path="/Dashboard/allpost" element={<Allpost />} />
              <Route path="/Dashboard/accounts" element={<Accounts />} />
            </Route>
         
          
          </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
