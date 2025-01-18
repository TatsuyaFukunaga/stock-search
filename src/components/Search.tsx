import { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { ChartData, registerables } from 'chart.js';
import { Chart } from 'chart.js';
Chart.register(...registerables);

function Search() {
    const [stockName, setStockName] = useState('');
    const [period, setPeriod] = useState('1mo');
    const [chartData, setChartData] = useState<ChartData<'line'>>({
        labels: [],
        datasets: []
    });

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/stock/', {
                stock_name: stockName,
                period: period
            });
            console.dir(response);

            if (response.data && response.data.length > 0) {
                const labels = response.data.map((item: { date: string }) => item.date);
                const prices = response.data.map((item: { price: number }) => item.price);
                console.dir(labels);
                console.dir(prices);

                setChartData({
                    labels: labels,
                    datasets: [{
                        label: `${stockName} Stock Price`,
                        data: prices,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                });
            } else {
                alert('No data available for this stock');
            }
        } catch (error) {
            console.error('Error fetching stock data:', error);
            alert('Error fetching stock data');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 0 }}>
            <Typography variant="h4" component="h1" gutterBottom >
                Search Stocks
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                <TextField
                    label="Stock Name"
                    value={stockName}
                    onChange={(e) => setStockName(e.target.value)}
                />
                <FormControl>
                    <InputLabel>Period</InputLabel>
                    <Select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    >
                        <MenuItem value="1mo">1 Month</MenuItem>
                        <MenuItem value="3mo">3 Months</MenuItem>
                        <MenuItem value="6mo">6 Months</MenuItem>
                        <MenuItem value="1y">1 Year</MenuItem>
                        <MenuItem value="2y">2 Years</MenuItem>
                        <MenuItem value="5y">5 Years</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            {chartData && (
                <Box sx={{ width: '100%', maxWidth: 800 }}>
                    <Line data={chartData} />
                </Box>
            )}
        </Box>
    );
}

export default Search;

