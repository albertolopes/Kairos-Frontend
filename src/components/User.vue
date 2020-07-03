<template>
  <div>{{currentUser}}</div>
</template>

<script>
  export default {
     name: 'User',
   data: () =>({
        snackbar: true,
        text: ''
    }),
    computed: {
    currentUser() {
      return this.$store.state;
    }
  }
  }
</script>