import HomePage from "pages/HomePage";
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="dashboard" element={<Dashboard />}>
          <Route path="invoices" element={<Invoices />} />
          <Route path="team" element={<Team />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default Router;

// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <nav>
//         <Link to="invoices">Invoices</Link> <Link to="team">Team</Link>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }

// function Invoices() {
//   return <h1>Invoices</h1>;
// }

// function Team() {
//   return <h1>Team</h1>;
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="dashboard" element={<Dashboard />}>
//         <Route path="invoices" element={<Invoices />} />
//         <Route path="team" element={<Team />} />
//       </Route>
//     </Routes>
//   );
// }
