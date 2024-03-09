import React, { useState } from "react";

function Inputs() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBMI] = useState("");
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    function calculateBMI(event) {
        
        event.preventDefault();
        if(weight===0 || height===0)
        {
            setMessage("Please Enter Valid Weight and Height");
        }
        else
        {
            let bmi=(weight/(height*height)*703);
            setBMI(bmi.toFixed(2));

            if (bmi<25)
            {
                setStatus("You are underweight");
            }
            else if (bmi>=25 && bmi<30)
            {
                setStatus("You are a healthy weight");
            }
            else{
                setStatus("You are overweight")
            }
        }
    }

    let reload=()=> {
        window.location.reload();
    }
    return (
        <div className="container">
            <div className="mb-4">
                <h1 className="text-center"><span style={{color:"blue",fontFamily:"Noto serif"}}>BMI</span> Calculator</h1>
            </div>
            <form className="col" onSubmit={calculateBMI}>
                <div>
                    <p>{message}</p>
                </div>
                <div className="inputField row">
                    <label className="text col-4 col-form-label">Height(inch)</label>
                    <div className="col-8">
                    <input type="text" id="height" className="form-control" placeholder="Enter your height in inches" value={height} onChange={(e)=> setHeight(e.target.value)}/>
                    </div>
                </div>
                <div className="inputField row">
                    <label className="text col-4 col-form-label">Weight(kg)</label>
                    <div className="col-8">
                    <input type="text" id="weight" className="form-control" placeholder="Enter weight in kg" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
                    </div>
                </div>
                <div className="button mt-3">
                    <button className="btn btn-success">Calculate</button>
                    <button type="reload" onClick={reload} className="btn btn-info">Reload</button>
                </div>
                <div  className="text-center">
                    <h5 style={{fontWeight:"bold"}}>Your BMI is</h5>
                    <h1 style={{color:"green"}}>{bmi}</h1>
                    <p style={{fontWeight:"bold"}}>{status}</p>
                </div>

            </form>
        </div>
    );
}

export default Inputs;