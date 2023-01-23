import React from 'react'

import { RadioGroupProps } from '~components/form/input/Input.types'

const RadioGroup: React.FC<RadioGroupProps> = ({ onToggle, value, items }) => {
	return (
		<div className="flex flex-col">
			{items.map((item) => (
				<label
					key={item.value}
					className="flex items-center cursor-pointer mb-2 bg-gray-100 rounded-md py-2 px-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
				>
					{' '}
					<input
						type="radio"
						value={item.value}
						checked={value.includes(item.value)}
						onChange={(e) => onToggle && onToggle(e.target.value)}
						className="mr-2 focus:ring-1 focus:ring-primary focus:border-primary transition duration-150 ease-in-out border select checked:bg-primary checked:border-transparent bg-white border-gray-300"
					/>{' '}
					{item.label}
				</label>
			))}
		</div>
	)
}

export default RadioGroup
