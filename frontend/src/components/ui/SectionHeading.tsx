interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  children,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="text-3xl font-bold text-dark md:text-4xl">{children}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-accent" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-dark/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
