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
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const validateStepOne = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateStepTwo = () => {
    const newErrors = {};

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription =
        "Please tell us a little about your project.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!validateStepOne()) return;
    }

    if (currentStep === 2) {
      if (!validateStepTwo()) return;
    }

    setCurrentStep((previous) => Math.min(previous + 1, 4));
    setSubmitError("");
  };

  const handlePrevious = () => {
    setCurrentStep((previous) => Math.max(previous - 1, 1));
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

    if (currentStep !== 4) {
      return;
    }

    setIsSending(true);
    setSubmitError("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Developer-only debugging information
      console.log("EmailJS Configuration:");
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log(
        "Public Key:",
        publicKey ? `${publicKey.substring(0, 5)}...` : "MISSING",
      );

      const templateParams = {
        fullName: formData.fullName,
        companyName: formData.companyName || "Not provided",
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        quantity: formData.quantity || "Not provided",
        deadline: formData.deadline || "Not provided",
        projectDescription: formData.projectDescription,
        additionalRequirements:
          formData.additionalRequirements || "None provided",
      };

      // Developer-only debugging information
      console.log("EmailJS Template Parameters:", templateParams);

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      console.log("EmailJS: Request sent successfully.");

      setSubmitted(true);
    } catch (error) {
      // Technical error stays in the browser console.
      // The client will NOT see this information.
      console.error("EmailJS submission error:", error);
      console.error("EmailJS status:", error?.status);
      console.error("EmailJS text:", error?.text);
      console.error("EmailJS message:", error?.message);

      // Client-friendly message only
      setSubmitError(
        "We couldn't send your request right now. Please try again or contact us directly on WhatsApp.",
      );
    } finally {
      setIsSending(false);
    }
  };

  if (submitted) {
    return (
      <main>
        <section className="flex min-h-[75vh] items-center justify-center bg-[#F8F9FA] px-6 py-24">
          <div className="w-full max-w-2xl rounded-[24px] bg-white p-8 text-center shadow-lg sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <span className="text-4xl text-[#FE6B00]">✓</span>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[3px] text-[#FE6B00]">
              Request Sent
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Thank You, {formData.fullName}!
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#5B6470] sm:text-base">
              Your quote request has been successfully sent to Aiglink Smart
              Printing. We&apos;ll review your project and get back to you as
              soon as possible.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/"
                className="rounded-full bg-[#FE6B00] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-orange-500">
                Back to Home
              </a>

              <a
                href="https://wa.me/2349114301414?text=Hello%20Aiglink%2C%20I%20just%20submitted%20a%20quote%20request%20through%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-black transition hover:border-[#FE6B00] hover:text-[#FE6B00]">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F8F9FA] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-8 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-[#FE6B00]">
            Request a Quote
          </p>

          <h1 className="mx-auto max-w-[850px] text-[44px] font-bold leading-[1.05] tracking-[-1.8px] text-black sm:text-[54px] md:text-[60px] lg:text-[64px]">
            Let&apos;s Bring Your{" "}
            <span className="text-[#FE6B00]">Ideas to Life.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[700px] text-[15px] leading-7 text-[#5B6470] sm:text-[16px]">
            Tell us about your project and we&apos;ll provide a customized
            solution tailored to your printing and branding needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 sm:px-8 lg:grid-cols-[1.6fr_0.8fr] lg:gap-16 lg:px-12">
          {/* Form */}
          <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between gap-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className="flex flex-1 items-center last:flex-none">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
                        currentStep >= step
                          ? "bg-[#FE6B00] text-black"
                          : "bg-gray-100 text-gray-400"
                      }`}>
                      {step}
                    </div>

                    {step !== 4 && (
                      <div
                        className={`mx-2 h-[2px] flex-1 transition ${
                          currentStep > step
                            ? "bg-[#FE6B00]"
                            : "bg-gray-100"
                        }`}/>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm font-semibold text-black">
                {
                  [
                    "Contact Information",
                    "Project Details",
                    "Upload Files",
                    "Review & Submit",
                  ][currentStep - 1]
                }
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit}>
              {/* STEP 1 */}
              <div hidden={currentStep !== 1}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-black">
                      Full Name *
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(event) =>
                        updateField("fullName", event.target.value)
                      }
                      placeholder="Enter your full name"
                      className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100 ${
                        errors.fullName
                          ? "border-red-400"
                          : "border-gray-200"
                      }`}/>

                    {errors.fullName && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-2 block text-sm font-semibold text-black">
                      Company Name
                    </label>

                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(event) =>
                        updateField("companyName", event.target.value)
                      }
                      placeholder="Your company name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100"/>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-black">
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      placeholder="Enter your email address"
                      className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100 ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      }`}/>

                    {errors.email && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-black">
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      placeholder="+234 000 000 0000"
                      className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100 ${
                        errors.phone ? "border-red-400" : "border-gray-200"
                      }`}/>

                    {errors.phone && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* STEP 2 */}
              <div hidden={currentStep !== 2}>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-black">
                      Service *
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(event) =>
                        updateField("service", event.target.value)
                      }
                      className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100 ${
                        errors.service
                          ? "border-red-400"
                          : "border-gray-200"
                      }`}>
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
                    <label
                      htmlFor="projectDescription"
                      className="mb-2 block text-sm font-semibold text-black">
                      Project Description *
                    </label>

                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows="6"
                      value={formData.projectDescription}
                      onChange={(event) =>
                        updateField(
                          "projectDescription",
                          event.target.value,
                        )
                      }
                      placeholder="Tell us about your project, design requirements, preferred materials, colors, sizes, etc."
                      className={`w-full resize-none rounded-xl border bg-white px-4 py-3.5 text-sm leading-6 text-black outline-none transition placeholder:text-gray-400 focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100 ${
                        errors.projectDescription
                          ? "border-red-400"
                          : "border-gray-200"
                      }`}/>

                    {errors.projectDescription && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.projectDescription}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="quantity"
                        className="mb-2 block text-sm font-semibold text-black">
                        Quantity
                      </label>

                      <input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={(event) =>
                          updateField("quantity", event.target.value)
                        }
                        placeholder="e.g. 500 pieces"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100"/>
                    </div>

                    <div>
                      <label
                        htmlFor="deadline"
                        className="mb-2 block text-sm font-semibold text-black">
                        Preferred Deadline
                      </label>

                      <input
                        id="deadline"
                        name="deadline"
                        type="date"
                        value={formData.deadline}
                        onChange={(event) =>
                          updateField("deadline", event.target.value)
                        }
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100"/>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="additionalRequirements"
                      className="mb-2 block text-sm font-semibold text-black">
                      Additional Requirements
                    </label>

                    <textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      rows="4"
                      value={formData.additionalRequirements}
                      onChange={(event) =>
                        updateField(
                          "additionalRequirements",
                          event.target.value,
                        )
                      }
                      placeholder="Anything else we should know?"
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm leading-6 text-black outline-none transition placeholder:text-gray-400 focus:border-[#FE6B00] focus:ring-2 focus:ring-orange-100"/>
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div hidden={currentStep !== 3}>
                <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-[#F8F9FA] p-6 text-center sm:p-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                    <span className="text-2xl text-[#FE6B00]">↑</span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-black">
                    Upload Your Project Files
                  </h2>

                  <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#6B7280]">
                    You can upload a design, reference image, document, or
                    other project file. This step is completely optional.
                  </p>

                  <label
                    htmlFor="attachment"
                    className="mt-6 inline-flex cursor-pointer rounded-full bg-[#FE6B00] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-orange-500">
                    {formData.file ? "Change File" : "Choose File"}
                  </label>

                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    onChange={handleFileChange}
                    className="sr-only"/>

                  {formData.file && (
                    <div className="mx-auto mt-5 flex max-w-md items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 text-left">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-black">
                          {formData.file.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="shrink-0 text-sm font-semibold text-red-500 transition hover:text-red-600">
                        Remove
                      </button>
                    </div>
                  )}

                  <p className="mt-5 text-xs text-gray-400">
                    File upload is optional.
                  </p>
                </div>
              </div>

              {/* STEP 4 */}
              <div hidden={currentStep !== 4}>
                <div>
                  <h2 className="text-xl font-bold text-black">
                    Review Your Request
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Please review your information before submitting your quote
                    request.
                  </p>

                  <div className="mt-7 divide-y divide-gray-100 rounded-2xl border border-gray-100">
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#FE6B00]">
                        Contact Information
                      </p>

                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs text-gray-500">Full Name</p>

                          <p className="mt-1 text-sm font-semibold text-black">
                            {formData.fullName || "Not provided"}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">Company</p>

                          <p className="mt-1 text-sm font-semibold text-black">
                            {formData.companyName || "Not provided"}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">Email</p>

                          <p className="mt-1 break-all text-sm font-semibold text-black">
                            {formData.email}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">Phone</p>

                          <p className="mt-1 text-sm font-semibold text-black">
                            {formData.phone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#FE6B00]">
                        Project Information
                      </p>

                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-xs text-gray-500">Service</p>

                          <p className="mt-1 text-sm font-semibold text-black">
                            {formData.service}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">
                            Project Description
                          </p>

                          <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-gray-700">
                            {formData.projectDescription}
                          </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="text-xs text-gray-500">Quantity</p>

                            <p className="mt-1 text-sm font-semibold text-black">
                              {formData.quantity || "Not provided"}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs text-gray-500">Deadline</p>

                            <p className="mt-1 text-sm font-semibold text-black">
                              {formData.deadline || "Not provided"}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">
                            Additional Requirements
                          </p>

                          <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-gray-700">
                            {formData.additionalRequirements ||
                              "No additional requirements provided."}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#FE6B00]">
                        Attachment
                      </p>

                      <p className="mt-2 text-sm text-gray-700">
                        {formData.file
                          ? formData.file.name
                          : "No file attached"}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        File upload is optional.
                      </p>
                    </div>
                  </div>

                  {/* Client-friendly error only */}
                  {submitError && (
                    <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4">
                      <p className="text-sm font-semibold text-red-600">
                        {submitError}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={isSending}
                    className="rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-black transition hover:border-[#FE6B00] hover:text-[#FE6B00] disabled:cursor-not-allowed disabled:opacity-50">
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="rounded-full bg-[#FE6B00] px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-orange-500">
                    {currentStep === 3 ? "Review Request" : "Continue"}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSending}
                    className="rounded-full bg-[#FE6B00] px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60">
                    {isSending
                      ? "Sending Request..."
                      : "Submit Quote Request"}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="h-fit rounded-[24px] bg-[#111827] p-7 text-white sm:p-8 lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#FE6B00]">
              Why Choose Aiglink?
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Printing that makes your brand stand out.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-300">
              We combine smart technology, quality materials, creative
              thinking, and reliable production to deliver professional
              results.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FE6B00] text-black">
                    ✓
                  </span>

                  <h3 className="font-semibold">Premium Quality</h3>
                </div>

                <p className="mt-2 pl-[52px] text-sm leading-6 text-gray-400">
                  High-quality printing and finishing for professional results.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FE6B00] text-black">
                    ✓
                  </span>

                  <h3 className="font-semibold">Creative Solutions</h3>
                </div>

                <p className="mt-2 pl-[52px] text-sm leading-6 text-gray-400">
                  Creative branding solutions designed around your business.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FE6B00] text-black">
                    ✓
                  </span>

                  <h3 className="font-semibold">Reliable Delivery</h3>
                </div>

                <p className="mt-2 pl-[52px] text-sm leading-6 text-gray-400">
                  We work with your timeline to keep projects moving.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FE6B00] text-black">
                    ✓
                  </span>

                  <h3 className="font-semibold">Customer Focused</h3>
                </div>

                <p className="mt-2 pl-[52px] text-sm leading-6 text-gray-400">
                  Clear communication from the first inquiry to final delivery.
                </p>
              </div>
            </div>

            <div className="mt-9 border-t border-gray-700 pt-7">
              <p className="text-sm text-gray-400">
                Prefer to speak with us directly?
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="tel:+2348073400086"
                  className="rounded-full border border-gray-700 px-5 py-3 text-center text-sm font-semibold transition hover:border-[#FE6B00] hover:text-[#FE6B00]">
                  Call Us
                </a>

                <a
                  href="https://wa.me/2349114301414?text=Hello%20Aiglink%2C%20I%20would%20like%20to%20make%20an%20inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#FE6B00] px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-orange-500">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Contact;