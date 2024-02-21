import { Avatar } from "./avatar";

const users = [
	"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const CardEfficiency = () => {
	return (
		<div className='bg-white p-4 rounded-xl'>
			<div className='flex items-center'>
				<div>
					<h3 className='text-lg font-medium leading-6 text-gray-900 mb-5'>
						Efficiency
					</h3>
					<p className='text-3xl mb-10'>87%</p>
					<div className='flex avatars'>
						{users.slice(0, 2).map((user, i) => (
							<Avatar key={i} src={user} />
						))}
						<button className='w-[40px] h-[40px] rounded-full bg-black text-white flex items-center justify-center font-bold'>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
