
{

	imagesLoaded('.last-img', { background: true }, () => {
		document.body.classList.remove("loading");
		document.body.classList.add('imgloaded');
	});
}
