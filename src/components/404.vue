<template>
    <div class="noData">
        <div>
            <img :src="require('../assets/timg.jpeg')" alt="">
        <p>请在微信内打开</p>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>
<style>
.noData{
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    display: flex;
    background: #F7F7F7;
}
.noData img{
    width: 30%;
}

</style>


