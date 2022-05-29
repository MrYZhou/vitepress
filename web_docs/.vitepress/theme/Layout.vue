<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme


import { ref } from 'vue'
const input = ref('')

</script>

<template>
  <Layout>
    <!-- 侧边栏的头部 -->
    <template #sidebar-top>
    </template>

    <!-- 导航栏 -->
    <template #navbar-search>
    </template>
  </Layout>
</template>