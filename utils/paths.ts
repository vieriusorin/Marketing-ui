export const paths = {
  dashboard: () => '/dashboard',
  login: () => '/login',
  projects: () => '/dashboard/projects',
  project: (id: string) => `/dashboard/projects/${id}`,
  tasks: (id: string) => `/dashboard/projects/${id}/tasks`,
  projectTasks: (id: string) => `/dashboard/projects/${id}/tasks`,
  projectTask: (id: string, taskId: string) => `/dashboard/projects/${id}/tasks/${taskId}`,
}