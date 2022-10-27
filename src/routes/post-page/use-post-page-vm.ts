import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { updatePost, getPost, getUser } from "src/api";
import { Post, User } from "src/types";

export const usePostPageVM = () => {
	const [post, setPost] = useState<Post | null>(null);
	const [user, setUser] = useState<User | null>(null);
	const [isEditing, setIsEditing] = useState(false);

	const params = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const post = await getPost(Number(params.id));
			const user = await getUser(post.user_id);

			setUser(user);
			setPost(post);
		};

		fetchData();
	}, [params.id]);

	const onSubmitEditing = async (title: string, body: string) => {
		// narrowing just to make ts happy
		// (post always exists here)
		if (!post) {
			throw new Error("post doesn't exist");
		}

		const newPost = {
			...post,
			title,
			body,
			date: new Date().toString(),
		};

		setPost(newPost);
		updatePost(newPost);
		setIsEditing(false);
	};

	return {
		user,
		post,
		isEditing,
		setIsEditing,
		onSubmitEditing,
	};
};
