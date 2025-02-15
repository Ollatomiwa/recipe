<script setup lang="ts">
import { type Recipe} from '../../../types/types';
const { id } = useRoute().params;

const { data, error } = await useFetch<Recipe>(
  `https://dummyjson.com/recipes/${id}`
);
</script>

<template>
    <div>

    </div>
</template>


