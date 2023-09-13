const {join} = require('path')

exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    // o path do Appium a partir do 2.0 não é mais /wd/hub, mas sim só /
    path: '/',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        // algumas desired capabilites precisam do vendor prefix antes (i.e., appium:)
        // https://appium.io/docs/en/2.1/guides/caps/
        "platformName": "Android",
        "appium:platformVersion": "12",
        // aqui eu recomendo você dar uma olhada no UDID do seu aparelho
        // https://www.bestinterviewquestion.com/question/what-is-udid-and-how-do-you-find-udid-in-appium-gmgte5343x9
        // o nome do seu device com certeza não é esse - esse é o do professor, mas aparentemente ele não explicou isso direito
        "appium:deviceName": "pixel2",
        "appium:automationName": "uiautomator2",
        "appium:app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appium:packageName": "com.wdiodemoapp",
        "appium:appWaitActivity": 'MainActivity'
    }]
}