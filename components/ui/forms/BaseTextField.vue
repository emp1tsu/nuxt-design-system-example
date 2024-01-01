<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string | number;
    type: string;
  }>(),
  {
    modelValue: "",
    type: "text",
  }
);

defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="modelValue"
    :type="type"
    class="w-[327px] h-14 px-2 py-[12px] bg-white rounded-lg border border-zinc-900 justify-start items-center gap-2 inline-flex"
  />
</template>
