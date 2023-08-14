import styled from "styled-components";
import { Responsive } from "@/types/style";
import { toPropValue, Color, AppTheme } from "@/utils/styles";

export type ButtonVariant = "primary" | "secondary" | "danger";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundColor?: Responsive<Color>;
  theme?: AppTheme;
};

const Button3 = styled.button<ButtonProps>`
  ${(props) =>
    toPropValue("background-color", props.backgroundColor, props.theme)}
`;

export default Button3;
