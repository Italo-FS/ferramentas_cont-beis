function GoToHomePage() {
	window.location = 'index.html';
}

function GoToConfigPage() {
	window.location = 'configuracoes.html';
}

function GoToNewsPage() {
	window.location = 'news.html';
}

function body_loaded() {
	document.getElementById("breadcrumb").innerHTML = writePath()

	// replace_element("main_header", ahk.get_html_file_content(event, "\\pages\\replacements\\header.html"))
	// replace_element("sidebar", ahk.get_html_file_content(event, "\\pages\\replacements\\sidebar.html"))

	// Ativa as dicas
	atualizar_tooltips()
}

function atualizar_tooltips() {
	$('[data-toggle="tooltip"]').tooltip()
}

function replace_element(idString, elementString) {
	try {
		const replaced = document.getElementById(idString)
		const replacer = createElementFromHTML(elementString).cloneNode(true);
		replaced.parentNode.replaceChild(replacer, replaced)
	} catch (e) {
		alert(e)
	}
}

function createElementFromHTML(htmlString) {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();

	// Change this to div.childNodes to support multiple top-level nodes.
	return div.firstChild;
}


function showHideContentByClass(content) {
	$('.' + content).toggle();
}

function readIniFile(file, section, key) {
	section = section || "";
	key = key || "";
	return ahk.readIniFile(file, section, key);
}

function getFileName() {
	return location.href.split("/").slice(-1)[0];
}

function writePath() {
	let innerHtml = '<nav aria-label="breadcrumb"><ol class="breadcrumb">';
	let elements = routes.findRoute(getFileName())
	for (i = 0; i < elements.length; i++) {

		innerHtml += `<li class="breadcrumb-item active"><a href="${elements[i].fileName}"> ${elements[i].name}</a></li>`
	}
	innerHtml += '</ol></nav>';
	// return innerHtml.substring(3)
	return innerHtml
}

function drawCards() {
	let string = ''
	let elements = routes.findRoute(getFileName())
	try {
		element = elements.pop()

		const cards = document.createElement('div')
		for (i = 0; i < element.heirs.length; i++) {
			const card = document.createElement('div')
			card.classList.add('card-mainmenu')

			const card_inner_area = document.createElement('div')
			card_inner_area.classList.add('card')
			card_inner_area.classList.add('text-center')

			const card_body = document.createElement('div')
			card_body.classList.add('card-body')

			const card_icon = document.createElement('h5')
			card_icon.classList.add('card-img-top')
			card_icon.innerHTML = element.heirs[i].cardIcon

			const card_title = document.createElement('p')
			card_title.classList.add('card-title')
			card_title.innerHTML = element.heirs[i].cardName

			const link = document.createElement('a')
			link.classList.add('stretched-link')
			link.href = element.heirs[i].fileName

			if ((element.heirs[i].fileName) === '#' || (element.heirs[i].fileName) === '') {
				card_inner_area.classList.add('card-disabled')
			}

			card_body.appendChild(card_icon)
			card_body.appendChild(document.createElement('hr'))
			card_body.appendChild(card_title)
			card_body.appendChild(link)
			card_inner_area.appendChild(card_body)
			card.appendChild(card_inner_area)
			cards.appendChild(card)
			
			// string = string + '<div class="card-mainmenu">'
			// string = string + '	<div class="card text-center">'
			// string = string + '		<div class="card-body">'
			// string = string + '			<h5 class="card-img-top">' + element.heirs[i].cardIcon + '</h5>'
			// string = string + '			<hr>'
			// string = string + '			<p class="card-title">' + element.heirs[i].cardName + '</p>'
			// string = string + '			<a href="' + element.heirs[i].fileName + '" class="stretched-link"></a>'
			// string = string + '		</div>'
			// string = string + '	</div>'
			// string = string + '</div>'
		}

		return cards
	} catch (e) {
		// document.createElement('p')
		// string = e
		return e
	}
	return string
}

function openBrowser(url) {
	ahk.openBrowser(url)
}

function createPikadayInstance(fieldId) {
	// Lembre de importar:
	// <link rel="stylesheet" href="libs/pikaday/pikaday.css">
	// <script src="libs/pikaday/pikaday.js"></script>

	const picker = new Pikaday({
		field: document.getElementById(fieldId),
		format: 'DD/MM/YYYY',
		onSelect: function (date) {
			console.log('Selected date: ' + date);
		}
	});
}

// Configurações =================================================================================================

function drawConfigCards(config) {
	string = ''
	try {
		for (i = 0; i < config.length; i++) {
			string = string + '	<div class="card config-card" style="margin: 3px;">'
			string = string + '		<h5 class="card-header">'
			string = string + '			' + config[i]['title']
			string = string + '		</h5>'
			string = string + '		<div class="card-body">'

			for (j = 0; j < config[i]['options'].length; j++) {
				if (config[i]['options'][j]['type'] === "switch") {
					const callback = config[i]['options'][j]['callback'];
					const configId = config[i]['id'];
					const configOptionId = config[i]['options'][j]['id'];
					const configOptionHelp = config[i]['options'][j]['help'];
					const configOptionText = config[i]['options'][j]['text'];

					string = string + '		<div class="custom-control custom-switch" data-toggle="tooltip" data-html="true" data-placement="right" title="' + configOptionHelp + '">'
					string = string + '			<input type="checkbox" class="custom-control-input general_switch" id="' + configOptionId + '" onchange="ahk.configChange(\'' + configId + '\', \'' + configOptionId + '\', this.checked);' + callback + '"' + ((ahk.configGet(configId, configOptionId)) ? 'checked' : '') + '>'
					string = string + '			<label class="custom-control-label" for="' + configOptionId + '">' + configOptionText + '</label>'
					string = string + '		</div>'
				}
			}

			string = string + '		</div>'
			string = string + '	</div>'
		}
	} catch (e) {
		string = e
	}
	document.getElementById("config_cards").innerHTML = string
	atualizar_tooltips()
}

function switchClipboardTreatment() {
	const cardContent = document.getElementById('clipboard_treatments_status').parentElement.parentElement
	const contentChildren = cardContent.children

	for (var i = 1; i < contentChildren.length; i++) {
		contentChildren[i].querySelector('input').disabled = !(contentChildren[0].querySelector('input').checked)
	}
}

// Formatações ===================================================================================================

function inputToValue(inputID) {
	let inputString = document.getElementById(inputID).value.replace('.', '').replace(',', '.')
	return isNaN(parseFloat(inputString)) ? 0.00 : parseFloat(inputString)
}

function formatarDinheiro(valor) {
	return "R$ " + valor.toFixed(2).replace(".", ",");
}

function formatarPorcentagem(valor) {
	return (valor * 100).toFixed(2).replace(".", ",") + "%";
}

// Debug =========================================================================================================

function downloadSourceCode() {
	AddToClipboard(document.getElementsByTagName('html')[0].innerHTML)
}

function MsgBox(Text, Title, Options) {
	Title = Title || "";
	key = Options || "";
	ahk.js_MsgBox(Text, Title, Options)
}

function AddToClipboard(Text) {
	ahk.AddToClipboard(Text)
}