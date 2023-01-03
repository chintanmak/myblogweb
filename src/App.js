import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Admin/pages/Login";
import Dashboard from "./Admin/pages/Dashboard";

import Index from "./Components/Frontend/pages/Index";
import Newpost from "./Admin/pages/Newpost";
import Allpost from "./Admin/pages/Allpost";

function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/admin" element={<Login />} />
        
          
          
            <Route path="/" element={<Dashboard />} >
              <Route path="/newpost" element={<Newpost />} />
              <Route path="/allpost" element={<Allpost />} />
            </Route>
         
          
          </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
