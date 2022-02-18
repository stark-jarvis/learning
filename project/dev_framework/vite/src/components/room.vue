<template>
    <div>
        <h1 class="red">{{ msg }}</h1>
        <el-button>默认按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-input class="elinput"></el-input>
        <router-link to="/">Go to Home page...</router-link>
    </div>
</template>

<script setup>
import { show } from 'utils/util';

show('this is the room component showing....');

// 导入页面样式
import 'styles/room.scss';

defineProps({
    msg: String
})
</script>
<style scoped>
.txt { text-align: center; font-size: 18px; }
.elinput {
    width: 20%;
}
</style>
