import create from "zustand";

import { User, Post, RowsPerPage } from "../types";
import { DEFAULT_ROWS_PER_PAGE, FIRST_PAGE, ROWS_PER_PAGE } from "../constants";
import {
	getUsers,
	editUser as editUserInDb,
	deleteUser as deleteUserInDb,
} from "../api";

type State = {
	users: User[];
	posts: Post[];
	totalPages: number;
};

type Store = State & {
	setUsers: (page?: number, rowsPerPage?: RowsPerPage) => Promise<void>;
	editUser: (user: User) => Promise<void>;
	deleteUser: (userId: number) => Promise<void>;
};

const initialState = {
	users: [],
	posts: [],
	totalPages: 0,
};

export const useStore = create<Store>((set, get) => ({
	...initialState,

	setUsers: async (page = FIRST_PAGE, rpp = DEFAULT_ROWS_PER_PAGE) => {
		const response = await getUsers(page, rpp);
		set({ ...response });
	},

	editUser: async (user) => {
		const { setUsers } = get();

		editUserInDb(user);
		setUsers();
	},

	deleteUser: async (userId) => {
		const { setUsers } = get();

		deleteUserInDb(userId);
		setUsers();
	},
}));
