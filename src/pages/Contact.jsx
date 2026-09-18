import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    projectDescription: "",
    quantity: "",
    deadline: "",
    additionalRequirements: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const services = [
    "Digital Printing",
    "Large Format Printing",
    "Car Branding",
    "Custom Apparel",
    "Frames",
    "Promotional Products",
    "Other",
  ];

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email address is required.";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      }
    }

    if (currentStep === 2) {
      if (!formData.service) {
        newErrors.service = "Please select a service.";
      }

      if (!formData.projectDescription.trim()) {
        newErrors.projectDescription =
          "Please tell us about your project.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    setCurrentStep((prev) => Math.min(prev + 1, 4));
    setSubmitError("");
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setSubmitError("");
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0] || null;

    updateField("file", selectedFile);
  };

  const removeFile = () => {
    updateField("file", null);

    if (formRef.current) {
      const fileInput = formRef.current.querySelector(
        'input[name="attachment"]',
      );

      if (fileInput) {
        fileInput.value = "";
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateStep()) return;

    setIsSending(true);
    setSubmitError("");

    try {
      const templateParams = {
        full_name: formData.fullName,
        company_name: formData.companyName || "Not provided",
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        project_description: formData.projectDescription,
        quantity: formData.quantity || "Not provided",
        deadline: formData.deadline || "Not provided",
        additional_requirements:
          formData.additionalRequirements || "None",
      };

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY",
      );

      setSubmitted(true);
    } catch (error) {
      // Technical details remain available to the developer.
      // They are NOT shown to the client.
      console.error("EmailJS submission error:", error);
      console.error("EmailJS status:", error?.status);
      console.error("EmailJS text:", error?.text);
      console.error("EmailJS message:", error?.message);

      setSubmitError(
        "We couldn't complete your request at the moment. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-[#F8F9FA] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
          <div className="w-full rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FE6B00]/10">
              <svg
                className="h-10 w-10 text-[#FE6B00]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Request Sent
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Thank You, {formData.fullName}!
            </p>

            <p className="mx-auto mt-3 max-w-xl text-gray-500">
              Your request has been received successfully. Our team
              will review your project details and get back to you
              shortly.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/"
                className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Back to Home
              </a>

              <a
                href="https://wa.me/2349114301414"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#FE6B00] px-6 py-3 font-semibold text-white transition hover:bg-[#e55f00]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#F8F9FA] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#FE6B00]">
            Request a Quote
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Let’s Bring Your Ideas to Life.
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Tell us what you need and our team will get back to you
            with the right solution for your project.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="flex flex-1 items-center last:flex-none"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition ${
                    currentStep >= step
                      ? "bg-[#FE6B00] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step}
                </div>

                {step !== 4 && (
                  <div
                    className={`mx-2 h-1 flex-1 rounded-full transition ${
                      currentStep > step
                        ? "bg-[#FE6B00]"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-4 text-center text-xs font-medium text-gray-500 sm:text-sm">
            <span>Contact</span>
            <span>Project</span>
            <span>Files</span>
            <span>Review</span>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Contact Information
                </h2>

                <p className="mt-2 text-gray-500">
                  Let us know how we can reach you.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      updateField("fullName", e.target.value)
                    }
                    placeholder="Enter your full name"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-[#FE6B00] ${
                      errors.fullName
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  {errors.fullName && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) =>
                      updateField("companyName", e.target.value)
                    }
                    placeholder="Company name (optional)"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#FE6B00]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-[#FE6B00] ${
                      errors.email
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      updateField("phone", e.target.value)
                    }
                    placeholder="+234..."
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-[#FE6B00] ${
                      errors.phone
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="rounded-xl bg-[#FE6B00] px-7 py-3 font-semibold text-white transition hover:bg-[#e55f00]"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Project Details
                </h2>

                <p className="mt-2 text-gray-500">
                  Tell us more about what you want us to create.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Service *
                  </label>

                  <select
                    value={formData.service}
                    onChange={(e) =>
                      updateField("service", e.target.value)
                    }
                    className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:border-[#FE6B00] ${
                      errors.service
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Project Description *
                  </label>

                  <textarea
                    rows="5"
                    value={formData.projectDescription}
                    onChange={(e) =>
                      updateField(
                        "projectDescription",
                        e.target.value,
                      )
                    }
                    placeholder="Tell us about your project..."
                    className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition focus:border-[#FE6B00] ${
                      errors.projectDescription
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  />

                  {errors.projectDescription && (
                    <p className="mt-2 text-xs text-red-500">
                      {errors.projectDescription}
                    </p>
                  )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Quantity
                    </label>

                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) =>
                        updateField("quantity", e.target.value)
                      }
                      placeholder="e.g. 100 pieces"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#FE6B00]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Deadline
                    </label>

                    <input
                      type="text"
                      value={formData.deadline}
                      onChange={(e) =>
                        updateField("deadline", e.target.value)
                      }
                      placeholder="e.g. 2 weeks"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#FE6B00]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Additional Requirements
                  </label>

                  <textarea
                    rows="4"
                    value={formData.additionalRequirements}
                    onChange={(e) =>
                      updateField(
                        "additionalRequirements",
                        e.target.value,
                      )
                    }
                    placeholder="Anything else we should know? (optional)"
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#FE6B00]"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between gap-4">
                <button
                  type="button"
                  onClick={previousStep}
                  className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="rounded-xl bg-[#FE6B00] px-7 py-3 font-semibold text-white transition hover:bg-[#e55f00]"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Upload Files
                </h2>

                <p className="mt-2 text-gray-500">
                  You can upload a design, reference image, document,
                  or other project file.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center transition hover:border-[#FE6B00]/50">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FE6B00]/10">
                  <svg
                    className="h-7 w-7 text-[#FE6B00]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                    />
                  </svg>
                </div>

                <h3 className="font-semibold text-gray-900">
                  Upload your project file
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  JPG, PNG, PDF, DOC, or other reference files
                </p>

                <label className="mt-5 inline-flex cursor-pointer rounded-xl bg-[#FE6B00] px-6 py-3 font-semibold text-white transition hover:bg-[#e55f00]">
                  Choose File

                  <input
                    type="file"
                    name="attachment"
                    onChange={handleFileChange}
                    className="hidden"/>
                </label>

                {formData.file && (
                  <div className="mx-auto mt-6 flex max-w-md items-center justify-between rounded-xl bg-gray-50 p-4 text-left">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-900">
                        {formData.file.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        File selected
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={removeFile}
                      className="ml-4 text-sm font-semibold text-red-500 hover:text-red-600">
                      Remove
                    </button>
                  </div>
                )}

                <p className="mt-5 text-xs text-gray-400">
                  File upload is optional. You can continue without
                  attaching a file.
                </p>
              </div>

              <div className="mt-8 flex justify-between gap-4">
                <button
                  type="button"
                  onClick={previousStep}
                  className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Back
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="rounded-xl bg-[#FE6B00] px-7 py-3 font-semibold text-white transition hover:bg-[#e55f00]">
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Review & Submit
                </h2>

                <p className="mt-2 text-gray-500">
                  Please review your information before submitting your
                  request.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-gray-50 p-5">
                  <h3 className="mb-4 font-bold text-gray-900">
                    Contact Information
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs text-gray-400">Full Name</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">
                        {formData.fullName}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Company Name
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-800">
                        {formData.companyName || "Not provided"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="mt-1 break-all text-sm font-medium text-gray-800">
                        {formData.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">
                        {formData.phone}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <h3 className="mb-4 font-bold text-gray-900">
                    Project Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-400">Service</p>
                      <p className="mt-1 text-sm font-medium text-gray-800">
                        {formData.service}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Project Description
                      </p>
                      <p className="mt-1 whitespace-pre-wrap text-sm font-medium text-gray-800">
                        {formData.projectDescription}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs text-gray-400">
                          Quantity
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-800">
                          {formData.quantity || "Not provided"}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">
                          Deadline
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-800">
                          {formData.deadline || "Not provided"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Additional Requirements
                      </p>
                      <p className="mt-1 whitespace-pre-wrap text-sm font-medium text-gray-800">
                        {formData.additionalRequirements ||
                          "None provided"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gray-50 p-5">
                  <h3 className="font-bold text-gray-900">
                    Attachment
                  </h3>

                  {formData.file ? (
                    <p className="mt-2 break-all text-sm font-medium text-gray-800">
                      {formData.file.name}
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">
                      No file uploaded. You can continue without an
                      attachment.
                    </p>
                  )}
                </div>
              </div>

              {submitError && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="text-sm font-semibold text-red-600">
                    {submitError}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-col-reverse justify-between gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={previousStep}
                  disabled={isSending}
                  className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-xl bg-[#FE6B00] px-7 py-3 font-semibold text-white transition hover:bg-[#e55f00] disabled:cursor-not-allowed disabled:opacity-70">
                  {isSending ? "Sending Request..." : "Submit Request"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;