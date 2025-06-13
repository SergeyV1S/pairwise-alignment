/* eslint-disable no-console */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { aligmentFormSchema } from "@/lib";
import type { TAligmentFormData } from "@/lib";

export const useAligmentForm = () => {
  const aligmentForm = useForm({
    resolver: zodResolver(aligmentFormSchema)
  });

  const onAligmentFormSubmit = (data: TAligmentFormData) => {
    console.log(data);
  };

  return { aligmentForm, onAligmentFormSubmit };
};
