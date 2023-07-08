import styled from "styled-components";
import { Responsive } from "@/types/style";
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
  AppTheme,
} from "@/util/styles";

// export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonVariant = "primary";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fontSize?: Responsive<FontSize>;
  fontWeight?: Responsive<string>;
  letterSpacing?: Responsive<LetterSpacing>;
  lineHeight?: Responsive<LineHeight>;
  textAlign?: Responsive<string>;
  color?: Responsive<Color>;
  backgroundColor?: Responsive<Color>;
  width?: Responsive<string>;
  height?: Responsive<string>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;
  display?: Responsive<string>;
  border?: Responsive<string>;
  overflow?: Responsive<string>;
  margin?: Responsive<Space>;
  marginTop?: Responsive<Space>;
  marginBottom?: Responsive<Space>;
  marginLeft?: Responsive<Space>;
  marginRight?: Responsive<Space>;
  padding?: Responsive<Space>;
  paddingTop?: Responsive<Space>;
  paddingBottom?: Responsive<Space>;
  paddingLeft?: Responsive<Space>;
  paddingRight?: Responsive<Space>;
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>;
    };
    disabled?: {
      backgroundColor?: Responsive<Color>;
    };
  };
  theme?: AppTheme;
};

const variants = {
  primary: {
    backgroundColor: "white",
  },
};

const Button5 = styled.button<ButtonProps>`
  ${({ variant, backgroundColor, theme }) => {
    if (variant && variants[variant]) {
      const styles = [];
      !backgroundColor &&
        styles.push(
          toPropValue(
            "background-color",
            variants[variant].backgroundColor,
            theme
          )
        );
      return styles.join("\n");
    } else {
      return `background-color: red;`;
    }
  }}
  ${(props) =>
    toPropValue("background-color", props.backgroundColor, props.theme)}
`;

export default Button5;
