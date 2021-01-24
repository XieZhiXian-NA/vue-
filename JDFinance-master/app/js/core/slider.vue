<template>
    <section :class="cname">
        <swiper :options="options"
        >
            <swiper-slide v-for="item in items" :key="item.src">
                <router-link :to="{name:item.href}">
                    <img :src="item.src" alt=" ">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
        </swiper>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"
import "swiper/css/swiper.css"
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        options: {
            type: Object,
            default() {
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                }
            },
        },
        items: {
            type: Array,
            default() {
                return [
                    { href: "", src: "" },
                ]
            },
        },
        cname: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            swiperOptions: {
                autoplay: true,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                },
            },
        }
    },

    methods: {

    },
}
</script>

<style lang="css">
</style>
