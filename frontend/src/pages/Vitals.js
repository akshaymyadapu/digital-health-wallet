import { useNavigate } from "react-router-dom";

function Vitals() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Vitals</h2>
            <p>No vitals recorded</p>
            <button onClick={() => navigate("/upload")}>
                Next: Upload Reports
            </button>
        </div>
    );
}

export default Vitals;
