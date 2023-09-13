class homeScreen {

    get enterFormsAddress() {
        return $('~Forms')
    }

    async goToForms() {
        await this.enterFormsAddress.click()
    }
}

module.exports = new homeScreen()
