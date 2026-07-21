import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Firefly Hollow</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/bookfair">Book Fair</Link></li>
        <li><Link href="/stories">Stories</Link></li>
        <li><Link href="/printables">Printables</Link></li>
        <li><Link href="/learning-kits">Learning Kits</Link></li>
        <li><Link href="/audio-tales">Audio Tales</Link></li>
        <li><Link href="/busy-bags">Busy Bags</Link></li>
        <li><Link href="/birthday-packs">Birthday Packs</Link></li>
        <li><Link href="/homework-helper">Homework Helper</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
