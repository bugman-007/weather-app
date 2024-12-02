import { DataClient, DataProvider } from '@services/data'
import type { RenderOptions } from '@testing-library/react'
import { cleanup, render } from '@testing-library/react'
import type { JSXElementConstructor, ReactElement } from 'react'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

export const createWrapper = (): JSXElementConstructor<{
	children: ReactElement<unknown, string | JSXElementConstructor<unknown>>
}> => {
	// eslint-disable-next-line react/display-name
	return ({ children }) => (
		<DataProvider
			client={new DataClient({ defaultOptions: { queries: { retry: false } } })}
		>
			{children}
		</DataProvider>
	)
}

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
	render(ui, {
		wrapper: createWrapper(),
		...options,
	})

export { default as userEvent } from '@testing-library/user-event'
// eslint-disable-next-line import/export
export * from '@testing-library/react'
// eslint-disable-next-line import/export
export { customRender as render }
