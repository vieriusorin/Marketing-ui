"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ProjectFormSchema } from "./schema";
import { updateProject } from "@/app/actions/projects";

export type ContactFormInputs = z.infer<typeof ProjectFormSchema>;

export const ProjectForm = ({ project }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ProjectFormSchema),
	});

	const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
		const result = await updateProject(data);

		if (result?.success) {
			reset();
			return;
		}

		// toast error
		console.log(result?.error);
	};

	return (
		<form
			onSubmit={handleSubmit(processForm)}
			className='mx-auto flex flex-1 flex-col gap-4 text-gray-600 sm:w-1/2 lg:w-1/3'
		>
			<div>
				<input
					type='hidden'
					defaultValue={project.data.id}
					{...register("id")}
				/>
				<input
					placeholder='title'
					className='w-full rounded-lg'
					{...register("title")}
				/>
				{errors.title?.message && (
					<p className='ml-1 mt-1 text-sm text-red-400'>
						{errors.title.message}
					</p>
				)}
			</div>

			<button
				disabled={isSubmitting}
				className='rounded-lg border border-black bg-black py-2.5 font-medium text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50'
			>
				{isSubmitting ? "Submitting..." : "Submit"}
			</button>
		</form>
	);
};
