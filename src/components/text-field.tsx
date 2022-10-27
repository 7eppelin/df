import { FC } from "react";
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
	onSubmit: () => void;
	onCancel: () => void;
};

export const TextField: FC<Props> = ({
	value,
	onChange,
	onSubmit,
	onCancel,
}) => {
	return (
		<TextFieldWrapper>
			<Input value={value} onChange={(e) => onChange(e.target.value)} />

			<ButtonsWrapper>
				<button onClick={onSubmit}>save</button>
				<button onClick={onCancel}>cancel</button>
			</ButtonsWrapper>
		</TextFieldWrapper>
	);
};
