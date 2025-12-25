import { useState } from "react";

function Vitals() {
    const [value, setValue] = useState("");

    const addVital = async () => {
        await fetch("http://localhost:8080/api/vitals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
            type: "BP",
            value,
            recordedAt: new Date()
        })
    });

    alert("Vital added");
    };
    return (
        <div>
            <h3>Add Vitals</h3>
            <input placeholder="120/80" onChange={e => setValue(e.target.value)} />
            <button onClick={addVital}>Save</button>
        </div>
        );
}

export default Vitals;
