import { useEffect, useState } from "react";
import styled from "styled-components";

import { useStore } from "../../store";
import { FIRST_PAGE, DEFAULT_ROWS_PER_PAGE } from "../../constants";
import { RowsPerPage } from "../../types";
import { Link, Pagination } from "../../components";
import { UserListItem } from "./user-list-item";

const UsersPageWrapper = styled.main`
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

export const UsersPage = () => {
	const [page, setPage] = useState(FIRST_PAGE);
	const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(
		DEFAULT_ROWS_PER_PAGE
	);

	const { users, totalUsers, setUsers, editUser, deleteUser } = useStore();

	const totalPages = Math.ceil(totalUsers / rowsPerPage);

	useEffect(() => {
		setUsers(page, rowsPerPage);
	}, [setUsers, page, rowsPerPage]);

	return (
		<UsersPageWrapper>
			<Link to="/posts">Posts</Link>

			<Ul>
				{users.map((user) => (
					<UserListItem
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
		</UsersPageWrapper>
	);
};
