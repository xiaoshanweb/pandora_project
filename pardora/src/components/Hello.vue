<template>
    <div>
        <h2>测试模板</h2>
        <h3>{{msg}}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'Hello'
        }
    },
    created(){
        console.log($);
    }
}
</script>