.category-card {
  display: block;
  background: var(--moss-mint);
  padding: 1.5rem;
  border-radius: 14px;
  margin: 1rem 0;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 1.4rem;
  color: var(--deep-forest);
  border: 3px solid var(--glow-amber);
  transition: background 0.3s ease, transform 0.2s ease;
}

.category-card:hover {
  background: var(--glow-amber);
  transform: translateY(-4px);
}import Link from "next/link"

export default function CategoryCard({ title, link }) {
  return (
    <Link href={link} className="category-card">
      <h2>{title}</h2>
    </Link>
  )
}
