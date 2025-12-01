import { Outlet } from "react-router-dom";
import Menu from "./menu";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Menu />

      <main className="container py-6">
        <Outlet />
      </main>
    </div>
  );
}
export default MainLayout;