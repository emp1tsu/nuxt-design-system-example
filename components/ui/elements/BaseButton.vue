<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  "flex justify-center align-items-center rounded-lg font-bold tracking-[0.64px]",
  {
    variants: {
      variant: {
        primary:
          "border border-black bg-blue-900 hover:bg-blue-1000 active:bg-blue-1100 focus:outline-none focus:ring focus:ring-yellow-700 text-white disabled:opacity-30 disabled:border-0 disabled:bg-black disabled:text-gray-420 disabled:cursor-not-allowed",
        secondary: "secondary",
        tertiary: "tertiary",
      },
      disabled: {
        true: "",
        false: "",
      },
      size: {
        large: "min-w-[136px] h-[56px] p-2",
        medium: "min-w-[96px] h-[48px] py-[12px] px-2",
        small: "min-w-[80px] h-[36px] py-[6px] px-[12px]",
        xsmall: "min-w-[72px] h-[28px] px-1 py-0.5 text-sm",
      },
    },
  }
);

type ButtonProps = VariantProps<typeof button>;

const props = withDefaults(
  defineProps<{
    variant: ButtonProps["variant"];
    disabled: ButtonProps["disabled"];
    size: ButtonProps["size"];
  }>(),
  {
    variant: "primary",
    disabled: false,
    size: "medium",
  }
);

const isDisabled = computed(() => {
  return !!props.disabled;
});
</script>

<template>
  <button
    type="button"
    :class="twMerge(button({ variant, disabled: isDisabled, size }))"
    :disabled="isDisabled"
  >
    ラベル
  </button>
</template>
