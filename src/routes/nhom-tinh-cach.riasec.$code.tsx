import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { RiasecProfileDetail } from "@/components/riasec/RiasecProfileDetail";
import { Button } from "@/components/ui/button";
import { findRiasecProfile } from "@/lib/riasec-profiles";

export const Route = createFileRoute("/nhom-tinh-cach/riasec/$code")({
  loader: ({ params }) => {
    const profile = findRiasecProfile(params.code);
    if (!profile) throw notFound();
    return profile;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.code} · ${loaderData.title} | Lumina`
          : "Không có hồ sơ RIASEC | Lumina",
      },
      {
        name: "description",
        content: loaderData?.quote ?? "Khám phá thư viện 120 hồ sơ RIASEC kết hợp của Lumina.",
      },
    ],
  }),
  component: ProfileRoute,
  notFoundComponent: MissingProfile,
});

function ProfileRoute() {
  const profile = Route.useLoaderData();
  return (
    <SiteShell>
      <RiasecProfileDetail profile={profile} />
    </SiteShell>
  );
}

function MissingProfile() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azure">
          Thư viện RIASEC
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-navy">
          Không có hồ sơ RIASEC này
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Một mã hợp lệ gồm ba chữ khác nhau trong R, I, A, S, E, C. Bạn có thể tìm mã trong thư
          viện.
        </p>
        <Button asChild className="mt-6">
          <Link to="/nhom-tinh-cach" search={{ tab: "riasec" }} hash="ho-so-riasec">
            Về thư viện RIASEC
          </Link>
        </Button>
      </div>
    </SiteShell>
  );
}
