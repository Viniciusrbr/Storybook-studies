import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { action } from 'storybook/actions';

const meta = {
  title: "Components/Button",
  component: Button,
  // tags: ["autodocs"],
  args: {
    children: "Button",
    onClick: action('on-click')
  },
  argTypes: {
    asChild: {
      name: 'As Child (renders the child as the actual button)',
      table: {
        type: { summary: 'boolean' },
         defaultValue: { 
          summary: 'default'
        },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      table: {
        category: 'Appearance',
        type: { 
          summary: 'enum (string)',
          detail: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'"
        },
        defaultValue: { 
          summary: 'default'
        },
      },
    },
    size: {
      control: { 
        type: 'inline-radio', 
        labels: {
          sm: 'sm (Small)',
          lg: 'lg (Large)',
        }
      },
      table: {
        category: 'Appearance',
        type: { 
          summary: 'enum (string)',
          detail: "'default' | 'sm' | 'lg' | 'icon'"
        },
      },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClick:{
      table:{
        category: 'Event Listeners',
      }
    },
    onMouseEnter:{
      table:{
        category: 'Event Listeners',
        subcategory: 'Mouse Events',
      }
    },
    onMouseLeave:{
      table:{
        category: 'Event Listeners',
        subcategory: 'Mouse Events',
      }
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