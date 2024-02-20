import { CardProject } from "@/components/customUI/cardProject";
async function getData() {
	const res = await fetch("http://localhost:3001/api/projects", {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function ProjectsPage() {
	const data = await getData();

	const { projects } = data.data;
	return (
		<div>
			<h2 className='text-2xl font-semibold'>Projects</h2>
			<div className='grid lg:grid-cols-5 gap-4'>
				{!!projects &&
					projects.length > 0 &&
					projects.map((project) => (
						<CardProject key={project.id} project={project} />
					))}
			</div>
		</div>
	);
}
