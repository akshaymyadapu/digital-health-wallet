import { useEffect, useState } from "react";

function VitalsList() {
    const [vitals, setVitals] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch("http://localhost:8080/api/vitals", {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    .then(res => res.json())
    .then(data => setVitals(data))
    .catch(err => console.error(err));  
    }, []);
    return (
        <div>
            <h2>Vitals History</h2>
            {vitals.length === 0 ? (
                <p>No vitals recorded</p>
                ) : (
                    <table border="1" cellPadding="10">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Value</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vitals.map(v => (
                                <tr key={v.id}>
                                    <td>{v.type}</td>
                                    <td>{v.value}</td>
                                    <td>{new Date(v.recordedAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </div>
    );
}

export default VitalsList;
