<script>
export default {
    name: 'ButtonComponent',
    props: ['color'], // Allows customization of background color
}
</script>

<template>
    <button class="shop-btn" :style="{ backgroundColor: color }">
        <span class="txt">Shop Now</span>
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    </button>
</template>

<style scoped>
.shop-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 5px 10px; /* Combined padding */
    width: fit-content;
    font-family: 'Arial', sans-serif;
    background-color: #3c923f; /* Default background color */
    color: rgb(251, 251, 251); /* Default text/icon color */
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.shop-btn:hover {
    background-color: #45a049; 
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.shop-btn .txt {
    margin-right: 5px;
}

.shop-btn .fa {
    font-size: 14px;
}
</style>
