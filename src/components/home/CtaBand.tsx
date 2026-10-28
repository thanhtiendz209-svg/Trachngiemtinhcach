import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-navy to-azure px-6 py-10 text-paper sm:px-10">
          <h2 className="max-w-lg font-display text-3xl font-semibold">
            Sẵn sàng nhìn mình rõ hơn một chút?
          </h2>
          <p className="mt-3 max-w-lg text-cyan-soft">
            Bắt đầu với một bài test. Kết quả ở lại trên thiết bị của bạn — không cần tài khoản.
          </p>
          <Button asChild variant="cyan" size="lg" className="mt-6">
            <Link to="/trac-nghiem">Bắt đầu trắc nghiệm</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
