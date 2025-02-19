<script setup lang="ts">
import { type RecipeResponse } from "../../types/types";
const { data, error } = await useFetch<RecipeResponse>(
  "https://dummyjson.com/recipes?limit=12"
);

useSeoMeta({
    title: "Computcipes",
    description: "Recipes for you to learn",
    ogTitle: "Computcipes",
    ogDescription: "Recipes for you to learn",
    ogImage: "/hero.png",
    ogUrl: 'localhost:3000',
    twitterTitle: "Computcipes",
    twitterDescription: "Recipes for you to learn",
    twitterImage : "/hero.png",
    twitterCard: "summary",
})
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
        <RecipeCards v-for="recipe in data?.recipes" :recipe="recipe"/>
        </div>
        <p v-else class="text-xl">Oops, something went wrong, Please try again later</p>
      </section>
      <hr/>
     <About/>
     <hr/>
     <Contact/>
     <hr/>
    </main>
    
  </div>
  <!-- ====== footer ====== -->

<footer class="bg-slate-50/80 pt-16">
    <div class="mx-auto max-w-7xl px-8 md:px-6">

        <!-- End footer top -->

        <!-- footer bottom -->
        <div class="flex flex-col justify-between border-t py-8 sm:flex-row">
            <p class="text-md sm:text-sm font-semibold text-dodgeroll-gold">© Copyright 2025 <a href="#" class=""> COMPUTCIPES.</a> All rights reserved.</p>
            <div class="mt-4 flex items-center space-x-4 sm:mt-0">
                <a href="#">
                    <ion-icon name="logo-facebook" class="text-2xl text-dodgeroll-gold hover:text-blue-500 duration-300"></ion-icon>
                </a>
                <a href="#">
                    <ion-icon name="logo-twitter" class="text-2xl text-dodgeroll-gold hover:text-blue-500 duration-300"></ion-icon>
                </a>
                <a href="#">
                    <ion-icon name="logo-youtube" class="text-2xl text-dodgeroll-gold hover:text-blue-500 duration-300"></ion-icon>
                </a>
            </div>
        </div>
        <!-- End footer bottom -->

    </div>
</footer>

<!-- ====== END footer ====== -->

</template>
