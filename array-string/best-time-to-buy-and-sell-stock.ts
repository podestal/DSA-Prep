function maxProfit(prices: number[]): number {
    let buy: number = prices[0]
    let sell: number = 0
    let profit: number = 0
    for (let i:number = 1; i <prices.length; i++) {
        if (prices[i] < buy) {
            buy = i < prices.length-1 ? prices[i] : buy
            sell = i < prices.length-1 ? 0 : sell
        } else if (prices[i] > sell) {
            sell = prices[i]
            let newProfit: number = sell - buy
            profit = newProfit > profit ? newProfit : profit
        }
    }

    if (profit === 0) {
        return 0
    }
    
    return profit
};

maxProfit([2,1,2,0,1])