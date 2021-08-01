<template>
    <div class="portfolio">
        <div class="loading" v-if="loading">
            <img src="@/assets/loading.gif" alt="Loading" />
        </div>
        <div class="error" v-else-if="error">
            {{ error }}
        </div>
        <Project
            v-else
            v-for="project in projects"
            :details="project"
            :key="project.id"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Project from '../components/Project.vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import allProjects from '../graphql/allProjects.query.gql';
import { ProjectData } from '../types';

export default defineComponent({
    components: {
        Project,
    },
    setup() {
        const { result, loading, error } =
            useQuery<Array<ProjectData>>(allProjects);

        const projects = useResult(result);

        return {
            projects,
            loading,
            error,
        };
    },
});
</script>

<style scoped lang="scss"></style>
