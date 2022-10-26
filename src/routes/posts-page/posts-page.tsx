import { useState, useEffect } from "react";
import styled from "styled-components";

import { Link, Pagination, Post } from "../../components";
import { FIRST_PAGE, DEFAULT_ROWS_PER_PAGE } from "../../constants";
import { PostFilters, RowsPerPage } from "../../types";
import { useStore } from "../../store";
import { PostFiltersForm } from "./post-filters-form";

const PostsPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 48px;
	padding-bottom: 40px;
`;

const PostsWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
`;

export const PostsPage = () => {
	const [page, setPage] = useState(FIRST_PAGE);
	const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(
		DEFAULT_ROWS_PER_PAGE
	);

	const { posts, totalPosts, setPosts } = useStore();

	const totalPages = Math.ceil(totalPosts / rowsPerPage);

	useEffect(() => {
		setPosts(page, rowsPerPage, {});
	}, [setPosts, page, rowsPerPage]);

	const searchPosts = (filters: PostFilters) => {
		setPosts(page, rowsPerPage, filters);
	};

	return (
		<PostsPageWrapper>
			<Link to="/">{"<- back to Users"}</Link>

			<PostFiltersForm onSubmit={searchPosts} />

			<PostsWrapper>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</PostsWrapper>

			<Pagination
				page={page}
				totalPages={totalPages}
				rowsPerPage={rowsPerPage}
				onPageChange={setPage}
				onRowsPerPageChange={setRowsPerPage}
			/>
		</PostsPageWrapper>
	);
};
