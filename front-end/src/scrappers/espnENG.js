const pup = require("puppeteer");
const fs = require("fs");

function scheduleScrape(scheduleTable) {
  let schedule = [];

  scheduleTable.forEach((dayInfo) => {
    let matches = [];
    let title = dayInfo.querySelector(".Table__Title").innerText;

    dayInfo.forEach((info) => {
      let league, time;
      let teams = [];

      time = info.querySelector(".date__col").innerText;
      league = info.querySelector(".gameNote").innerText;

      let match = {
        "time": time,
        "league": league,
        "teams": teams,
      };
      console.log(match);
      matches.push(match);
    });
    let day = {
      "title": title,
      "matches": matches,
    };
    schedule.push(day);
  });

  return schedule;
}

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

async function scrapeSchedule(page) {
  const table = await page.evaluate(() => {
    let days = [];
    const nodes = Array.from(document.querySelectorAll(".ScheduleTables"));
    nodes.forEach((dayHTML) => {
      let title = dayHTML.querySelector(".Table__Title").innerText;
      let dayInfo = Array.from(
        dayHTML.querySelectorAll(".Table__TBODY .Table__TR"),
        (row) => ({
          league: row.querySelector(".gameNote")?.innerText || "",
          time: row.querySelector(".date__col")?.innerText || "",
          team: Array.from(
            row.querySelectorAll(".Table__Team"),
            (e) => e.innerText,
          ),
        }),
      );

      days.push({
        "title": title,
        "detail": dayInfo,
      });
    });

    return days;
  });

  return table;
}

async function scrapeTeams(page) {
  const teams = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(".ContentList__Item"),
      (row) => ({
        name: row.querySelector("h2").innerText,
        img: row.querySelector(".Image").getAttribute("src"),
      }),
    );
  });

  return teams;
}

const sports = ["nba", "college-football", "nfl", "nhl", "mlb", "soccer"];
let schedules = {};

async function main() {
  const browser = await initializeBrowser();

  try {
    for (let sport of sports) {
      let page = await navigateToPage(
        browser,
        `https://www.espn.com/${sport}/schedule`,
      );
      const table = await scrapeSchedule(page);
      page.close();
      page = await navigateToPage(browser, `https://www.espn.com/${sport}/teams`);
      const teams = await scrapeTeams(page);
      page.close();

      schedules[sport] = { table: table, teams: teams };
    }

    fs.writeFile("file.json", JSON.stringify(schedules), (error) => {
      if (error) throw error;
    });
    // console.log(schedules);
  } finally {
    await closeBrowser(browser);
  }
}

main();

// Table__Title == Title for the Table
