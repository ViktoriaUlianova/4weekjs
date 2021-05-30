function showResult() {

    let prices = document.querySelectorAll(".price");

    console.log(typeof prices);

    let sum = 0;

    for (let price of prices) {


        console.log(typeof price);
        let currentPrice;

        if (price.type == "checkbox" || price.type == "radio") {

            if (price.checked) {
                currentPrice = +price.value;
            } else currentPrice = 0;
        } else currentPrice = +price.value;
        sum += currentPrice;
    }
    const result = "RESULT: " + sum;
    document.getElementById("result").innerText = result;



}