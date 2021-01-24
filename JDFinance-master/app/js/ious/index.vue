<template lang="html">
    <div >
        <Heador/>
        <Islider/>
        <Welfare/>
        <Service/>
        <Footor />
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footor from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Islider from "./islider.vue"
import Welfare from "./welfare.vue"
import Service from "./service.vue"

export default {
    components: {
        Heador,
        Islider,
        Welfare,
        Service,
        Footor,
        Navbar,
    },
}
</script>

<style lang="scss">
 @import '../../css/reset.scss';

</style>
