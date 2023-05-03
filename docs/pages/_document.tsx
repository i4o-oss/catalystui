import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
				<Script
					src='https://analytics.i4o.dev/script.js'
					strategy='lazyOnload'
					data-website-id='6e2975d1-ff50-41f3-bc2b-ac5f25909cb2'
				/>
			</body>
		</Html>
	)
}
