class Coffee {
    constructor() {
        this.Empty = true; // 初始化為空
    }

    Refill() {
        this.Empty = false; // 補充咖啡後不再是空的
    }

    Drink() {
        if (this.Empty) {
            console.log("咖啡已經空了，請先補充。");
        } else {
            console.log("享受您的咖啡！");
            this.Empty = true; // 喝完後設為空
        }
    }
}

const coffee = new Coffee();

if (coffee.Empty) {
    coffee.Refill();
} else {
    coffee.Drink();
}