import React from 'react'
import { Loader } from 'react-feather'

import { SpinColor, SpinProps, SpinSize } from './Spin.types'

const spinColors: Record<SpinColor, string> = {
	[SpinColor.Primary]: 'text-primary',
	[SpinColor.Secondary]: 'text-secondary',
	[SpinColor.Tertiary]: 'text-tertiary',
}

const backgroundColors: Record<SpinColor, string> = {
	[SpinColor.Primary]: 'bg-primary',
	[SpinColor.Secondary]: 'bg-secondary',
	[SpinColor.Tertiary]: 'bg-tertiary',
}

const spinSizes: Record<SpinSize, string> = {
	[SpinSize.Small]: 'w-6 h-6',
	[SpinSize.Medium]: 'w-7 h-7',
	[SpinSize.Large]: 'w-8 h-8',
}

const Spin: React.FC<SpinProps> = ({
	loading = false,
	blur = true,
	size = SpinSize.Medium,
	color = SpinColor.Primary,
	children,
}) => {
	return (
		<div className="flex w-full h-full relative">
			{loading && (
				<div
					className={`${backgroundColors[color]} absolute inset-0 flex items-center justify-center bg-opacity-20 rounded-lg z-10 p-4`}
				>
					<div className={`${spinColors[color]} animate-spin`}>
						<Loader className={`${spinSizes[size]}`} />
					</div>
				</div>
			)}
			<div className={`${loading && blur ? 'blur-xs' : ''}`}>{children} </div>
		</div>
	)
}

export default Spin
