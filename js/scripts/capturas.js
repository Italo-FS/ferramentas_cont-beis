function load_captures() {
	const capturesDiv = document.getElementById('capturas');
	const captures = eval(ahk.ListCaptures());


	// alert(captures.length)
	// alert(captures[0][0])


	for(let i=0;i<captures.length;i++) {
		const card = document.createElement('div');
		card.classList.add('card');

		const card_img = document.createElement('img');
		card_img.classList.add('card-img-top');
		card_img.src = captures[i][1];

		card.appendChild(card_img);

		const card_body = document.createElement('div');
		card_body.classList.add('card-body');

		const card_title = document.createElement('h5');
		card_title.classList.add('card-title');
		card_title.innerHTML = captures[i][0];

		card_body.appendChild(card_title);
		card.appendChild(card_body);

		// card.onclick = function ahk.RestoreCapture(captures[i][0])
		// card.addEventListener("click", ahk.RestoreCapture(captures[i][0]))

		const str = captures[i][0]
		card.onclick = function handleClick(event) {
			ahk.RestoreCapture(str)
		};

		capturesDiv.appendChild(card)
	}

	// string = ahk.ListCaptures().length
	// alert(string)
	// capturesDiv.innerHTML = string
}