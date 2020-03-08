export default {
    name: 'app',
    data () {
      return {
        msg: 'Edit component',
        name: '',
        surname: '',
        phone: '',
        email: '',
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
        addUser() {
          if (!this.name || !this.surname || !this.phone || !this.email) {
            this.name = '';
            this.surname = '';
            this.phone = '';
            this.email = '';
            return;
          }
    
          this.users.push({"name": this.name, "surname": this.surname, "phone": this.phone, "email": this.email});
          this.name = '';
          this.surname = '';
          this.phone = '';
          this.email = '';
          this.saveUsers();
        },
        changeName(index, elem, value) {
            this.users[index].elem = value;
            this.saveUsers();
        },
        removeUser(x) {
          this.users.splice(x, 1);
          this.saveUsers();
        },
        saveUsers() {
          const parsed = JSON.stringify(this.users);
          localStorage.setItem('users', parsed);
        },
        saveJSON(str, ev) {
          let parsed = JSON.parse(str);

          let arr = [];

          for(let x in parsed) {
            arr.push(parsed[x]);
          }

          ev.value = '';
          

          if(arr[0] == "" || arr[1] == "" || arr[2] == "" || arr[3] == "") {
            return false;
          }

          this.users.push({"name": arr[0], "surname": arr[1], "phone": arr[2], "email": arr[3]});
          this.saveUsers();
          

      }
    }
  }