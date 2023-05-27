<template>
    <div id="popup">popup - {{count}} <button @click="count+=1">+</button><button @click="count-=1">-</button></div>
</template>

<script setup>
  import {ref} from 'vue'

  const count = ref(0)
</script>

<style>
#popup {
    font-size: 32px;
    color: red;
    padding: 15px;
}
</style>
