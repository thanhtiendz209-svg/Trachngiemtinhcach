import { Link, createFileRoute } from "@tanstack/react-router";
import { CareerDetail } from "@/components/career/CareerDetail";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";
import { getCareer } from "@/data/careers";

export const Route = createFileRoute("/huong-nghiep/$careerId")({
  component: CareerRoute,
});

function CareerRoute() {
  const { careerId } = Route.useParams();
  const career = getCareer(careerId);
  if (!career) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-lg px-4 py-24 text-center">
          <h1 className="font-display text-2xl font-semibold text-navy">Không có ngành này</h1>
          <Button asChild className="mt-6">
            <Link to="/huong-nghiep">Về hướng nghiệp</Link>
          </Button>
        </div>
      </SiteShell>
    );
  }
  return (
    <SiteShell>
      <CareerDetail career={career} />
    </SiteShell>
  );
}
