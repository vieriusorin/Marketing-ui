import Link from "next/link";
import { headers } from "next/headers";
import { BookUser, Home, ListTodo, Presentation, Receipt } from "lucide-react";

export default function Sidebar() {
	return (
		<aside className=' text-white p-4  sticky  h-screen self-start'>
			<div className='flex items-center mb-8'>
				<Link href='/'>
					<span className='text-xl font-semibold text-center text-black block'>
						Management
					</span>
				</Link>
			</div>
			<nav>
				<ul className='flex flex-col items-start space-y-2'>
					<li className='w-full'>
						<Link
							href='/dashboard'
							className={`text-black flex items-center ${"p-3 bg-slate-100 rounded-[8px]"}`}
						>
							<Home size={20} strokeWidth={1} className='mr-2' />
							Home
						</Link>
					</li>
					<li className='w-full'>
						<Link
							href='/dashboard/projects'
							className='text-black flex items-center p-3'
						>
							<Presentation size={20} strokeWidth={1} className='mr-2' />
							Projects
						</Link>
					</li>
					<li className='w-full'>
						<Link
							href='/dashboard/projects'
							className='text-black flex items-center p-3'
						>
							<Presentation size={20} strokeWidth={1} className='mr-2' />
							Teams
						</Link>
					</li>
					<li className='w-full'>
						<Link
							href='/dashboard/tasks'
							className='text-black flex items-center p-3'
						>
							<ListTodo size={20} strokeWidth={1} className='mr-2' />
							Tasks
						</Link>
					</li>
					<li className='w-full'>
						<Link
							href='/dashboard/invoices'
							className='text-black flex items-center p-3'
						>
							<Receipt size={20} strokeWidth={1} className='mr-2' />
							Invoices
						</Link>
					</li>
					<li className='w-full'>
						<Link
							href='/dashboard/users'
							className='text-black flex items-center p-3'
						>
							<BookUser size={20} strokeWidth={1} className='mr-2' />
							Users
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
