import { FC, FormEvent, useState } from "react";
import styled from "styled-components";

import { Post } from "src/types";

const EditPostWrapper = styled.form`
	width: 60%;
	display: flex;
	flex-direction: column;
	gap: 24px;

	input,
	textarea {
		width: 100%;
		padding: 10px 20px;
	}

	textarea {
		resize: vertical;
	}
`;

type Props = {
	post: Post;
	onSubmit: (title: string, body: string) => void;
	onCancel: () => void;
};

export const EditPost: FC<Props> = ({ post, onSubmit, onCancel }) => {
	const [title, setTitle] = useState(post.title);
	const [body, setBody] = useState(post.body);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		onSubmit(title, body);
	};

	return (
		<EditPostWrapper onSubmit={handleSubmit}>
			<label>
				<div>title:</div>
				<input value={title} onChange={(e) => setTitle(e.target.value)} />
			</label>

			<label>
				<div>body:</div>
				<textarea
					value={body}
					onChange={(e) => setBody(e.target.value)}
					rows={6}
				/>
			</label>

			<div>
				<button type="submit">save</button>
				<button type="reset" onClick={onCancel}>
					cancel
				</button>
			</div>
		</EditPostWrapper>
	);
};
