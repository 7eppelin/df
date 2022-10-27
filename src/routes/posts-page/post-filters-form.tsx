import { FC, FormEvent, useState } from "react";
import styled from "styled-components";

import { PostFilters } from "src/types";

const FiltersFormWrapper = styled.form`
	width: 400px;
	display: flex;
	flex-direction: column;
	gap: 12px;

	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	input {
		width: 280px;
		padding: 6px 16px;
	}
`;

type Props = {
	onSubmit: (filters: PostFilters) => void;
};

export const PostFiltersForm: FC<Props> = ({ onSubmit }) => {
	const [userName, setUserName] = useState("");
	const [postTitle, setPostTitle] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		onSubmit({
			userName,
			postTitle,
		});
	};

	return (
		<FiltersFormWrapper onSubmit={handleSubmit}>
			<label>
				<span>user name: </span>
				<input value={userName} onChange={(e) => setUserName(e.target.value)} />
			</label>

			<label>
				<span>post title: </span>
				<input
					value={postTitle}
					onChange={(e) => setPostTitle(e.target.value)}
				/>
			</label>

			<button type="submit">search</button>
		</FiltersFormWrapper>
	);
};
