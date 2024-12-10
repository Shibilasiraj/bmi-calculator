import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      // Determine BMI category
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setCategory('Normal weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setCategory('Overweight');
      } else {
        setCategory('Obesity');
      }
    } else {
      alert('Please enter both weight and height');
    }
  };

  return (
    <div className="App container shadow rounded curve">
      <h1 className='container text-center mt-5 fw-bold text-warning'>BMI  <br /><span className='text-dark fw-bold'>Calculator</span></h1>
      <div className="">
        <div className=' container text-center mt-5 fw-bold  '>
          <label  htmlFor="weight">Weight (kg): </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className=' container text-center mt-5 fw-bold  '>
          <label htmlFor="height">Height (cm): </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <button  className='  rounded p-3 mt-3 'style={{backgroundColor:'green', color:'orange',marginLeft:'45%',marginTop:'3%' }} onClick={calculateBMI}>Calculate BMI</button>

      {
      bmi && (
        <div className="result  text-align-center">
          <h2  className=' container text-center mt-3 fw-bold  '>Your BMI: {bmi}</h2>
          <p  className=' container text-center mt-1   fw-bold  '>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default App;