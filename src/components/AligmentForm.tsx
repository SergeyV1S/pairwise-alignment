import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { TAligmentFormData } from "@/lib";
import { aligmentFormSchema } from "@/lib";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from "./ui";

interface IAligmentFormProps {
  onAligmentFormSubmit: (data: TAligmentFormData) => void;
}

export const AligmentForm = ({ onAligmentFormSubmit }: IAligmentFormProps) => {
  const aligmentForm = useForm({
    resolver: zodResolver(aligmentFormSchema),
    defaultValues: {
      firstSequence: "",
      secondSequence: ""
    }
  });

  return (
    <Form {...aligmentForm}>
      <form
        onSubmit={aligmentForm.handleSubmit(onAligmentFormSubmit)}
        className='flex items-center flex-col gap-10 justify-center w-full'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          <FormField
            control={aligmentForm.control}
            name='firstSequence'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Последовательность 1*</FormLabel>
                <FormControl>
                  <Input placeholder='Введеите первую последовательность' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={aligmentForm.control}
            name='secondSequence'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Последовательность 2*</FormLabel>
                <FormControl>
                  <Input placeholder='Введеите вторую последовательность' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type='submit' size='lg' typographyVariant={{ variant: "s_medium" }}>
          Выровнять
        </Button>
      </form>
    </Form>
  );
};
