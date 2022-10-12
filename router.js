import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";
import Dashboard from "../Dashboard";



export default function RouterApp() {
  return (
    <Router>
     <Routes>
      <Route path="/*" element={<Dashboard/>} />
     </Routes>
    </Router>
  );
}
