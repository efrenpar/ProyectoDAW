function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

const vueApp = new Vue({
	el: '#vapp',
	data() {
		return {
            clientes:[],
			info: "",
		}
	},
	mounted(){
		cliente = atob(getCookie("user"))
        axios
        .get('http://localhost:3000/cliente/'+cliente)
        .then(response => (this.info = response.data))
	}
})

