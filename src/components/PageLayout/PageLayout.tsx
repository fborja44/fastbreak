import { TabGroup } from '@headlessui/react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface PageLayoutProps {
	children?: React.ReactNode;
	headerTitle: string;
	headerIcon?: React.ReactNode;
	headerContent?: React.ReactNode;
	headerRounded?: boolean;
	showAppBar?: boolean;
	showBackButton?: boolean;
}

const PageLayout = ({
	children,
	headerTitle,
	headerIcon,
	headerContent,
	headerRounded,
	showAppBar = true,
	showBackButton,
}: PageLayoutProps) => {
	return (
		<TabGroup className='flex flex-col h-full relative w-screen max-h-page'>
			<Header
				rounded={headerRounded}
				icon={headerIcon}
				title={headerTitle}
				showAppBar={showAppBar}
				showBackButton={showBackButton}
			>
				{headerContent}
			</Header>
			<main className='flex-auto self-stretch overflow-y-auto min-h-2 pb-11'>
				{children}
			</main>
			<Footer />
		</TabGroup>
	);
};

export default PageLayout;
