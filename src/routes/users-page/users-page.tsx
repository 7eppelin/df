import styled from "styled-components";

import { Link, Pagination } from "src/components";

import { useUsersPageVM } from "./use-users-page-vm";
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
	const vm = useUsersPageVM();

	return (
		<UsersPageWrapper>
			<Link to="/posts">Posts</Link>

			<Ul>
				{vm.users.map((user) => (
					<UserListItem
						key={user.id}
						user={user}
						onDelete={() => vm.deleteUser(user.id)}
						onEdit={vm.editUser}
					/>
				))}
			</Ul>

			{vm.users.length !== 0 && (
				<Pagination
					page={vm.page}
					totalPages={vm.totalPages}
					rowsPerPage={vm.rowsPerPage}
					onPageChange={vm.setPage}
					onRowsPerPageChange={vm.setRowsPerPage}
				/>
			)}
		</UsersPageWrapper>
	);
};
