import { Comfortaa } from 'next/font/google'
import './globals.css'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata = {
	title: 'Candidate list',
	description: '',
	icon: ['/favicon.ico?v=4'],
	apple: ['/apple-touch-icon.png?v=4'],
	shortcut: ['/apple-touch-icon.png'],
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={comfortaa.className}>{children}</body>
		</html>
	)
}
