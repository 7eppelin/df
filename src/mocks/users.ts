import { faker } from "@faker-js/faker";

let id = 0;

const generateFakeUser = () => ({
	id: id++,
	name: faker.name.fullName(),
	email: faker.internet.email(),
});

const generateFakeUsers = (length = 100) => {
	return Array.from({ length }, generateFakeUser);
};

export const users = generateFakeUsers();
