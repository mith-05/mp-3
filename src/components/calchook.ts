import { useState } from "react";

export default function useCalculator() {
    // Store the two input values and the calculated result
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    function calculate(operation: string) {
        const first = Number(num1);
        const second = Number(num2);
        let answer = 0;

        if (operation === "+") {
            answer = first + second;
        } else if (operation === "-") {
            answer = first - second;
        } else if (operation === "*") {
            answer = first * second;
        } else if (operation === "/") {
            answer = first / second;
        } else if (operation === "**") {
            answer = 1;

            for (let i = 1; i <= second; i++) {
                answer *= first;
            }
        }
        // Updating result state so React displays the answer
        setResult(String(answer));
    }

    function clear() {
        setNum1("");
        setNum2("");
        setResult("");
    }
    // Returning states and functions for Calculator.tsx to use
    return {num1, setNum1, num2, setNum2, result, calculate, clear};
}
