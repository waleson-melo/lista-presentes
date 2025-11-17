import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";
import Detail from "@/pages/Detail";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/presentear/:id" element={<Detail />} />
      </Route>
      <Route path="*" element={<>Página não encontrada.</>} />
    </Routes>
  );
}

export default AppRoutes;
