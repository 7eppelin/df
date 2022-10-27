import { useState, useEffect } from "react";

import { FIRST_PAGE, DEFAULT_ROWS_PER_PAGE } from "src/constants";
import { Post, PostFilters, RowsPerPage } from "src/types";
import { getPosts } from "src/api";

export const usePostsPageVM = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [totalPosts, setTotalPosts] = useState(0);
	const [page, setPage] = useState(FIRST_PAGE);
	const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(
		DEFAULT_ROWS_PER_PAGE
	);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await getPosts(page, rowsPerPage, {});

			setPosts(response.posts);
			setTotalPosts(response.totalPosts);
		};

		fetchPosts();
	}, [page, rowsPerPage]);

	const searchPosts = async (filters: PostFilters) => {
		const response = await getPosts(FIRST_PAGE, rowsPerPage, filters);

		setPage(FIRST_PAGE);
		setPosts(response.posts);
		setTotalPosts(response.totalPosts);
	};

	const totalPages = Math.ceil(totalPosts / rowsPerPage);

	return {
		posts,
		page,
		rowsPerPage,
		totalPages,
		setPage,
		setRowsPerPage,
		searchPosts,
	};
};
