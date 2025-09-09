import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { AlertCircle, Send, Loader2 } from "lucide-react";

const ContactFormModelSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.email("Please enter a valid email address"),
  message: z.string().min(15, "Message must be at least 15 characters long")
});

type ContactFormModel = z.infer<typeof ContactFormModelSchema>;

export function ContactForm() {
  const form = useForm<ContactFormModel>({
    resolver: zodResolver(ContactFormModelSchema),
    mode: "onChange"
  });

  const handleFormSubmit = useFormSubmit(form.handleSubmit, (data) => {
    console.log(data);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl px-8 py-10">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                {...form.register("fullName")}
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors ${
                  form.formState.errors.fullName
                    ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
                placeholder="Enter your full name"
              />
              {form.formState.errors.fullName && form.formState.touchedFields.fullName && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {form.formState.errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...form.register("email")}
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors ${
                  form.formState.errors.email
                    ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
                placeholder="Enter your email address"
              />
              {form.formState.errors.email && form.formState.touchedFields.email && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...form.register("message")}
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors resize-none ${
                  form.formState.errors.message
                    ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                }`}
                placeholder="Tell us what's on your mind..."
              />
              {form.formState.errors.message && form.formState.touchedFields.message && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!form.formState.isValid}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                form.formState.isValid
                  ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {form.formState.isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Or reach out to us directly at{" "}
            <a
              href="mailto:hello@injaaz.com"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              hello@injaaz.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
