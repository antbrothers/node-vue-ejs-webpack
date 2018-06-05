
new Vue({
    el:'#app',
    data: {
        item: {
            title: 'wo shi zhong guo ren '
        }
    },
    methods:{
        readBook:function(){
            location.href = "/reader"
        }
    }
});