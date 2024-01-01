import BaseTextField from "./BaseTextField.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof BaseTextField>;

const meta: Meta<typeof BaseTextField> = {
  title: "Forms/BaseTextField",
  component: BaseTextField,
  render: (args) => ({
    components: { BaseTextField: BaseTextField },
    setup() {
      return { args };
    },
    template: "<BaseTextField v-bind='args' />",
  }),
  args: {},
  argTypes: {},
};

export const Default: Story = {};

export default meta;
