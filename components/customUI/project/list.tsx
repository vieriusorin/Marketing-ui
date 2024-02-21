"use client";

import { CardProject } from "@/components/customUI/cardProject";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useSearchParams } from "next/navigation";
import { PaginationCustom } from "../pagination";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectList() {
	const searchParams = useSearchParams();

	const sort = searchParams.get("sort");
	const status = searchParams.get("status");

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(9);

	const { data, error, isLoading } = useQuery({
		queryKey: ["projects", sort, status, currentPage],
		queryFn: async () => {
			const queryString = new URLSearchParams();

			if (sort) {
				queryString.append("sort", sort);
			}
			if (status) {
				queryString.append("status", status);
			}
			if (currentPage) {
				queryString.append("page", String(currentPage));
			}

			const url = `http://localhost:3001/api/projects?${queryString.toString()}`;
			const response = await axios.get(url);
			return response.data;
		},
	});

	if (isLoading) {
		return (
			<div className='grid lg:grid-cols-5 gap-7 grid-flow-row mb-10'>
				{Array.from({ length: 10 }).map((_, i) => (
					<Skeleton
						key={i}
						className='h-[250px] w-full rounded-xl bg-gray-600'
					/>
				))}
			</div>
		);
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const projects = data?.data.projects || [];

	return (
		<>
			{!!projects && projects.length > 0 ? (
				<>
					<div className='grid lg:grid-cols-5 gap-7 grid-flow-row mb-10'>
						{projects.map((project) => (
							<CardProject key={project.id} project={project} />
						))}
					</div>

					<PaginationCustom
						totalItems={projects.length}
						itemsPerPage={itemsPerPage}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</>
			) : (
				<p>No data</p>
			)}
		</>
	);
}
