<template>
    <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="route.path"
            text-color="#fff"
          >
            <el-menu-item v-for=" menu in  menuList " :index="menu.href" @click="target(menu.href)">
              <el-icon><icon-menu /></el-icon>
              <span> {{ menu.title }}</span>
            </el-menu-item>
          </el-menu>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

const { menuList } = defineProps({
    menuList: {
        type: Array as PropType<{ title: string, href: string }[]>,
    }
})

const target = (href:string)=>{
    router.push(href)
}



</script>

<style>
.menu_item {
    padding: 5px 20px;
}

.active a {
    color: rgb(21, 31, 223);
}
</style>