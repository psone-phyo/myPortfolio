"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).nonempty(),
  email: z.string().email({message: "Please enter a valid email."}).nonempty(),
  message: z.string().nonempty()
})

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    name: "",
    email: "",
    message: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
        <h1 className="text-3xl font-bold text-sky-400 mb-5">Contact Form</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" text-sky-100 grid grid-cols-2 gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className='text-sky-200'>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} className="border-sky-400"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className='text-sky-200'>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="example@blah.com" {...field} className="border-sky-400"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className='text-sky-200'>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} rows={10} className="border-sky-400"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-transparent border border-sky-400 text-sky-500 hover:text-sky-900 hover:bg-sky-500 col-span-2 mt-5">Send</Button>
      </form>
    </Form>
  )
}
