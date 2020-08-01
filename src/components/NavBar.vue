<template>
    <div class="nav">

        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
        :router="true">
            <el-menu-item index="Home" >
                <i class="el-icon-menu"></i>
                <span slot="title" >Home</span>
            </el-menu-item>
            <el-menu-item index="Role" >
                <i class="el-icon-apple"></i>
                <span slot="title">Role</span>
            </el-menu-item>
            <el-menu-item index="User">
                <i class="el-icon-user"></i>
                <span slot="title">User</span>
            </el-menu-item>
            <el-menu-item index="Config">
                <i class="el-icon-setting"></i>
                <span slot="title">Config</span>
            </el-menu-item>
            <el-menu-item index="AAA">
                <i class="el-icon-headset"></i>
                <span slot="title">aaa</span>
            </el-menu-item>
            <el-menu-item index="Help">
                <i class="el-icon-help"></i>
                <span slot="title">Help</span>
            </el-menu-item>
            <el-menu-item index="Setting">
                <i class="el-icon-setting"></i>
                <span slot="title">Setting</span>
            </el-menu-item>
            <el-menu-item index="Bank">
                <i class="el-icon-bank-card"></i>
                <span slot="title">Bank</span>
            </el-menu-item>
            <el-menu-item index="Phone">
                <i class="el-icon-phone"></i>
                <span slot="title">phone</span>
            </el-menu-item>
        </el-menu>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" size="mini">
            <el-radio-button :label="false"   >展开</el-radio-button>
            <el-radio-button :label="true"  >收起</el-radio-button>
        </el-radio-group>
    </div>


</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }


    }
</script>


<style scoped>
    .nav{
        width:13%;
        overflow: hidden;
        position:fixed;
        top:53px;
        left:20px;

    }
    .el-radio-group{
        margin-left:-70px;
        margin-top:20px;
    }
    .el-menu-item{
        color:white;
    }
    .el-menu-item i{
        color:white;
    }
    .el-menu-vertical-demo{
        background-color: #545c64;
        color:white;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

</style>