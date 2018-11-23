<template>
  <div>
    <div v-for="error of errors">
      <q-alert
        type="negative"
        class="q-ma-md"
      >
        {{error}}
      </q-alert>
    </div>
  </div>
</template>
<script>
export default {
  name: 'q-errors',
  props: ['errors']
}
</script>
