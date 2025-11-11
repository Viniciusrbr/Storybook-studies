import type { Meta } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta = {
  component: Button,
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default = {};

export const Secondary = {};