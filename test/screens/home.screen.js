class homeScreen {

    async goToForms() {
        await $('~Forms').click()
    }

    async goToForms() {
        await this.enterFormsAddress.click()
    }
    async goToLogin() {
        await $('~Login').click()
    }
}

module.exports = new homeScreen()

