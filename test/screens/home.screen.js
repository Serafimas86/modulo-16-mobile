class homeScreen {
    // get enterStoreAddress() {
    //     return $('//android.widget.Button[@content-desc="Login"]/android.widget.TextView[1]')
    // }

    // async goToLogin() {
    //     this.enterStoreAddress.click()
    // }

    get enterFormsAddress() {
        return $('//android.widget.Button[@content-desc="Forms"]/android.view.ViewGroup/android.widget.TextView')
    }

    async goToForms() {
        this.enterFormsAddress.click()
    }
}

module.exports = new homeScreen ()