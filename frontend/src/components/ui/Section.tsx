interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 md:py-24 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
