import { FC, useState } from "react";
import styled from "styled-components";

import { User } from "src/types";
import { TextField } from "src/components";

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
	onSubmitEditing: (name: string) => Promise<void>;
};

export const UserInfo: FC<Props> = ({ user, onSubmitEditing }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(user.name);

	const handleSubmitEditing = async () => {
		await onSubmitEditing(name);
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
					onSubmit={handleSubmitEditing}
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
