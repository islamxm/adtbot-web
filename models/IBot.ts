export interface IBot {
    activation_datetime?: any,
    bot_code?: string,
    budget_usdt?: number,
    buy_price?: number,
    daily_volume?: number
    enabled?: boolean,
    id?: number,
    monitor?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    exchange?: 1 | 2 | 3 | 4,
    pair?: any,
    pnl?: any,
    pnl_percentage?: any,
    sell_price?: any,
    stop_buy?: number,
    stop_datetime?: any,
    stop_loss?: number,
    take_profit?: number,
}