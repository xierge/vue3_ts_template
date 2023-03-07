<template>
    <div>
        <span v-for=" item in  menuList" :key="item.title" :class="{ menu_item: true, active: curRoute == item.href }">
            <router-link :to="item.href">{{ item.title }} </router-link>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute()

const { menuList } = defineProps({
    menuList: {
        type: Array as PropType<{ title: string, href: string }[]>,
    }
})

const curRoute = computed(() => {
    return route.path
})


</script>

<style>
.menu_item {
    padding: 5px 20px;
}

.active a {
    color: rgb(21, 31, 223);
}
</style>