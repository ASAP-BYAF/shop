import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      contoal: { type: "radio" },
      defaultValue: "primary",
      description: "ボタンバリアント",
      table: {
        type: { summary: "primary | secondary" },
        defaultValue: { summary: "primary" },
      },
    },
    children: {
      control: { type: "text" },
      defaultValue: "Button",
      description: "ボタンテキスト",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
      disabled: {
        control: { type: "boolean" },
        defaultValue: false,
        description: "Disabled フラグ",
        table: {
          type: { summary: "boolean" },
        },
        width: {
          control: { type: "number" },
          description: "横幅",
          table: {
            type: { summary: "number" },
          },
        },
        heigth: {
          control: { type: "number" },
          description: "縦幅",
          table: {
            type: { summary: "number" },
          },
        },
        onClick: {
          description: "onClick イベントハンドラ",
          table: {
            type: { summary: "function" },
          },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
