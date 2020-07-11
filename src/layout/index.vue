<template>
<div class="app-wrapper">
<sidebar class="sidebar-container" />
<Breadcrumb />
<div class="main-container">
<router-view />
</div>
</div>
</template>
<script>
import sidebar from '@/components/SideBar'
import Breadcrumb from '@/components/Breadcrumb'
export default {
    components:{
        sidebar,
        Breadcrumb
    }
}
</script>