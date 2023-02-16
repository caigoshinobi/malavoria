function shareMalavoria() {
	if (navigator.share){
		navigator.share({
			title: "Malavoria",
			url: "https://malavoria.com",
		});
	}
}