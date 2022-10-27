import styled from "styled-components";

import { Link, Pagination, Post } from "src/components";

import { PostFiltersForm } from "./post-filters-form";
import { usePostsPageVM } from "./use-posts-page-vm";

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
	const vm = usePostsPageVM();

	return (
		<PostsPageWrapper>
			<Link to="/">{"<- back to Users"}</Link>

			<PostFiltersForm onSubmit={vm.searchPosts} />

			<PostsWrapper>
				{vm.posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</PostsWrapper>

			{vm.posts.length !== 0 && (
				<Pagination
					page={vm.page}
					totalPages={vm.totalPages}
					rowsPerPage={vm.rowsPerPage}
					onPageChange={vm.setPage}
					onRowsPerPageChange={vm.setRowsPerPage}
				/>
			)}
		</PostsPageWrapper>
	);
};
