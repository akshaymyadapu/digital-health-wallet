function Reports() {
    const upload = async e => {
        const file = e.target.files[0];
        const form = new FormData();
        form.append("file", file);
        form.append("reportType", "Blood Test");
        form.append("associatedVitals", "BP");
        form.append("reportDate", new Date());
        await fetch("http://localhost:8080/api/reports/upload", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            },
            body: form
        });
        alert("Report uploaded");
    };

    return (
        <div>
            <h3>Upload Report</h3>
            <input type="file" onChange={upload} />
        </div>
    );
}

export default Reports;
