config = [
	// {
	// 	id: 'feed',
	// 	title: '<i class="bi bi-newspaper"></i> Feed',
	// 	options: [
	// 		{
	// 			id: 'feed_econet_federal',
	// 			text: 'Econet - Federal',
	// 			type: 'switch',
	// 			callback: '',
	// 			help: '',
	// 		},
	// 		{
	// 			id: 'feed_econet_trabalhista',
	// 			text: 'Econet - Trabalhista',
	// 			type: 'switch',
	// 			callback: '',
	// 			help: '',
	// 		},
	// 		{
	// 			id: 'feed_econet_comex',
	// 			text: 'Econet - Comex',
	// 			type: 'switch',
	// 			callback: '',
	// 			help: '',
	// 		},
	// 		{
	// 			id: 'feed_econet_icms',
	// 			text: 'Econet - ICMS',
	// 			type: 'switch',
	// 			callback: '',
	// 			help: '',
	// 		},
	// 		{
	// 			id: 'feed_econet_ipi',
	// 			text: 'Econet - IPI',
	// 			type: 'switch',
	// 			callback: '',
	// 			help: '',
	// 		},
	// 	],
	// },

	{
		id: 'hotkeys',
		title: '<i class="bi bi-keyboard"></i> Atalhos',
		options: [
			{
				id: 'hotkeys_copyZone',
				text: 'CopyZone',
				type: 'switch',
				callback: '',
				help: 'CopyZone é uma extensão da área de transferência do windows. Você pode copiar textos com [Alt]+[0-9] e colar com [Ctrl]+[0-9]',
			},			
			{
				id: 'hotkeys_calculator',
				text: 'Calculadora',
				type: 'switch',
				callback: '',
				help: 'Abre calculadora e a deixa sempre visível.<br>Atalho: [F1]<br>Abre uma nova calculadora.<br>Atalho: [Shift]+[F1]',
			},
			{
				id: 'hotkeys_screenCapture',
				text: 'Captura de Tela',
				type: 'switch',
				callback: '',
				help: 'Captura e fixa uma área da tela.<br>Atalho: [Win]+[Mouse Esq]',
			},
			{
				id: 'hotkeys_coordMouse',
				text: 'Coordenada do Mouse',
				type: 'switch',
				callback: '',
				help: 'Exibe a atual coordenada do ponteiro do mouse.<br>Atalho: [Ctrl]+[´]',
			},
		],
	},

	{
		id: 'clipboardTreatments',
		title: '<i class="bi bi-database-fill-gear"></i> Área de Transferência',
		options: [
			{
				id: 'clipboardTreatments_status',
				text: 'Área de Transferência',
				type: 'switch',
				callback: 'switchClipboardTreatment()',
				help: 'Modifica o conteúdo da área de transferência.<br>Atalho: [Ctrl]+[Shift]+[v]',
			},
			// {
			// 	id: 'clipboardTreatments_cnpj',
			// 	text: 'CNPJ',
			// 	type: 'switch',
			// 	callback: '',
			// 	help: 'Remove a pontuação de CNPJ\'s.',
			// },
			// {
			// 	id: 'clipboardTreatments_cpf',
			// 	text: 'CPF',
			// 	type: 'switch',
			// 	callback: '',
			// 	help: 'Remove a pontuação de CPF\'s.',
			// },
			// {
			// 	id: 'clipboardTreatments_eletronic_key',
			// 	text: 'Chave eletronica',
			// 	type: 'switch',
			// 	callback: '',
			// 	help: 'Remove a pontuação de Chaves Eletronicas.',
			// },
			{
				id: 'clipboardTreatments_chart_of_accounts',
				text: 'Plano de contas',
				type: 'switch',
				callback: '',
				help: 'Remove a pontuação e dígitos verificadores de contas do plano de contas.',
			},
			{
				id: 'clipboardTreatments_accounting_values',
				text: 'Valores',
				type: 'switch',
				callback: '',
				help: 'Remove pontos e as letras \'C\' e \'D\' de números. ex: <u>0.000,00D</u>',
			},
			// {
			// 	id: 'clipboardTreatments_participants',
			// 	text: 'Participantes',
			// 	type: 'switch',
			// 	callback: '',
			// 	help: 'Cola apenas o CNPJ caso o formato da cópia seja: <br><u>00.000.000/0001-00 ABCDE FG HIJKLM</u>',
			// },
		],
	},

	{
		id: 'textTools',
		title: '<i class="bi bi-fonts"></i> Ferramentas de Texto',
		options: [
			{
				id: 'textTools_caseTools',
				text: 'Caixa de texto',
				type: 'switch',
				callback: '',
				help: 'Converte a caixa do texto selecionado.<br>[Ctrl]+[Shift]+[U] - Todas em maíúsculas<br>[Ctrl]+[Shift]+[L] - Todas em minúsculas<br>[Ctrl]+[Shift]+[K] - Apenas as primeiras maíúsculas<br>[Ctrl]+[Shift]+[I] - Inverter a caixa<br>[Ctrl]+[Shift]+[,] - Remove acentuação<br>[Ctrl]+[Shift]+[.] - Remove pontuação<br>',
			},
			{
				id: 'textTools_dateTools',
				text: 'Incrementar datas',
				type: 'switch',
				callback: '',
				help: 'Cola o texto da área de transferência com competências modificadas.<br>[Ctrl]+[Shift]+[Num+] - competência + 1<br>[Ctrl]+[Shift]+[Num-] - competência - 1<br>',
			},
			{
				id: 'textTools_writeInFull.',
				text: 'Escrever por extenso',
				type: 'switch',
				callback: '',
				help: 'Salva valor ou datas em extenso na área de transferência.<br>Atalho: [Ctrl]+[Shift]+[E]<br>Exemplos:<br>1.234,56 - cento e vinte e três reais e quarenta e cinco centavos<br>01/02/2003 - 01 de fevereiro de 2003<br>',
			},
		],
	},
]