<template>
      <div class="common-layout">
          <el-container>
            <el-aside width="200px"> <Navlink  :menuList="menuList"/></el-aside>
            <el-container>
              <el-header>Header</el-header>
              <el-main><RouterView class="container" /></el-main>
            </el-container>
          </el-container>
        </div>
</template>

<script lang="ts" setup>
import Navlink from "@/components/NavLink/index.vue"
let menuList = [ {
    title: "home",
    href: "/home"
}, {
    title: "count",
    href: "/count"
}] 
</script>