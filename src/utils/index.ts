export const formatDateString = (str: string) => {
	const date = new Date(str);

	if (date.toString() === "Invalid Date") {
		throw new Error("Invalid date string supplied");
	}

	return date.toUTCString();
};
