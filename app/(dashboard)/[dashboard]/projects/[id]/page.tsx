import { ProjectDetail } from "@/components/customUI/project/details";

async function getData(id: String) {
	const res = await fetch(`http://localhost:3001/api/projects/${id}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

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
	const data = await getData(id);
	const project = data;
	return (
		<div className='lg:p-8'>
			<ProjectDetail project={project} />
		</div>
	);
}
