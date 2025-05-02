"use client"
import { useState } from "react";
import FetchDataExample from "./components/FetchDataExample";
import CounterExample from "./components/CounterExample";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Home Page</h1>

      {/* <HelloWorld /> */}

      {/* Form Event */}
      <form onSubmit={handleSubmit}>
        <input type = "text" value ={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter Something" />
        <button type ="submit">Submit</button>
      </form>

      {/* Fetch API Data */}
      {/* <FetchDataExample /> */}

      {/* Counter Example */}

      <CounterExample />

      </main>
    </div>
  );
}

// const HelloWorld = (props) => {
//   // console.log(props.title)
//   return (
//     <div>
//       <h1>First Component!</h1>
//       <h2>{props.title}</h2>
//     </div>
//   )
// }
