import { useEffect, useState } from "react";
import styled from "styled-components";

import { useStore } from "../store";
import { FIRST_PAGE, DEFAULT_ROWS_PER_PAGE } from "../constants";
import { RowsPerPage } from "../types";
import { Link, Pagination, UserItem } from "../components";

const Wrapper = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	padding: 20px 0;
`;

const Ul = styled.ul`
	width: 50%;
	padding: 32px;
`;

export const RootPage = () => {
	const { users, totalPages, setUsers, editUser, deleteUser } = useStore();

	const [page, setPage] = useState(FIRST_PAGE);
	const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(
		DEFAULT_ROWS_PER_PAGE
	);

	useEffect(() => {
		setUsers(page, rowsPerPage);
	}, [setUsers, page, rowsPerPage]);

	return (
		<Wrapper>
			<Link to="/posts">Posts</Link>

			<Ul>
				{users.map((user) => (
					<UserItem
						key={user.id}
						user={user}
						onDelete={() => deleteUser(user.id)}
						onEdit={editUser}
					/>
				))}
			</Ul>

			<Pagination
				page={page}
				totalPages={totalPages}
				rowsPerPage={rowsPerPage}
				onPageChange={setPage}
				onRowsPerPageChange={setRowsPerPage}
			/>
		</Wrapper>
	);
};
