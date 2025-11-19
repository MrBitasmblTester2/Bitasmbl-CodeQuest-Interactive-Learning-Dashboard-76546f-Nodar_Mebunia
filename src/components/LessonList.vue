<template>
  <div>
    <LessonCard v-for="l in lessons" :key="l.id" :lesson="l" @toggle="toggle" />
  </div>
</template>
<script setup>
import LessonCard from './LessonCard.vue'
const props = defineProps({ lessons: Array })
const emit = defineEmits(['update'])
const toggle = id => emit('update', id)
</script>