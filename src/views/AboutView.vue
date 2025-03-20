<template>
  <div class="min">
    <h2>This is page is under construction</h2>
  </div>
</template>

<script>
export default {
  computed: {
    spots() {
      return this.$store.state.spots;
    },
  },
  methods: {
    fetchSpots() {
      this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.fetchSpots();
  },
};
</script>
<style scoped>
.min{
  min-height: 50vh;
}
</style>
