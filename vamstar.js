const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020");

	const result = await page.evaluate(() => {
		let publicationDate = document.querySelectorAll(".col-sm-6 lbl-licitacao");

		let bidingDate =  document.querySelectorAll(".col-sm-6 lbl-licitacao");

		let object = document.querySelectorAll(".lbl-licitacao");

		let link =  document.querySelectorAll(".field field--name-field-icone field--type-image field--label-hidden field__item");

		const publicationDate = [...publicationDate];
		const bidingDate = [...bidingDate];
		const object = [...object];
		const link = [...link];

		return publicationDate.map(h => h.innertext);
		return bidingDate.map(h => h.innertext);
		return object.map(h => h.innertext);
		return link.map(h => h.innertext);

	})

	await browser.close();

})();

