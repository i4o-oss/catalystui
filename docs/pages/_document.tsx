import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&amp;family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&amp;family=Orbitron:wght@700&amp;display=swap'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
