'use client'

import { FriendContext } from '@/Context/FriendsContextProvider';
import NoSelectedData from '@/Ui/NoSelectedData';
import { useContext } from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const Dashboard = () => {

    const { timeLinelData } = useContext(FriendContext)

    const textCount = timeLinelData.filter(item => item.type === 'Text').length;
    const callCount = timeLinelData.filter(item => item.type === 'Call').length;
    const videoCount = timeLinelData.filter(item => item.type === 'Video').length;

    const datas = [
        { name: 'Call', value: callCount, fill: '#0088FE' },
        { name: 'Text', value: textCount, fill: '#004477' },
        { name: 'Video', value: videoCount, fill: '#00C49F' },
    ];

    return (
        <div className="flex justify-center items-center h-[400px] shadow-sm bg-gray-100">
            {
                textCount === 0 && callCount === 0 && videoCount === 0
                    ? <NoSelectedData/>
                    : <PieChart width={300} height={320}>
                        <Pie
                            data={datas}
                            dataKey="value"
                            innerRadius={90}
                            outerRadius={140}
                            paddingAngle={5}
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>
            }

        </div>
    );
};

export default Dashboard;