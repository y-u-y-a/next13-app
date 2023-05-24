import '@/config/global.css'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <nav>サイドバー</nav>
      <main>{children}</main>
    </div>
  )
}

export default DashboardLayout
