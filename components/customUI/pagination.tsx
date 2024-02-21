import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export const PaginationCustom = ({
	totalItems,
	itemsPerPage,
	currentPage,
	setCurrentPage,
}: {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	setCurrentPage: any;
}) => {
	let pages = [];
	for (let i = 1; i <= Math.ceil(totalItems! / itemsPerPage!); i++) {
		pages.push(i);
	}

	const handlePrevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage !== Math.ceil(totalItems / itemsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<Pagination>
			<PaginationContent className='justify-center'>
				<PaginationItem>
					<PaginationPrevious
						href='#'
						aria-disabled={currentPage === 1}
						onClick={handlePrevPage}
					/>
				</PaginationItem>
				{pages.map((page) => (
					<PaginationItem key={page}>
						<PaginationLink href='#' onClick={() => setCurrentPage(page)}>
							{page}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationEllipsis />
				<PaginationItem>
					<PaginationNext href='#' onClick={handleNextPage} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};
