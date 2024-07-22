function maxProfit(prices) {
    var buy = prices[0];
    var sell = 0;
    var profit = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = i < prices.length - 1 ? prices[i] : buy;
            sell = i < prices.length - 1 ? 0 : sell;
        }
        else if (prices[i] > sell) {
            sell = prices[i];
            var newProfit = sell - buy;
            profit = newProfit > profit ? newProfit : profit;
        }
    }
    if (profit === 0) {
        return 0;
    }
    return profit;
}
;
maxProfit([2, 1, 2, 0, 1]);
