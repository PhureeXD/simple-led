"use client";
import { useEffect, useState } from "react";
import { database, ref, onValue, set } from "../firebase_config";

export default function LedButtonMonitor() {
  const [ledState, setLedState] = useState(null);
  const [buttonState, setButtonState] = useState(null);

  useEffect(() => {
    const ledStateRef = ref(database, "ledStatus");
    const buttonStateRef = ref(database, "buttonStatus");

    onValue(ledStateRef, (snapshot) => {
      setLedState(snapshot.val());
    });

    onValue(buttonStateRef, (snapshot) => {
      setButtonState(snapshot.val());
    });
  }, []);

  const toggleButtonState = () => {
    // const newButtonState = !buttonState;
    const newLedState = !ledState;
    // set(ref(database, "buttonStatus"), newButtonState);

    set(ref(database, "ledStatus"), newLedState);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 mt-4">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          LED & Button Monitor
        </h1>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg shadow bg-gray-50">
            <span className="text-lg font-medium text-gray-600">
              LED Status
            </span>
            <span
              className={`text-xl font-bold ${
                ledState ? "text-green-500" : "text-red-500"
              }`}
            >
              {ledState ? "On" : "Off"}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg shadow bg-gray-50">
            <span className="text-lg font-medium text-gray-600">
              Button Status
            </span>
            <span
              className={`text-xl font-bold ${
                buttonState ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {buttonState ? "Pressed" : "Not Pressed"}
            </span>
          </div>
        </div>

        <button
          onClick={toggleButtonState}
          className="w-full py-3 font-semibold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Toggle Button State
        </button>
      </div>
    </div>
  );
}
