import BaseButton from "./BaseButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof BaseButton>;

const meta: Meta<typeof BaseButton> = {
  title: "Elements/BaseButton",
  component: BaseButton,
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: "<BaseButton v-bind='args' />",
  }),
  args: {
    variant: "primary",
    disabled: false,
    size: "medium",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xsmall", "small", "medium", "large"],
    },
  },
};

export const Default: Story = {};

export default meta;
