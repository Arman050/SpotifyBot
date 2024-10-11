const puppeteer = require('puppeteer');

const SPOTIFY_URL = 'https://partner-provisioning.spotify.com/starbucks/';
const SPOTIFY_LOGIN_URL = 'https://accounts.spotify.com/en/login';
const SPOTIFY_REGISTER_URL = 'https://partner-provisioning.spotify.com/starbucks/register/';

const usernames = ['US8547584', 'US8547585']; // Remplacez par vos noms d'utilisateur Starbucks
const lastName = 'Smith'; // Remplacez par votre nom de famille
// const emails = ['tstpu7768735@aol.com', 'ritrumoyda@gufum.com', 'irrrw4237454@aol.com', 'lelado7551@skrank.com', 'gtc1478gtc1@gmail.com'];
// const emails = [
//     'tstpu7768735@aol.com',
//     'ritrumoyda@gufum.com',
//     'irrrw4237454@aol.com',
//     'lelado7551@skrank.com',
//     'gtc1478gtc1@gmail.com',
//     'gtc1478gtc12@gmail.com',
//     'gtc1478gtc13@gmail.com',
//     'gtc1478gtc14@gmail.com',
//     'gtc1478gtc15@gmail.com',
//     'gtc1478gtc16@gmail.com',
//     'gtc1478gtc17@gmail.com',
//     'gtc1478gtc18@gmail.com',
//     'gtc1478gtc111@gmail.com'
// ];

const emails = [
    'tstpu7768735@aol.com',
    'ritrumoyda@gufum.com',
    'irrrw4237454@aol.com',

    // TR SERVICES
    'lelado7551@skrank.com',
    'gtc1478gtc1@gmail.com',
    'gtc1478gtc12@gmail.com',
    'gtc1478gtc13@gmail.com',
    'gtc1478gtc14@gmail.com',
    'gtc1478gtc15@gmail.com',
    'gtc1478gtc16@gmail.com',
    'gtc1478gtc17@gmail.com',
    'gtc1478gtc18@gmail.com',
    'gtc1478gtc111@gmail.com',
    'jjnho3726019@aol.com',
    'jenqd8268003@aol.com',
    'fyhni7189343@aol.com',
    'nmxjn1944625@aol.com',
    'qvxeb5282953@aol.com',
    'ntich6000002@aol.com',
    'fvjxz9564537@aol.com',
    'jxykl9930802@aol.com',
    'vccug4689728@aol.com',
    'vrwbo6580802@aol.com',
    'lklqs4067385@aol.com',
    'yduwz1484629@aol.com',
    'ixano3633534@aol.com',
    'goqsk5079158@aol.com',
    'pbcgy4900586@aol.com',
    'waaeg1066643@aol.com',
    'dwqih5854058@aol.com',
    'rljqg6700854@aol.com',
    'qlmnu4015827@aol.com',
    'lsjvd7435555@aol.com',
    'khqnv9055479@aol.com',
    'uijhu8068949@aol.com',
    'qbkrx2764066@aol.com',
    'aycud3844250@aol.com',
    'tsucn3745144@aol.com',
    'mnqjq9089737@aol.com',
    'xbodo4796448@aol.com',
    'fyikk8293682@aol.com',
    'vnfzq6125123@aol.com',
    'ddkxh9876616@aol.com',
    'ptkhj6545639@aol.com',
    'vecjs1071017@aol.com',
    'sijrn8715505@aol.com',
    'rlxzo0338750@aol.com',
    'wljmk2968286@aol.com',
    'nugtn0539422@aol.com',
    'dscpl7958151@aol.com',
    'eydro7696120@aol.com',
    'mxzuy6886890@aol.com',
    'qywqp3678472@aol.com',
    'fhigo3764762@aol.com',
    'pgnjy6261762@aol.com',
    'yvyxk3793717@aol.com',
    'ystzu1617891@aol.com',
    'etwcs5157224@aol.com',
    'ggamh8951851@aol.com',
    'lmfkb0079254@aol.com',
    'mwjec9256453@aol.com',
    'endru5430554@aol.com',
    'xvdbo8412844@aol.com',
    'gwwht6715359@aol.com',
    'gdkhj6224979@aol.com',
    'ifbjd0812432@aol.com',
    'xevgl1722454@aol.com',
    'hsutw7786141@aol.com',
    'pdnbj8487066@aol.com',
    'vfvhf5693062@aol.com',
    'jaffo8685487@aol.com',
    'cater8954031@aol.com',
    'rnszo1878883@aol.com',
    'rmtzo9967437@aol.com',
    'yywrr6900307@aol.com',
    'dnytp3251022@aol.com',
    'taugu9899166@aol.com',
    'qpwoy0749830@aol.com',
    'eumua7464899@aol.com',
    'mergn5472325@aol.com',
    'spnpo1902512@aol.com',
    'ugpga4876168@aol.com',
    'imbyx8707988@aol.com',
    'hbdwu7767410@aol.com',
    'rnszo1878883@aol.com',
    'tojrl9865250@aol.com',
    'fpgib7511758@aol.com',
    'gnkjm4256441@aol.com',
    'rmtzo9967437@aol.com',
    'owmpj4151653@aol.com',
    'xqwjj0243423@aol.com',
    'djcai3739711@aol.com',
    'phbag8640929@aol.com',
    'ljdmc4162183@aol.com',
    'dambx0691090@aol.com',
    'wsnhr3327705@aol.com',
    'frzhs6064610@aol.com',
    'uemcy5977781@aol.com',
    'sznnu7385914@aol.com',
    'qheir9453929@aol.com',
    'yssah8819139@aol.com',
    'vfrxh2289847@aol.com',
    'zwqhm5600131@aol.com',
    'qpwoy0749830@aol.com',
    'zygcy1481807@aol.com',
    'ftvdy4597202@aol.com',
    'yjhez2679691@aol.com',
    'eumua7464899@aol.com',
    'hvhpa6255477@aol.com',
    'crgid0302842@aol.com',
    'xkgez9403421@aol.com',
    'lzfcp4106523@aol.com',
    'knvbx7229201@aol.com',
    'qjdtz5413290@aol.com',
    'fwnlo8934021@aol.com',
    'mergn5472325@aol.com',
    'wuvea8864275@aol.com',
    'gsgmv1833558@aol.com',
    'zydte1783200@aol.com',
    'ngdoe2699117@aol.com',
    'spnpo1902512@aol.com',
    'ugpga4876168@aol.com',
    'hpzmn6293142@aol.com',
    'bzfsg2927062@aol.com',
    'oqtxz5583303@aol.com',
    'potbo0359883@aol.com',
    'egjpf8400426@aol.com',
    'cpuwv2437001@aol.com',
    'yywrr6900307@aol.com',
    'ihnvd6680118@aol.com',
    'llaoe2703890@aol.com',
    'diaqn3801674@aol.com',
    'uqvpl7538773@aol.com',
    'dnytp3251022@aol.com',
    'wutat7349910@aol.com',
    'cohpk5343502@aol.com',
    'ancpy9902777@aol.com',
    'lyrmm6494738@aol.com',
    'wxlwc3660504@aol.com',
    'pgoqo7716568@aol.com',
    'taugu9899166@aol.com'
];


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

            // await page.waitForSelector('#authorize-btn', { visible: true });
            await page.click('#authorize-btn');

            // Étape 2 : Attendre la redirection vers la page de connexion Spotify
            await page.waitForNavigation({ waitUntil: 'networkidle0' });
            console.log(`Navigating to ${SPOTIFY_LOGIN_URL}...`);
            // await page.goto(SPOTIFY_LOGIN_URL);

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







// PLUS RAPIDE

//
// const puppeteer = require('puppeteer');
//
// const SPOTIFY_URL = 'https://partner-provisioning.spotify.com/starbucks/';
// const SPOTIFY_LOGIN_URL = 'https://accounts.spotify.com/en/login';
// const SPOTIFY_REGISTER_URL = 'https://partner-provisioning.spotify.com/starbucks/register/';
//
// const usernames = ['US8547584', 'US8547585']; // Remplacez par vos noms d'utilisateur Starbucks
// const lastName = 'Smith'; // Remplacez par votre nom de famille
// // const emails = ['tstpu7768735@aol.com', 'ritrumoyda@gufum.com', 'irrrw4237454@aol.com', 'lelado7551@skrank.com', 'gtc1478gtc1@gmail.com'];
// const emails = [
//     'tstpu7768735@aol.com',
//     'ritrumoyda@gufum.com',
//     'irrrw4237454@aol.com',
//     'lelado7551@skrank.com',
//     'gtc1478gtc1@gmail.com',
//     'gtc1478gtc12@gmail.com',
//     'gtc1478gtc13@gmail.com',
//     'gtc1478gtc14@gmail.com',
//     'gtc1478gtc15@gmail.com',
//     'gtc1478gtc16@gmail.com',
//     'gtc1478gtc17@gmail.com',
//     'gtc1478gtc18@gmail.com',
//     'gtc1478gtc111@gmail.com'
// ];
// const password = 'SPOTIFY12345'; // Remplacez par votre mot de passe
//
// (async () => {
//     for (let i = 0; i < emails.length; i++) {
//         const email = emails[i];
//         const username = usernames[i % usernames.length]; // Gère le cas où le nombre d'e-mails est supérieur au nombre d'utilisateurs
//
//         const browser = await puppeteer.launch({ headless: true }); // Lancer le navigateur en mode headless
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
//








