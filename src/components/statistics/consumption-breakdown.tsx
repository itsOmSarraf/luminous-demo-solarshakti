// components/statistics/consumption-breakdown.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Legend,
	Tooltip
} from 'recharts';

const data = [
	{ name: 'HVAC', value: 400, color: '#3b82f6' },
	{ name: 'Lighting', value: 300, color: '#6366f1' },
	{ name: 'Appliances', value: 200, color: '#8b5cf6' },
	{ name: 'Other', value: 100, color: '#a855f7' }
];

export function ConsumptionBreakdown() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Consumption Breakdown</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='h-[300px]'>
					<ResponsiveContainer
						width='100%'
						height='100%'>
						<PieChart>
							<Pie
								data={data}
								cx='50%'
								cy='50%'
								innerRadius={60}
								outerRadius={80}
								paddingAngle={5}
								dataKey='value'>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={entry.color}
									/>
								))}
							</Pie>
							<Tooltip
								contentStyle={{
									backgroundColor: 'white',
									border: 'none',
									borderRadius: '8px',
									boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
								}}
								formatter={(value: number) => [`${value}kWh`, 'Consumption']}
							/>
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
}
