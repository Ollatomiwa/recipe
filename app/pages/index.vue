<script setup lang="ts">
import { type RecipeResponse } from "../../types/types";
const { data, error } = await useFetch<RecipeResponse>(
  "https://dummyjson.com/recipes?limit=12"
);

</script>
<template>
  <div>
    <main>
      <section class="bg-[#f1f1f1]">
        <div
          class="container flex flex-col lg:flex-row items-center py-20 gap-10"
        >
          <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
              Care of the Kitchen with ease: Make that extra effort today!
            </h1>
            <p class="text-xl lg:text-2xl mb-8 text-balance">
              Discover African recipes to help you prepare your favourite dish.
            </p>
            <button
              class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer"
            >
              Browse Recipes
            </button>
          </div>
          <div class="flex-1 order-1 lg:order-2">
            <NuxtImg
              sizes="xs:100vw sm:667px "
              src="/hero.png"
              format="webp"
              alt="Hero Page"
              densities="x1"
            />
          </div>
        </div>
      </section>
      <section class="py-20 container" id="recipe">
        <h2 class="text-3xl lg:text-5xl mb-2">Discover, Prepare and Share</h2>
        <p class="text-lg lg:text-xl mb-8">
          Check out our most popular recipes
        </p>
        <div v-if="!error"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4"
        >
          <div
            v-for="recipe in data?.recipes"
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
                <NuxtLink :to="`/recipes/${recipe.id}`"
                  class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lh cursor-pointer"
                >
                  View
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="text-xl">Oops, something went wrong, Please try again later</p>
      </section>
    </main>
  </div>
</template>
