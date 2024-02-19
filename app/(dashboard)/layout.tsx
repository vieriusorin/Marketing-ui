export default function DashboardLayout({ children }: any) {
	return (
		<div>
			<aside>
				<h1>Logo here</h1>
				<p>Menu here</p>
			</aside>
			<main>{children}</main>
		</div>
	);
}
