var routes = {
	init: function() {
		this.routesList = {
			name:'',
			fileName:'',
			heirs:[
				{
					name:'Menu Principal',
					fileName:'index.html',
					heirs:[
						{
							name:'Setor Contábil',
							fileName:'menu_setor_contabil.html',
							cardName:'Setor Contábil',
							cardIcon:'<i class="bi-c-circle"></i>',
							heirs:[
								{
									name:'Integração Fiscal',
									fileName:'setor_contabil_integracao_fiscal.html',
									cardName:'Integração Fiscal',
									cardIcon:'<i class="bi bi-box-seam"></i>',
									heirs:[]
								},
								{
									name:'Calculadora IOF/IR',
									fileName:'extras_calculadora_ir_iof.html',
									cardName:'Calculadora IOF/IR',
									cardIcon:'<i class="bi bi-calculator"></i>',
									heirs:[]
								},
							]
						},
						{
							name:'Setor Fiscal',
							fileName:'menu_setor_fiscal.html',
							cardName:'Setor Fiscal',
							cardIcon:'<i class="bi-file-spreadsheet"></i>',
							heirs:[
								{
									name:'Calculadora Carga Liquida',
									fileName:'setor_fiscal_calculadora_carga_liquida.html',
									cardName:'Carga Líquida',
									cardIcon:'<i class="bi bi-tsunami"></i>',
									heirs:[]
								},
								{
									name:'Calculadora IRPF MEI',
									fileName:'setor_fiscal_calculadora_irpf_mei.html',
									cardName:'Calculadora IRPF MEI',
									cardIcon:'<i class="bi bi-box-arrow-in-down-left"></i>',
									heirs:[]
								},
								{
									name:'Calculadora Markup',
									fileName:'setor_fiscal_calculadora_markup.html',
									cardName:'Calculadora Markup',
									cardIcon:'<i class="bi bi-calculator"></i>',
									heirs:[]
								},								
								{
									name:'Multa EFD',
									fileName:'#',
									cardName:'Multa EFD',
									cardIcon:'<i class="bi bi-calculator"></i>',
									heirs:[]
								},
								{
									name:'Tabelas Simples',
									fileName:'setor_fiscal_tabelas_simples_nacional.html',
									cardName:'Tabelas Simples',
									cardIcon:'<i class="bi bi-table"></i>',
									heirs:[]
								},
								{
									name:'Chave de Acesso',
									fileName:'setor_fiscal_chave_de_acesso.html',
									cardName:'Chave de Acesso',
									cardIcon:'<i class="bi bi-key"></i>',
									heirs:[]
								},
							]
						},
						{
							name:'Histórico',
							fileName:'historico.html',
							cardName:'Histórico',
							cardIcon:'<i class="bi bi-calendar-check"></i>',
							heirs:[]
						},
						// {
						// 	name:'Extras',
						// 	fileName:'menu_extras.html',
						// 	cardName:'Extras',
						// 	cardIcon:'<i class="bi-star"></i>',
						// 	heirs:[
						// 		{
						// 			name:'Calculadora IOF/IR',
						// 			fileName:'extras_calculadora_ir_iof.html',
						// 			cardName:'Calculadora IOF/IR',
						// 			cardIcon:'<i class="bi bi-calculator"></i>',
						// 			heirs:[]
						// 		},
						// 	]
						// },
					]
				}
			]
		};
	},

	findRoute: function(fileName) {
		var answer = this._findRoute(fileName);
		var route = answer[0];
		var found = answer[1];
		return (found) ? route : false;
	},

	_findRoute: function(searchedRouteFileName, route) {
		if (!route) {
			route = this.routesList;
		}

		for (var i = 0; i < route.heirs.length; i++) {
			var heir = route.heirs[i];
			if (heir.fileName === searchedRouteFileName) {
				return [[heir], true];
			}
			var answer = this._findRoute(searchedRouteFileName, heir);
			var foundedHeir = answer[0];
			var found = answer[1];
			if (found) {
				return [[heir].concat(foundedHeir), true];
			}
		}

		return ['', false];
	}
};

routes.init()