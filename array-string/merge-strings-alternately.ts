function mergeAlternately(word1: string, word2: string): string {
    let newWord = ""
    let word1Idx = word1.length - 1
    let word2Idx = word2.length - 1
    let maxIdx = word1Idx >= word2Idx ? word1Idx : word2Idx
    let i = 0
    while (i <= maxIdx ) {
        const word1Letter = word1[i] ? word1[i] : ''
        const word2Letter = word2[i] ? word2[i] : ''
        newWord += `${word1Letter}${word2Letter}`
        i++
    }
    return newWord
};

mergeAlternately('abcde', 'qwe')
