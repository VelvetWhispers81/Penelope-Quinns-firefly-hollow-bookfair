import './globals.css'
import './theme.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: "Penelope Quinn’s Firefly Hollow Book Fair",
  description: "A magical night-garden bookstore for kids.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="night-garden-bg">
        <Navbar />
        <main className="content-wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
