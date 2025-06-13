import { useState } from "react";

import { createRoot } from "react-dom/client";

import "@/assets/index.css";
import { AligmentForm } from "@/components/AligmentForm";
import { AlignmentVisualizer } from "@/components/AlignmentVisualizer";
import { Container } from "@/components/Container";
import type { TAligmentFormData } from "@/lib";

const App = () => {
  const [aligmentResult, setAligmentResult] = useState({
    firstAlignedSequence: "",
    secondAlignedSequence: ""
  });

  const onAligmentFormSubmit = (data: TAligmentFormData) => {
    setAligmentResult({
      firstAlignedSequence: data.firstSequence,
      secondAlignedSequence: data.secondSequence
    });
  };

  return (
    <Container>
      <AligmentForm onAligmentFormSubmit={onAligmentFormSubmit} />
      <AlignmentVisualizer {...aligmentResult} />
    </Container>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
