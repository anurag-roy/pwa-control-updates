'use strict';

if ('serviceWorker' in navigator)
{
	navigator.serviceWorker.register('./sw.js');
}
let url = 'https://arca-survey-assets-dev.s3.amazonaws.com/test/SampleZIPFile_30mbmb.zip';

function generateLink(isBlank)
{
	let element = document.createElement('a');
	element.style.display = 'none';
	element.setAttribute('href', url);
	if (isBlank)
	{
		element.setAttribute('target', '_blank');
	}

	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function openWindow(isBlank)
{
	window.open(url, isBlank ? '_blank' : '_self');
}
