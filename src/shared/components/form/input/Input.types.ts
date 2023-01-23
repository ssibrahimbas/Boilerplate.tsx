export type InputSeo = {
	ariaLabel?: string
	ariaLabelledBy?: string
	ariaDescribedBy?: string
	autoComplete?: string
}

export type TextInputSeo = InputSeo & {
	name?: string
	id?: string
}

export type FormItemProps = {
	label?: string
	children?: React.ReactNode
}

export type TextInputProps = TextInputSeo & {
	placeholder?: string
	value?: string
	onChange?: (value: string) => void
}
