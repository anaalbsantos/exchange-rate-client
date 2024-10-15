'use client';

import { DashboardContainer } from './style';
import { Chart } from 'components';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin']
});

export interface DashboardProps {}

interface ExchangeRateData {
  date: string;
  rate: number;
}

const data: ExchangeRateData[] = [
  { date: '2023-10-10', rate: 0.19 },
  { date: '2023-10-11', rate: 0.18 },
  { date: '2023-10-12', rate: 0.2 },
  { date: '2023-10-13', rate: 0.21 },
  { date: '2023-10-14', rate: 0.22 },
  { date: '2023-10-15', rate: 0.23 },
  { date: '2023-10-16', rate: 0.24 },
  { date: '2023-10-17', rate: 0.25 },
  { date: '2023-10-18', rate: 0.25 },
  { date: '2023-10-19', rate: 0.21 }
  // Dados adicionais...
];

const Dashboard = ({}: DashboardProps) => {
  return (
    <DashboardContainer className={montserrat.className}>
      <h1>Check the Exchange Rate</h1>
      <h2>BRL = x USD</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="Start date" />
          <DatePicker label="End date" />
        </DemoContainer>
      </LocalizationProvider>
      <Chart data={data} />
    </DashboardContainer>
  );
};

export default Dashboard;
