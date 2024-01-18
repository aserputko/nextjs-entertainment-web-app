import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

const meta = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypography: Story = {
  args: {},
};
