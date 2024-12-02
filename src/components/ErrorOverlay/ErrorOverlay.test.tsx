/* eslint-disable import/named */
import { render, screen } from '@utils/test-utils'
import { describe, expect, test } from 'vitest'

import { ErrorOverlay } from './ErrorOverlay'

describe('<ErrorOverlay />', () => {
	test('should render', () => {
		render(<ErrorOverlay />)

		expect(screen.getByText('Error...')).toBeDefined()
	})
})
