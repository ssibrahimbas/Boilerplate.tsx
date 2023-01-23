import React from 'react'

import type { SelectInputProps } from '~components/form/input/Input.types'

const SelectInput: React.FC<SelectInputProps> = ({
	id,
	name,
	autoComplete,
	ariaLabel,
	ariaLabelledBy,
	ariaDescribedBy,
	options,
	onChange,
	value,
	defaultSelected,
	required,
}) => {
	return (
		<div className="flex flex-grow">
			<select
				value={value}
				onChange={(e) => onChange && onChange(e.target.value)}
				id={id}
				name={name}
				aria-labelledby={ariaLabelledBy}
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedBy}
				autoComplete={autoComplete}
				className="w-full h-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-150 ease-in-out select"
				required={required}
			>
				{defaultSelected && (
					<option value="" disabled={true}>
						{defaultSelected}
					</option>
				)}{' '}
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectInput
