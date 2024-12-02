import { ErrorOverlay } from '@components/ErrorOverlay'
import type { ErrorInfo } from 'react'
import { Component } from 'react'

interface Props {
	children: React.ReactNode
}
interface State {
	hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	}

	public static getDerivedStateFromError(): State {
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught Error', error, errorInfo)
	}

	public render() {
		if (this.state.hasError) {
			return <ErrorOverlay />
		}
		return this.props.children
	}
}
