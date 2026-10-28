import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/huong-nghiep")({
  component: () => <Outlet />,
});
