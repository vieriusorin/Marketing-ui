import { CustomChart } from "@/components/customUI/CustomChart";
import { TasksPerWeek } from "@/components/customUI/TasksPerWeek";
import { CardEfficiency } from "@/components/customUI/cardEfficiency";

const data = [
	{
		name: "Winter",
		development: 20,
		design: 40,
		amt: 100,
	},
	{
		name: "Spring",
		development: 60,
		design: 65,
		amt: 70,
	},
	{
		name: "Summer",
		development: 70,
		design: 75,
		amt: 82,
	},
	{
		name: "Autumn",
		development: 90,
		design: 100,
		amt: 20,
	},
];

export default function DashboardHome() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-[minmax(900px,_1fr)_450px] gap-10 py-10 px-5'>
			<div className=''>
				<div className='grid grid-cols-3 gap-8'>
					<CardEfficiency />
					<CardEfficiency />
					<TasksPerWeek />
				</div>
				<div className='mt-8'>
					<div className='flex items-center mb-5 justify-between'>
						<h2 className='text-2xl font-semibold'>Team performance</h2>
						<div className='flex items-center gap-5'>
							<div className='flex items-center gap-2'>
								<div className='block w-2 h-2 rounded-full bg-[#24c4cf]'></div>
								<p className='text-xs text-gray-400'>Dev Team</p>
							</div>
							<div className='flex items-center gap-2'>
								<div className='block w-2 h-2 rounded-full bg-[#e9afa1]'></div>
								<p className='text-xs text-gray-400'>Design Team</p>
							</div>
						</div>
					</div>

					<CustomChart data={data} />
				</div>
			</div>
			<div className=''>aside</div>
		</div>
	);
}
