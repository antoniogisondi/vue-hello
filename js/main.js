const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello VueJS',
            text_center: 'text-center',
        }
    }
}).mount('#app')