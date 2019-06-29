/**
 * OANDA Fixed Values
 */
exports.scales = {
    // Top of the minute alignment
    S5: 5 * 1000, // - 5 seconds
    S10: 10 * 1000, // 10 seconds
    S15: 15 * 1000, // 15 seconds
    S30: 30 * 1000, // 30 seconds
    M1: 60 * 1000, // 1 minute
    // Top of the hour alignment
    M2: 2 * 60 * 1000, // 2 minutes
    M3: 3 * 60 * 1000, // 3 minutes
    M4: 4 * 60 * 1000, // 4 minutes
    M5: 5 * 60 * 1000, // 5 minutes
    M10: 10 * 60 * 1000, // 10 minutes
    M15: 15 * 60 * 1000, // 15 minutes
    M30: 30 * 60 * 1000, // 30 minutes
    H1: 60 * 60 * 1000, // 1 hour
    // Start of day alignment (default 17:00, Timezone/New York)
    H2: 2 * 3600 * 1000, // 2 hours
    H3: 3 * 3600 * 1000, // 3 hours
    H4: 4 * 3600 * 1000, // 4 hours
    H6: 6 * 3600 * 1000, // 6 hours
    H8: 8 * 3600 * 1000, // 8 hours
    H12: 12 * 3600 * 1000, // 12 hours
    D: 24 * 3600 * 1000, // 1 Day
    // Start of week alignment (default Friday)
    W: 7 * 24 * 3600 * 1000 // 1 Week
};

exports.instruments = {
    AUD_CAD: {
        instrument: 'AUD_CAD',
        displayName: 'AUD/CAD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    AUD_CHF: {
        instrument: 'AUD_CHF',
        displayName: 'AUD/CHF',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    AUD_HKD: {
        instrument: 'AUD_HKD',
        displayName: 'AUD/HKD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    AUD_JPY: {
        instrument: 'AUD_JPY',
        displayName: 'AUD/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.04,
        halted: false
    },
    AUD_NZD: {
        instrument: 'AUD_NZD',
        displayName: 'AUD/NZD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    AUD_SGD: {
        instrument: 'AUD_SGD',
        displayName: 'AUD/SGD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    AUD_USD: {
        instrument: 'AUD_USD',
        displayName: 'AUD/USD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    CAD_CHF: {
        instrument: 'CAD_CHF',
        displayName: 'CAD/CHF',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    CAD_HKD: {
        instrument: 'CAD_HKD',
        displayName: 'CAD/HKD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    CAD_JPY: {
        instrument: 'CAD_JPY',
        displayName: 'CAD/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.04,
        halted: false
    },
    CAD_SGD: {
        instrument: 'CAD_SGD',
        displayName: 'CAD/SGD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    CHF_HKD: {
        instrument: 'CHF_HKD',
        displayName: 'CHF/HKD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    CHF_JPY: {
        instrument: 'CHF_JPY',
        displayName: 'CHF/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.04,
        halted: false
    },
    CHF_ZAR: {
        instrument: 'CHF_ZAR',
        displayName: 'CHF/ZAR',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    EUR_AUD: {
        instrument: 'EUR_AUD',
        displayName: 'EUR/AUD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    EUR_CAD: {
        instrument: 'EUR_CAD',
        displayName: 'EUR/CAD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.02,
        halted: false
    },
    EUR_CHF: {
        instrument: 'EUR_CHF',
        displayName: 'EUR/CHF',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    EUR_CZK: {
        instrument: 'EUR_CZK',
        displayName: 'EUR/CZK',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    EUR_DKK: {
        instrument: 'EUR_DKK',
        displayName: 'EUR/DKK',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.02,
        halted: false
    },
    EUR_GBP: {
        instrument: 'EUR_GBP',
        displayName: 'EUR/GBP',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    EUR_HKD: {
        instrument: 'EUR_HKD',
        displayName: 'EUR/HKD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    EUR_HUF: {
        instrument: 'EUR_HUF',
        displayName: 'EUR/HUF',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    EUR_JPY: {
        instrument: 'EUR_JPY',
        displayName: 'EUR/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.04,
        halted: false
    },
    EUR_NOK: {
        instrument: 'EUR_NOK',
        displayName: 'EUR/NOK',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    EUR_NZD: {
        instrument: 'EUR_NZD',
        displayName: 'EUR/NZD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    EUR_PLN: {
        instrument: 'EUR_PLN',
        displayName: 'EUR/PLN',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    EUR_SEK: {
        instrument: 'EUR_SEK',
        displayName: 'EUR/SEK',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    EUR_SGD: {
        instrument: 'EUR_SGD',
        displayName: 'EUR/SGD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    EUR_TRY: {
        instrument: 'EUR_TRY',
        displayName: 'EUR/TRY',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    EUR_USD: {
        instrument: 'EUR_USD',
        displayName: 'EUR/USD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.02,
        halted: false
    },
    EUR_ZAR: {
        instrument: 'EUR_ZAR',
        displayName: 'EUR/ZAR',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_AUD: {
        instrument: 'GBP_AUD',
        displayName: 'GBP/AUD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_CAD: {
        instrument: 'GBP_CAD',
        displayName: 'GBP/CAD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_CHF: {
        instrument: 'GBP_CHF',
        displayName: 'GBP/CHF',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_HKD: {
        instrument: 'GBP_HKD',
        displayName: 'GBP/HKD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_JPY: {
        instrument: 'GBP_JPY',
        displayName: 'GBP/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_NZD: {
        instrument: 'GBP_NZD',
        displayName: 'GBP/NZD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_PLN: {
        instrument: 'GBP_PLN',
        displayName: 'GBP/PLN',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_SGD: {
        instrument: 'GBP_SGD',
        displayName: 'GBP/SGD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_USD: {
        instrument: 'GBP_USD',
        displayName: 'GBP/USD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    GBP_ZAR: {
        instrument: 'GBP_ZAR',
        displayName: 'GBP/ZAR',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    HKD_JPY: {
        instrument: 'HKD_JPY',
        displayName: 'HKD/JPY',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    NZD_CAD: {
        instrument: 'NZD_CAD',
        displayName: 'NZD/CAD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    NZD_CHF: {
        instrument: 'NZD_CHF',
        displayName: 'NZD/CHF',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    NZD_HKD: {
        instrument: 'NZD_HKD',
        displayName: 'NZD/HKD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    NZD_JPY: {
        instrument: 'NZD_JPY',
        displayName: 'NZD/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.04,
        halted: false
    },
    NZD_SGD: {
        instrument: 'NZD_SGD',
        displayName: 'NZD/SGD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    NZD_USD: {
        instrument: 'NZD_USD',
        displayName: 'NZD/USD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    SGD_CHF: {
        instrument: 'SGD_CHF',
        displayName: 'SGD/CHF',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    SGD_HKD: {
        instrument: 'SGD_HKD',
        displayName: 'SGD/HKD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    SGD_JPY: {
        instrument: 'SGD_JPY',
        displayName: 'SGD/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    TRY_JPY: {
        instrument: 'TRY_JPY',
        displayName: 'TRY/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_CAD: {
        instrument: 'USD_CAD',
        displayName: 'USD/CAD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.02,
        halted: false
    },
    USD_CHF: {
        instrument: 'USD_CHF',
        displayName: 'USD/CHF',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    USD_CNH: {
        instrument: 'USD_CNH',
        displayName: 'USD/CNH',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_CZK: {
        instrument: 'USD_CZK',
        displayName: 'USD/CZK',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_DKK: {
        instrument: 'USD_DKK',
        displayName: 'USD/DKK',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.02,
        halted: false
    },
    USD_HKD: {
        instrument: 'USD_HKD',
        displayName: 'USD/HKD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_HUF: {
        instrument: 'USD_HUF',
        displayName: 'USD/HUF',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_JPY: {
        instrument: 'USD_JPY',
        displayName: 'USD/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.04,
        halted: false
    },
    USD_MXN: {
        instrument: 'USD_MXN',
        displayName: 'USD/MXN',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.08,
        halted: false
    },
    USD_NOK: {
        instrument: 'USD_NOK',
        displayName: 'USD/NOK',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    USD_PLN: {
        instrument: 'USD_PLN',
        displayName: 'USD/PLN',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_SAR: {
        instrument: 'USD_SAR',
        displayName: 'USD/SAR',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_SEK: {
        instrument: 'USD_SEK',
        displayName: 'USD/SEK',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.03,
        halted: false
    },
    USD_SGD: {
        instrument: 'USD_SGD',
        displayName: 'USD/SGD',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_THB: {
        instrument: 'USD_THB',
        displayName: 'USD/THB',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_TRY: {
        instrument: 'USD_TRY',
        displayName: 'USD/TRY',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    USD_ZAR: {
        instrument: 'USD_ZAR',
        displayName: 'USD/ZAR',
        pip: '0.0001',
        precision: '0.00001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    },
    ZAR_JPY: {
        instrument: 'ZAR_JPY',
        displayName: 'ZAR/JPY',
        pip: '0.01',
        precision: '0.001',
        maxTradeUnits: 10000000,
        maxTrailingStop: 10000,
        minTrailingStop: 5,
        marginRate: 0.05,
        halted: false
    }
};
