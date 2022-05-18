"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bodybuilding = exports.Judo = exports.Boxing = exports.Swimming = void 0;
class Swimming {
    constructor() {
        this.nameOfExercise = "Natação";
    }
    getPrice() {
        return 120.0;
    }
}
exports.Swimming = Swimming;
class Boxing {
    constructor() {
        this.nameOfExercise = "Boxe";
    }
    getPrice() {
        return 80.0;
    }
}
exports.Boxing = Boxing;
class Judo {
    constructor() {
        this.nameOfExercise = "Judô";
    }
    getPrice() {
        return 90.0;
    }
}
exports.Judo = Judo;
class Bodybuilding {
    constructor() {
        this.nameOfExercise = "Musculação";
    }
    getPrice() {
        return 90.0;
    }
}
exports.Bodybuilding = Bodybuilding;
