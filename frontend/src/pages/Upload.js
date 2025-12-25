import { useNavigate } from "react-router-dom";

function Upload() {
    const navigate = useNavigate();
    
    const handleUpload = () => {
        // TEMP analysis data (later comes from backend)
        const analysisResult = {
            status: "Normal",
            bloodPressure: "120/80",
            heartRate: "72 bpm",
            riskLevel: "Low"
        };
        // Save analysis
        localStorage.setItem("analysis", JSON.stringify(analysisResult));
        navigate("/results");
    };

    return (
        <div>
            <h2>Upload Medical Reports</h2>
            <input type="file" />
            <br /><br />
            <button onClick={handleUpload}>
                Upload & Analyze
            </button>
        </div>
    );
}

export default Upload;
