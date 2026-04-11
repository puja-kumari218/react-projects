import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength]               = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed]     = useState(false);
  const [Password, setPassword]           = useState("");
  const [copied, setCopied]               = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed)   str += "!@#$%^&*";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(Password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-white shadow-lg p-10 w-full max-w-md">

        <h1 className="font-bold text-3xl bg-gradient-to-br from-pink-500 to-violet-600 bg-clip-text text-transparent text-center mb-1 leading-tight">
          Password Generator
        </h1>
        <p className="text-xs text-pink-400 text-center italic font-light mb-7 tracking-wide">
          Your secrets are safe with me
        </p>

        <div className="w-14 h-1 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full mx-auto my-4" />

        {/* Password display + copy */}
        <div className="flex gap-2.5 mb-6 mt-4">
          <input
            className="bg-white/90 border-2 border-violet-300 rounded-xl px-4 py-3 text-sm text-violet-900 w-full outline-none focus:border-pink-400 transition-all placeholder:text-violet-300 font-mono tracking-wider"
            type="text"
            value={Password}
            ref={passwordRef}
            readOnly
          />
          <button
            className={`shrink-0 px-5 py-3 rounded-full font-semibold text-sm text-white transition-all shadow-lg hover:-translate-y-1 ${
              copied
                ? "bg-gradient-to-br from-emerald-400 to-green-600"
                : "bg-gradient-to-br from-pink-400 to-violet-400"
            }`}
            onClick={copyPassword}
          >
            {copied ? "Done!" : "Copy"}
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-violet-700 uppercase tracking-widest">
              Password Length
            </span>
            <span className="bg-gradient-to-br from-pink-400 to-violet-400 text-white rounded-2xl px-3.5 py-0.5 text-xs font-semibold">
              {length}
            </span>
          </div>
          <input
            className="w-full cursor-pointer accent-pink-500"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <div className="flex justify-between text-[0.7rem] text-purple-300 mt-1">
            <span>6</span>
            <span>20</span>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              className="w-5 h-5 rounded border-2 border-violet-300 cursor-pointer accent-pink-500"
              type="checkbox"
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            <span className="text-sm text-violet-800 font-medium">Include Numbers</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              className="w-5 h-5 rounded border-2 border-violet-300 cursor-pointer accent-pink-500"
              type="checkbox"
              onChange={() => setCharAllowed(!charAllowed)}
            />
            <span className="text-sm text-violet-800 font-medium">Include Symbols</span>
          </label>
        </div>

        {/* Regenerate */}
        <button
          className="w-full bg-gradient-to-br from-pink-400 to-violet-400 text-white rounded-full py-3 font-semibold text-sm cursor-pointer transition-all hover:-translate-y-1 shadow-lg"
          onClick={passwordGenerator}
        >
          Generate New Password
        </button>

      </div>
    </div>
  );
}

export default App;
