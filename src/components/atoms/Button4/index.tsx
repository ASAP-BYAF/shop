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

export type ButtonVariant = "primary" | "secondary" | "danger";

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
    color: "white",
    backgroundColor: "primary",
    border: "none",
    pseudoClass: {
      hover: {
        backgroundColor: "primaryDark",
      },
      disabled: {
        backgroundColor: "primary",
      },
    },
  },
  secondary: {
    color: "white",
    backgroundColor: "secondary",
    border: "none",
    pseudoClass: {
      hover: {
        backgroundColor: "secondaryDark",
      },
      disabled: {
        backgroundColor: "secondary",
      },
    },
  },
  danger: {
    color: "white",
    backgroundColor: "danger",
    border: "none",
    pseudoClass: {
      hover: {
        backgroundColor: "dangerDark",
      },
      disabled: {
        backgroundColor: "danger",
      },
    },
  },
};

const Button4 = styled.button<ButtonProps>`
  ${(props) => toPropValue("font-size", props.fontSize, props.theme)}
  ${(props) => toPropValue("letter-spacing", props.letterSpacing, props.theme)}
  ${(props) => toPropValue("line-height", props.lineHeight, props.theme)}
  ${(props) => toPropValue("color", props.color, props.theme)}
  ${(props) =>
    toPropValue("background-color", props.backgroundColor, props.theme)}
  ${(props) => toPropValue("width", props.width, props.theme)}
  ${(props) => toPropValue("height", props.height, props.theme)}
  ${(props) => toPropValue("min-width", props.minWidth, props.theme)}
  ${(props) => toPropValue("min-height", props.minHeight, props.theme)}
  ${(props) => toPropValue("display", props.display, props.theme)}
  ${(props) => toPropValue("border", props.border, props.theme)}
  ${(props) => toPropValue("overflow", props.overflow, props.theme)}
  ${(props) => toPropValue("margin", props.margin, props.theme)}
  ${(props) => toPropValue("margin-top", props.marginTop, props.theme)}
  ${(props) => toPropValue("margin-bottom", props.marginBottom, props.theme)}
  ${(props) => toPropValue("margin-left", props.marginLeft, props.theme)}
  ${(props) => toPropValue("margin-right", props.marginRight, props.theme)}
  ${(props) => toPropValue("padding", props.padding, props.theme)}
  ${(props) => toPropValue("padding-top", props.paddingTop, props.theme)}
  ${(props) => toPropValue("padding-bottom", props.paddingBottom, props.theme)}
  ${(props) => toPropValue("padding-left", props.paddingLeft, props.theme)}
  ${(props) => toPropValue("padding-right", props.paddingRight, props.theme)}
  cursor: pointer;
  outline: 0;
  text-decoration: "none";
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  border-radius: 4px;
  border: "none";
`;

export default Button4;
