var port = 3000;
var appDir = '.';

module.exports = {
    port: port,
    appDir: appDir,
    settingsPath: appDir + '/settings.json',
    logging: {
        active: false,
        file: appDir + '/logs.txt',
    },
    oanda: {
        accountId: 4771638,
        environment: 'practice',    // 'live', 'practice' or 'sandbox'
        accessToken: '6fbebe1838f4cde37d0a9bed05436c05-27422a2e5622437744c6d7e0beb0135c'
    },
    eTrade: {
        consumer_key: '067397c9011458c5377d2e2420fb31af',
        consumer_secret: '02207f0b56d5e32d9c971f1f7acd703d',
        authCode: ''
    },
    quandl: {
        auth_token: "xby2uUsz52EfziALpwzc",
        api_version: 3
    },
    mySQL: {
        host: "127.0.0.1",
        port: "3306",
        database: "autotrader",
        user: "autotrader",
        password: "samsam"
    }
};
