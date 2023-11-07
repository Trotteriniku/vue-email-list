const {createApp}=Vue 

createApp({
    data(){
        return{
            emails: [],
        }
    },
    methods:{

    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((give) =>{
            console.log(give.data.response);
            this.emails.push(give.data.response);
            console.log(this.emails);
            })
            
        }
    }
}).mount('#app')