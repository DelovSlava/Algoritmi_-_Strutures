function sequence(m) {
    if (!Number.isInteger(m) || m < 1) {
        console.log("Помилка: m повинно бути цілим числом >= 1.");
        return;
    }

    console.log("Послідовність x_n:");
    for (let n = 1; n <= m; n++) {
        let xn = Math.sin(n - 1) / (n ** 2 + 2);
        console.log(`x_${n} = ${xn}`);
    }
}

// Тест
sequence(5);
sequence(-3); // помилка
sequence(3.5); // помилка