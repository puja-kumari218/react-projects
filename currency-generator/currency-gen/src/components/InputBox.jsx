// ============================================
// REUSABLE COMPONENT - InputBox
// Purpose: Show amount input + currency dropdown
// Used TWICE in App.jsx:
//   1. "From" section (top input)
//   2. "To" section (bottom input)
// ============================================

import { useId } from "react"
// useId → Generates unique ID for label-input linking
// Accessibility: label "for" attribute needs input "id"

function InputBox({
    // These props come from App.jsx when InputBox is used
    label,           // Text above input: "From" or "To"
    amount,          // Current number in input box
    onAmountChange,  // Function called when user types number
    onCurrencyChange,// Function called when user picks currency
    currencyOptions = [],  // List of currencies for dropdown ["usd","inr","eur"]
    selectCurrency = "usd", // Currently selected currency
    amountDisable = false,  // true = input is readonly (To section)
    currencyDisable = false,// true = dropdown is disabled
    className = "",         // Extra CSS classes if needed
}) {

    // Generate unique ID for this input
    // If InputBox used twice, both get different IDs
    // "From" input → id=":r0:"
    // "To" input   → id=":r1:"
    const amountInputId = useId()

    return (
        // Main container
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            {/* LEFT SIDE - Amount Input */}
            <div className="w-1/2">

                {/* Label above input */}
                <label
                    htmlFor={amountInputId}
                    // htmlFor links this label to the input below
                    // Clicking label will focus the input
                    className="text-black/40 mb-2 inline-block text-xs"
                >
                    {label}
                    {/* Shows "From" or "To" - comes from props */}
                </label>

                {/* Number Input */}
                <input
                    id={amountInputId}
                    // This id matches label's htmlFor above
                    type="number"
                    placeholder="Amount"
                    className="outline-none w-full bg-transparent py-1.5 text-lg font-semibold"
                    disabled={amountDisable}
                    // disabled=true → user cannot type (used in "To" box)
                    value={amount}
                    // Controlled input - shows value from state
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                        // onAmountChange && → only call if function exists
                        // Number() → convert string "100" to number 100
                        // This updates amount state in App.jsx
                    }
                />
            </div>

            {/* RIGHT SIDE - Currency Dropdown */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black/40 mb-2 w-full text-xs">
                    Currency Type
                </p>

                {/* Dropdown to select currency */}
                <select
                    className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none text-sm font-medium"
                    value={selectCurrency}
                    // Shows currently selected currency
                    disabled={currencyDisable}
                    // disabled=true → user cannot change (used in "To" box)
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                        // When user picks different currency
                        // Calls onCurrencyChange in App.jsx
                        // App.jsx updates state → new rates fetched
                    }
                >
                    {/* Create one option for each currency */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                            {/* Shows: usd, inr, eur, etc. */}
                        </option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default InputBox
// Exported so App.jsx can import it