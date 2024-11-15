interface TokenProps {
	children?: React.ReactNode;
	icon?: React.ReactNode;
	variant?: string;
	value?: string;
}

const theme: {
	[color: string]: { bg: string; border: string; color: string };
} = {
	default: {
		bg: 'bg-stone-50',
		border: 'border-stone-200',
		color: 'text-stone-600',
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

const Token = ({ children, icon, variant = 'default' }: TokenProps) => {
	const colors = theme[variant];

	return (
		<div
			className={`container-row w-fit rounded-md px-1.5 py-0.5 gap-x-0.5 ${colors.color} ${colors.bg} border ${colors.border}`}
		>
			{icon && <span className='w-4 h-4 container-center'>{icon}</span>}
			<span className={`font-semibold text-xs uppercase whitespace-nowrap`}>
				{children}
			</span>
		</div>
	);
};

export default Token;
