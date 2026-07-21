import Link from "next/link"

export default function CategoryCard({ title, link }) {
  return (
    <Link href={link} className="category-card">
      <h2>{title}</h2>
    </Link>
  )
}
