import { CustomChart } from "@/components/customUI/CustomChart";
import { TasksPerWeek } from "@/components/customUI/TasksPerWeek";
import { CardEfficiency } from "@/components/customUI/cardEfficiency";

const data = [
	{
		name: "Winter",
		FE: 20,
		BE: 40,
		amt: 100,
	},
	{
		name: "Spring",
		FE: 60,
		BE: 65,
		amt: 70,
	},
	{
		name: "Summer",
		FE: 70,
		BE: 75,
		amt: 82,
	},
	{
		name: "Autumn",
		FE: 90,
		BE: 100,
		amt: 20,
	},
];

export default function DashboardHome() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-[minmax(900px,_1fr)_300px] gap-4'>
			<div className='lg:w-7/10 p-4'>
				<div className='grid grid-cols-2 gap-8'>
					<CardEfficiency />
					<TasksPerWeek />
				</div>
				<div className='mt-8'>
					<div className='flex items-center mb-5 justify-between'>
						<h2 className='text-2xl font-semibold'>Team performance</h2>
						<div className='flex items-center gap-5'>
							<div className='flex items-center gap-2'>
								<div className='block w-2 h-2 rounded-full bg-[#5526ff]'></div>
								<p className='text-xs text-gray-400'>Dev Team</p>
							</div>
							<div className='flex items-center gap-2'>
								<div className='block w-2 h-2 rounded-full bg-[#cffa6b]'></div>
								<p className='text-xs text-gray-400'>Design Team</p>
							</div>
						</div>
					</div>

					<CustomChart data={data} />
				</div>
			</div>
			<div className='lg:w-3/10 p-4'>aside</div>
		</div>
	);
}
