import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Admin/pages/Login";
import Dashboard from "./Admin/pages/Dashboard";

import Index from "./Components/Frontend/pages/Index";
import Newpost from "./Admin/pages/Newpost";
import Allpost from "./Admin/pages/Allpost";
import Signup from "./Admin/pages/Signup";

function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        
          
          
            <Route path="/Dashboard" element={<Dashboard />} >
              <Route path="/Dashboard/newpost" element={<Newpost />} />
              <Route path="/Dashboard/allpost" element={<Allpost />} />
            </Route>
         
          
          </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
