//	判断是否登录
class Btncar{
	constructor(){
		this.btn=document.querySelector(".head-r .btn");
		this.init();
	}
	init(){
		var that=this;
		
		this.btn.onclick=function(){
			that.load();
		}
	}
	load(){
		this.n=localStorage.getItem("loginUser");
		
		this.loginmsg=JSON.parse(this.n);
		console.log(this.n);
		this.event();
	}
	event(){
		
		if(!this.n){
			location.href="login.html";
			
		}else if(this.loginmsg.user){
			location.href="list.html";
		}
		
	
	}
}

new Btncar();
