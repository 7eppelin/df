import { User } from "src/types";
import { users } from "./mocked-users";

export const getUser = (userId: number) => {
	return new Promise<User>((resolve, reject) => {
		setTimeout(() => {
			const user = users.find((u) => u.id === userId);

			if (user) {
				resolve(user);
			} else {
				reject("not found");
			}
		}, 300);
	});
};

type GetUsers = (
	page: number,
	perPage: number
) => Promise<{ users: User[]; totalUsers: number }>;

export const getUsers: GetUsers = (page, perPage) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const start = (page - 1) * perPage;
			const end = start + perPage;

			resolve({
				users: users.slice(start, end),
				totalUsers: users.length,
			});
		}, 300);
	});
};

export const deleteUser = (userId: number) => {
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			const userIndex = users.findIndex((u) => u.id === userId);
			users.splice(userIndex, 1);
			resolve();
		}, 300);
	});
};

export const updateUser = (user: User) => {
	return new Promise<User>((resolve) => {
		setTimeout(() => {
			const userIndex = users.findIndex((u) => u.id === user.id);
			users[userIndex] = user;
			resolve(user);
		}, 300);
	});
};
