const GlowAnimationOrbs = () => {
  return (
    <>
      <div
        className="absolute -left-32 -top-32 h-96 w-96 animate-pulse rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-48 -right-32 h-125 w-125 animate-pulse rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)",
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-64 w-64 animate-pulse rounded-full opacity-10 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
    </>
  );
};

export default GlowAnimationOrbs;
