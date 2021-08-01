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
                <div
                    class="content"
                    v-if="content.__typename === 'ComponentSectionsRichText'"
                    v-html="parseMD(content.content)"
                ></div>
            </div>
            <time :datetime="project.date">{{
                useDateFormat(project.date)
            }}</time>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { ProjectData } from '../types';
import { useDateFormat } from '../hooks/useDateFormat';
import { useQuery, useResult } from '@vue/apollo-composable';
import getProject from '../graphql/project.query.gql';
import MarkdownIt from 'markdown-it';

export default defineComponent({
    setup() {
        const md = new MarkdownIt();

        const parseMD = (text: string) => md.render(text);

        const route = useRoute();

        const { error, loading, result } = useQuery(getProject, {
            id: route.params.id,
        });

        const project = useResult<any, ProjectData, any>(
            result,
            undefined,
            (data) => data.project
        );

        return {
            error,
            loading,
            project,
            useDateFormat,
            parseMD,
        };
    },
});
</script>

<style scoped lang="scss">
.img {
    width: 50%;
}
</style>
