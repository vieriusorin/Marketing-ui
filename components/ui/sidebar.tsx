import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
	return (
		<aside className='bg-gray-100/50 text-white w-1/5 p-4 h-screen'>
			<div className='flex items-center mb-8'>
				<Link href='/'>
					{/* <Image src='/logo.png' alt='Logo' width={32} height={32} /> */}
				</Link>
				<span className='text-xl font-semibold text-center text-black block'>
					Management
				</span>
			</div>
			{/* Menu items with links */}
			<nav>
				<ul>
					<li className='mb-2'>
						<Link href='/dashboard/projects'>Projects</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
