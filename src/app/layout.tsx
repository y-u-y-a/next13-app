import { CommonHeader } from '@/components/navigations/commonHeader'
import '@/config/global.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <CommonHeader />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
