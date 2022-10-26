import create from "zustand";

import { User, Post, RowsPerPage, PostFilters } from "../types";
import { DEFAULT_ROWS_PER_PAGE, FIRST_PAGE } from "../constants";
import {
	getUsers,
	editUser as editUserInDb,
	deleteUser as deleteUserInDb,
	getPosts,
} from "../api";

type State = {
	users: User[];
	posts: Post[];
	totalUsers: number;
	totalPosts: number;
};

type Store = State & {
	setUsers: (page?: number, rowsPerPage?: RowsPerPage) => Promise<void>;
	editUser: (user: User) => Promise<void>;
	deleteUser: (userId: number) => Promise<void>;

	setPosts: (
		page: number,
		rowsPerPage: RowsPerPage,
		filters: PostFilters
	) => Promise<void>;
};

const initialState = {
	users: [],
	posts: [],
	totalUsers: 0,
	totalPosts: 0,
};

export const useStore = create<Store>((set, get) => ({
	...initialState,

	setUsers: async (page = FIRST_PAGE, rpp = DEFAULT_ROWS_PER_PAGE) => {
		const { users, totalUsers } = await getUsers(page, rpp);
		set({ users, totalUsers });
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

	setPosts: async (page, rowsPerPage, filters) => {
		const { posts, totalPosts } = await getPosts(page, rowsPerPage, filters);
		set({ posts, totalPosts });
	},
}));
