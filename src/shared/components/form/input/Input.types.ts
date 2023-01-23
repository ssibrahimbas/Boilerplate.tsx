export type InputSeo = {
	ariaLabel?: string
	ariaLabelledBy?: string
	ariaDescribedBy?: string
	autoComplete?: string
	name?: string
	id?: string
}

export type BaseInput = {
	placeholder?: string
}

export type NumberInputValidation = {
	min?: number
	max?: number
	step?: number
}

export type SelectInputValidation = {
	required?: boolean
	min?: number
	max?: number
	multiple?: boolean
}

export type FormItemProps = {
	label?: string
	children?: React.ReactNode
}

export type TextInputProps = InputSeo &
	BaseInput & {
		value?: string
		onChange?: (value: string) => void
	}

export type NumberInputProps = InputSeo &
	BaseInput &
	NumberInputValidation & {
		value: number
		onChange: (value: number) => void
		pattern?: string
		incrementButton?: boolean
		decrementButton?: boolean
	}

export type SelectInputProps = InputSeo &
	SelectInputValidation &
	BaseInput & {
		value?: string
		onChange?: (value: string) => void
		options: { value: string; label: string }[]
		defaultSelected?: string
	}

export type RadioGroupItem = {
	label: string
	value: string
}

export type RadioGroupProps = {
	items: RadioGroupItem[]
	value: string[]
	onToggle: (value: string) => void
}
