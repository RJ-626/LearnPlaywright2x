const { test, expect } = require('@playwright/test');

// Simulating Callback Hell with Playwright DOM operations
// More than 20 nested callbacks to demonstrate anti-pattern

function openHomePage(page, callback) {
    console.log("1. Opening home page");
    setTimeout(() => {
        page.goto('https://example.com');
        callback();
    }, 500);
}

function acceptCookies(page, callback) {
    console.log("2. Accepting cookies popup");
    setTimeout(() => {
        page.click('#accept-cookies');
        callback();
    }, 300);
}

function clickLoginLink(page, callback) {
    console.log("3. Clicking login link");
    setTimeout(() => {
        page.click('a[href="/login"]');
        callback();
    }, 400);
}

function waitForLoginForm(page, callback) {
    console.log("4. Waiting for login form to be visible");
    setTimeout(() => {
        page.waitForSelector('#login-form');
        callback();
    }, 600);
}

function enterUsername(page, callback) {
    console.log("5. Typing username");
    setTimeout(() => {
        page.fill('#username', 'testuser');
        callback();
    }, 300);
}

function enterPassword(page, callback) {
    console.log("6. Typing password");
    setTimeout(() => {
        page.fill('#password', 'secret123');
        callback();
    }, 300);
}

function clickSubmitButton(page, callback) {
    console.log("7. Clicking submit button");
    setTimeout(() => {
        page.click('#submit-btn');
        callback();
    }, 400);
}

function waitForDashboard(page, callback) {
    console.log("8. Waiting for dashboard to load");
    setTimeout(() => {
        page.waitForSelector('.dashboard');
        callback();
    }, 1000);
}

function clickProfileMenu(page, callback) {
    console.log("9. Clicking profile menu");
    setTimeout(() => {
        page.click('.profile-menu');
        callback();
    }, 300);
}

function clickEditProfile(page, callback) {
    console.log("10. Clicking edit profile");
    setTimeout(() => {
        page.click('a[href="/profile/edit"]');
        callback();
    }, 400);
}

function clearFirstName(page, callback) {
    console.log("11. Clearing first name field");
    setTimeout(() => {
        page.fill('#first-name', '');
        callback();
    }, 200);
}

function typeFirstName(page, callback) {
    console.log("12. Typing new first name");
    setTimeout(() => {
        page.fill('#first-name', 'John');
        callback();
    }, 200);
}

function clearLastName(page, callback) {
    console.log("13. Clearing last name field");
    setTimeout(() => {
        page.fill('#last-name', '');
        callback();
    }, 200);
}

function typeLastName(page, callback) {
    console.log("14. Typing new last name");
    setTimeout(() => {
        page.fill('#last-name', 'Doe');
        callback();
    }, 200);
}

function selectCountry(page, callback) {
    console.log("15. Selecting country from dropdown");
    setTimeout(() => {
        page.selectOption('#country', 'USA');
        callback();
    }, 300);
}

function checkNewsletterBox(page, callback) {
    console.log("16. Checking newsletter checkbox");
    setTimeout(() => {
        page.check('#newsletter');
        callback();
    }, 200);
}

function uncheckSmsBox(page, callback) {
    console.log("17. Unchecking SMS notifications");
    setTimeout(() => {
        page.uncheck('#sms-notify');
        callback();
    }, 200);
}

function scrollToSaveButton(page, callback) {
    console.log("18. Scrolling to save button");
    setTimeout(() => {
        page.click('#save-btn');
        callback();
    }, 400);
}

function waitForSuccessMessage(page, callback) {
    console.log("19. Waiting for success message");
    setTimeout(() => {
        page.waitForSelector('.success-message');
        callback();
    }, 800);
}

function clickLogout(page, callback) {
    console.log("20. Clicking logout");
    setTimeout(() => {
        page.click('.logout');
        callback();
    }, 300);
}

function waitForLoginPageAgain(page, callback) {
    console.log("21. Waiting for login page to reappear");
    setTimeout(() => {
        page.waitForSelector('#login-form');
        callback();
    }, 600);
}

function verifyLoginPageTitle(page, callback) {
    console.log("22. Verifying page title");
    setTimeout(() => {
        const title = page.title();
        console.log("Page title:", title);
        callback();
    }, 300);
}

function closeBrowser(page, callback) {
    console.log("23. Closing browser context");
    setTimeout(() => {
        page.close();
        callback();
    }, 500);
}

// Playwright Test with Callback Hell
// This demonstrates the anti-pattern of deep nesting in DOM automation

test('Demo of callback hell in Playwright DOM automation', async ({ page }) => {
    openHomePage(page, () => {
        acceptCookies(page, () => {
            clickLoginLink(page, () => {
                waitForLoginForm(page, () => {
                    enterUsername(page, () => {
                        enterPassword(page, () => {
                            clickSubmitButton(page, () => {
                                waitForDashboard(page, () => {
                                    clickProfileMenu(page, () => {
                                        clickEditProfile(page, () => {
                                            clearFirstName(page, () => {
                                                typeFirstName(page, () => {
                                                    clearLastName(page, () => {
                                                        typeLastName(page, () => {
                                                            selectCountry(page, () => {
                                                                checkNewsletterBox(page, () => {
                                                                    uncheckSmsBox(page, () => {
                                                                        scrollToSaveButton(page, () => {
                                                                            waitForSuccessMessage(page, () => {
                                                                                clickLogout(page, () => {
                                                                                    waitForLoginPageAgain(page, () => {
                                                                                        verifyLoginPageTitle(page, () => {
                                                                                            closeBrowser(page, () => {
                                                                                                console.log("Test completed - callback hell demo!!");
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
