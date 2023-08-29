const homeScreen = require("../screens/home.screen");

describe('Access Admin Panel', () => {
    it('shoud forms with valid credentials', async () => {
        await homeScreen.goToForms()
    });
})