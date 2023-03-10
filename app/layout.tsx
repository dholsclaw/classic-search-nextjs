import '../styles/globals.css'

export const metadata = {
    title: 'Classic Search',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="bg-gray-200 h-screen v-screen font-sans">
        {children}
        </body>
        </html>
    )
}
