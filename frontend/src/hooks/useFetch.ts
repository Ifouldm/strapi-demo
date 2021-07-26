import { ref } from 'vue';
import axios from 'axios';

export default function useFetch<T>(url: string) {
    const error = ref();
    const loading = ref(true);
    const data = ref({} as T);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            data.value = response.data;
            loading.value = false;
        } catch (err) {
            error.value = err;
            loading.value = false;
        }
    };
    fetchData();

    return { error, loading, data };
}
