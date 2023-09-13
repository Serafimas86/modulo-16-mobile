const {join} = require('path')

exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "13.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appPackage": "com.wdiodemoapp",
        "appWaitActivity": 'com.wdiodemoapp.MainActivity',
        "appWaitActivity": "com.wdiodemoapp.SpashActivitty"
    }]
}