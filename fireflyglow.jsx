export default function FireflyGlow() {
  const fireflies = Array.from({ length: 12 });

  return (
    <div style={{ position: "relative" }}>
      {fireflies.map((_, i) => (
        <div
          key={i}
          className="firefly"
          style={{
            top: `${Math.random() * 300}px`,
            left: `${Math.random() * 300}px`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
}
