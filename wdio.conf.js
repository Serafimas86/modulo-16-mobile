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
        "platformName": "Android",
        "platformVersion": "13.0",
        "deviceName": "samsung SM-A525M",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appPackage": "com.wdiodemoapp",
        "appWaitActivity": 'com.wdiodemoapp.MainActivity',
        "appWaitActivity": "com.wdiodemoapp.SpashActivitty"
    }]
}