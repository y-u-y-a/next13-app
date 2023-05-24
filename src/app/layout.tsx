import { CommonHeader } from '@/components/navigations/commonHeader'
import '@/config/global.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0" />
        <title>App</title>
      </head>
      <body>
        <CommonHeader />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
