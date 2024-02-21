import { ProjectDetail } from "@/components/customUI/project/details";

export interface Props {
	params: Params;
	searchParams: SearchParams;
}

export interface Params {
	[key: string]: string;
}

export interface SearchParams {
	[key: string]: string;
}

export default async function ProjectsPage(context: Props) {
	const { id } = context.params;

	return <ProjectDetail id={id} />;
}
