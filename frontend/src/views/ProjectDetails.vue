<template>
    <div class="project">
        <div class="loading" v-if="loading">
            <img src="@/assets/loading.gif" alt="Loading" />
        </div>
        <div class="error" v-else-if="error">
            {{ error }}
        </div>
        <div class="project" v-else>
            <h3>
                {{ project.title }}
            </h3>
            <p>{{ project.description }}</p>
            <ul>
                <li v-for="cat in project.categories" :key="cat.id">
                    {{ cat.title }}
                </li>
            </ul>
            <img
                :src="'http://localhost:1337' + project.coverImage.url"
                :alt="project.coverImage.alternativeText"
                class="img"
            />
            <div
                class="blurb"
                v-for="content in project.content"
                :key="content.id"
            >
                {{ content }}
            </div>
            <time :datetime="project.date">{{
                useDateFormat(project.date)
            }}</time>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useFetch from '../hooks/useFetch';
import { useRoute } from 'vue-router';
import { ProjectData } from '../types';
import { useDateFormat } from '../hooks/useDateFormat';

export default defineComponent({
    setup() {
        const route = useRoute();

        const {
            error,
            loading,
            data: project,
        } = useFetch<ProjectData>(
            'http://localhost:1337/projects/' + route.params.id
        );

        return {
            error,
            loading,
            project,
            useDateFormat,
        };
    },
});
</script>

<style scoped lang="scss">
.img {
    width: 50%;
}
</style>
