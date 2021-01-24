<template lang="html">
    <div >
        <Heador/>
        <Mslider/>
        <Ada/>
        <Finance/>
        <Adb/>
        <Adc/>
        <Add/>
        <Footor cname="mfootor"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Mslider from "./mslider.vue"
import Ada from "./ada.vue"
import Finance from "./finance.vue"
import Adb from "./adb.vue"
import Adc from "./adc.vue"
import Add from "./add.vue"

export default {
    components: {
        Heador,
        Mslider,
        Ada,
        Finance,
        Adb,
        Adc,
        Add,
        Footor,
        Navbar,
    },
}
</script>

<style lang="scss">
 @import '../../css/reset.scss';
 .mfootor{
     margin-top: 0 !important;
   ul{
    li{
        &:first-child{
            display: none;
        }
    }
   }
 }
</style>
