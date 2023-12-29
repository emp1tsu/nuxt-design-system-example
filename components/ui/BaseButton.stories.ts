import { type StoryFn } from "@storybook/vue3";
import BaseButton from "./BaseButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Base/Button",
  component: BaseButton,
};

const Template: StoryFn<typeof BaseButton> = () => ({
  components: { BaseButton },
  template: "<BaseButton />",
});

export const Default = Template.bind({});
Default.storyName = "Base Button";
