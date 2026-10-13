const puppeteer = require("puppeteer-core");
const path = require("path");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function runValidation() {
  console.log("Starting automated browser validation...");

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage", "--use-gl=swiftshader"],
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("pageerror", (err) => {
    pageErrors.push(err.toString());
  });

  // 1. Desktop Viewport
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  // Wait 1.5s for initial loader fade-out
  await new Promise((r) => setTimeout(r, 1600));

  // 2. Check 3D Canvas presence
  const canvasCount = await page.$$eval("canvas", (els) => els.length);
  console.log(`[TEST] 3D Canvas elements found: ${canvasCount}`);

  // 3. Check section order
  const sectionIds = await page.$$eval("main > *", (els) =>
    els.map((el) => el.id)
  );
  console.log("[TEST] Rendered sections in <main>:", sectionIds);

  const expectedOrder = [
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "coding-profiles",
    "internships",
    "certificates",
    "contact",
  ];

  let orderCorrect = true;
  for (let i = 0; i < expectedOrder.length; i++) {
    if (sectionIds[i] !== expectedOrder[i]) {
      orderCorrect = false;
      console.error(
        `[MISMATCH] Section at index ${i} is '${sectionIds[i]}', expected '${expectedOrder[i]}'`
      );
    }
  }
  if (orderCorrect) {
    console.log("[TEST PASS] All 9 sections appear in the exact required order!");
  }

  // 4. Check Navbar Links
  const navLinks = await page.$$eval(".navbar-link", (els) =>
    els.map((el) => el.textContent.trim())
  );
  console.log("[TEST] Navbar desktop links:", navLinks);

  // 5. Check external links
  const jobverseDemo = await page.$eval(
    'a[href="https://job-verse-937a.vercel.app/"]',
    (el) => el ? el.href : null
  ).catch(() => null);
  console.log("[TEST] JobVerse Live Demo Link:", jobverseDemo);

  const leetcodeLink = await page.$eval(
    'a[href="https://leetcode.com/u/_Tharun_S/"]',
    (el) => el ? el.href : null
  ).catch(() => null);
  console.log("[TEST] LeetCode Profile Link:", leetcodeLink);

  const codechefLink = await page.$eval(
    'a[href="https://www.codechef.com/users/tharunth"]',
    (el) => el ? el.href : null
  ).catch(() => null);
  console.log("[TEST] CodeChef Profile Link:", codechefLink);

  // 6. Test Contact Form Validation
  console.log("[TEST] Testing Contact Form Validation...");
  await page.evaluate(() => {
    document.getElementById("contact").scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 600));

  // Click Submit on empty form
  await page.click(".btn-submit-contact");
  await new Promise((r) => setTimeout(r, 200));

  const errorMessages = await page.$$eval(".err-msg", (els) =>
    els.map((el) => el.textContent.trim())
  );
  console.log("[TEST] Validation errors shown on empty submission:", errorMessages);

  // Take Desktop Screenshot
  await page.screenshot({
    path: path.join(__dirname, "screenshot-desktop.png"),
    fullPage: false,
  });
  console.log("[TEST] Saved screenshot-desktop.png");

  // Scroll to Projects and screenshot
  await page.evaluate(() => {
    document.getElementById("projects").scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(__dirname, "screenshot-projects.png"),
    fullPage: false,
  });
  console.log("[TEST] Saved screenshot-projects.png");

  // 7. Tablet Viewport
  await page.setViewport({ width: 768, height: 1024 });
  await page.evaluate(() => {
    document.getElementById("home").scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({
    path: path.join(__dirname, "screenshot-tablet.png"),
    fullPage: false,
  });
  console.log("[TEST] Saved screenshot-tablet.png");

  // 8. Mobile Viewport
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await new Promise((r) => setTimeout(r, 500));

  // Check mobile hamburger menu toggle
  const burgerVisible = await page.$eval(".navbar-burger", (el) =>
    window.getComputedStyle(el).display !== "none"
  );
  console.log("[TEST] Mobile hamburger menu visible on 375px:", burgerVisible);

  await page.click(".navbar-burger");
  await new Promise((r) => setTimeout(r, 400));
  const mobileMenuOpen = await page.$eval(".navbar-links", (el) =>
    el.classList.contains("navbar-links-open")
  );
  console.log("[TEST] Mobile menu opens on hamburger click:", mobileMenuOpen);

  await page.screenshot({
    path: path.join(__dirname, "screenshot-mobile.png"),
    fullPage: false,
  });
  console.log("[TEST] Saved screenshot-mobile.png");

  console.log("\n================ VALIDATION REPORT ================");
  console.log(`Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) console.log("Errors:", consoleErrors);
  console.log(`Page Errors: ${pageErrors.length}`);
  if (pageErrors.length > 0) console.log("Page Errors:", pageErrors);
  console.log("===================================================\n");

  await browser.close();
}

runValidation().catch((err) => {
  console.error("Validation script error:", err);
  process.exit(1);
});
