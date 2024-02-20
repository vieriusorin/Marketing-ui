'use server'
import { ProjectFormSchema } from "@/components/customUI/project/form/schema";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type ProjectFormInputs = z.infer<typeof ProjectFormSchema>

export async function updateProject(formData: ProjectFormInputs) {
  // const result = ProjectFormSchema.safeParse(formData)


  // if (!result.success) {
  //   return { success: false, error: result.error.format() }
  // }

  // try {
  //   console.log(formData, 'test')
  //   const res = await fetch(`http://localhost:3001/api/projects${formData.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(result.data)
  //   })
  //   return {
  //     message: 'Project updated successfully.',
  //   };
  // } catch (error) {
  //   console.log(error)
  // }



  // revalidatePath('/dashboard/projects/*')
  // revalidatePath('/dashboard/projects')

  console.log(formData)

  fetch(`http://localhost:3001/api/projects${formData.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: formData.title,
    })
  })

}