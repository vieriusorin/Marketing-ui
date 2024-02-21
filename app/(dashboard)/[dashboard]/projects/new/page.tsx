import { ProjectForm } from "@/components/customUI/project/form";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function NewProjectPage() {
	return (
		<div className='my-10 mx-5'>
			<Link href='/dashboard/projects' className='flex gap-2 items-center mb-5'>
				<ChevronLeft size={20} strokeWidth={1} />
				Back to projects
			</Link>
			<div className=''>
				<h2 className='text-2xl font-semibold mb-5'>Add new project</h2>
				<ProjectForm method='POST' />
			</div>
		</div>
	);
}
