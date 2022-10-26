import { FC, useState } from "react";
import styled from "styled-components";

import { User } from "../../types";
import { Link, TextField } from "../../components";

const Li = styled.li`
	padding: 12px 24px;
	width: 100%;
	display: flex;
	justify-content: space-between;

	&:not(:last-child) {
		border-bottom: 1px solid #ccc;
	}
`;

const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

type Props = {
	user: User;
	onDelete: () => void;
	onEdit: (user: User) => Promise<void>;
};

export const UserListItem: FC<Props> = ({ user, onEdit, onDelete }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(user.name);

	const editUser = async () => {
		const newUser: User = { ...user, name };
		await onEdit(newUser);

		setIsEditing(false);
	};

	const onCancelEditing = () => {
		setName(user.name);
		setIsEditing(false);
	};

	return (
		<Li>
			{isEditing ? (
				<TextField
					value={name}
					onChange={setName}
					onSubmit={editUser}
					onCancel={onCancelEditing}
				/>
			) : (
				<Link to={`users/${user.id}`}>{user.name}</Link>
			)}

			{!isEditing && (
				<ButtonsWrapper>
					<button onClick={() => setIsEditing(true)}>Edit</button>
					<button onClick={onDelete}>Delete</button>
				</ButtonsWrapper>
			)}
		</Li>
	);
};
