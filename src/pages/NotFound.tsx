import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-15 blur-[120px]" />
      <div className="container relative z-10 text-center">
        <p className="eyebrow mb-6">Error 404</p>
        <h1 className="font-display font-bold leading-none tracking-[-0.06em]" style={{ fontSize: "clamp(7rem, 26vw, 20rem)" }}>
          <span className="text-outline">4</span>
          <span className="text-gradient">0</span>
          <span className="text-outline">4</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
          <code className="font-mono text-foreground">{pathname}</code> drifted out of orbit. Let's get you back on course.
        </p>
        <Link to="/" className="btn-primary mt-10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
