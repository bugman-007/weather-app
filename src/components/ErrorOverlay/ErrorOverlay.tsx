import type { FC, ReactNode } from 'react'

type Props = {
	children?: ReactNode
}

export const ErrorOverlay: FC<Props> = ({ children }) => {
	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen'>
			<h1>Error...</h1>
			{children}
		</div>
	)
}
