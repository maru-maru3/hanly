<template>
  <div class="wrap">
    <div class="txt">テストです</div>
    <SimpleForm initial-value="初期値だよ" @submit="onSubmit" />
  </div>
</template>

<script>
import SimpleForm from '~/components/SimpleForm'

export default {
  components: {
    SimpleForm,
  },
  methods: {
    onSubmit(value) {
      // console.log(value)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 40rem;
  margin: 0 auto;
}

.txt {
  margin: 10rem 0 2rem;
  text-align: center;
}
</style>
