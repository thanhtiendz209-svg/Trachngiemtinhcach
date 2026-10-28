import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { TypeDetail } from "@/components/personality/TypeDetail";
import { Button } from "@/components/ui/button";
import { getPersonality } from "@/data/personalities";

export const Route = createFileRoute("/nhom-tinh-cach/$typeId")({
  component: TypeRoute,
});

function TypeRoute() {
  const { typeId } = Route.useParams();
  const type = getPersonality(typeId);
  if (!type) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-lg px-4 py-24 text-center">
          <h1 className="font-display text-2xl font-semibold text-navy">Không có nhóm này</h1>
          <Button asChild className="mt-6">
            <Link to="/nhom-tinh-cach">Khám phá 16 nhóm</Link>
          </Button>
        </div>
      </SiteShell>
    );
  }
  return (
    <SiteShell>
      <TypeDetail type={type} />
    </SiteShell>
  );
}
