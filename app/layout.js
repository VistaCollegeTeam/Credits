import './globals.css'

export const metadata = {
  title: 'Credits',
  description: 'Credits',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
