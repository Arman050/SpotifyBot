const puppeteer = require('puppeteer');

const SPOTIFY_URL = 'https://partner-provisioning.spotify.com/starbucks/';
const SPOTIFY_LOGIN_URL = 'https://accounts.spotify.com/en/login';
const SPOTIFY_REGISTER_URL = 'https://partner-provisioning.spotify.com/starbucks/register/';

const usernames = ['US8547584', 'US8547585']; // Remplacez par vos noms d'utilisateur Starbucks
const lastName = 'Smith'; // Remplacez par votre nom de famille
const emails = ['tstpu7768735@aol.com', 'ritrumoyda@gufum.com', 'irrrw4237454@aol.com', 'lelado7551@skrank.com']; // Remplacez par votre liste d'emails
const password = 'SPOTIFY12345'; // Remplacez par votre mot de passe

(async () => {
    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];
        const username = usernames[i % usernames.length]; // Gère le cas où le nombre d'e-mails est supérieur au nombre d'utilisateurs

        const browser = await puppeteer.launch({ headless: true }); // Lancer le navigateur en mode headless
        const page = await browser.newPage();

        try {
            // Étape 1 : Accéder à la page d'offre de Spotify
            console.log(`Navigating to ${SPOTIFY_URL} for ${email}...`);
            await page.goto(SPOTIFY_URL, { waitUntil: 'networkidle0' });

            await page.waitForSelector('#authorize-btn', { visible: true });
            await page.click('#authorize-btn');

            // Étape 2 : Attendre la redirection vers la page de connexion Spotify
            await page.waitForNavigation({ waitUntil: 'networkidle0' });
            console.log(`Navigating to ${SPOTIFY_LOGIN_URL}...`);
            await page.goto(SPOTIFY_LOGIN_URL);

            // Étape 3 : Se connecter à Spotify
            console.log(`Logging in with email: ${email}...`);
            await page.type('#login-username', email);
            await page.type('#login-password', password);
            await page.click('#login-button');

            // Attendre que la connexion soit réussie et que la redirection se produise
            await page.waitForNavigation({ waitUntil: 'networkidle0' });

            // Vérifiez si vous êtes redirigé vers la page d'offre
            let isOnOfferPage = true;
            let attempts = 0;

            while (isOnOfferPage && attempts < 5) {
                const currentUrl = page.url();

                if (currentUrl.includes('accounts.spotify.com/en/status')) {
                    console.log('Redirected to status page, navigating to registration page.');
                    await page.goto(SPOTIFY_REGISTER_URL, { waitUntil: 'networkidle0' });
                    attempts++;
                } else if (currentUrl === SPOTIFY_URL) {
                    console.log('Back on offer page, clicking authorize button again.');
                    await page.click('#authorize-btn');
                    await page.waitForNavigation({ waitUntil: 'networkidle0' });
                    attempts++;
                } else {
                    isOnOfferPage = false; // Sortir de la boucle si on n'est pas sur la page d'offre
                }
            }

            // Étape 4 : Accéder à la page de liaison du compte
            await page.waitForSelector('#last-name', { visible: true });
            await page.waitForSelector('#global-user-name', { visible: true });
            await page.waitForSelector('input[type="checkbox"]', { visible: true });
            await page.waitForSelector('button[type="submit"]', { visible: true });

            await page.type('#last-name', lastName);
            await page.type('#global-user-name', username);
            await page.click('input[type="checkbox"]');
            await page.click('button[type="submit"]');

            // Attendre 2 secondes pour voir les résultats
            await new Promise(resolve => setTimeout(resolve, 2000)); // Remplacer par waitForTimeout

            console.log(`Bot a terminé les étapes pour ${email}.`);
        } catch (error) {
            console.error(`Erreur pour ${email}: ${error.message}`);
        } finally {
            await browser.close(); // Fermez le navigateur après chaque compte
        }
    }
})();
