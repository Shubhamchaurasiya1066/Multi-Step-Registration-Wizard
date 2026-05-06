import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../components/InputField";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

const schema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Min 8 chars"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default function StepTwo({ next, back, formData, setFormData }) {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Email" name="email" register={register} error={errors.email?.message} />

      <InputField
        type={show ? "text" : "password"}
        label="Password"
        name="password"
        register={register}
        error={errors.password?.message}
      />

      <InputField
        type={show ? "text" : "password"}
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword?.message}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-sm text-indigo-500 mb-2"
      >
        👁 {show ? "Hide" : "Show"} Password
      </button>

      <div className="flex justify-between">
        <SecondaryButton onClick={back}>← Back</SecondaryButton>

        <button
          disabled={!isValid}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </form>
  );
}