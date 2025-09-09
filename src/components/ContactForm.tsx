import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ContactFormModelSchema = z.object({
  fullName: z.string().min(2, "Too Small"),
  email: z.email(),
  message: z.string().min(15, "Too Small")
});

type ContactFormModel = z.infer<typeof ContactFormModelSchema>;

export function ContactForm() {
  const form = useForm<ContactFormModel>({
    resolver: zodResolver(ContactFormModelSchema),
    mode: "onChange"
  });

  const onSubmit = (data: ContactFormModel) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input {...form.register("fullName")} />
          {form.formState.errors.fullName && form.formState.touchedFields.fullName && (
            <p>{form.formState.errors.fullName.message}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
