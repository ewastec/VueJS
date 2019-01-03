new Vue({
    el: '#exercise4',
    data: {
        isfalse: false
    },
    methods: {
        startEffect: function() {
            console.log('methods');
            console.log(this.isfalse);
            console.log(!this.isfalse);
           // this.isfalse = !this.isfalse;
            console.log(this.isfalse);
            console.log(!this.isfalse);
            return this.isfalse
        }
    },
    computed: {
        divClasses: function() {
            console.log('div');
            console.log(this.isfalse);
            console.log(!this.isfalse);
            return {
                highlight: this.isfalse,
                shrink: !this.isfalse
            }
        }
    },
    watch: {}
});

new Vue({
    el: '#app3',
    data: {
        attachedRed: false,
        color: 'red',
        width: 100
    },
    methods: {},
    computed: {
        divClasses: function(){
            console.log('div');
            console.log(this.attachedRed);
            console.log(!this.attachedRed);
            return {
                red: this.attachedRed,
                green: !this.attachedRed
            }
        },
        myStyle: function(){
            return{
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    },
    watch: {}
});

new Vue({
    el: '#exercise3',
    data: {
        value: 0,
        timeout: 5000
    },
    computed: {
        result: function(){
            return this.value != 37 ? 'not there yet' : 'done';
        }
    },
    watch: {
        result: function(value){
            var vm = this;
            setTimeout(function(){
                vm.value= 0;
            }, vm.timeout);
        }
    }
});

new Vue({
    el: '#app2',
    data: {
        counter: 0
    },
    computed: {
        output: function(){
            return this.counter > 5 ? 'greater than 5' : 'smaller than 5 or 5';
        }
    },
    watch: {
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            }, 2000)
        }
    }
});

new Vue({
    el: '#exercise2',
    data: {
        value: '',
        value2: ''
    },
    methods: {
        alert: function(){
            alert('hello');
        },
        store: function(event){
            this.value = event.target.value;
        },
        store2: function(event){
            this.value2 = event.target.value;
        }
    }
});

new Vue({
    el: '#fun',
    data: {
        x: 0,
        y: 0,
        number: 0
    },
    methods: {
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = 2;
        },
        increase: function(x){
            return this.number += x;
        },
        minus: function(x){
            return this.number -= x;
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