export const TaskDetail = ({ task }) => {
	return <div key={task.id}>{task.title}</div>;
};
