const root = new Vue({
    el: `#root`,
    data: {
        tasks: [
            {
                done: true,
                text: `Buttare la spazzatua`
            },
            {
                done: false,
                text: `Fare la spesa`
            },
            {
                done: false,
                text: `Fare la spesa`
            },
            {
                done: false,
                text: `Tagliando macchina`
            },
        ]
    },
    methods: {

    }
})