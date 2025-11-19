<template>
  <div class="lesson-card">
    <h3>{{ lesson.title }}</h3>
    <p>Level: {{ lesson.level }}</p>
    <button @click="$emit('toggle', lesson.id)">{{ lesson.completed ? 'Reset' : (lesson.locked ? 'Locked' : 'Complete') }}</button>
  </div>
</template>
<script setup>
defineProps({ lesson: Object })
</script>