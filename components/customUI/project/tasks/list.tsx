import { Link, ChevronLeft } from "lucide-react";
import { TaskDetail } from "./details";

export const ProjectTasks = ({ tasks }) => {
	return (
		<>
			{tasks.data.tasks.length > 0 ? (
				tasks.data.tasks.map((task) => {
					return <TaskDetail task={task} />;
				})
			) : (
				<p>No tasks found</p>
			)}
		</>
	);
};
