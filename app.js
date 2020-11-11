const puppeteer = require('puppeteer');

console.log('~> Starting web crawling service');

async function init() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://www.google.com/search?q=dolar+para+real&oq=dolar+para+real&aqs=chrome..69i57.3392j0j1&sourceid=chrome&ie=UTF-8');

    const result = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });

    console.log(`~> Result: ${result}`);
    await browser.close();
}

init();
