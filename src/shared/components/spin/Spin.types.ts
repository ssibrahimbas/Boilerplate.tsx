export enum SpinSize {
	Small = 'sm',
	Medium = 'md',
	Large = 'lg',
}

export enum SpinColor {
	Primary = 'primary',
	Secondary = 'secondary',
	Tertiary = 'tertiary',
}

export type SpinProps = {
	size?: SpinSize
	color?: SpinColor
	loading?: boolean
	blur?: boolean
	children?: React.ReactNode
}

export type SpinVariants = {
	size?: {
		[key in SpinSize]: string | string[]
	}
	color?: {
		[key in SpinColor]: string | string[]
	}
}
