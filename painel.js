function Painel(ctx, nave){
	this.context = ctx;
	this.nave = nave;

	this.spritesheet = new Spritesheet(ctx, nave.imagem, 3, 2);
	this.spritesheet.linha = 0;
	this.spritesheet.coluna = 0;

	this.pontuacao= 0;
}

Painel.prototype ={
	
	atualizar:function(){

	},

	desenhar:function(){
		var ctx = this.context;

		ctx.scale(0.5, 0.5);
		var x = 20;
		var y = 20;

		for(var i = 1; i <= nave.vidasExtras; i++){
			this.spritesheet.desenhar(x, y);
			y+=40;
		}
		ctx.scale(2,2);

		ctx.save();
		ctx.fillStyle = "yellow";
		ctx.font = "18px sans-serif";
		ctx.fillText(this.pontuacao, 40, 20);
		ctx.restore();
	}
}