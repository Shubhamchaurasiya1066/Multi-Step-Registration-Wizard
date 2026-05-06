import { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import ProgressBar from "./components/ProgressBar";

export default function Wizard() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <ProgressBar step={step} />

      {step === 1 && (
        <StepOne
          next={() => setStep(2)}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 2 && (
        <StepTwo
          next={() => setStep(3)}
          back={() => setStep(1)}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {step === 3 && (
        <StepThree
          back={() => setStep(2)}
          formData={formData}
        />
      )}
    </div>
  );
}