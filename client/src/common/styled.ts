import styled from 'styled-components';

type Props = {
  [key: string]: string;
};

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }: Props) => justify};
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }: Props) => align};
`;

export const Button = styled.button`
	border: none;
	outline: none;
	cursor: pointer;
	text-align: center;
`;

export const Arrow = styled.span` 
  @include flex;
  &:before, &:after {
    @include pseudo;
    width: 6px;
    height: 2px;
    background-color: #fff;
  }
  &:before {
    transform: translateX(1px) rotate(-45deg);
  }
  &:after {
    transform: translateX(-1px) rotate(-135deg);
  }
`;
