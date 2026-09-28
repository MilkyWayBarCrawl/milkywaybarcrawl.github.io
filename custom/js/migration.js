(() => {
	const umbrella = 'https://guidelume.github.io/';
	const page = window.location.pathname.split('/').pop() || 'index.html';
	const destination = page === 'index.html'
		? `${umbrella}index-mwbc.html`
		: `${umbrella}milky-way-bar-crawl/${encodeURIComponent(page)}`;

	const trigger = document.createElement('button');
	trigger.className = 'migration-tab';
	trigger.type = 'button';
	trigger.setAttribute('aria-haspopup', 'dialog');
	trigger.textContent = '↗ We’ve moved';

	const dialog = document.createElement('dialog');
	dialog.className = 'migration-dialog';
	dialog.setAttribute('aria-labelledby', 'migration-title');
	dialog.innerHTML = `
		<button class="migration-close" type="button" aria-label="Close">×</button>
		<h2 id="migration-title">Milky Way Bar Crawl has moved</h2>
		<img src="./custom/migration-box.png" alt="Notice that Milky Way Bar Crawl has moved to Guidelume">
		<p>Continue at the new home, or open this page in its new location.</p>
		<div class="migration-links">
			<a href="${umbrella}">Guidelume home</a>
			<a href="${destination}">This page at Guidelume</a>
		</div>`;

	document.body.append(trigger, dialog);
	trigger.addEventListener('click', () => dialog.showModal());
	dialog.querySelector('.migration-close').addEventListener('click', () => dialog.close());
	dialog.addEventListener('click', event => {
		if (event.target === dialog) dialog.close();
	});
})();
