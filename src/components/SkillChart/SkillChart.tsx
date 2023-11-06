import React, { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";

Chart.register(...registerables);

const SkillChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                const chartConfig: ChartConfiguration = {
                    type: "bar",
                    data: {
                        labels: ["Frontend", "Backend", "DDBB", "Diseño Gráfico", "UX", "UI"],
                        datasets: [
                            {
                                data: [80, 70, 80, 90, 50, 70],
                                backgroundColor: ["#8F00FF", "#8050FA", "#7080F5", "#60B0F0", "#50E0EB", "#6DFFDC"],
                                borderColor: ["#8F00FF", "#8050FA", "#7080F5", "#60B0F0", "#50E0EB", "#6DFFDC"],
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        indexAxis: "y",
                        scales: {
                            x: {
                                beginAtZero: true,
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    display: false,
                                },
                            },
                            y: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    display: true,
                                },
                            },
                        },
                        animation: {
                            duration: 2000,
                            easing: "easeInOutQuart",
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    },
                };

                chartInstance.current = new Chart(ctx, chartConfig);
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default SkillChart;
