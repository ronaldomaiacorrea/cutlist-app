interface PageTitleProps {
	title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
	return <h2 className="text-center">{title}</h2>;
};

export default PageTitle;
