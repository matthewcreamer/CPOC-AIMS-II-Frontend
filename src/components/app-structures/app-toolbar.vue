<template>
  <div class="app-tool">
    <div class="app-tool-wrapper">   

        <div class="bg-pic">
            <img src="/img/" alt />
            
        </div>
        <div class="left-col">
            <div class="toolbar-name">{{ calname.currentPageName }}</div>
        </div>
        <div class="right-col">

        </div>

    </div>
  </div>



</template>
<script>
export default{
    name: "app-toolbar",
    create(){
        console.log("this.$store.state.currentPageName",this.$store.state.currentPageName)
    },
    props:{
        calname: String,
        
    },
    data(){
        return{

        };
    },
    computed: {},
    methods: {
    },
    watch: {

    },
};
</script>
<style lang="scss" scoped>
    .app-tool{
        width: 100%;
        min-height: 100px;
        max-height: 10%;
        background-color: #fff;

        .app-tool-wrapper{
            display: flex;
            height: 100%;
            background: rgb(2,0,36);
            background: linear-gradient(90deg, rgb(5, 0, 91) 11%, rgb(2, 2, 171) 37%, rgba(0,212,255,1) 100%);
            text-justify: center;
            justify-items: center;
            
            .bg-pic{
                height: 100%;
            }
            .toolbar-name{
                color: white;
                font-size: 20px;
            }
        }
    }
</style>