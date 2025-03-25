---
to: src/components/<%= h.changeCase.camel(componentName) %>/<%= componentName %>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/react';
import { <%= componentName %> } from './<%= componentName %>';

const meta: Meta<typeof <%= componentName %>> = {
  component: <%= componentName %>,
};

export default meta;
type Story = StoryObj<typeof <%= componentName %>>;

export const Default: Story = {
  args: {},
};