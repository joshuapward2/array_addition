var maximumWealth = function(accounts) {
    let maxWealthSoFar = 0; 

    for(let customer of accounts) {
        let currentCustomerWealth = 0;

        for(let bank of customer) {
         currentCustomerWealth += bank;
        }

        maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth)
    }

    return maxWealthSoFar

    
};