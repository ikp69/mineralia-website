"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface InquiryFormProps {
  mineralName?: string;
}

export default function InquiryForm({ mineralName }: InquiryFormProps) {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      };

      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to send inquiry");
      }

      setFormStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
      setFormStatus("error");
    }
  };

  if (formStatus === "success") {
    return (
      <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-lg text-center py-16">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-2">Inquiry Received</h3>
        <p className="text-slate-600 mb-6">
          Our sales team will review your requirements for {mineralName} and contact you shortly.
        </p>
        <button 
          onClick={() => setFormStatus("idle")}
          className="text-mineralia-teal font-medium hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  if (formStatus === "error") {
    return (
      <div className="bg-white p-8 rounded-lg border border-red-200 shadow-lg">
        <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
          <p className="text-red-800 text-sm font-medium">{errorMessage}</p>
        </div>
        <button 
          onClick={() => setFormStatus("idle")}
          className="text-mineralia-teal font-medium hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-lg sticky top-24">
      <h3 className="font-serif text-2xl font-bold text-mineralia-navy mb-2">
        {mineralName ? `Request ${mineralName} Supply` : "Request Supply Quote"}
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Get pricing, availability, and technical specifications.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
          <input required name="name" type="text" className="w-full px-4 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Company *</label>
          <input required name="company" type="text" className="w-full px-4 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="Company Ltd." />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
          <input required name="email" type="email" className="w-full px-4 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
            <input name="quantity" type="text" className="w-full px-4 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="e.g. 500 MT" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Port</label>
            <input name="port" type="text" className="w-full px-4 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="Destination" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
          <textarea required name="message" rows={3} className="w-full px-4 py-2 rounded border border-slate-300 focus:ring-2 focus:ring-mineralia-teal focus:border-transparent outline-none transition-all" placeholder="Additional requirements..."></textarea>
        </div>
        <button 
          type="submit" 
          disabled={formStatus === "submitting"}
          className="w-full bg-mineralia-teal hover:bg-mineralia-teal-hover text-white py-3 rounded font-bold transition-colors shadow-md mt-2 disabled:opacity-70"
        >
          {formStatus === "submitting" ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}