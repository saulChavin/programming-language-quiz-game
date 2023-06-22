<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  show: Boolean,
})

defineEmits(['close'])
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <span class="close" @click="$emit('close')">&times;</span>
        <slot name="header">
        </slot>
        <div class="modal-body">
          <slot name="modal-body">
          </slot>
        </div>
        <slot name="footer">
        </slot>
      </div>
    </div>
  </Transition>
</template>

<style>
/* styles applied to the custom modal component  */
.modal-mask {
  /* display: none; */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  position: relative;
  margin: auto;
  background-color: #484848;
  margin: 15% auto;
  padding: 20px;
  width: 300px;
  transition: transform 0.3s ease;
}

.close {
  color: #aaa;
  position: absolute;
  top: -6px;
  right: 8px;
  font-size: 24px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-body {
  min-height: 100px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>