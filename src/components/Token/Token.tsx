interface TokenProps {
	children?: React.ReactNode;
	icon?: React.ReactNode;
	variant?: string;
	value?: string;
	onClick?: () => unknown;
}

const theme: {
	[color: string]: { bg: string; border: string; color: string };
} = {
	default: {
		bg: 'bg-neutral-900',
		border: 'border-neutral-700',
		color: 'text-neutral-400',
	},
	red: {
		bg: 'bg-red-100',
		border: 'border-red-300',
		color: 'text-red-300',
	},
	orange: {
		bg: 'bg-orange-100',
		border: 'border-orange-300',
		color: 'text-orange-300',
	},
	yellow: {
		bg: 'bg-yellow-100',
		border: 'border-yellow-300',
		color: 'text-yellow-300',
	},
	green: {
		bg: 'bg-green-100',
		border: 'border-green-300',
		color: 'text-green-300',
	},
	blue: {
		bg: 'bg-blue-100',
		border: 'border-blue-300',
		color: 'text-blue-300',
	},
	indigo: {
		bg: 'bg-indigo-100',
		border: 'border-indigo-300',
		color: 'text-indigo-300',
	},
	purple: {
		bg: 'bg-purple-100',
		border: 'border-purple-300',
		color: 'text-purple-300',
	},
};

const Token = ({
	children,
	icon,
	variant = 'default',
	onClick,
}: TokenProps) => {
	const colors = theme[variant];

	return (
		<div
			className={`container-row w-fit rounded-md px-1.5 py-0.5 gap-x-1 select-none ${
				colors.color
			} ${colors.bg} border ${colors.border} ${
				onClick ? 'hover:cursor-pointer' : ''
			}`}
			onClick={onClick}
		>
			{icon && <span className='w-4 h-4 container-center'>{icon}</span>}
			<span className={`text-xxs whitespace-nowrap`}>{children}</span>
		</div>
	);
};

export default Token;
