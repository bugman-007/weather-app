import type { FC, ReactNode } from 'react'

type Props = {
	children?: ReactNode
}

export const LoadingOverlay: FC<Props> = ({ children }) => {
	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen'>
			<h1>Loading...</h1>
			{children}
		</div>
	)
}
