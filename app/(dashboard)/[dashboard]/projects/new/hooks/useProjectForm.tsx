"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	ProjectSchemaType,
	ProjectSchema,
} from "@/components/customUI/project/form/schema";
import { useToast } from "@/components/ui/use-toast";

export const useProjectForm = ({
	method = "POST",
}: {
	method: "POST" | "PATCH";
}) => {
	const { toast } = useToast();

	const form = useForm<ProjectSchemaType>({
		resolver: zodResolver(ProjectSchema),
		defaultValues: {
			title: "",
			description: "",
			status: "IN_BACKLOG",
			client: "",
		},
	});

	const handleSubmit: SubmitHandler<ProjectSchemaType> = async (data) => {
		fetch(`http://localhost:3001/api/projects`, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			if (!res.ok) {
				toast({
					title: "Something went wrong",
				});
				return;
			}

			toast({
				title: `${method === "POST" ? "Created" : "Updated"} successfully`,
			});
		});
	};

	return {
		form,
		handleSubmit,
	};
};
