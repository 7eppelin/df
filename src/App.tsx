import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";

import { RootPage, PostPage, PostsPage, UserPage } from "./routes";

const AppWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
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
		path: "/users/:id",
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
