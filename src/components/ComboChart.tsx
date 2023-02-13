import { FC, useRef } from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useAppSelector } from '../hooks/redux-hooks';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

type Props = {
    kpi?: string,
    options?: any
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(el => months[el - 1].slice(0, 3));



const ComboChart: FC<Props> = (props: Props) => {
    const chartRef = useRef<ChartJS>(null);
    const state = useAppSelector(store => store.states.data)
    const data = {
        labels,
        datasets: state.filter(el => el.kpi===props.kpi)[0].datasets.map(el => {
            return {
                type: el.type==='bar' ? 'bar' as const : 'line' as const,
                label: el.name,
                borderColor: el.type==='bar' ? 'rgba(0,0,0,0)': el.color,
                borderWidth: 3,
                tension: 0.5,
                data: el.dataset,
                backgroundColor: el.color,
            }
        })
    };
    return (
        <Chart ref={chartRef} type='bar' data={data} options={props.options} />
    )
}

export default ComboChart