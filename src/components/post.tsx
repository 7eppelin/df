import { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Post as PostType, User } from "src/types";
import { formatDateString } from "src/utils";

const PostWrapper = styled.article``;

const LinkStyled = styled(Link)`
	font-size: 12px;
	color: #ccc;
`;

type Props = {
	post: PostType;
	author?: User;
};

export const Post: FC<Props> = ({ post, author }) => {
	const { id, title, body, date } = post;

	const lastEdited = formatDateString(date);

	return (
		<PostWrapper>
			<h2>{title}</h2>

			<div>
				{author && <span>By {author.name}</span>}
				{"last updated: "}
				<LinkStyled to={`/posts/${id}`}>{lastEdited}</LinkStyled>
			</div>

			<p>{body}</p>
		</PostWrapper>
	);
};
