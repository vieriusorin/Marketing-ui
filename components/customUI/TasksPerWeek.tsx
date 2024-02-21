import { Progress } from "@/components/ui/progress";

export const TasksPerWeek = () => {
	return (
		<div className='bg-white p-4 rounded-xl'>
			<div className='w-100'>
				<h3 className='text-lg font-medium leading-6 text-gray-900 mb-5'>
					Tasks per week
				</h3>
				<p className='text-3xl mb-10'>15</p>

				<div className='grid grid-cols-2 gap-4'>
					<div>
						<h3 className='text-sm mb-2 font-semibold'>In progress</h3>
						<Progress
							value={33}
							className='w-full bg-gray-100 h-2'
							indicatorColor='bg-primary-default'
						/>
					</div>
					<div>
						<h3 className='text-sm mb-2 font-semibold'>Remained</h3>
						<Progress
							value={67}
							className='w-full bg-gray-100 h-2'
							indicatorColor='bg-primary-default'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
