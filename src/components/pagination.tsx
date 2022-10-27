import { ChangeEvent, FC } from "react";
import styled from "styled-components";

import { RowsPerPage } from "src/types";
import { FIRST_PAGE, ROWS_PER_PAGE } from "src/constants";

const PaginationWrapper = styled.div`
	display: flex;
	gap: 6px;
`;

type Props = {
	page: number;
	totalPages: number;
	rowsPerPage: RowsPerPage;
	onPageChange: (page: number) => void;
	onRowsPerPageChange: (rpp: RowsPerPage) => void;
};

export const Pagination: FC<Props> = ({
	page,
	totalPages,
	rowsPerPage,
	onPageChange,
	onRowsPerPageChange,
}) => {
	const setRowsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
		onRowsPerPageChange(Number(e.target.value) as RowsPerPage);
		onPageChange(FIRST_PAGE);
	};

	const prevPage = () => onPageChange(page - 1);
	const nexPage = () => onPageChange(page + 1);
	const firstPage = () => onPageChange(FIRST_PAGE);
	const lastPage = () => onPageChange(totalPages);

	const isFirstPage = page === FIRST_PAGE;
	const isLastPage = page === totalPages;

	return (
		<PaginationWrapper>
			<button onClick={firstPage} disabled={isFirstPage}>
				first
			</button>

			<button onClick={prevPage} disabled={isFirstPage}>
				prev
			</button>

			<div>{page}</div>

			<button onClick={nexPage} disabled={isLastPage}>
				next
			</button>

			<button onClick={lastPage} disabled={isLastPage}>
				last
			</button>

			<select value={rowsPerPage} onChange={setRowsPerPage}>
				{ROWS_PER_PAGE.map((rpp) => (
					<option key={rpp} value={rpp}>
						{rpp}
					</option>
				))}
			</select>
		</PaginationWrapper>
	);
};
