import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

function Results() {
    const analysis = JSON.parse(localStorage.getItem("analysis"));

    if (!analysis) {
        return <p>No analysis available</p>;
    }

  // BAR CHART (Vitals)
    const vitalsData = {
        labels: ["Blood Pressure", "Heart Rate"],
        datasets: [
            {
                label: "Vitals",
                data: [120, 72],
                backgroundColor: ["#4CAF50", "#2196F3"], // GREEN, BLUE
                borderColor: ["#388E3C", "#1976D2"],
                borderWidth: 1,
            },
        ],
    };

  // PIE CHART (Risk)
    const riskData = {
        labels: ["Low Risk", "Medium Risk", "High Risk"],
        datasets: [
            {
                data: [70, 20, 10],
                backgroundColor: [
                    "#4CAF50", // Green
                    "#FFC107", // Yellow
                    "#F44336", // Red
                ],
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Health Analysis Results</h2>

            <p><strong>Status:</strong> {analysis.status}</p>
            <p><strong>Risk Level:</strong> {analysis.riskLevel}</p>

            <h3>Vitals Overview</h3>
            <div style={{ width: "500px", marginBottom: "40px" }}>
                <Bar data={vitalsData} />
            </div>

            <h3>Risk Distribution</h3>
            <div style={{ width: "400px" }}>
            <Pie data={riskData} />
            </div>
        </div>
    );
}

export default Results;
