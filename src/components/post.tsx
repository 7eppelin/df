import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Post as PostType } from "../types";

const PostWrapper = styled.article``;

const LinkStyled = styled(Link)`
	font-size: 12px;
	color: #ccc;
`;

type Props = {
	post: PostType;
};

export const Post: FC<Props> = ({ post }) => {
	const date = new Date(post.date);
	const dateString = date.toLocaleString();

	return (
		<PostWrapper>
			<h2>{post.title}</h2>
			<LinkStyled to={`/posts/${post.id}`}>{dateString}</LinkStyled>
			<p>{post.body}</p>
		</PostWrapper>
	);
};
