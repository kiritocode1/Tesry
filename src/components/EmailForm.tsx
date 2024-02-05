"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z.string().email( {
		message: "email should be of type johndoe@email.com",
	}),
});





		function onSubmit(values: z.infer<typeof formSchema>) {

			console.log(values);
		}


export function EmailForm () {
    const form = useForm<z.infer<typeof formSchema>>({
			resolver: zodResolver(formSchema),
			defaultValues: {
				email: "",
			},
		});
	// ...

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className=" flex items-center gap-2 ">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="johndoe@gmail.com" {...field} className="text-black" />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" variant={"destructive"}>Submit</Button>
			</form>
		</Form>
	);
}
