/* eslint-disable import/named */
import { render, screen } from '@utils/test-utils'
import { describe, expect, test } from 'vitest'

import { LoadingOverlay } from './LoadingOverlay'

describe('<LoadingOverlay />', () => {
	test('should render', () => {
		render(<LoadingOverlay />)

		expect(screen.getByText('Loading...')).toBeDefined()
	})
})
