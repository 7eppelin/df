import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Post, User } from "src/types";
import { updateUser, getUser, getUserPosts } from "src/api";

export const useUserPageVM = () => {
	const params = useParams();
	const [user, setUser] = useState<User | null>(null);
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const init = async () => {
			const uid = Number(params.id);

			const [user, posts] = await Promise.all([
				getUser(uid),
				getUserPosts(uid),
			]);

			setUser(user);
			setPosts(posts);
		};

		init();
	}, [params.id]);

	const onSubmitEditing = async (name: string) => {
		// narrowing just to make ts happy
		// (post always exists here)
		if (!user) {
			throw new Error("user doesn't exist");
		}

		const updatedUser = await updateUser({ ...user, name });
		setUser(updatedUser);
	};

	return {
		user,
		posts,
		onSubmitEditing,
	};
};
