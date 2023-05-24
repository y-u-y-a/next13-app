import Link from 'next/link'

export const CommonHeader = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <Link href="/" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          Home
        </Link>
        <Link href="/inquiry" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          Inquiry
        </Link>
        <Link href="/dashboard" className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500">
          Dashboard
        </Link>
      </nav>
    </header>
  )
}
