class List{
	constructor(){
		this.cont=document.querySelector("#content");
		this.list=document.querySelector("#content .listdata");
		this.url="http://localhost/project2/data/data.json";
		this.init();
	}
	init(){
		var that=this;
		ajaxPost(this.url,function(res){
			
			that.res=JSON.parse(res);
			//console.log(res);
			that.display();
		})
	}
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
			str+=`<li index="${this.res[i].goodsId}" liyang="${this.res[i].goodsId}"><img src="${this.res[i].src}">
					<p class="new-c">${this.res[i].name}</p>
					<span class="new-p">${this.res[i].price}</span>
					<span class="addCar">加入购物车</span>
				</li>`
		}
		console.log(str)
		this.list.innerHTML=str;
	}
}
new List();
