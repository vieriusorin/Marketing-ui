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
					<linearGradient id='colorFE' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#5526ff' stopOpacity={1} />
						<stop offset='95%' stopColor='#5526ff' stopOpacity={0} />
					</linearGradient>
					<linearGradient id='colorBE' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='0%' stopColor='#cffa6b' stopOpacity={1} />
						<stop offset='95%' stopColor='#cffa6b' stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis dataKey='name' />
				<YAxis />
				<CartesianGrid vertical={false} strokeDasharray='6 6' />
				<Tooltip />
				<Area
					type='natural'
					dataKey='FE'
					stroke='#8884d8'
					fillOpacity={1}
					fill='url(#colorFE)'
				/>
				<Area
					type='natural'
					dataKey='BE'
					stroke='#82ca9d'
					fillOpacity={1}
					fill='url(#colorBE)'
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};
