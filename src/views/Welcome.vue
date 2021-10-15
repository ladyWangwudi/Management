<template>
    <div>
    <el-button type="info" @click="exit">退出</el-button>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {
      exit(){
         this.$router.push('/login')
         window.sessionStorage.clear()
         
      }

    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>

