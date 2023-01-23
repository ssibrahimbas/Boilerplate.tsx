import React from 'react'

import { TextInputProps } from '~components/form/input/Input.types'

const TextInput: React.FC<TextInputProps> = ({
	value,
	placeholder,
	onChange,
	id,
	ariaLabelledBy,
	ariaLabel,
	ariaDescribedBy,
	name,
	autoComplete,
}) => {
	return (
		<div className="flex flex-grow">
			<input
				type="text"
				value={value}
				placeholder={placeholder}
				onChange={(e) => onChange && onChange(e.target.value)}
				id={id}
				aria-labelledby={ariaLabelledBy}
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedBy}
				name={name}
				autoComplete={autoComplete}
				className="w-full h-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
			/>
		</div>
	)
}

export default TextInput
