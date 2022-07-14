const root = new Vue({
    el: `#root`,
    data: {
        newTask: ``,
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
        deleteTask(i) {
            this.tasks.splice(i, 1)
        },
        addTask() {
            if (this.newTask) {
                this.tasks.push({ text: this.newTask, done: false })
                this.newTask = ``
            }
        }
    }
})