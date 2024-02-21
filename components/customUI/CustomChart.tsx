"use client";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	AreaChart,
	Area,
} from "recharts";

export const CustomChart = ({ data }: any) => {
	return (
		<ResponsiveContainer width='100%' height={400}>
			<AreaChart
				width={730}
				height={250}
				data={data}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
			>
				<defs>
					<linearGradient id='colorDev' x1='1' y1='1' x2='2' y2='0'>
						<stop offset='5%' stopColor='#24c4cf' stopOpacity={1} />
						<stop offset='95%' stopColor='#24c4cf' stopOpacity={0} />
					</linearGradient>
					<linearGradient id='colorDesign' x1='2' y1='0' x2='1' y2='3'>
						<stop offset='0%' stopColor='#e9afa1' stopOpacity={1} />
						<stop offset='95%' stopColor='#e9afa1' stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis dataKey='name' />
				<YAxis />
				<CartesianGrid vertical={false} strokeDasharray='6 6' />
				<Tooltip />
				<Area
					type='natural'
					dataKey='development'
					stroke='#24c4cf'
					fillOpacity={1}
					fill='url(#colorDev)'
				/>
				<Area
					type='natural'
					dataKey='design'
					stroke='#e9afa1'
					fillOpacity={1}
					fill='url(#colorDesign)'
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};
