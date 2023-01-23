import React, { useEffect } from 'react'
import { Minus, Plus } from 'react-feather'

import { NumberInputProps } from '~components/form/input/Input.types'

const NumberInput: React.FC<NumberInputProps> = ({
	value,
	onChange,
	ariaLabelledBy,
	ariaDescribedBy,
	ariaLabel,
	autoComplete,
	id,
	name,
	placeholder,
	pattern,
	incrementButton = true,
	decrementButton = true,
	min,
	step = 1,
	max,
}) => {
	useEffect(() => {
		if (min && value < min) {
			onChange && onChange(min)
		}
		if (max && value > max) {
			onChange && onChange(max)
		}
	}, [max, min, onChange, value])

	return (
		<div className="flex flex-grow">
			{decrementButton && (
				<button
					type="button"
					className="border border-gray-300 px-2 rounded-l-md bg-gray-100 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
					onClick={() => onChange && onChange(value - step)}
					disabled={!!(min && value <= min)}
				>
					<Minus size={16} />
				</button>
			)}{' '}
			<input
				type="number"
				value={value}
				placeholder={placeholder}
				onChange={(e) => onChange && onChange(+e.target.value)}
				id={id}
				aria-labelledby={ariaLabelledBy}
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedBy}
				name={name}
				autoComplete={autoComplete}
				pattern={pattern}
				min={min}
				step={step}
				max={max}
				className={`w-full h-full border-gray-300 border py-2 px-3 text-gray-900 focus:outline-none focus:ring-1 focus:border focus:ring-primary focus:border-primary transition duration-150 ease-in-out ${
					incrementButton && decrementButton ? 'rounded-none' : 'rounded-md'
				} ${incrementButton && 'border-l-0'} ${
					decrementButton && 'border-r-0'
				}`}
			/>{' '}
			{incrementButton && (
				<button
					type="button"
					className="border border-gray-300 rounded-r-md px-2 bg-gray-100 text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
					onClick={() => onChange && onChange(value + step)}
					disabled={!!(max && value >= max)}
				>
					<Plus size={16} />
				</button>
			)}
		</div>
	)
}

export default NumberInput
