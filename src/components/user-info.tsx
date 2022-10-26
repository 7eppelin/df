import { FC, useState } from "react";
import styled from "styled-components";

import { User } from "../types";
import { useStore } from "../store";
import { TextField } from "./text-field";

const UserInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const UserName = styled.div`
	font-size: 16px;
	display: flex;
	gap: 12px;
`;

const UserEmail = styled.div`
	font-size: 14px;
`;

type Props = {
	user: User;
};

export const UserInfo: FC<Props> = ({ user }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(user.name);

	const { editUser } = useStore();

	const onEdit = async () => {
		const newUser: User = { ...user, name };
		await editUser(newUser);

		setIsEditing(false);
	};

	const onCancelEditing = () => {
		setName(user.name);
		setIsEditing(false);
	};

	return (
		<UserInfoWrapper>
			{isEditing ? (
				<TextField
					value={name}
					onChange={setName}
					onEdit={onEdit}
					onCancel={onCancelEditing}
				/>
			) : (
				<UserName>
					name: {user.name}
					<button onClick={() => setIsEditing(true)}>edit</button>
				</UserName>
			)}

			<UserEmail>email: {user.email}</UserEmail>
		</UserInfoWrapper>
	);
};
