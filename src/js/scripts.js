const img = document.getElementById('slidewrap');

if (img !== null) {
	const images = img.getElementsByTagName('img');
	let counter = 1;
	if (counter <= images.length) {
		setInterval(() => {
			images[0].src = images[counter].src;
			// console.log(images[counter].src);
			counter += 1;
			if (counter === images.length) {
				counter = 1;
			}
		}, 1500);
	}
}
