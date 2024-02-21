import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formatStatus = (
	status: "IN_BACKLOG" | "IN_PROGRESS" | "IN_REVIEW" | "DONE"
) => {
	switch (status) {
		case "IN_BACKLOG":
			return "In backlog";
		case "IN_PROGRESS":
			return "In progress";
		case "IN_REVIEW":
			return "In review";
		case "DONE":
			return "Done";
		default:
			return status;
	}
};

const statusCheck = (
	status: "IN_BACKLOG" | "IN_PROGRESS" | "IN_REVIEW" | "DONE"
) => {
	switch (status) {
		case "IN_BACKLOG":
			return "bg-black hover:bg-black text-white hover:text-white";
		case "IN_PROGRESS":
			return "bg-primary-default hover:bg-primary-default text-white hover:text-white";
		case "IN_REVIEW":
			return "bg-[#d7e748] hover:bg-[#d7e748] text-black hover:text-black";
		case "DONE":
			return "bg-[#48e7c0] hover:bg-[#48e7c0] text-black hover:text-black";
		default:
			return status;
	}
};

export const CardProject = (props: any) => {
	const { title, description, client, status, id } = props.project;

	return (
		<Card className='bg-white rounded-xl hover:scale-[1.03] transition-transform shadow-lg border-0'>
			<CardHeader>
				<CardTitle className='text-lg font-bold capitalize'>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<ul
					role='list'
					className='divide-y divide-gray-200 dark:divide-gray-700'
				>
					<li className='py-3 sm:py-2'>
						<div className='flex items-center'>
							<div className='flex-1 min-w-0 ms-0'>
								<p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
									Status
								</p>
							</div>
							<div className='inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white'>
								<Badge
									className={`${statusCheck(
										status
									)} text-xs t py-1 font-bold cursor-none`}
								>
									{formatStatus(status)}
								</Badge>
							</div>
						</div>
					</li>
					<li className='py-3 sm:py-2'>
						<div className='flex items-center'>
							<div className='flex-1 min-w-0 ms-0'>
								<p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
									Client
								</p>
							</div>
							<div className='inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white'>
								<Badge className='bg-gray-300 text-black text-xs font-light hover:bg-gray-300 cursor-none'>
									{!!client ? client : "N/A"}
								</Badge>
							</div>
						</div>
					</li>
				</ul>
				<Button
					asChild
					className='bg-black text-white rounded-xl hover:bg-black[0.8] mt-5'
				>
					<Link href={`/dashboard/projects/${id}`}>View more</Link>
				</Button>
			</CardContent>
		</Card>
	);
};
