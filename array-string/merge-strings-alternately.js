function mergeAlternately(word1, word2) {
    var newWord = "";
    var word1Idx = word1.length - 1;
    var word2Idx = word2.length - 1;
    var maxIdx = word1Idx >= word2Idx ? word1Idx : word2Idx;
    var i = 0;
    while (i <= maxIdx) {
        var word1Letter = word1[i] ? word1[i] : '';
        var word2Letter = word2[i] ? word2[i] : '';
        newWord += "".concat(word1Letter).concat(word2Letter);
        i++;
    }
    console.log(newWord);
    return newWord;
}
;
mergeAlternately('abcde', 'qwe');
