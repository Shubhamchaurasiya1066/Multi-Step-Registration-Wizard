export default function StepThree({ back, formData }) {
  const handleSubmit = () => {
    console.log(formData);
    alert("🎉 Registration Successful!");
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Review</h3>

      <div className="bg-gray-100 text-black p-3 rounded-lg text-sm space-y-1">
        <p><b>First Name:</b> {formData.firstName}</p>
        <p><b>Last Name:</b> {formData.lastName}</p>
        <p><b>DOB:</b> {formData.dob}</p>
        <p><b>Email:</b> {formData.email}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={back} className="bg-gray-300 px-4 py-2 rounded-lg">
          ← Back
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Submit ✅
        </button>
      </div>
    </div>
  );
}