import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";

import { UsersPage, PostPage, PostsPage, UserPage } from "./routes";

const AppWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const router = createBrowserRouter([
	{
		path: "/",
		element: <UsersPage />,
	},
	{
		path: "/posts",
		element: <PostsPage />,
	},
	{
		path: "/posts/:id",
		element: <PostPage />,
	},
	{
		path: "/:id",
		element: <UserPage />,
	},
]);

export const App = () => {
	return (
		<AppWrapper>
			<RouterProvider router={router} />
		</AppWrapper>
	);
};
