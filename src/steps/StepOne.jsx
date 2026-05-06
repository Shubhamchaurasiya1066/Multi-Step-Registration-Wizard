import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../components/InputField";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  dob: z.string().min(1, "Required"),
});

export default function StepOne({ next, formData, setFormData }) {
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
      <InputField label="First Name" name="firstName" register={register} error={errors.firstName?.message} />
      <InputField label="Last Name" name="lastName" register={register} error={errors.lastName?.message} />
      <InputField type="date" label="DOB" name="dob" register={register} error={errors.dob?.message} />

      <PrimaryButton type="submit">Next →</PrimaryButton>
    </form>
  );
}