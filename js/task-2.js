function calcAverageCalories(days) {

    if (days.length === 0) {
        return 0;
    }    

    let total = 0;

    for (const i of days) {
        total += i.calories;
    }

    return total / days.length;

}


