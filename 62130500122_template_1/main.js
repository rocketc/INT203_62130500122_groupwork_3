    const app = {
        data() {
            return {
                rabbits:[{title:"Netherland Dwaf",img:"images/nd.jpg", done:false},
                        {title:"Holland Lop",img:"images/hollandlop.jpg", done:false},
                        {title:"Lionhead",img:"images/lionhead1.jpg", done:false},
                        ]
                
            }
        },
        methods:{
            toggleDone(index){
                this.rabbits[index].done = !this.rabbits[index].done
            }
        },
        computed: {
            countDone(){
                return this.rabbits.filter( t => t.done ).length
            }
        }

    }
    Vue.createApp(app).mount('#app')