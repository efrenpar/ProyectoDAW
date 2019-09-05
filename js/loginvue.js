const vueApp = new Vue({
	el: '#vapp',
	data() {
		return {
			input: {
				username: "",
				password: ""
			},
			isLogged: false
		}
	},
	methods: {
		login() {
				if (this.input.username != "" && this.input.password != "") {
						axios.post('http://localhost:3000/usuarios',{nickname: this.input.username, password: this.input.password})
						.then(result => {
							console.log(result)
							document.cookie="user="+result.data.sessionId
							setTimeout(()=>{
								if(result.data.user['rol'] == 'admin'){
									window.location.href = 'http://localhost:3001/'
								}
								else{
									window.location.href = '/perfil'
								}
							},300)
						}).catch(err=>{
							console.log(err)
						})
						// console.log(this.usuarios[i]['rol']);
						// // if (this.usuarios[i]['rol'] == 'admin') {
						// // 	window.location.href = 'http://localhost:3001/'
						// // } else {
						// // 	window.location.href = '/perfil'
						// // }
					} else {
						console.log("The username and / or password is incorrect");
					}
		}
	}
})

