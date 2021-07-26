<template>
    <div class="project">
        <h3>
            <router-link
                :to="{ name: 'ProjectDetails', params: { id: details.id } }"
                >{{ details.title }}</router-link
            >
        </h3>
        <p>{{ details.description }}</p>
        <ul>
            <li v-for="cat in details.categories" :key="'cat' + cat.id">
                {{ cat.title }}
            </li>
        </ul>
        <time :datetime="details.date">{{ useDateFormat(details.date) }}</time>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectData } from '../types';
import { useDateFormat } from '../hooks/useDateFormat';

export default defineComponent({
    props: {
        details: {} as PropType<ProjectData>,
    },
    setup() {
        return { useDateFormat };
    },
});
</script>

<style scoped lang="scss"></style>
