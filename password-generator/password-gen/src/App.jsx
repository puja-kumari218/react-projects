// Import React hooks from React library
import { useState, useCallback, useEffect, useRef } from "react";

// Import CSS file for styling
import "./index.css";

// Main React component
function App() {

  // State to store password length (default = 8)
  const [length, setLength] = useState(8);

  // State to check if numbers should be included in password
  // false = numbers not allowed initially
  const [numberAllowed, setNumberAllowed] = useState(false);

  // State to check if special characters should be included
  // false = symbols not allowed initially
  const [charAllowed, setCharAllowed] = useState(false);

  // State to store generated password
  const [Password, setPassword] = useState("");

  // useRef creates a reference to the input element
  // this allows us to directly access the input DOM element
  const passwordRef = useRef(null); 

  // Function to generate password
  // useCallback remembers the function and recreates it only if dependencies change
  const passwordGenerator = useCallback(() => {

    // Create empty string to store generated password
    let pass = ""

    // Base characters used for password (A-Z and a-z)
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // If numbers checkbox is checked
    // then numbers are added to character list
    if (numberAllowed) str += "0123456789";

    // If special character checkbox is checked
    // then symbols are added to character list
    if(charAllowed) str += "!@#$%^&*"

    // Loop runs according to password length
    for (let i = 0; i < length; i++) {

      // Generate random number based on string length
      // Math.random() gives random decimal number
      // Math.floor converts it to whole number
      let char = Math.floor(Math.random() * str.length);

      // str.charAt(char) picks random character from the string
      // that character is added to password
      pass += str.charAt(char);

    }

    // Save generated password into state
    // this will update UI automatically
    setPassword(pass);

  }, [length, numberAllowed, charAllowed]); 
  // dependencies: function runs again if any of these change

  // useEffect runs when dependencies change
  // here it runs passwordGenerator automatically
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]); 
  // whenever user changes length, numbers, or symbols

  // Function to copy password
  const copyPassword = () => {

    // Select text inside input box
    passwordRef.current.select();

    // Copy password to clipboard
    window.navigator.clipboard.writeText(Password);
  };

  return (
    <>
      {/* Heading */}
      <h1 className="text-4xl text-red-700">Password generator</h1>

      {/* Input field to show generated password */}
      <input 
        type="text" 
        value={Password} // password displayed here
        ref={passwordRef} // connect input to useRef
        readOnly // user cannot manually edit password
      />

      {/* Button to copy password */}
      <button onClick={copyPassword}>Copy</button>

      <br/>

      {/* Range slider to change password length */}
      <input
        type="range"
        min={6} // minimum password length
        max={20} // maximum password length
        value={length} // current length value
        onChange={(e) => setLength(e.target.value)} // update length when slider moves
      />

      {/* Show current password length */}
      <label>Password Length: {length}</label>

      <br/>

      {/* Checkbox to allow numbers */}
      <input
        type="checkbox"
        onChange={() => setNumberAllowed(!numberAllowed)}
        // !numberAllowed toggles true/false
      />

      <label>Include Numbers</label>

      <br/>

      {/* Checkbox to allow symbols */}
      <input
        type="checkbox"
        onChange={() => setCharAllowed(!charAllowed)}
        // toggles symbol inclusion
      />

      <label>Include Symbols</label>

    </>
  );
}

// Export component so React can render it
export default App;