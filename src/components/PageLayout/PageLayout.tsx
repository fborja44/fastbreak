interface PageLayoutProps {
	children?: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<div className='flex flex-col h-full relative w-screen max-h-page'>
			{children}
		</div>
	);
};

export default PageLayout;
