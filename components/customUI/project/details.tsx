import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ProjectForm } from "./form/";

export const ProjectDetail = async ({ project }) => {
	const { title, description } = project.data;

	return (
		<>
			<Link href='/dashboard/projects' className='flex gap-2 items-center mb-5'>
				<ChevronLeft size={20} strokeWidth={1} />
				Back to projects
			</Link>
			<div className='grid grid-cols-[0.7fr_0.3fr] gap-4'>
				<div>
					<h2 className='text-2xl font-semibold mb-5'>{title}</h2>
					<p>{description}</p>
				</div>
				<ProjectForm project={project} />
			</div>
		</>
	);
};
