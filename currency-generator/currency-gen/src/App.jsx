// ============================================
// MAIN APP - App.jsx
// Purpose: All logic lives here
// Uses: useCurrencyInfo hook + InputBox component
// ============================================

import { useState } from "react"
import InputBox from "./components/InputBox"
// InputBox component imported - used twice in UI

import useCurrencyInfo from "./hooks/useCurrencyInfo"
// Custom hook imported - handles API call

function App() {

    // ─────────────────────────────
    // STATE VARIABLES
    // ─────────────────────────────

    const [amount, setAmount] = useState(0)
    // amount = number user types in "From" box
    // Starts at 0

    const [from, setFrom] = useState("usd")
    // from = selected currency in "From" box
    // Starts as "usd"

    const [to, setTo] = useState("inr")
    // to = selected currency in "To" box
    // Starts as "inr"

    const [convertedAmount, setConvertedAmount] = useState(0)
    // convertedAmount = result after conversion
    // Starts at 0

    // ─────────────────────────────
    // CUSTOM HOOK CALL
    // ─────────────────────────────

    const currencyInfo = useCurrencyInfo(from)
    // Calling our custom hook with "from" currency
    // Hook goes to API: fetch rates for "usd"
    // Returns: { inr: 83.5, eur: 0.92, gbp: 0.79, ... }
    // When "from" changes → hook re-fetches automatically

    // ─────────────────────────────
    // DROPDOWN OPTIONS
    // ─────────────────────────────

    const options = Object.keys(currencyInfo)
    // currencyInfo = { inr: 83.5, eur: 0.92, gbp: 0.79 }
    // Object.keys() = ["inr", "eur", "gbp"]
    // These become options in both dropdowns

    // ─────────────────────────────
    // FUNCTIONS
    // ─────────────────────────────

    // Swap "From" and "To" currencies
    const swap = () => {
        setFrom(to)
        // "From" becomes what "To" was
        setTo(from)
        // "To" becomes what "From" was
        setConvertedAmount(amount)
        // Converted amount goes to main amount
        setAmount(convertedAmount)
        // Old amount becomes converted amount
    }

    // Convert amount
    const convert = () => {
        setConvertedAmount(
            amount * currencyInfo[to]
            // amount   = user typed (e.g., 100)
            // currencyInfo[to] = rate for "to" currency
            //   e.g., currencyInfo["inr"] = 83.5
            // 100 * 83.5 = 8350 (INR)
        )
    }

    // ─────────────────────────────
    // UI - What user sees
    // ─────────────────────────────

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">

            {/* Main Card */}
            <div className="w-full max-w-md mx-auto p-6 bg-white/20 backdrop-blur-sm rounded-2xl shadow-xl">

                {/* Title */}
                <h1 className="text-white text-2xl font-bold text-center mb-6">
                    Currency Converter
                </h1>

                {/* FROM INPUT BOX */}
                <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onAmountChange={(newAmount) => setAmount(newAmount)}
                    onCurrencyChange={(newCurrency) => setFrom(newCurrency)}
                    selectCurrency={from}
                />

                {/* SWAP BUTTON - overlaps both input boxes */}
                <div className="flex justify-center -my-3 relative z-10">
                    <button
                        onClick={swap}
                        className="bg-white text-blue-600 w-10 h-10 rounded-full font-bold hover:bg-blue-50 transition-all shadow-md border-2 border-blue-200 flex items-center justify-center text-lg"
                    >
                        ⇅
                    </button>
                </div>

                {/* TO INPUT BOX */}
                <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(newCurrency) => setTo(newCurrency)}
                    selectCurrency={to}
                    amountDisable={true}
                />

                {/* CONVERT BUTTON */}
                <button
                    onClick={convert}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl mt-4 transition-all shadow-md text-base"
                >
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>

                {/* RESULT DISPLAY */}
                {convertedAmount > 0 && (
                    // Only show when there is a result
                    <div className="mt-4 text-center bg-white/20 rounded-xl py-3 px-4">
                        <p className="text-white text-sm opacity-80">Result</p>
                        <p className="text-white text-2xl font-bold">
                            {amount} {from.toUpperCase()} =
                        </p>
                        <p className="text-yellow-300 text-3xl font-bold">
                            {convertedAmount.toFixed(2)} {to.toUpperCase()}
                            {/* toFixed(2) = show only 2 decimal places */}
                        </p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default App