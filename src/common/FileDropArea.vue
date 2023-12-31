<template>
  <div
    class="file-drop-area"
    :data-active="active"
    @dragenter.prevent="active = true"
    @dragover.prevent="active = true"
    @dragleave.prevent="active = false"
    @drop.prevent="dragFile"
  >
    <div class="file-drop-area__content">
      <icon class="file-drop-area__icon" :name="$icons.fileSelect" />
      <div class="file-drop-area__content-text">
        <label class="file-drop-area__label" :for="ID"></label>
        <p class="file-drop-area__text">
          {{ title }}
        </p>
        <input
          class="file-drop-area__text-title"
          type="file"
          multiple
          hidden
          :id="ID"
          :disabled="isDisabled"
          :accept="filesType"
          @input="uploadFile"
          @drag="dragFile"
        />
        <p class="file-drop-area__text-description file-drop-area__text">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { ICON_NAMES } from '@/enums'
import { Icon } from '@/common'

const files = ref<File[]>([])
const active = ref(false)

const ID_WRP = '_id'

const props = withDefaults(
  defineProps<{
    icon: ICON_NAMES
    title: string
    description: string
    filesType: string
    isDisabled?: boolean
  }>(),
  {
    isDisabled: false,
  },
)

const ID = props.filesType + ID_WRP

const emit = defineEmits<{
  (e: 'handle-files-upload', files: File[]): void
}>()

const uploadFile = (e: Event) => {
  const target = e.target as HTMLInputElement
  const selectedFiles = target.files
  files.value = [...selectedFiles!]
  emit('handle-files-upload', files.value)
}

const dragFile = (e: DragEvent) => {
  active.value = false
  const fileList = e.dataTransfer!.files
  files.value = [...fileList]
  emit('handle-files-upload', files.value)
}
</script>

<style lang="scss" scoped>
.file-drop-area {
  border: toRem(2) dashed var(--border-primary-light);
  text-align: center;
  cursor: pointer;
  position: relative;
  border-radius: toRem(8);
}

.file-drop-area__content {
  display: flex;
  text-align: left;
  justify-content: left;
  align-items: center;
  padding-top: toRem(5);
}

.file-drop-area__icon {
  width: toRem(33);
  height: toRem(37);
  margin: 3%;

  @include respond-to(large) {
    width: toRem(30);
    height: toRem(30);
  }
}

.file-drop-area__label {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.file-drop-area__text {
  font-style: normal;
  margin: auto;

  @include respond-to(large) {
    font-size: toRem(14);
  }
}

input[type='file']::file-selector-button {
  display: none;
}
</style>
