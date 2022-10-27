import { useEffect, useState, useCallback } from "react";

import { getUsers, updateUser, deleteUser as deleteUserApi } from "src/api";
import { FIRST_PAGE, DEFAULT_ROWS_PER_PAGE } from "src/constants";
import { User } from "src/types";
import { RowsPerPage } from "src/types";

export const useUsersPageVM = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [totalUsers, setTotalUsers] = useState(0);
	const [page, setPage] = useState(FIRST_PAGE);
	const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(
		DEFAULT_ROWS_PER_PAGE
	);

	const fetchUsers = useCallback(async () => {
		const response = await getUsers(page, rowsPerPage);

		setUsers(response.users);
		setTotalUsers(response.totalUsers);
	}, [page, rowsPerPage]);

	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	const editUser = async (user: User) => {
		const updatedUser = await updateUser(user);

		const newUsers = users.map((u) =>
			u.id === updatedUser.id ? updatedUser : u
		);

		setUsers(newUsers);
	};

	const deleteUser = async (userId: number) => {
		await deleteUserApi(userId);
		fetchUsers();
	};

	const totalPages = Math.ceil(totalUsers / rowsPerPage);

	return {
		users,
		page,
		rowsPerPage,
		totalPages,
		editUser,
		deleteUser,
		setPage,
		setRowsPerPage,
	};
};
