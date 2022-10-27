import { ROWS_PER_PAGE } from "src/constants";

export type RowsPerPage = typeof ROWS_PER_PAGE[number];

export type User = {
	id: number;
	name: string;
	email: string;
};

export type Post = {
	id: number;
	user_id: number;
	date: string;
	title: string;
	body: string;
};

export type CursorData = {
	page: number;
	totalPages: number;
};

export type PostFilters = {
	userName?: string;
	postTitle?: string;
};
