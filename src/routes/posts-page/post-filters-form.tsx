import { FC, FormEvent, useState } from "react";
import styled from "styled-components";

import { PostFilters } from "../../types";

const FiltersFormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	gap: 8px;
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
				user name
				<input value={userName} onChange={(e) => setUserName(e.target.value)} />
			</label>

			<label>
				post title
				<input
					value={postTitle}
					onChange={(e) => setPostTitle(e.target.value)}
				/>
			</label>

			<button type="submit">search</button>
		</FiltersFormWrapper>
	);
};
