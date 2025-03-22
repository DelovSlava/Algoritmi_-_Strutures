function calculateFunction(x, a, b) {
    let result;

    if (x > -3 && x < 3) {
        let sqrtExpression = 3 * x ** 2 - a;
        if (sqrtExpression < 0) {
            console.log("Помилка: підкореневий вираз від'ємний");
            return;
        }
        result = Math.sqrt(sqrtExpression);
    } else if (x === 3) {
        result = -b * x + 3;
    } else if (x > 3 && x < 8) {
        result = Math.cos(x - 4);
    } else {
        console.log("Помилка: x поза допустимим діапазоном");
        return;
    }

    console.log(`f(${x}) = ${result}`);
}

// тест
calculateFunction(2, 1, 2);
calculateFunction(3, 1, 2);
calculateFunction(5, 1, 2);
calculateFunction(-4, 1, 2);
calculateFunction(3, 1, 0); 
calculateFunction(1, 4, 2); 
