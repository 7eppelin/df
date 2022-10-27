import styled from "styled-components";

import { Link, Post } from "src/components";

import { UserInfo } from "./user-info";
import { useUserPageVM } from "./use-user-page-vm";

const UserPageWrapper = styled.main`
	width: 50vw;
	padding: 40px 0;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 32px;
`;

const PostsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const UserPage = () => {
	const { user, posts, onSubmitEditing } = useUserPageVM();

	return (
		<UserPageWrapper>
			<Link to="/">{`<- back to all Users`}</Link>

			{user && <UserInfo user={user} onSubmitEditing={onSubmitEditing} />}

			<PostsWrapper>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</PostsWrapper>
		</UserPageWrapper>
	);
};
