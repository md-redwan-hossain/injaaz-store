import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ContactFormModelSchema = z.object({
  fullName: z.string().min(1),
  email: z.email(),
  message: z.email()
});

type ContactFormModel = z.infer<typeof ContactFormModelSchema>;

export function ContactForm() {
  const form = useForm<ContactFormModel>({
    resolver: zodResolver(ContactFormModelSchema),
    mode: "onChange",
    defaultValues: {
      fullName: ""
    }
  });
  return <></>;
}
