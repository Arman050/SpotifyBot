// const puppeteer = require('puppeteer');
//
// const SPOTIFY_URL = 'https://partner-provisioning.spotify.com/starbucks/';
// const SPOTIFY_LOGIN_URL = 'https://accounts.spotify.com/en/login';
// const SPOTIFY_REGISTER_URL = 'https://partner-provisioning.spotify.com/starbucks/register/';
//
// const usernames = ['US8547584', 'US8547585']; // Remplacez par vos noms d'utilisateur Starbucks
// const lastName = 'Smith'; // Remplacez par votre nom de famille
//
// const emails = [
//     // MINE
//
//     // 'tstpu7768735@aol.com',
//     'ritrumoyda@gufum.com',
//     'irrrw4237454@aol.com',
//
//     // TR SERVICES 11/10/24
//     'gtc1478gtc13@gmail.com',
//     'gtc1478gtc14@gmail.com',
//     'gtc1478gtc15@gmail.com',
//     'gtc1478gtc16@gmail.com',
//     'gtc1478gtc17@gmail.com',
//     'gtc1478gtc111@gmail.com',
//     'jjnho3726019@aol.com',
//     'fyhni7189343@aol.com',
//     'nmxjn1944625@aol.com',
//     'qvxeb5282953@aol.com',
//     'ntich6000002@aol.com',
//     'fvjxz9564537@aol.com',
//     'jxykl9930802@aol.com',
//     'vccug4689728@aol.com',
//     'vrwbo6580802@aol.com',
//     'lklqs4067385@aol.com',
//     'yduwz1484629@aol.com',
//     'ixano3633534@aol.com',
//     'goqsk5079158@aol.com',
//     'pbcgy4900586@aol.com',
//     'waaeg1066643@aol.com',
//     'dwqih5854058@aol.com',
//     'rljqg6700854@aol.com',
//     'qlmnu4015827@aol.com',
//     'lsjvd7435555@aol.com',
//     'khqnv9055479@aol.com',
//     'uijhu8068949@aol.com',
//     'aycud3844250@aol.com',
//     'tsucn3745144@aol.com',
//     'mnqjq9089737@aol.com',
//     'xbodo4796448@aol.com',
//     'vnfzq6125123@aol.com',
//     'alsnfu2973@gmail.com',
//     'asbckzpl16@gmail.com',
//     'asbckzpl17@gmail.com',
//     'asbckzpl18@gmail.com',
//     'asbckzpl19@gmail.com',
//     'seiufhs251@gmail.com',
//     'seiufhs252@gmail.com',
//     'seiufhs253@gmail.com',
//     'seiufhs255@gmail.com',
//     'seiufhs256@gmail.com',
//     'zpjheifou258@gmail.com',
//     'zpjheifou260@gmail.com',
//     'zpjheifou261@gmail.com',
//     'zpjheifou262@gmail.com',
//     'zpjheifou263@gmail.com',
//     'zddq145z@gmail.com',
//     'qgefuoj5151@gmail.com',
//
//         // TR SERVICES 13 / 10 / 24
//         'zxcvbnmyyyu@gmail.com',
//         'aqwxcv85zzd@gmail.com',
//         'oahuh56zd@gmail.com',
//         'qizofj154z@gmail.com',
//         'p3r1x74@gmail.com',
//         'l33nnon@gmail.com',
//         'alsajd254aq@gmail.com',
//         'hqpozkd15z@gmail.com',
//         'okjhgf52ze@gmail.com',
//         'iuhnd85zfe@gmail.com',
//         'izhfuls52ej@gmail.com',
//         'okjznf51zd@gmail.com',
//         '854dsdz4@gmail.com',
//         '21sdg65s@gmail.com',
//         'qodjqoizj45q1@gmail.com',
//         '9876543210y@gmail.com',
//         'hjkllkj9876@gmail.com',
//         'cvbnm12345y@gmail.com',
//         'poiuyt56789@gmail.com',
//         'asdfghjklzy@gmail.com',
//         'qwertyuiopyyy@gmail.com',
//         'asdfghjklyyyu@gmail.com',
//         '12345678dqd0@gmail.com',
//         'qwertyuiopyuy@gmail.com',
//         'sjkbvk26xdvb@gmail.com',
//         'zd585dzc@gmail.com',
//         '5z4d45zd@gmail.com',
//         '84ef8s4fs8@gmail.com',
//         '4qz8d4q55@gmail.com',
//         'qaqigund12345@gmail.com',
//         'grxv124@mail.ru',
//         'lqp94j@mail.ru',
//         '5nhty@mail.ru',
//         'rexa.pl87@mail.ru',
//         'bxpnt237@mail.ru',
//         'qrt19z@mail.ru',
//         'zok63df@mail.ru',
//         'ykf.pl4z@mail.ru',
//         'wxr829ty@mail.ru',
//         'jnv9k3s@mail.ru',
//         'vpqyr77@mail.ru',
//         'gzrt05@mail.ru',
//         'lxwt83v@mail.ru',
//         '3rfwxn@mail.ru',
//         'nsx7fr2@mail.ru',
//         'tqn48kp@mail.ru',
//         'vpxz31@mail.ru',
//         'wlgx0n@mail.ru',
//         'btrgk57@mail.ru',
//         'xrv8pt@mail.ru',
//         'kpt47yn@mail.ru',
//         'flxg92@mail.ru',
//         'dnplx5@mail.ru',
//         '94htpl@mail.ru',
//         'tzq80wp@mail.ru',
//         'ztlwrm21@mail.ru',
//         'knvpx78@mail.ru',
//         'pzxl03g@mail.ru',
//         'bqx49lr@mail.ru',
//         'gntzr5@mail.ru'
//
// ];
//
//
//
//
// const password = 'SPOTIFY12345'; // Remplacez par votre mot de passe
//
// (async () => {
//     for (let i = 0; i < emails.length; i++) {
//         const email = emails[i];
//         const username = usernames[i % usernames.length]; // Gère le cas où le nombre d'e-mails est supérieur au nombre d'utilisateurs
//
//         const browser = await puppeteer.launch({ headless: false}); // Lancer le navigateur en mode headless
//         const page = await browser.newPage();
//
//         try {
//             // Étape 1 : Accéder à la page d'offre de Spotify
//             console.log(`Navigating to ${SPOTIFY_URL} for ${email}...`);
//             await page.goto(SPOTIFY_URL, { waitUntil: 'networkidle0' });
//
//             // await page.waitForSelector('#authorize-btn', { visible: true });
//             await page.click('#authorize-btn');
//
//             // Étape 2 : Attendre la redirection vers la page de connexion Spotify
//             await page.waitForNavigation({ waitUntil: 'networkidle0' });
//             console.log(`Navigating to ${SPOTIFY_LOGIN_URL}...`);
//             // await page.goto(SPOTIFY_LOGIN_URL);
//
//             // Étape 3 : Se connecter à Spotify
//             console.log(`Logging in with email: ${email}...`);
//             await page.type('#login-username', email);
//             await page.type('#login-password', password);
//             await page.click('#login-button');
//
//             // Attendre que la connexion soit réussie et que la redirection se produise
//             await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//             // Vérifiez si vous êtes redirigé vers la page d'offre
//             let isOnOfferPage = true;
//             let attempts = 0;
//
//             while (isOnOfferPage && attempts < 5) {
//                 const currentUrl = page.url();
//
//                 if (currentUrl.includes('accounts.spotify.com/en/status')) {
//                     console.log('Redirected to status page, navigating to registration page.');
//                     await page.goto(SPOTIFY_REGISTER_URL, { waitUntil: 'networkidle0' });
//                     attempts++;
//                 } else if (currentUrl === SPOTIFY_URL) {
//                     console.log('Back on offer page, clicking authorize button again.');
//                     await page.click('#authorize-btn');
//                     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//                     attempts++;
//                 } else {
//                     isOnOfferPage = false; // Sortir de la boucle si on n'est pas sur la page d'offre
//                 }
//             }
//
//             // Étape 4 : Accéder à la page de liaison du compte
//             await page.waitForSelector('#last-name', { visible: true });
//             await page.waitForSelector('#global-user-name', { visible: true });
//             await page.waitForSelector('input[type="checkbox"]', { visible: true });
//             await page.waitForSelector('button[type="submit"]', { visible: true });
//
//             await page.type('#last-name', lastName);
//             await page.type('#global-user-name', username);
//             await page.click('input[type="checkbox"]');
//             await page.click('button[type="submit"]');
//
//             // Attendre 2 secondes pour voir les résultats
//             await new Promise(resolve => setTimeout(resolve, 2000)); // Remplacer par waitForTimeout
//
//             console.log(`Bot a terminé les étapes pour ${email}.`);
//         } catch (error) {
//             console.error(`Erreur pour ${email}: ${error.message}`);
//         } finally {
//             await browser.close(); // Fermez le navigateur après chaque compte
//         }
//     }
// })();





const puppeteer = require('puppeteer');

const SPOTIFY_URL = 'https://partner-provisioning.spotify.com/starbucks/';
const SPOTIFY_LOGIN_URL = 'https://accounts.spotify.com/en/login';
const SPOTIFY_REGISTER_URL = 'https://partner-provisioning.spotify.com/starbucks/register/';

const usernames = ['US8547584', 'US8547585']; // Remplacez par vos noms d'utilisateur Starbucks
const lastName = 'Smith'; // Remplacez par votre nom de famille

const emails = [
    // Vos e-mails ici
    'ritrumoyda@gufum.com',
    'irrrw4237454@aol.com',
    // Ajoutez d'autres e-mails selon vos besoins
];

const password = 'SPOTIFY12345'; // Remplacez par votre mot de passe

// Fonction pour générer un délai aléatoire
const randomDelay = (min = 10000, max = 30000) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Fonction pour déplacer la souris de manière aléatoire
const moveMouseRandomly = async (page) => {
    const x = Math.floor(Math.random() * 1280); // Largeur de l'écran
    const y = Math.floor(Math.random() * 720);  // Hauteur de l'écran
    await page.mouse.move(x, y);
};

const addCustomCursor = async (page) => {
    await page.evaluate(() => {
        const cursor = document.createElement('div');
        cursor.style.position = 'absolute';
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.border = '2px solid red'; // Couleur du curseur
        cursor.style.borderRadius = '50%'; // Pour donner un aspect circulaire
        cursor.style.pointerEvents = 'none'; // Pour éviter d'interférer avec les clics
        cursor.style.zIndex = '9999'; // Assurez-vous qu'il est au-dessus des autres éléments
        cursor.style.transition = 'transform 0.1s ease'; // Animation pour le mouvement
        cursor.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Pour voir le curseur

        document.body.appendChild(cursor);

        const coordinatesDisplay = document.createElement('div');
        coordinatesDisplay.style.position = 'fixed';
        coordinatesDisplay.style.bottom = '10px';
        coordinatesDisplay.style.left = '10px';
        coordinatesDisplay.style.backgroundColor = 'white';
        coordinatesDisplay.style.padding = '5px';
        coordinatesDisplay.style.borderRadius = '5px';
        coordinatesDisplay.style.zIndex = '9999';
        document.body.appendChild(coordinatesDisplay);

        document.addEventListener('mousemove', (event) => {
            cursor.style.left = `${event.pageX}px`;
            cursor.style.top = `${event.pageY}px`;

            // Afficher les coordonnées de la souris sur la page
            coordinatesDisplay.textContent = `Mouse Position: X: ${event.pageX}, Y: ${event.pageY}`;
        });
    });
};

(async () => {
    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];
        const username = usernames[i % usernames.length]; // Gère le cas où le nombre d'e-mails est supérieur au nombre d'utilisateurs

        const browser = await puppeteer.launch({ headless: true}); // Lancer le navigateur en mode headless
        const page = await browser.newPage();

        // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36');

        // Ajouter le curseur personnalisé
        await addCustomCursor(page);

        try {
            // Étape 1 : Accéder à la page d'offre de Spotify
            console.log(`Navigating to ${SPOTIFY_URL} for ${email}...`);
            await page.goto(SPOTIFY_URL, { waitUntil: 'networkidle0' });
            await moveMouseRandomly(page);
            await new Promise(resolve => setTimeout(resolve, randomDelay()));
            await page.click('#authorize-btn');

            // Étape 2 : Attendre la redirection vers la page de connexion Spotify
            await page.waitForNavigation({ waitUntil: 'networkidle0' });
            console.log(`Navigating to ${SPOTIFY_LOGIN_URL}...`);

            // Étape 3 : Se connecter à Spotify
            console.log(`Logging in with email: ${email}...`);
            await moveMouseRandomly(page);
            await new Promise(resolve => setTimeout(resolve, randomDelay()));
            await page.type('#login-username', email);
            await moveMouseRandomly(page);
            await new Promise(resolve => setTimeout(resolve, randomDelay()));
            await page.type('#login-password', password);
            await moveMouseRandomly(page);
            await new Promise(resolve => setTimeout(resolve, randomDelay()));
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
            await moveMouseRandomly(page);
            await new Promise(resolve => setTimeout(resolve, randomDelay()));
            await page.type('#global-user-name', username);
            await moveMouseRandomly(page);
            await new Promise(resolve => setTimeout(resolve, randomDelay()));
            await page.click('input[type="checkbox"]');
            await moveMouseRandomly(page);
            await new Promise(resolve => setTimeout(resolve, randomDelay()));
            await page.click('button[type="submit"]');

            // Attendre un délai aléatoire avant de passer au prochain e-mail
            await new Promise(resolve => setTimeout(resolve, randomDelay(3000, 6000)));

            console.log(`Bot a terminé les étapes pour ${email}.`);
        } catch (error) {
            console.error(`Erreur pour ${email}: ${error.message}`);
        } finally {
            await browser.close(); // Fermez le navigateur après chaque compte
        }
    }
})();













//
//
// const puppeteer = require('puppeteer');
//
// const SPOTIFY_URL = 'https://partner-provisioning.spotify.com/starbucks/';
// const SPOTIFY_LOGIN_URL = 'https://accounts.spotify.com/en/login';
// const SPOTIFY_REGISTER_URL = 'https://partner-provisioning.spotify.com/starbucks/register/';
//
// const usernames = ['US8547584', 'US8547585']; // Remplacez par vos noms d'utilisateur Starbucks
// const lastName = 'Smith'; // Remplacez par votre nom de famille
//
//
// const emails = [
//     'qaqigund12345@gmail.com',
//     'grxv124@mail.ru',
//     'lqp94j@mail.ru',
//     '5nhty@mail.ru',
//     'rexa.pl87@mail.ru',
//     'bxpnt237@mail.ru',
//     'qrt19z@mail.ru',
//     'zok63df@mail.ru',
//     'ykf.pl4z@mail.ru',
//     'wxr829ty@mail.ru',
//     'jnv9k3s@mail.ru',
//     'vpqyr77@mail.ru',
//     'gzrt05@mail.ru',
//     'lxwt83v@mail.ru',
//     '3rfwxn@mail.ru',
//     'nsx7fr2@mail.ru',
//     'tqn48kp@mail.ru',
//     'vpxz31@mail.ru',
//     'wlgx0n@mail.ru',
//     'btrgk57@mail.ru',
//     'xrv8pt@mail.ru',
//     'kpt47yn@mail.ru',
//     'flxg92@mail.ru',
//     'dnplx5@mail.ru',
//     '94htpl@mail.ru',
//     'tzq80wp@mail.ru',
//     'ztlwrm21@mail.ru',
//     'knvpx78@mail.ru',
//     'pzxl03g@mail.ru',
//     'bqx49lr@mail.ru',
//     'gntzr5@mail.ru'
// ];
//
//
//
//
// const password = 'SPOTIFY12345'; // Remplacez par votre mot de passe
//
// (async () => {
//     for (let i = 0; i < emails.length; i++) {
//         const email = emails[i];
//         const username = usernames[i % usernames.length]; // Gère le cas où le nombre d'e-mails est supérieur au nombre d'utilisateurs
//
//         const browser = await puppeteer.launch({ headless: false }); // Lancer le navigateur en mode headless
//         const page = await browser.newPage();
//
//         try {
//             // Étape 1 : Accéder à la page d'offre de Spotify
//             console.log(`Navigating to ${SPOTIFY_URL} for ${email}...`);
//             await page.goto(SPOTIFY_URL, { waitUntil: 'networkidle0' });
//
//             // await page.waitForSelector('#authorize-btn', { visible: true });
//             await page.click('#authorize-btn');
//
//             // Étape 2 : Attendre la redirection vers la page de connexion Spotify
//             await page.waitForNavigation({ waitUntil: 'networkidle0' });
//             console.log(`Navigating to ${SPOTIFY_LOGIN_URL}...`);
//             // await page.goto(SPOTIFY_LOGIN_URL);
//
//             // Étape 3 : Se connecter à Spotify
//             console.log(`Logging in with email: ${email}...`);
//             await page.type('#login-username', email);
//             await page.type('#login-password', password);
//             await page.click('#login-button');
//
//             // Attendre que la connexion soit réussie et que la redirection se produise
//             await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//             // Vérifiez si vous êtes redirigé vers la page d'offre
//             let isOnOfferPage = true;
//             let attempts = 0;
//
//             while (isOnOfferPage && attempts < 5) {
//                 const currentUrl = page.url();
//
//                 if (currentUrl.includes('accounts.spotify.com/en/status')) {
//                     console.log('Redirected to status page, navigating to registration page.');
//                     await page.goto(SPOTIFY_REGISTER_URL, { waitUntil: 'networkidle0' });
//                     attempts++;
//                 } else if (currentUrl === SPOTIFY_URL) {
//                     console.log('Back on offer page, clicking authorize button again.');
//                     await page.click('#authorize-btn');
//                     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//                     attempts++;
//                 } else {
//                     isOnOfferPage = false; // Sortir de la boucle si on n'est pas sur la page d'offre
//                 }
//             }
//
//             // Étape 4 : Accéder à la page de liaison du compte
//             await page.waitForSelector('#last-name', { visible: true });
//             await page.waitForSelector('#global-user-name', { visible: true });
//             await page.waitForSelector('input[type="checkbox"]', { visible: true });
//             await page.waitForSelector('button[type="submit"]', { visible: true });
//
//             await page.type('#last-name', lastName);
//             await page.type('#global-user-name', username);
//             await page.click('input[type="checkbox"]');
//             await page.click('button[type="submit"]');
//
//             // Attendre 2 secondes pour voir les résultats
//             await new Promise(resolve => setTimeout(resolve, 2000)); // Remplacer par waitForTimeout
//
//             console.log(`Bot a terminé les étapes pour ${email}.`);
//         } catch (error) {
//             console.error(`Erreur pour ${email}: ${error.message}`);
//         } finally {
//             await browser.close(); // Fermez le navigateur après chaque compte
//         }
//     }
// })();
