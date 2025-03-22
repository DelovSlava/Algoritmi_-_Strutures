function calculateFunction(x, a, b) {
    let result = null;
    let errorCode = 0; // 0 - без помилок, 1 - x поза діапазоном, 2 - підкореневий вираз < 0

    if (x >= -3 && x <= 8) {
        if (x < 3) {
            let sqrtExpression = 3 * x ** 2 - a;
            if (sqrtExpression >= 0) {
                result = Math.sqrt(sqrtExpression);
            } else {
                errorCode = 2;
            }
        } else if (x === 3) {
            result = -b * x + 3;
        } else {
            result = Math.cos(x - 4);
        }
    } else {
        errorCode = 1;
    }

    switch (errorCode) {
        case 1:
            console.log("Помилка: x поза допустимим діапазоном.");
            break;
        case 2:
            console.log("Помилка: підкореневий вираз від'ємний.");
            break;
        default:
            console.log(`f(${x}) = ${result}`);
    }
}

// Тест
calculateFunction(2, 1, 2);
calculateFunction(3, 1, 2);
calculateFunction(5, 1, 2);
calculateFunction(-4, 1, 2); 
calculateFunction(1, 4, 2); 
