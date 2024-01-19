const fs = require("fs");
const puppeteer = require("puppeteer");

async function initializeBrowser() {
  return await puppeteer.launch({ headless: "new" });
}

async function closeBrowser(browser) {
  await browser.close();
}

async function navigateToPage(browser, url) {
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

async function scrapeLeague(page) {
  const league = await page.evaluate(() => {
    const teams = Array.from( document.querySelectorAll('.cb-team-item'), (row)=>({
      team: row?.innerText || "",
      href: row.querySelector('a').getAttribute('href'),
    }));
    console.log(teams);
    return teams;
  });
  return league;
}

async function scrapeTeams(page) {
  const teams = await page.evaluate(() => {
    let date = document.querySelector('.cb-series-matches .schedule-date')?.innerText || "NaN";
    let versus = document.querySelector('.cb-series-matches .text-hvr-underline')?.innerText || "NaN";
    // console.log(date);
    return { date, versus };
  });

  return teams;
}

const sports = ["nba", "college-football", "nfl", "nhl", "mlb", "soccer"];
let schedules = {};

async function main() {
  const browser = await initializeBrowser();

  try {
    let page = await navigateToPage(browser, "https://www.cricbuzz.com/cricket-team");
    let leagues = await scrapeLeague(page);
    page.close();

    for (let team of leagues){
      // console.log("https://www.cricbuzz.com" + team.href + "/schedule");
      let page = await navigateToPage(browser, "https://www.cricbuzz.com" + team.href + "/schedule");
      // console.log()
      let match = await scrapeTeams(page);
      
      schedules[team.team] = match;
    }

    console.log(schedules);
    
    
    fs.writeFile("cricketTeams.json", JSON.stringify(schedules), (error) => {
      if (error) throw error;
    });
  } finally {
    await closeBrowser(browser);
  }
}

main();

// Table__Title == Title for the Table
