function breakingRecords(scores) {
    var hs = 0;
    var ls = 0;
    var current_value = 0;
    var highest_value = 0;
    var lowest_value = 0;
    for (var i = 0; i < scores.length; i++) {
        current_value = scores[i];
        if (i === 0)
            lowest_value = current_value;
        if (current_value < scores[i + 1]) {
            highest_value = scores[i + 1];
            hs++;
        }
        if (scores[i + 1] < lowest_value) {
            lowest_value = scores[i + 1];
            ls++;
        }
    }
    return [hs - 1, ls];
}
console.log(breakingRecords([12, 24, 10, 24]));