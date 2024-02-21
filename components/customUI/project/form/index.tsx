"use client";
import React from "react";
import { format } from "date-fns";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
	Select,
} from "@/components/ui/select";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	ProjectSchemaType,
	ProjectSchema,
} from "@/components/customUI/project/form/schema";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const ProjectForm = ({
	method = "POST",
	id,
	details,
}: {
	method: "POST" | "PATCH";
	id?: string;
	details?: {
		title?: string;
		description?: string;
		status: "IN_BACKLOG" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";
		client?: string;
		startProject?: string;
		endProject?: string;
	};
}) => {
	const { toast } = useToast();

	const queryClient = useQueryClient();

	const form = useForm<ProjectSchemaType>({
		resolver: zodResolver(ProjectSchema),
		defaultValues: {
			title: details?.title || "",
			description: details?.description || "",
			status: details?.status || "IN_BACKLOG",
			client: details?.client || "",
			startProject: new Date(),
			endProject: new Date(),
		},
	});

	const { mutate } = useMutation({
		mutationKey: ["updateProject"],
		mutationFn: async (data) => {
			await axios({
				method,
				url: `http://localhost:3001/api/projects${id ? `/${id}` : ""}`,
				headers: {
					"Content-Type": "application/json",
				},
				data,
			});
		},
	});

	const handleSubmit: SubmitHandler<ProjectSchemaType> = async (data) => {
		const mutation = useMutation;
		mutate(data, {
			onSuccess: () => {
				toast({
					title: `${method === "POST" ? "Created" : "Updated"} successfully`,
				});

				if (method === "POST") {
					queryClient.invalidateQueries({
						queryKey: ["projects"],
					});
				} else {
					queryClient.invalidateQueries({
						queryKey: ["project", id],
					});
				}
			},
			onError: () => {
				toast({
					title: "Something went wrong",
				});
			},
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className='max-w-md w-full flex flex-col gap-4'
			>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Project Name</FormLabel>
								<FormControl>
									<Input placeholder='Project Name' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name='description'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Project Description</FormLabel>
								<FormControl>
									<Textarea {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name='startProject'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Start date</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-full pl-3 text-left font-normal",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className='w-auto p-0'>
									<Calendar
										mode='single'
										selected={field.value}
										onSelect={field.onChange}
										initialFocus
										className='bg-white'
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='endProject'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>End date</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-full pl-3 text-left font-normal",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className='w-auto p-0'>
									<Calendar
										mode='single'
										selected={field.value}
										onSelect={field.onChange}
										initialFocus
										className='bg-white'
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='status'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Project Description</FormLabel>
								<Select
									defaultValue={field.value}
									onValueChange={field.onChange}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select project status' />
										</SelectTrigger>
									</FormControl>
									<SelectContent className='bg-white'>
										<SelectItem value='IN_BACKLOG'>In Backlog</SelectItem>
										<SelectItem value='IN_PROGRESS'>In Progress</SelectItem>
										<SelectItem value='IN_REVIEW'>In Review</SelectItem>
										<SelectItem value='DONE'>Done</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name='client'
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Client</FormLabel>
								<FormControl>
									<Input placeholder='Client' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<Button type='submit' className='w-full  text-white'>
					Submit
				</Button>
			</form>
		</Form>
	);
};
