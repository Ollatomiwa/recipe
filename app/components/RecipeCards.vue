<script setup lang="ts">
import { type Recipe } from "../../types/types";

    defineProps<{
        recipe: Recipe;
    }>();
</script>
<template>
      <div
            
            class="flex flex-col shadow rounded-md"
          >
            <NuxtImg
              :src="recipe.image"
              class="rounded-t-md"
              sizes="xs:100vw sm:50vw lg:60px"
              format="webp"
              densities="x1"                   
              alt=""
            />
            <div class="flex flex-col py-6 gap-4 flex-1">
              <p class="text-xl lg:text-2xl font-semibold nb-2">{{recipe.name}}</p>
              <div class="font-normal w-full bg-white">
                <div class="flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
                  <div class="flex items-center gap-1">
                    <nuxt-icon
                      name="mdi:clock-time-eight-outline"
                      style="color: #f79f1a"
                    />
                    <span>{{ recipe.cookTime}}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <nuxt-icon name="mdi:fire" style="color: #f79f1a" />
                    <span>{{  recipe.servings }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Icon name="mdi:star" style="color: #f79f1a" />
                    <span> {{ recipe.rating 
                        }} {{ recipe.reviewCount }}</span>
                  </div>
                </div>
                <Button :to="`/recipes/${recipe.id}`" label="View" />
              </div>
            </div>
          </div>
</template>



