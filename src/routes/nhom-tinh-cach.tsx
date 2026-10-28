import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nhom-tinh-cach")({
  component: () => <Outlet />,
});
