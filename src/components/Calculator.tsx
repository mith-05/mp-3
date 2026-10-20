import useCalculator from "./calchook";

export default function Calculator() {
    // Getting the values for the variables from calchook
    const { num1, setNum1, num2, setNum2, result, calculate, clear } = useCalculator();

    return (
        <div className="calculator">
            <h3>JavaScript Calculator</h3>
            <p>
                An interactive calculator developed using React and TypeScript.
                The calculator performs addition, subtraction, multiplication,
                division, and exponentiation.
            </p>

            <div id="labels">
                {/*Works similarly to JS label and input with slightly different syntax*/}
                <label htmlFor="number-1">Enter the first number</label>
                <input id="number-1" value={num1} onChange={(e) => setNum1(e.target.value)}/>
                {/*The input displays num1 and updates its state whenever the user type which is done by the onChange and seNum functions*/}
                <label htmlFor="number-2">Enter the second number</label>
                <input
                    id="number-2" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            </div>
            <div id="buttons">
                <button onClick={() => calculate("+")}>+</button>
                <button onClick={() => calculate("-")}>-</button>
                <button onClick={() => calculate("*")}>*</button>
                <button onClick={() => calculate("/")}>/</button>
                <button onClick={() => calculate("**")}>**</button>
                <button onClick={clear}>Clear</button>
            </div>
            {/*Displaying the result and make negative answers red using ternary operators (based on class name)*/}
            <div
                id="output"
                className={Number(result) < 0 ? "negative" : "positive"}
            >
                {result}
            </div>
        </div>
    );
}
