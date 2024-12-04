<script>
export default{
    name: 'CategoryComponent',
    props: ['name', 'amount', 'color', 'image' ]
}
</script>
<template>
    <div class="wrapper" :style="{backgroundColor: color}">
        <img :src="'http://localhost:3000/'+image" alt="image" class="image">
        <div class="name">{{ name }}</div>
        <div class="amount">{{ amount }} <span>items</span></div>
    </div>
    
</template>
<style scoped>
.wrapper{
    width: 120px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 10px;
    border-radius: 10px;
    
    
}
.name{
    font: bold;
    font-weight: 400;
    font-size: 14px;font: bold;
    font-weight: 500;
    font-size: 14px;
    color: rgb(22, 20, 20);
    
}
.amount{
    font: bold;
    font-size: 14px;font: bold;
    font-size: 12px;
    color: rgb(32, 24, 10)
    

}
.image{
    width: 90px;
    height: 90px;
    
}
</style>