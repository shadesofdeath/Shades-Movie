const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/onessc/key')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}