<template>
    <div class="sub-page get-started-page">
        <div class="sub-page-header mb-4">
            <div class="container">
                <h1 class="mb-2">get_started</h1>
                <h5 class="mb-0">quick start tutorials and sample codes</h5>
            </div>
        </div>
        <div class="mb-4">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" aria-orientation="vertical">
                            <a class="nav-link" data-toggle="pill">Welcome</a>
                            <a class="nav-link" data-toggle="pill">Examples</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-9">
                        <examples />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import examples from './get-started-partials/examples';

export default {
    components: {
        examples
    }
}
</script>

<style lang="scss">
</style>