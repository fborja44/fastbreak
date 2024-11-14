interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<main className='overflow-hidden flex flex-col h-screen'>{children}</main>
	);
};

export default Layout;
