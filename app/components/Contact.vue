<template>
<section class="relative overflow-hidden py-16" id="contact">
    <img src="#" alt="effect" class="absolute bottom-[-400px] -z-10 w-full opacity-[0.2]">
    <div class="mx-auto max-w-7xl px-8 md:px-6">
        <div class="-mx-4 flex flex-wrap lg:justify-between">

            <!-- left info-->
            <div class="w-full px-4 md:w-1/2 xl:w-6/12">
                <div class="mb-12 max-w-[570px] lg:mb-0">
                    <span class="font-large text-blue-500">Contact Us</span>
                    <h1 class="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">GET IN TOUCH WITH US</h1>

                    <!-- address -->
                    <div class="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                        <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                            <ion-icon name="location-outline" class="text-3xl"></ion-icon>
                        </div>
                        <div class="w-full">
                            <h4 class="mb-1 text-xl font-bold text-slate-700">Our Location</h4>
                            <p class="text-base text-slate-800
                            ">366A, Benson Area, ML, Lagos.</p>
                        </div>
                    </div>
                    <!-- phone -->
                    <div class="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                        <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                            <ion-icon name="call-outline" class="text-3xl"></ion-icon>
                        </div>
                        <div class="w-full">
                            <h4 class="mb-1 text-xl font-bold text-slate-700">Phone Number</h4>
                            <p class="text-base text-slate-900
                            ">+2340000000</p>
                            <p class="text-base text-slate-900
                            ">+2340000000</p
                            >
                        </div>
                    </div>
                    <!-- mail -->
                    <div class="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                        <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-blue-500 bg-opacity-5 text-blue-500 sm:h-[70px] sm:max-w-[70px]">
                            <ion-icon name="mail-outline" class="text-3xl"></ion-icon>
                        </div>
                        <div class="w-full text-md">
                            <h4 class="mb-1 text-xl font-bold text-slate-900">Email Address</h4>
                            <p class="text-base text-slate-900
                            ">computcipes@gmail.com</p>
                        </div>
                    </div>


                </div>
            </div>

            <!-- right contact-->
            <div class="w-full px-4 md:w-1/2 xl:w-5/12">
                <div class="relative rounded-lg bg-dodgeroll-gold p-8 shadow-lg shadow-blue-500/10 sm:p-12">
                    <form id="contact-form">
                        <div class="mb-6">
                            <input type="text" name="user_name" placeholder="Your Name" class="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-700 focus:border-blue-900 focus:outline-none">
                        </div>
                        <div class="mb-6">
                            <input type="email" name="user_email" placeholder="Your Email" class="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-700 focus:border-blue-900 focus:outline-none">
                        </div>
                        <div class="mb-6">
                            <textarea name="message"  rows="6" class="resize-none w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-700 focus:border-blue-900 focus:outline-none"></textarea>
                        </div>
                        <div class="">
                            <button type="submit" class="w-full rounded border border-blue-300 bg-black p-3 hover:bg-blue-600 text-white transition-all hover:bg-opacity-90">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    </div>
</section>
</template>

<script setup lang="ts">

</script>

