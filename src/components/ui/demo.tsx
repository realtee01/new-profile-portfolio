import React, { useState } from "react";
import { SterlingGateKineticNavigation } from "./sterling-gate-kinetic-navigation";

export default function DemoOne() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold"
      >
        Open Kinetic Nav Demo
      </button>

      <SterlingGateKineticNavigation
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        language="EN"
        toggleLanguage={() => {}}
        t={(key) => key.split(".").pop() || key}
      />
    </div>
  );
}
