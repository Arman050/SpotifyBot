// const puppeteer = require('puppeteer');
//
// const SPOTIFY_SIGNUP_URL = 'https://www.spotify.com/be-nl/signup/?flow_ctx=daa65fb7-da58-413c-adcf-2a21e6af9e14%3A1728527182';
//
// (async () => {
//     const browser = await puppeteer.launch({ headless: false }); // headless: false to see the browser
//     const page = await browser.newPage();
//
//     // Step 1: Access the Spotify signup page
//     await page.goto(SPOTIFY_SIGNUP_URL);
//
//     // Step 2: Fill in the email field
//     await page.type('input[name="username"]', 'gtc1478gtc15@gmail.com'); // Replace with your email
//
//     // Step 3: Accept cookies
//     await page.waitForSelector('#onetrust-accept-btn-handler', { visible: true });
//     await page.click('#onetrust-accept-btn-handler');
//
//     // Step 4: Click the button to proceed to the next step
//     await page.waitForSelector('button[data-testid="submit"]', { visible: true });
//     await page.click('button[data-testid="submit"]');
//
//     // Wait for navigation to the next page
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//     // Step 5: Wait and fill in the password field
//     await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds to allow the page to load completely
//
//     await page.waitForSelector('input[name="new-password"]', { visible: true });
//     await page.type('input[name="new-password"]', 'SPOTIFY12345', { delay: 100 }); // Adding a delay between key presses
//
//     // Click the button to proceed to the next step
//     await page.waitForSelector('button[data-testid="submit"]', { visible: true });
//     await page.click('button[data-testid="submit"]');
//
//     // Wait for navigation to the next page
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//     // Step 6: Fill in additional information
//     await page.waitForSelector('input[name="displayName"]', { visible: true });
//     await page.type('input[name="displayName"]', 'Patrick'); // Replace with your display name
//
//     // Fill in the day of birth
//     await page.waitForSelector('input[name="day"]', { visible: true });
//     await page.type('input[name="day"]', '1'); // Replace '1' with your birthday
//
//     // Wait for the month select to be visible
//     await page.waitForSelector('select[name="month"]', { visible: true });
//     await page.select('select[name="month"]', 'January'); // Replace 'January' with your birth month
//
//     // Fill in the year of birth
//     await page.waitForSelector('input[name="year"]', { visible: true });
//     await page.type('input[name="year"]', '2000'); // Replace '2000' with your birth year
//
//     // Select the gender
//     await page.waitForSelector('input[name="gender"][value="male"]', { visible: true });
//     await page.click('input[name="gender"][value="male"]'); // Replace 'male' with 'female' or 'other' as per your choice
//
//     // Step 7: Click the button to finalize the registration
//     await page.waitForSelector('button[data-testid="submit"]', { visible: true });
//     await page.click('button[data-testid="submit"]');
//
//     // Wait for navigation to the confirmation page
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//     console.log('Registration completed successfully.');
//     await browser.close(); // Close the browser
// })();







// const puppeteer = require('puppeteer');
//
// const SPOTIFY_SIGNUP_URL = 'https://www.spotify.com/be-nl/signup/?flow_ctx=daa65fb7-da58-413c-adcf-2a21e6af9e14%3A1728527182';
//
// (async () => {
//     const browser = await puppeteer.launch({ headless: false }); // headless: false to see the browser
//     const page = await browser.newPage();
//
//     // Step 1: Access the Spotify signup page
//     await page.goto(SPOTIFY_SIGNUP_URL);
//
//     // Step 2: Fill in the email field
//     await page.type('input[name="username"]', 'lelado7551@skrank.com'); // Replace with your email
//
//     // Step 3: Accept cookies
//     await page.waitForSelector('#onetrust-accept-btn-handler', { visible: true });
//     await page.click('#onetrust-accept-btn-handler');
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
//
//     // Step 4: Click the button to proceed to the next step
//     await page.waitForSelector('button[data-testid="submit"]', { visible: true });
//     await page.waitForFunction(() => {
//         const button = document.querySelector('button[data-testid="submit"]');
//         return button && !button.disabled && button.offsetWidth > 0 && button.offsetHeight > 0; // Check if the button is clickable
//     });
//     await page.click('button[data-testid="submit"]');
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
//
//     // Wait for navigation to the next page
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//     // Step 5: Wait and fill in the password field
//     await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
//
//     await page.waitForSelector('input[name="new-password"]', { visible: true });
//
//     // Simulate typing the password
//     await page.focus('input[name="new-password"]'); // Focus on the password input
//     await page.keyboard.type('SPOTIFY12345', { delay: 100 }); // Simulate typing with a delay
//
//     // Click the button to proceed to the next step
//     await page.waitForSelector('button[data-testid="submit"]', { visible: true });
//     await page.waitForFunction(() => {
//         const button = document.querySelector('button[data-testid="submit"]');
//         return button && !button.disabled && button.offsetWidth > 0 && button.offsetHeight > 0; // Check if the button is clickable
//     });
//     await page.click('button[data-testid="submit"]');
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
//
//     // Wait for navigation to the next page
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//     // Step 6: Fill in additional information
//     await page.waitForSelector('input[name="displayName"]', { visible: true });
//     await page.focus('input[name="displayName"]'); // Focus on the display name input
//     await page.keyboard.type('Patrick', { delay: 100 }); // Simulate typing with a delay
//
//     // Fill in the day of birth
//     await page.waitForSelector('input[name="day"]', { visible: true });
//     await page.focus('input[name="day"]'); // Focus on the day input
//     await page.keyboard.type('1', { delay: 100 }); // Simulate typing the day with a delay
//
//     // Wait for the month select to be visible
//     await page.waitForSelector('select[name="month"]', { visible: true });
//     await page.select('select[name="month"]', 'January'); // Replace 'January' with your birth month
//
//     // Fill in the year of birth
//     await page.waitForSelector('input[name="year"]', { visible: true });
//     await page.focus('input[name="year"]'); // Focus on the year input
//     await page.keyboard.type('2000', { delay: 100 }); // Simulate typing the year with a delay
//
//     // Select the gender
//     await page.waitForSelector('input[name="gender"][value="male"]', { visible: true });
//     await page.click('input[name="gender"][value="male"]'); // Replace 'male' with 'female' or 'other' as per your choice
//
//     // Step 7: Click the button to finalize the registration
//     await page.waitForSelector('button[data-testid="submit"]', { visible: true });
//     await page.waitForFunction(() => {
//         const button = document.querySelector('button[data-testid="submit"]');
//         return button && !button.disabled && button.offsetWidth > 0 && button.offsetHeight > 0; // Check if the button is clickable
//     });
//     await page.click('button[data-testid="submit"]');
//
//     // Wait for navigation to the confirmation page
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//
//     console.log('Registration completed successfully.');
//     await browser.close(); // Close the browser
// })();






const puppeteer = require('puppeteer');

// Liste des emails
const emails = [
    'zxcvbnmyyy@gmail.com'

];

const SPOTIFY_SIGNUP_URL = 'https://www.spotify.com/be-nl/signup/?flow_ctx=daa65fb7-da58-413c-adcf-2a21e6af9e14%3A1728527182';

// Fonction pour gérer une inscription par e-mail
async function registerWithEmail(email) {
    const browser = await puppeteer.launch({ headless: false }); // headless: false pour voir le navigateur
    const page = await browser.newPage();

    try {
        // Step 1: Accéder à la page d'inscription Spotify
        await page.goto(SPOTIFY_SIGNUP_URL);

        // Step 2: Remplir le champ email
        await page.type('input[name="username"]', email);
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Step 3: Accepter les cookies
        await page.waitForSelector('#onetrust-accept-btn-handler', { visible: true });
        await page.click('#onetrust-accept-btn-handler');
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Step 4: Cliquez sur le bouton pour passer à l'étape suivante
        await page.waitForSelector('button[data-testid="submit"]', { visible: true });
        await page.waitForFunction(() => {
            const button = document.querySelector('button[data-testid="submit"]');
            return button && !button.disabled && button.offsetWidth > 0 && button.offsetHeight > 0;
        });
        // await page.click('button[data-testid="submit"]');

        // Attendre la navigation vers la page suivante
        await page.waitForNavigation({ waitUntil: 'networkidle0' });

        // Step 5: Remplir le champ mot de passe
        await new Promise(resolve => setTimeout(resolve, 1000));
        await page.waitForSelector('input[name="new-password"]', { visible: true });
        await page.focus('input[name="new-password"]');
        await page.keyboard.type('SPOTIFY12345', { delay: 10 });

        // Cliquer sur le bouton pour passer à l'étape suivante
        await page.waitForSelector('button[data-testid="submit"]', { visible: true });
        await page.waitForFunction(() => {
            const button = document.querySelector('button[data-testid="submit"]');
            return button && !button.disabled && button.offsetWidth > 0 && button.offsetHeight > 0;
        });
        // await page.click('button[data-testid="submit"]');
        // await new Promise(resolve => setTimeout(resolve, 2000));

        // Attendre la navigation vers la page suivante
        await page.waitForNavigation({ waitUntil: 'networkidle0' });

        // Step 6: Remplir les informations supplémentaires
        await page.waitForSelector('input[name="displayName"]', { visible: true });
        await page.focus('input[name="displayName"]');
        await page.keyboard.type('Patrick', { delay: 100 });

        await page.waitForSelector('input[name="day"]', { visible: true });
        await page.focus('input[name="day"]');
        await page.keyboard.type('1', { delay: 100 });

        await page.waitForSelector('select[name="month"]', { visible: true });
        await page.select('select[name="month"]', 'January');

        await page.waitForSelector('input[name="year"]', { visible: true });
        await page.focus('input[name="year"]');
        await page.keyboard.type('2000', { delay: 100 });

        await page.waitForSelector('input[name="gender"][value="male"]', { visible: true });
        await page.click('input[name="gender"][value="male"]');

        // Step 7: Cliquer sur le bouton pour finaliser l'inscription
        await page.waitForSelector('button[data-testid="submit"]', { visible: true });
        await page.waitForFunction(() => {
            const button = document.querySelector('button[data-testid="submit"]');
            return button && !button.disabled && button.offsetWidth > 0 && button.offsetHeight > 0;
        });
        await page.click('button[data-testid="submit"]');

        await page.waitForNavigation({ waitUntil: 'networkidle0' });

        await new Promise(resolve => setTimeout(resolve, 20000));

        console.log(`Registration completed successfully for ${email}.`);

    } catch (error) {
        console.error(`Error during registration for ${email}:`, error);
    } finally {
        await browser.close();
    }
}

// Boucle sur chaque email
(async () => {
    for (const email of emails) {
        console.log(`Processing registration for ${email}...`);
        await registerWithEmail(email);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Attendre 3 secondes avant de passer au prochain compte
    }
    console.log('All registrations completed.');
})();
