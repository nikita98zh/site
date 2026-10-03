import type { ReactNode } from "react"
import "./globals.css"

export const metadata = { title: "Verseo — AI Content Automation Template" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
