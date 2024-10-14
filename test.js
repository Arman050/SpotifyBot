// const puppeteer = require('puppeteer-extra');
// const StealthPlugin = require('puppeteer-extra-plugin-stealth');
// const path = require('path');
//
// // Utilise le plugin stealth pour éviter d'être détecté par les sites
// puppeteer.use(StealthPlugin());
//
// (async () => {
//     const browser = await puppeteer.launch({
//         headless: false, // Interface visible
//         args: [
//             `--disable-extensions-except=${path.resolve('./buster')}`, // Chemin vers l'extension Buster
//             `--load-extension=${path.resolve('./buster')}`
//         ]
//     });
//
//     const page = await browser.newPage();
//
//     // Définit un user agent personnalisé
//     await page.setUserAgent(
//         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
//     );
//
//     // Va sur la page avec le reCAPTCHA
//     await page.goto('https://nopecha.com/captcha/recaptcha', { waitUntil: 'networkidle2' });
//
//     // Attends que l'iframe reCAPTCHA soit chargé
//     const recaptchaIframeSelector = 'iframe[src*="recaptcha"]';
//     await page.waitForSelector(recaptchaIframeSelector, { visible: true });
//
//     // Sélectionne tous les frames de la page
//     const frames = await page.frames();
//
//     // Trouve le frame qui contient le reCAPTCHA
//     const recaptchaFrame = frames.find(frame => frame.url().includes('recaptcha'));
//
//     if (!recaptchaFrame) {
//         console.error('Impossible de trouver le frame recaptcha');
//         await browser.close();
//         return;
//     }
//
//     // Debug : afficher le contenu du frame pour vérifier sa structure
//     const frameContent = await recaptchaFrame.content();
//     console.log("Contenu du frame reCAPTCHA : ", frameContent);
//
//     // Attendre que l'élément checkbox soit visible dans l'iframe
//     const checkboxSelector = 'input[type="checkbox"]';
//     await recaptchaFrame.waitForSelector(checkboxSelector, { visible: true });
//
//     // Recherche un élément checkbox générique dans l'iframe
//     const checkbox = await recaptchaFrame.$(checkboxSelector);
//
//     if (checkbox) {
//         console.log('Case à cocher trouvée, clic en cours...');
//         await checkbox.click(); // Clique sur la case à cocher
//     } else {
//         console.error("Impossible de trouver une case à cocher");
//         await browser.close();
//         return;
//     }
//
//     // Attends pour laisser le temps à Buster de résoudre le captcha
//     await page.waitForTimeout(10000); // Attendre pour que Buster résolve
//
//     // Ferme le navigateur
//     await browser.close();
// })();
















const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Étape 1 : Naviguer vers la page
    await page.goto('https://nopecha.com/captcha/recaptcha', { waitUntil: 'networkidle0' });
    console.log('Page loaded.');

    // Étape 2 : Attendre que l'iframe du reCAPTCHA soit disponible
    await page.waitForSelector('iframe[title="reCAPTCHA"]', { visible: true });
    console.log('reCAPTCHA iframe is available.');

    // Étape 3 : Cibler l'iframe du reCAPTCHA
    const frame = await page.frames().find(f => f.url().includes('recaptcha'));

    if (frame) {
        console.log('Found reCAPTCHA frame.');

        // Vérifiez les iframes disponibles
        const frames = page.frames();
        console.log('Available frames:', frames.map(f => f.url()));

        // Ajoutez un délai pour laisser le temps au reCAPTCHA de se charger
        await new Promise(resolve => setTimeout(resolve, 5000)); // Délai de 5 secondes

        // Essaye d'attendre la case à cocher
        try {
            console.log('Waiting for checkbox...');
            // Utiliser l'ID pour sélectionner la case à cocher
            const checkbox = await frame.waitForSelector('#recaptcha-anchor', { visible: true, timeout: 30000 });
            console.log('Checkbox found.');

            // Cliquez sur la case à cocher
            await frame.evaluate(el => el.click(), checkbox);
            console.log('Checkbox clicked.');
        } catch (error) {
            console.error('Checkbox not found or could not be clicked.', error);
        }
    } else {
        console.error('reCAPTCHA frame not found.');
    }

    // Ferme le navigateur après un délai pour observer le résultat
    await new Promise(resolve => setTimeout(resolve, 5000));
    await browser.close();
})();
