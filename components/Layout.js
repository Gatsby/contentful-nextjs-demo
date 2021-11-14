import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Contentful</span>
              <span>Next.js Demo</span>
            </h1>
            <h2>Coffee Time Recipes</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>&copy;2021 Coffee Time :)</p>
      </footer>
    </div>
  )
}