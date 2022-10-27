import styled from "styled-components";

import { Link, Post } from "src/components";

import { EditPost } from "./edit-post";
import { usePostPageVM } from "./use-post-page-vm";

const PostPageWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
`;

export const PostPage = () => {
	const vm = usePostPageVM();

	return (
		<PostPageWrapper>
			<Link to="/posts">{"<- back to Posts"}</Link>

			{vm.user && <div>author: {vm.user.name}</div>}

			{/* TODO: simplify condition? */}
			{vm.user &&
				vm.post &&
				(vm.isEditing ? (
					<EditPost
						post={vm.post}
						onSubmit={vm.onSubmitEditing}
						onCancel={() => vm.setIsEditing(false)}
					/>
				) : (
					<div>
						<button onClick={() => vm.setIsEditing(true)}>edit</button>
						<Post post={vm.post} author={vm.user} />
					</div>
				))}
		</PostPageWrapper>
	);
};
