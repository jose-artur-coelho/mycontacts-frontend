import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Index";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";
export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}
