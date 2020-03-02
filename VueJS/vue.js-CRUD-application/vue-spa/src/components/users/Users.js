export default {
    name: 'app',
    data () {
      return {
        msg: 'Users component',
        users: []
      }
    },
    mounted() {
      if (localStorage.getItem('users')) {
        try {
          this.users = JSON.parse(localStorage.getItem('users'));
        } catch(e) {
          localStorage.removeItem('users');
        }
      }
    },
    methods: {
      removeUser(x) {
        this.users.splice(x, 1);
        this.saveUsers();
      },
      saveUsers() {
        const parsed = JSON.stringify(this.users);
        localStorage.setItem('users', parsed);
      }
    }
  }