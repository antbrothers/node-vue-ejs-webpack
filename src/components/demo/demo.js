
import Vue from 'vue'
// new Vue({
//     el:'#app',
//     data: {
//         item: {
//             title: 'wo shi zhong guo ren '
//         }
//     },
//     methods:{
//         readBook:function(){
//             location.href = "/reader"
//         }
//     }
// });

new Vue({
    data: {
        item: {
            title: 'wo shi zhong guo ren '
        }
    },
    render: function(h){
      return h('h1', 'Hi Vue')
    }
  }).$mount('#app')