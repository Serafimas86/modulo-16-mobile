class homeScreen {

    async goToForms() {
        await $('~Forms').click()
    }

    async goToLogin() {
        await $('~Login').click()
    }
}

module.exports = new homeScreen()

