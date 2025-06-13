import { createRoot } from "react-dom/client";

import "@/assets/index.css";
import { AligmentForm } from "@/components/AligmentForm";
import { AligmentResult } from "@/components/AligmentResult";
import { Container } from "@/components/Container";

const App = () => (
  <Container>
    <AligmentForm />
    <AligmentResult />
  </Container>
);

createRoot(document.getElementById("root")!).render(<App />);
