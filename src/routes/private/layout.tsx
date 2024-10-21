import { Header } from "@/components/ui/header";
import { Navigate, Outlet } from "react-router-dom";

export function Layout() {
  const auth = { token: true };

  return auth.token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}
