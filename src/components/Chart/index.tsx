// import { ChartContainer } from './style';
// import { LineChart } from '@mui/x-charts/LineChart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { format, parseISO } from 'date-fns';

interface ExchangeRateData {
  date: string;
  rate: number;
}

export interface ChartProps {
  data: ExchangeRateData[];
}

const Chart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickFormatter={(tick) => format(parseISO(tick), 'dd/MM/yyyy')}
        />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip
          labelFormatter={(label) => format(parseISO(label), 'dd/MM/yyyy')}
          isAnimationActive={false}
        />
        <Line type="monotone" dataKey="rate" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Chart;
