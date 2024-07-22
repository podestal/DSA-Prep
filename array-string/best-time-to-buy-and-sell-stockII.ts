function maxProfitII(prices: number[]): number {
    let profit: number = 0
    let buy: number = prices[0]
    let sell: number = 0
    for (let i:number = 1; i < prices.length; i++) {
        console.log(i, profit);
        if (prices[i] < buy) {
            buy = i < prices.length-1 ? prices[i] : buy
            sell = i < prices.length-1 ? 0 : sell
        } else if (prices[i] > sell) {
            console.log('setting sell');
            if (prices[i+1] < prices[i] || i === prices.length - 1) {
                console.log('setting sell 2');
                
                sell = prices[i]
                let newProfit: number = sell - buy
                profit += newProfit
                buy = 1000000
            }
        }
    }
    console.log('total profit',profit)
    
    return profit
};

maxProfitII([7,6,4,3,1]    )