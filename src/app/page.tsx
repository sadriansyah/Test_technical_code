"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [number, setNumber] = useState();
  const [resultValue, setResultValue] = useState();
  const [isValidate, setValidate] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const inputValidate = () => {
    let valid = true;
    if (number == '' || number == undefined) {
      setValidate(false);
      setErrorMessage('Nomor Harus di isi');
      valid = false;
    } else if(isNaN(number)) {
      setValidate(false);
      setErrorMessage('Nomor harus berupa angka');
      valid = false;
    }

    return valid;
  }

  const getGanjil = async () => {
    if (inputValidate()) {
      const response = await fetch(`/api/ganjil?number=${number}`);
  
      const result = await response.json();
  
      if (response.ok) {
        setResultValue(result.number);
      }
    }
  }

  const getPrime = async () => {
    if (inputValidate()) {
      const response = await fetch(`/api/prime?number=${number}`);
      
      const result = await response.json();
  
      if (response.ok) {
        setResultValue(result.number);
      }
    }
  }

  const getSegitiga = async () => {
    if (inputValidate()) {
      const response = await fetch(`/api/segitiga?number=${number}`);
  
      const result = await response.json();
  
      if (response.ok) {
        setResultValue(result.number);
      }
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Input Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Input Number"
            onChange={(e) => setNumber(e.target.value)}
          />
          { isValidate ? null : <small className="text-red-500"><b>{errorMessage}</b></small> }
          
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="col-4">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={getSegitiga}>
              Generate Segitiga
            </button>
          </div>
          <div className="col-4">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={getGanjil}>
              Generate Bilangan Ganjil
            </button>
          </div>
          <div className="col-4">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={getPrime}>
              Generate Bilangan Prima
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h4><b>Results:</b></h4>
          <div dangerouslySetInnerHTML={{ __html: resultValue}} />
        </div>
      </div>
    </main>
  );
}
