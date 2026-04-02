// ============================================
// CUSTOM HOOK - useCurrencyInfo
// Purpose: Fetch currency exchange rates from API
// Usage: Called from App.jsx
// Returns: Object with all currency rates
// ============================================

import { useEffect, useState } from "react"
// useEffect → Run code after render (API call here)
// useState  → Store the fetched data

function useCurrencyInfo(currency) {
    // currency = which currency to fetch (e.g., "usd", "inr")
    // This value comes from App.jsx when hook is called

    // Step 1: Create empty state to store API response
    const [data, setData] = useState({})
    // data    = current fetched rates (starts empty {})
    // setData = function to update data when API responds

    // Step 2: Fetch data whenever currency changes
    useEffect(() => {

        // API call - fetch rates for given currency
        // Example URL: .../currencies/usd.json
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        )
        // Step 3: Convert response to JSON
        .then((res) => res.json())

        // Step 4: Extract only the currency data we need
        // API returns: { usd: { inr: 83.5, eur: 0.92, ... } }
        // We want:           { inr: 83.5, eur: 0.92, ... }
        .then((res) => setData(res[currency]))

        // Step 5: If any error, print in console
        .catch((error) => console.error("API Error:", error))

    }, [currency])
    // [currency] = Re-run this effect when currency changes
    // User selects "EUR" → currency changes → new API call

    // Step 6: Return data so components can use it
    return data
}

export default useCurrencyInfo
// Exported so App.jsx can import and use it