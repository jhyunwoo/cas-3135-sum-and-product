import { useState } from "react";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [res, setRes] = useState({ type: "", sum: 0, prod: 0 });

  return (
    <div
      className={
        "w-full h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 p-4"
      }
    >
      <div
        className={
          "bg-white p-8 rounded-2xl dark:bg-neutral-900 dark:text-neutral-50 w-full max-w-3xl flex items-center justify-center flex-col"
        }
      >
        <h1 className={"text-4xl font-semibold"}>Sum and Product</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const result = await fetch(
                `https://e9buh1mr78.execute-api.ap-northeast-2.amazonaws.com/default/cas-3135-2024148005-sum?x=${x}&y=${y}`,
              );
              const data = await result.json();
              setRes(data);
            } catch (e) {
              console.error(e);
              setRes({ type: "", sum: 0, prod: 0 });
            }
          }}
          className={"flex flex-col items-start gap-2 w-full max-w-xl"}
        >
          <div className={"flex items-center justify-center gap-2 w-full mt-4"}>
            <input
              onChange={(e) => setX(Number(e.target.value))}
              type={"number"}
              placeholder={"Enter X"}
              className={
                "p-1 px-2 rounded-lg focus:outline-none focus:ring-offset-1 ring-2 transition-all ring-sky-500 w-full"
              }
              required={true}
            />
            <input
              onChange={(e) => setY(Number(e.target.value))}
              type={"number"}
              placeholder={"Enter Y"}
              className={
                "p-1 px-2 rounded-lg focus:outline-none focus:ring-offset-1 ring-2 transition-all ring-sky-500 w-full"
              }
              required={true}
            />
          </div>
          <button
            type={"submit"}
            className={
              "bg-sky-500 text-white p-2 px-4 text-center rounded-lg w-full font-semibold"
            }
          >
            Submit
          </button>
        </form>
        <div
          className={"ring-1 ring-neutral-400 w-full rounded-lg p-2 px-3 mt-4"}
        >
          <p className={"text-lg font-semibold"}>Result</p>
          <div>Request Result: {res.type}</div>
          <div>
            Sum: {x} + {y} = {res.sum}
          </div>
          <div>
            Product: {x} * {y} = {res.prod}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
