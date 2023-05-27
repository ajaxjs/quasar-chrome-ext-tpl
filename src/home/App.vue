<template>
    <div id="popup">
        <h3>New Tab</h3>
        <q-btn no-caps color="primary" label="Label" />
    </div>
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
