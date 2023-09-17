const {join} = require('path')
exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        capabilities: [{
            "appium:platformName": "Android",
            "appium:platformVersion": "13.0",
            "appium:deviceName": "samsung SM-A525M",
            "appium:automationName": "uiautomator2",
            "appium:app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
            "appium:appPackage": "com.wdiodemoapp",
            "appium:appWaitActivity": 'MainActivity',
        }]
    }]
}