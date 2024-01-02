const estados = {
	11: ["RO", "Rondônia"],
	12: ["AC", "Acre"],
	13: ["AM", "Amazonas"],
	14: ["RR", "Roraima"],
	15: ["PA", "Pará"],
	16: ["AP", "Amapá"],
	17: ["TO", "Tocantins"],
	21: ["MA", "Maranhão"],
	22: ["PI", "Piauí"],
	23: ["CE", "Ceará"],
	24: ["RN", "Rio Grande do Norte"],
	25: ["PB", "Paraíba"],
	26: ["PE", "Pernambuco"],
	27: ["AL", "Alagoas"],
	28: ["SE", "Sergipe"],
	29: ["BA", "Bahia"],
	31: ["MG", "Minas Gerais"],
	32: ["ES", "Espírito Santo"],
	33: ["RJ", "Rio de Janeiro"],
	35: ["SP", "São Paulo"],
	41: ["PR", "Paraná"],
	42: ["SC", "Santa Catarina"],
	43: ["RS", "Rio Grande do Sul"],
	50: ["MS", "Mato Grosso do Sul"],
	51: ["MT", "Mato Grosso"],
	52: ["GO", "Goiás"],
	53: ["DF", "Distrito Federal"]
}

function quebrarCodigo() {
	// Remove qualquer caractere diferente de um numeral
	var codigo = removerNaoNumericos(document.getElementById("codigo").value);
	var resultado = document.getElementById("resultado");

	if (codigo.length === 44) {
		// É uma NF-e
		resultado.innerHTML =  quebrarCodigoNFE(codigo)

	} else if (codigo.length === 35) {
		// É um CT-e
		var uf = codigo.substring(0, 2);
		var ano = codigo.substring(2, 4);
		var mes = codigo.substring(4, 6);
		var cnpj = codigo.substring(6, 20);
		var modelo = codigo.substring(20, 22);
		var serieSAT = codigo.substring(22, 28);
		var codigoNumerico = codigo.substring(28, 34);
		var dv = codigo.substring(34, 35);

		resultado.innerHTML =
			"<b>" + "Código UF: " + "</b>" + uf + " (" + estados[uf][0] + ")" + "<br>" +
			"<b>" + "Ano de emissão: " + "</b>" + "20" + ano + "<br>" +
			"<b>" + "Mês de emissão: " + "</b>" + mes + "<br>" +
			"<b>" + "CNPJ emitente: " + "</b>" + formatarCNPJ(cnpj) + "<br>" +
			"<b>" + "Modelo: " + "</b>" + modelo + "<br>" +
			"<b>" + "Número de série do Equipamento SAT: " + "</b>" + serieSAT + "<br>" +
			"<b>" + "Código Numérico: " + "</b>" + codigoNumerico + "<br>" +
			"<b>" + "Dígito Verificador: " + "</b>" + dv;
	} else {
		resultado.innerHTML = "Código inválido. Por favor, insira um código de 44 dígitos para NF-e ou 35 dígitos para CT-e.";
		resultado.classList.remove("alert-success")
		resultado.classList.add("alert", "alert-danger")
		return
	}

	resultado.classList.remove("alert-danger")
	resultado.classList.add("alert", "alert-success")
}

function quebrarCodigoNFE(codigo) {
	var uf = codigo.substring(0, 2);
	var ano = codigo.substring(2, 4);
	var mes = codigo.substring(4, 6);
	var cnpj = codigo.substring(6, 20);
	var modelo = codigo.substring(20, 22);
	var serie = codigo.substring(22, 25);
	var numero = codigo.substring(25, 34);
	var formaEmissao = codigo.substring(34, 35);
	var codigoNumerico = codigo.substring(35, 43);
	var dv = codigo.substring(43, 44);

	string =
		"<b>" + "Código UF: " + "</b>" + uf + " (" + estados[uf][0] + ")" + "<br>" +
		"<b>" + "Ano de emissão: " + "</b>" + "20" + ano + "<br>" +
		"<b>" + "Mês de emissão: " + "</b>" + mes + "<br>" +
		"<b>" + "CNPJ emitente: " + "</b>" + formatarCNPJ(cnpj) + "<br>" +
		"<b>" + "Modelo: " + "</b>" + modelo + "<br>" +
		"<b>" + "Série: " + "</b>" + serie + "<br>" +
		"<b>" + "Número da NF-e: " + "</b>" + numero + "<br>" +
		"<b>" + "Forma de emissão: " + "</b>" + formaEmissao + "<br>" +
		"<b>" + "Código Numérico: " + "</b>" + codigoNumerico + "<br>" +
		"<b>" + "Dígito Verificador: " + "</b>" + dv;

	return string
}

function removerNaoNumericos(str) {
	var novaStr = "";
	for (var i = 0; i < str.length; i++) {
		if (!isNaN(parseInt(str.charAt(i)))) {
			novaStr += str.charAt(i);
		}
	}
	return novaStr;
}

function formatarCNPJ(cnpj) {
	var cnpjFormatado = "";
	cnpj = removerNaoNumericos(cnpj); // Remove caracteres não numéricos
	if (cnpj.length == 14) {
	  cnpjFormatado += cnpj.substring(0, 2) + ".";
	  cnpjFormatado += cnpj.substring(2, 5) + ".";
	  cnpjFormatado += cnpj.substring(5, 8) + "/";
	  cnpjFormatado += cnpj.substring(8, 12) + "-";
	  cnpjFormatado += cnpj.substring(12);
	}
	return cnpjFormatado;
  }
