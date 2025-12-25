import { useEffect, useState } from "react";

function ReportsList() {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch("http://localhost:8080/api/reports", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(res => res.json())
        .then(data => setReports(data))
        .catch(err => console.error(err));
        }, []);
        return (
            <div>
                <h2>Medical Reports</h2>
                {reports.length === 0 ? (
                    <p>No reports uploaded</p>
                ) : (
                    <ul>
                        {reports.map(r => (
                            <li key={r.id}>
                                <b>{r.reportType}</b> – {r.associatedVitals} –{" "}
                                {new Date(r.reportDate).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
}

export default ReportsList;
