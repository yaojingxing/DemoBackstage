<template>
    <div class="dashboard">
        <el-input placeholder="请输入内容" v-model="input">

        </el-input>
        <el-button icon="el-icon-search"></el-button>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data(){
            return{
                input:""
            }
        }

    }
</script>

<style scoped>
    .el-input{
        width:500px;
    }
</style>