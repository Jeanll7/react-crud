import { Routes, Route } from "react-router-dom";

import UserCreate from "./pages/Users/Create";
import UserEdit from "./pages/Users/Edit";
import UserList from "./pages/Users/List";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/users">
        <Route path="/users" element={<UserList />} />
        <Route path="/users/new" element={<UserCreate />} />
        <Route path="/users/:id" element={<UserEdit />} />
      </Route>
    </Routes>
  );
}
