import { Post, PostFilters } from "../types";
import { posts } from "./mocked-posts";
import { users } from "./mocked-users";

export const getUserPosts = (userId: number) => {
	return new Promise<Post[]>((resolve) => {
		setTimeout(() => {
			const userPosts = posts.filter((post) => post.user_id === userId);
			resolve(userPosts);
		}, 300);
	});
};

type GetPosts = (
	page: number,
	perPage: number,
	filters: PostFilters
) => Promise<{ posts: Post[]; totalPosts: number }>;

export const getPosts: GetPosts = (page, perPage, filters) => {
	const { userName, postTitle } = filters;

	return new Promise((resolve) => {
		setTimeout(() => {
			const start = (page - 1) * perPage;
			const end = start + perPage;

			let matchedPosts = posts;

			if (userName) {
				// in case usernames can be not unique
				const matchedUserIds = users.reduce<number[]>((acc, user) => {
					const sourceName = user.name.toLowerCase();
					const searchName = userName.trim().toLowerCase();

					if (sourceName.includes(searchName)) {
						acc.push(user.id);
					}

					return acc;
				}, []);

				matchedPosts = matchedPosts.filter((p) =>
					matchedUserIds.includes(p.user_id)
				);
			}

			if (postTitle) {
				matchedPosts = matchedPosts.filter((p) =>
					p.title.toLowerCase().includes(postTitle.toLowerCase())
				);
			}

			resolve({
				posts: matchedPosts.slice(start, end),
				totalPosts: matchedPosts.length,
			});
		}, 300);
	});
};

export const getPost = (postId: number) => {
	return new Promise<Post>((resolve, reject) => {
		setTimeout(() => {
			const post = posts.find((p) => p.id === postId);

			if (post) {
				resolve(post);
			} else {
				reject("post not found");
			}
		}, 300);
	});
};

export const updatePost = (newPost: Post) => {
	return new Promise<Post>((resolve) => {
		setTimeout(() => {
			const postIndex = posts.findIndex((p) => p.id === newPost.id);

			posts[postIndex] = newPost;

			resolve(newPost);
		}, 300);
	});
};
