function maxProfitII(prices) {
    var profit = 0;
    var buy = prices[0];
    var sell = 0;
    for (var i = 1; i < prices.length; i++) {
        console.log(i, profit);
        if (prices[i] < buy) {
            buy = i < prices.length - 1 ? prices[i] : buy;
            sell = i < prices.length - 1 ? 0 : sell;
        }
        else if (prices[i] > sell) {
            console.log('setting sell');
            if (prices[i + 1] < prices[i] || i === prices.length - 1) {
                console.log('setting sell 2');
                sell = prices[i];
                var newProfit = sell - buy;
                profit += newProfit;
                buy = 1000000;
            }
        }
    }
    console.log('total profit', profit);
    return profit;
}
;
maxProfitII([7, 6, 4, 3, 1]);
