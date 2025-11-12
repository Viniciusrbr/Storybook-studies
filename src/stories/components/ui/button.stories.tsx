import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { 
        type: 'inline-radio', 
        labels: {
          sm: 'sm (Small)',
          lg: 'lg (Large)',
        }
      },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Primario",
};

export const Destructive: Story = {
  args:{
    children: 'Destructive',
    variant: 'destructive',
  },
  render: (args) => (
    <Button {...args}>
      ⚠️ Alerta
    </Button>
)
};

export const Outline: Story = {
  args:{
    children: 'Outline',
    variant: 'outline',
  }
};

export const Secondary: Story = {
  args:{
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args:{
    children: 'Ghost',
    variant: 'ghost',
  }
};

export const Link: Story = {
  args:{
    children: 'Link',
    variant: 'link',
  }
};