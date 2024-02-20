import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
	title: string;
	description: string;
	completed: string;
	status: string;
};

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

export const CardProject = (props: any) => {
	const { title, description, client, status, id } = props.project;

	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<ul
					role='list'
					className='divide-y divide-gray-200 dark:divide-gray-700'
				>
					<li className='py-3 sm:py-4'>
						<div className='flex items-center'>
							<div className='flex-1 min-w-0 ms-4'>
								<p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
									Status
								</p>
							</div>
							<div className='inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white'>
								<Badge className='bg-black text-white text-xs font-light hover:bg-black cursor-none'>
									{formatStatus(status)}
								</Badge>
							</div>
						</div>
					</li>
					<li className='py-3 sm:py-4'>
						<div className='flex items-center'>
							<div className='flex-1 min-w-0 ms-4'>
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
					className='bg-gray-600 text-white rounded-lg hover:bg-gray-800 mt-5'
				>
					<Link href={`/dashboard/projects/${id}`}>View more</Link>
				</Button>
			</CardContent>
		</Card>
	);
};
