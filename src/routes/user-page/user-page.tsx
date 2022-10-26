import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useStore } from "../../store";
import { Post as PostType, User } from "../../types";
import { getUser, getUserPosts } from "../../api";
import { Link, Post } from "../../components";
import { UserInfo } from "./user-info";

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
	const [user, setUser] = useState<User | null>(null);
	const [posts, setPosts] = useState<PostType[]>([]);

	const { users } = useStore();
	const { id } = useParams();

	useEffect(() => {
		const init = async () => {
			const uid = Number(id);

			const userFromStore = users.find((u) => u.id === uid);
			const user = userFromStore || (await getUser(uid));

			const posts = await getUserPosts(uid);

			setUser(user);
			setPosts(posts);
		};

		init();
	}, [users, id]);

	return (
		<UserPageWrapper>
			<Link to="/">back to all Users</Link>

			{user && <UserInfo user={user} />}

			<PostsWrapper>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</PostsWrapper>
		</UserPageWrapper>
	);
};
