function App() {
  return <h1>Hello, React is Working!</h1>;
}

export default App;




// 
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard";
// import ReportIssue from "./pages/ReportIssue";
// import Login from "./pages/Login";
// import Notifications from "./pages/Notifications";
// import Feedback from "./pages/Feedback";
// import "./index.css"; 

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Navbar />
//         <div className="p-6">
//           <Routes>
//             <Route path="./pages/Dashboard.jsx" element={<Dashboard />} />
//             <Route path="./pages/ReportIssue.jsx" element={<ReportIssue />} />
//             <Route path="./pages/Login.jsx" element={<Login />} />
//             <Route path="./pages/Notifications.jsx" element={<Notifications />} />
//             <Route path="./pages/Feedback.jsx" element={<Feedback />} />
//             <Route path="*" element={<h1>Page Not Found</h1>} />

            
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;