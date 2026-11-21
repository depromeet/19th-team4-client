import { formatPrice } from '@repo/shared';

export function HomeHero() {
  return (
    <section className="flex flex-col items-center gap-2 rounded-card bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">19th Team4</h1>
      <p className="text-primary-500">{formatPrice(12000)}</p>
    </section>
  );
}
