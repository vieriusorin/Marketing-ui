"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ProjectForm } from "./form";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProjectTasks } from "./tasks/list";

export const ProjectDetail = ({ id }: { id: string }) => {
	// const { title, description } = project.data;
	// const {
	// 	data: project,
	// 	isLoading,
	// 	isError,
	// 	error,
	// } = useQuery({
	// 	queryKey: ["project", id],
	// 	queryFn: async () => {
	// 		const response = await axios.get(
	// 			`http://localhost:3001/api/projects/${id}`
	// 		);
	// 		return response.data;
	// 	},
	// });

	const projectDetails = useQueries({
		queries: [
			{
				queryKey: ["project", id],
				queryFn: async () => {
					const response = await axios.get(
						`http://localhost:3001/api/projects/${id}`
					);
					return response.data;
				},
			},
			{
				queryKey: ["project", id, "tasks"],
				queryFn: async () => {
					const response = await axios.get(
						`http://localhost:3001/api/projects/${id}/tasks`
					);
					return response.data;
				},
			},
		],
		combine: (results) => {
			return {
				data: results.map((result) => result.data),
				isLoading: results.some((result) => result.isLoading),
				isError: results.some((result) => result.isError),
				error: results.some((result) => result.error),
				pending: results.some((result) => result.isPending),
			};
		},
	});

	const { isLoading, isError, data, error } = projectDetails;

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	const [projectDetail, tasks] = data;

	const { title, description } = projectDetail.data;

	return (
		<div className='py-10 px-5'>
			<Link href='/dashboard/projects' className='flex gap-2 items-center mb-5'>
				<ChevronLeft size={20} strokeWidth={1} />
				Back to projects
			</Link>
			<div className='grid grid-cols-[0.7fr_0.3fr] gap-4'>
				<div>
					<h2 className='text-2xl font-semibold mb-5'>{title}</h2>
					<p>{description}</p>
					<ProjectTasks tasks={tasks} />
				</div>
				<ProjectForm
					method='PATCH'
					id={projectDetail.data.id}
					details={projectDetail.data}
				/>
			</div>
		</div>
	);
};
