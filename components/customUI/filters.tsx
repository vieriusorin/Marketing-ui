"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import React from "react";

export const Filters = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = React.useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	const handleSortByStatus = (value: string) => {
		router.push(pathname + "?" + createQueryString("status", value));
	};
	return (
		<>
			<Select onValueChange={handleSortByStatus}>
				<SelectTrigger className='w-[180px]'>
					<SelectValue placeholder='By status' />
				</SelectTrigger>
				<SelectContent className='bg-white'>
					<SelectItem value='IN_BACKLOG'>In Backlog</SelectItem>
					<SelectItem value='IN_PROGRESS'>In progress</SelectItem>
					<SelectItem value='IN_REVIEW'>In review</SelectItem>
					<SelectItem value='DONE'>Done</SelectItem>
				</SelectContent>
			</Select>
		</>
	);
};
