<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "shows",
  data(){
    return{
      fileType: null,
      fileList: [],
    }
  },
  components:{

  },
  watch:{
    '$store.state.fileType.id': function (){
      this.fileType = this.$store.state.getters.fileType;
    }
  }
}
</script>

<style scoped>

</style>