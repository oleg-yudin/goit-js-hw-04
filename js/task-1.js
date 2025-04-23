function isEnoughCapacity(products, containerSize) {
    const values = Object.values(products);

    let total = 0;

    for (const i of values) {
        total += i;
    }

    return total <= containerSize;
}


