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
    backgroundColor?: Responsive<Color>;
  };
  disabled?: {
    backgroundColor?: Responsive<Color>;
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

const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    if (variant && variants[variant]) {
      const styles = [];
      !color &&
        styles.push(toPropValue("color", variants[variant].color, theme));
      return styles.join("\n");
    }
  }}
`;
