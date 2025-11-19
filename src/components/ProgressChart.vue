<template>
  <canvas ref="c" width="300" height="80"></canvas>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'
const props = defineProps({ data: Array })
const c = ref(null)
onMounted(()=>{ new Chart(c.value, { type: 'line', data: { labels: props.data.map((_,i)=>i+1), datasets:[{data:props.data, borderColor:'#3b82f6'}] } }) })
</script>