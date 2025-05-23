let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        if (this.step > 0) {
            this.step--;
        }
        return this
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
}

ladder.down().down().down().up().showStep();