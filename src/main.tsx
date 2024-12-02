import './index.css'

import { DataClient, DataDevtools, DataProvider } from '@services/data'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import('./mocks/browser').then(({ worker }) => {
	let client: DataClient
	if (import.meta.env.DEV) {
		worker.start()
		client = new DataClient({
			defaultOptions: {
				queries: {
					retry: false,
				},
			},
		})
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		createRoot(document.getElementById('root')!).render(
			<StrictMode>
				<DataProvider client={client}>
					<App />
					<DataDevtools />
				</DataProvider>
			</StrictMode>
		)
		return
	}

	client = new DataClient()

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<DataProvider client={client}>
				<App />
				<DataDevtools />
			</DataProvider>
		</StrictMode>
	)
})
