import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/trac-nghiem")({
  component: () => <Outlet />,
});
