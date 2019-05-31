<template>
    <div class="photo">
        i am photo.vue
        <img v-for="img in imgs" v-bind:key="img" :src= "require('../'+ img.img1)" alt="">
      
    </div>
</template>

<script>
export default {
    name:'photoView',
    created() {
        this.$http.post('/api/photo')
            .then((res) => {
                this.imgs = res.data;
                console.log(imgs);
            })
    },
    computed:{
        // picUrl(){
        //     return this.$api.photo
        // }
    },
    data() {
        return {
           imgs:[]
        }
    }
}
</script>

<style lang="less" scoped>
    .photo img{
        width: 50%;
    }
</style>


