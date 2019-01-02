new Vue({
    el: '#fun',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates: function(){
            this.x = 3;
            this.y = 2;
        }
    }
});

new Vue({
    el: "#exercise",
    data:{
        name: 'Ewa',
        age: 30,
        link: 'https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg'
    },
    methods:{
        newAge: function(){
            return this.age * 3;
        },
        random: function(){
            return Math.random();
        }
    }
});

new Vue({
	el: '#app',
	data: {
		title: 'Hi title',
        messag: 'today is: ' + new Date().toLocaleString(),
        seen: true,
        todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
        ],
        message: '! namtab si siht olleH',
        info: "what's up?",
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">GOOGLE</a>',
        number: 0
	},
	methods: {
		changeTitle: function () {
  		this.title = event.target.value;
        },
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },
        increase: function(){
            return this.number++;
        }
	}
});