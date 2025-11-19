<template>
  <div>
    <LessonList :lessons="state.lessons" @update="toggle" />
    <ProgressChart :data="streakData" />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import LessonList from '../components/LessonList.vue'
import ProgressChart from '../components/ProgressChart.vue'
import { useProgress } from '../composables/useProgress'
const state = useProgress()
if(!state.lessons.length) state.lessons = [{id:1,title:'Intro',level:1,completed:false,locked:false}]
const toggle = id => { const l=state.lessons.find(x=>x.id===id); if(l) l.completed=!l.completed }
const streakData = computed(()=> state.lessons.map(l=> l.completed ? 1 : 0 ))
</script>