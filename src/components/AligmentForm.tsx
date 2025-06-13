import { useAligmentForm } from "@/hooks/useAligmentForm";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from "./ui";

export const AligmentForm = () => {
  const { aligmentForm, onAligmentFormSubmit } = useAligmentForm();

  return (
    <Form {...aligmentForm}>
      <form onSubmit={aligmentForm.handleSubmit(onAligmentFormSubmit)} className='space-y-8'>
        <FormField
          control={aligmentForm.control}
          name='firstSequence'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Последовательность 1</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={aligmentForm.control}
          name='secondSequence'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Последовательность 2</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
