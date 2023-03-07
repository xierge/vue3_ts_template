<template>
  <Navlink  :menuList="menuList"/>
  <RouterView></RouterView>
</template>


<script setup lang="ts">
import Navlink from "./components/navlink/index.vue"
let menuList =[{
  title:"login",
  href:"/login"
},{
  title:"home",
  href:"/home"
},{
  title:"count",
  href:"/count"
}] 
</script>