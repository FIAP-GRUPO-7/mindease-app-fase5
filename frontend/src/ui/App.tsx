import { useState } from "react";
import { FeelingPage } from "./pages/FeelingPage";
import { NeedPage } from "./pages/NeedPage";
import { BreathingPage } from "./pages/BreathingPage";
import { SuccessPage } from "./pages/SuccessPage";
import { ThemeToggle } from "./components/ThemeToggle";

type Step = "feeling" | "need" | "breathing" | "success";

export function App() {
  const [step, setStep] = useState<Step>("feeling");

  function goNext() {
    if (step === "feeling") setStep("need");
    else if (step === "need") setStep("breathing");
    else if (step === "breathing") setStep("success");
  }

  function restart() {
    setStep("feeling");
  }

  return (
    <>
      <ThemeToggle />

      {step === "feeling" && <FeelingPage onContinue={goNext} />}
      {step === "need" && <NeedPage onContinue={goNext} />}
      {step === "breathing" && <BreathingPage onContinue={goNext} />}
      {step === "success" && <SuccessPage onRestart={restart} />}
    </>
  );
}