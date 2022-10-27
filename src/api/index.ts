import { User, Post, PostFilters } from "../types";

const users = [
	{
		id: 0,
		name: "Kristy Beasley",
		email: "kristybeasley@zentility.com",
	},
	{
		id: 1,
		name: "Rena Pruitt",
		email: "renapruitt@zentility.com",
	},
	{
		id: 2,
		name: "Cannon Brady",
		email: "cannonbrady@zentility.com",
	},
	{
		id: 3,
		name: "Marianne Cortez",
		email: "mariannecortez@zentility.com",
	},
	{
		id: 4,
		name: "Griffin Howe",
		email: "griffinhowe@zentility.com",
	},
	{
		id: 5,
		name: "Wong Summers",
		email: "wongsummers@zentility.com",
	},
	{
		id: 6,
		name: "Montgomery Bean",
		email: "montgomerybean@zentility.com",
	},
	{
		id: 7,
		name: "Leach Sloan",
		email: "leachsloan@zentility.com",
	},
	{
		id: 8,
		name: "Alberta Everett",
		email: "albertaeverett@zentility.com",
	},
	{
		id: 9,
		name: "Dee Hebert",
		email: "deehebert@zentility.com",
	},
	{
		id: 10,
		name: "Isabel Stafford",
		email: "isabelstafford@zentility.com",
	},
	{
		id: 11,
		name: "John",
		email: "john@zentility.com",
	},
	{
		id: 12,
		name: "Bob",
		email: "bob@zentility.com",
	},
	{
		id: 14,
		name: "Kate",
		email: "kate@zentility.com",
	},
	{
		id: 15,
		name: "Robert",
		email: "robert@zentility.com",
	},
	{
		id: 16,
		name: "Jennifer",
		email: "jennifer@zentility.com",
	},
];

const posts = [
	{
		id: 0,
		user_id: 5,
		date: "Thu Apr 27 2000 01:31:36 GMT+0300 (GMT+03:00)",
		title:
			"Magna magna id enim culpa qui anim proident ipsum excepteur pariatur ad.",
		body: "Lorem in anim ullamco sit et cupidatat esse consectetur. Anim pariatur tempor cillum qui elit sunt. Ut sunt tempor id officia minim adipisicing magna id dolore ut officia officia dolor. Sint culpa eiusmod exercitation adipisicing esse ex deserunt in aliquip aute pariatur. Cupidatat commodo anim incididunt sint proident proident laborum culpa minim. Ea sunt labore anim qui qui ad est mollit dolor minim.\r\n",
	},
	{
		id: 1,
		user_id: 9,
		date: "Wed May 14 1997 03:20:39 GMT+0300 (GMT+03:00)",
		title: "Officia quis anim proident ut voluptate Lorem aliqua.",
		body: "Fugiat commodo est aliqua non. Aliquip exercitation ut ullamco voluptate ea ipsum pariatur nostrud proident. Consequat ullamco amet exercitation commodo dolor sint. Ex quis deserunt velit incididunt irure ea cillum nulla consectetur adipisicing est duis aliquip ullamco. Adipisicing pariatur pariatur est eiusmod anim duis occaecat elit. Est irure cupidatat mollit aute fugiat.\r\n",
	},
	{
		id: 2,
		user_id: 4,
		date: "Sat Dec 29 2001 07:37:29 GMT+0200 (GMT+03:00)",
		title:
			"Qui adipisicing ullamco minim eiusmod cillum minim ad nulla id magna proident nisi.",
		body: "Amet ut exercitation do ut nisi aliquip ea officia velit tempor ea do amet commodo. Sunt enim officia pariatur officia nisi officia. Mollit ipsum aliqua incididunt Lorem. Dolor Lorem incididunt quis exercitation sunt ad id proident qui consequat. Proident eiusmod officia elit mollit laborum incididunt ea fugiat commodo sit.\r\n",
	},
	{
		id: 3,
		user_id: 6,
		date: "Wed Mar 18 2015 15:55:09 GMT+0200 (GMT+03:00)",
		title: "Occaecat exercitation anim id aliquip adipisicing.",
		body: "Nisi cupidatat amet magna id nulla fugiat aliquip deserunt. Ut excepteur velit nisi dolor laboris fugiat. Incididunt quis est do et ad incididunt ipsum minim excepteur consequat ex fugiat.\r\n",
	},
	{
		id: 4,
		user_id: 6,
		date: "Wed Apr 27 1988 06:34:20 GMT+0300 (GMT+03:00)",
		title:
			"Aute consectetur do proident consectetur fugiat exercitation ea culpa amet qui nulla sunt nulla.",
		body: "Aliquip nisi proident in enim incididunt commodo nostrud ex et do. Eu nulla dolore Lorem tempor consectetur. Non in excepteur officia deserunt enim sint elit voluptate pariatur qui aliqua excepteur.\r\n",
	},
	{
		id: 5,
		user_id: 5,
		date: "Mon Dec 28 1998 01:55:07 GMT+0200 (GMT+03:00)",
		title: "Ea mollit aute ad eiusmod id est.",
		body: "In mollit amet deserunt voluptate. Irure magna velit excepteur et do nisi. Amet veniam minim ad cillum tempor incididunt consectetur ut ad. Ullamco occaecat amet culpa ullamco nostrud mollit tempor. Amet qui commodo fugiat nulla incididunt elit. Velit laboris anim voluptate et. Amet enim sit sit sit aute enim veniam nisi aliqua.\r\n",
	},
	{
		id: 6,
		user_id: 4,
		date: "Wed Aug 21 2019 01:05:09 GMT+0300 (GMT+03:00)",
		title:
			"Dolore dolor sunt adipisicing nulla sunt eu sint tempor minim ut duis in nisi.",
		body: "Laborum esse laboris anim irure magna ex occaecat ut reprehenderit. Lorem qui adipisicing anim ex duis proident do ex laborum amet qui. Mollit ad aliquip cupidatat nostrud reprehenderit aliqua est et nulla exercitation veniam incididunt reprehenderit cupidatat. Lorem laboris ipsum in do occaecat sit veniam nostrud irure sint laboris. Id consectetur commodo enim est eu adipisicing. Nisi do magna cupidatat sit nulla pariatur Lorem.\r\n",
	},
	{
		id: 7,
		user_id: 9,
		date: "Thu May 13 1982 09:47:33 GMT+0300 (GMT+03:00)",
		title:
			"Aliqua Lorem nostrud deserunt cupidatat officia nostrud officia qui mollit proident adipisicing elit.",
		body: "Enim adipisicing magna magna cillum aute magna nulla officia dolore mollit sint eu tempor dolore. Velit id esse Lorem magna adipisicing et. Magna voluptate do non voluptate pariatur ea tempor ipsum consectetur veniam laboris laboris aute. Eiusmod aliquip incididunt deserunt adipisicing eu aute id adipisicing incididunt ad pariatur do et ut. Irure sint eiusmod sunt quis aute commodo et sit fugiat exercitation pariatur voluptate. Commodo aliquip veniam sit dolore consequat pariatur Lorem magna commodo nostrud. Dolore quis ex commodo enim et sit sit ea mollit.\r\n",
	},
	{
		id: 8,
		user_id: 6,
		date: "Sun Nov 07 1976 06:08:44 GMT+0200 (GMT+03:00)",
		title: "Occaecat ad elit minim pariatur id.",
		body: "Ad labore fugiat aute occaecat ea. Qui est irure labore occaecat. Incididunt veniam incididunt tempor velit ea nostrud ex esse excepteur Lorem sint. Mollit est dolor laborum eu tempor. Do proident aliquip eiusmod minim.\r\n",
	},
	{
		id: 9,
		user_id: 8,
		date: "Sun Feb 09 2014 06:15:28 GMT+0200 (GMT+03:00)",
		title: "Eu ea excepteur duis amet esse in laboris laborum sunt incididunt.",
		body: "Non dolor pariatur qui qui ea proident Lorem. Labore ullamco eu sint anim aliquip dolore labore cillum dolore. Ad id consectetur ullamco excepteur dolore magna aliqua fugiat ut consectetur. Ipsum esse dolor tempor pariatur sit amet. Lorem dolore dolor in laboris. Minim nulla non qui Lorem.\r\n",
	},
	{
		id: 10,
		user_id: 1,
		date: "Sun Jun 16 1974 07:17:21 GMT+0300 (GMT+03:00)",
		title: "Ex in deserunt nostrud officia dolor nulla nostrud quis.",
		body: "Aute consequat ad laborum dolor pariatur irure excepteur pariatur proident. Velit deserunt anim nisi reprehenderit id irure magna Lorem. Nisi dolore proident veniam velit veniam eu reprehenderit sunt. Laboris occaecat quis veniam veniam esse non. Cupidatat reprehenderit officia anim sit nulla aliquip sint consectetur aliqua sunt duis id consequat. Id Lorem exercitation consequat deserunt tempor sit.\r\n",
	},
	{
		id: 11,
		user_id: 10,
		date: "Mon Apr 30 1979 15:56:15 GMT+0300 (GMT+03:00)",
		title:
			"Magna laboris elit fugiat proident dolore fugiat adipisicing laborum proident amet duis ea.",
		body: "Ullamco adipisicing est velit nulla amet elit ex elit tempor consectetur. Do exercitation mollit commodo exercitation officia et esse aute pariatur reprehenderit dolor Lorem irure magna. Ex ullamco non reprehenderit proident laboris non consectetur amet laboris mollit sunt ullamco. Cillum cupidatat occaecat nostrud magna ex incididunt labore id excepteur Lorem excepteur nostrud laborum cillum. Id exercitation ex culpa dolor fugiat est non consequat do dolor officia id id laborum. Quis labore anim tempor cillum dolor et ad deserunt.\r\n",
	},
	{
		id: 12,
		user_id: 8,
		date: "Mon Feb 08 1988 19:46:08 GMT+0200 (GMT+03:00)",
		title:
			"Consequat aute velit fugiat quis ut ad ad voluptate cupidatat id mollit.",
		body: "Ad adipisicing magna pariatur amet incididunt reprehenderit non aliqua amet consequat ut. Ea eu et officia veniam consequat non cupidatat ex ad occaecat laborum irure proident minim. Dolor incididunt laborum cupidatat deserunt occaecat dolore sit quis incididunt dolore minim consequat nostrud dolore. Ipsum non enim exercitation dolore minim nulla laboris amet dolore et dolore ex officia consectetur.\r\n",
	},
	{
		id: 13,
		user_id: 9,
		date: "Wed Oct 14 1992 18:39:46 GMT+0200 (GMT+03:00)",
		title:
			"Minim id id consectetur do laboris aute sint deserunt nisi commodo excepteur anim consectetur.",
		body: "Aute ullamco ipsum et cillum cupidatat officia adipisicing dolor labore nulla. Laborum elit aliqua laboris aute sit dolor exercitation fugiat cupidatat minim. Reprehenderit ea ad tempor tempor consequat minim consectetur occaecat velit. Ipsum aliqua ad magna ea nisi nulla aliqua eu do veniam mollit ullamco.\r\n",
	},
	{
		id: 14,
		user_id: 8,
		date: "Wed May 11 2005 18:35:10 GMT+0300 (GMT+03:00)",
		title:
			"Nostrud est laborum veniam anim sit anim dolore Lorem laboris proident fugiat ullamco anim minim.",
		body: "Dolore adipisicing consequat commodo eu tempor. Anim dolore incididunt est ipsum sunt. Cupidatat Lorem duis sit dolore reprehenderit. Do do nisi nulla dolor. Sunt aliqua ipsum dolore laborum amet irure ipsum cillum Lorem velit reprehenderit est nulla dolore. Elit ut proident tempor veniam cillum sint do id fugiat exercitation est aliquip laboris est. Mollit sint laborum ad culpa fugiat.\r\n",
	},
	{
		id: 15,
		user_id: 1,
		date: "Sun Jun 09 1974 17:39:58 GMT+0300 (GMT+03:00)",
		title: "Nulla sit culpa Lorem et proident ex duis est esse exercitation.",
		body: "Aliquip do aliquip amet cupidatat mollit. Est exercitation consectetur duis enim. Nulla qui cillum incididunt et do aute.\r\n",
	},
];

type GetUsers = (
	page: number,
	perPage: number
) => Promise<{ users: User[]; totalUsers: number }>;

export const getUsers: GetUsers = (page, perPage) => {
	return new Promise((res) => {
		setTimeout(() => {
			const start = (page - 1) * perPage;
			const end = start + perPage;

			res({
				users: users.slice(start, end),
				totalUsers: users.length,
			});
		}, 300);
	});
};

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

export const deleteUser = (userId: number) => {
	return new Promise<void>((res) => {
		setTimeout(() => {
			const userIndex = users.findIndex((u) => u.id === userId);
			users.splice(userIndex, 1);
			res();
		}, 300);
	});
};

export const updateUser = (user: User) => {
	return new Promise<User>((res) => {
		setTimeout(() => {
			const userIndex = users.findIndex((u) => u.id === user.id);
			users[userIndex] = user;
			res(user);
		}, 300);
	});
};

export const getUserPosts = (userId: number) => {
	return new Promise<Post[]>((res) => {
		setTimeout(() => {
			const userPosts = posts.filter((post) => post.user_id === userId);
			res(userPosts);
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

	return new Promise((res) => {
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

			res({
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
