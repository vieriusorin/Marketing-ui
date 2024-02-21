import { Filters } from "@/components/customUI/filters";
import { PaginationCustom } from "@/components/customUI/pagination";
import ProjectList from "@/components/customUI/project/list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

export default async function ProjectsPage() {
	return (
		<div className='py-10 px-5'>
			<div className='flex items-center justify-between mb-8'>
				<h2 className='text-2xl font-semibold'>Projects</h2>
				<div className='ml-auto mr-10'>
					<Filters />
				</div>
				<Button
					className='w-[120px] bg-black text-white hover:bg-black/[0.8] rounded-[8px]'
					asChild
				>
					<Link href='/dashboard/projects/new'> Add new</Link>
				</Button>
			</div>

			<ProjectList />
		</div>
	);
}
