<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <div class="bg-gradient-to-r from-blue-500 min-h-screen to-purple-500 animate-gradient-x">
        <div class="flex flex-col">
            <div class="container mx-auto pt py-4 md:py-16 px-4 md:px-16">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
