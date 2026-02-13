import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="mb-2 text-8xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-dark">
          Strona nie znaleziona
        </h2>
        <p className="mb-8 text-dark/70">
          Przepraszamy, ale strona której szukasz nie istnieje lub została
          przeniesiona.
        </p>
        <Button href="/">Wróć na stronę główną</Button>
      </div>
    </div>
  );
}
