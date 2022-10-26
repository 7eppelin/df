import { ChangeEvent, FC } from "react";
import styled from "styled-components";

const TextFieldWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

const Input = styled.input`
	padding: 10px 20px;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 8px;
`;

type Props = {
	value: string;
	onChange: (value: string) => void;
	onEdit: () => void;
	onCancel: () => void;
};

export const TextField: FC<Props> = ({ value, onChange, onEdit, onCancel }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<TextFieldWrapper>
			<Input value={value} onChange={handleChange} />

			<ButtonsWrapper>
				<button onClick={onEdit}>Save</button>
				<button onClick={onCancel}>Discard</button>
			</ButtonsWrapper>
		</TextFieldWrapper>
	);
};
