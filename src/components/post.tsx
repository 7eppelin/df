import { FC } from "react";
import styled from "styled-components";

import { Post as PostType, User } from "src/types";
import { formatDateString } from "src/utils";

import { Link } from "./link";
import { PALETTE } from "src/constants";

const PostWrapper = styled.article`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const PostInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	font-size: 12px;
	color: #ccc;

	a {
		color: ${PALETTE.grey};
	}
`;

type Props = {
	post: PostType;
	author?: User;
};

export const Post: FC<Props> = ({ post, author }) => {
	const { id, title, body, date } = post;

	return (
		<PostWrapper>
			<h2>{title}</h2>

			<PostInfo>
				{author && (
					<span>
						By <Link to={`/${author.id}`}>{author.name}</Link>
					</span>
				)}

				<div>
					<span>{"last updated: "}</span>
					<Link to={`/posts/${id}`}>{formatDateString(date)}</Link>
				</div>
			</PostInfo>

			<p>{body}</p>
		</PostWrapper>
	);
};
