// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {value: "value", enumerable : false});
    return propertyName;
};
const createProtoMagicObject = () => {
    const magicObj = function () {};
    magicObj.__proto__ = magicObj.prototype;
    return magicObj;
};

let incrementorCount = 0;

const incrementor = () => {
    incrementorCount++;
    return incrementor;
};

incrementor.__proto__ = {
    valueOf: () => {return incrementorCount;}
}

let asyncIncrementorCount = 0;

const asyncIncrementor = () => {
    asyncIncrementorCount++;
    return asyncIncrementor;
};

asyncIncrementor.__proto__ = {
    valueOf: () => {return asyncIncrementorCount;}
}

const createIncrementer = () => {
    let increment = {};
    increment[Symbol.iterator] = function*(){};
    increment.value = 0;
    increment.next = function () {
        this.value++;
        return increment;
    }
    return increment;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1100);
    });
};

const getDeepPropertiesCount = (object) => {
    let count = 0;
    const countProperties = (object) => {
        if(Object.values(object).length !== 0) {
            for (let i = 0, len = Object.values(object).length; i < len; i++) {
                count++;
                countProperties(Object.values(object)[i]);
            }
        }
    }
    countProperties(object);
    return count;
};

const createSerializedObject = () => {
    return new Number();
};

const toBuffer = () => {};

const sortByProto = (array) => {
    return array.sort((a, b) => {
        return a.__proto__ - b.__proto__;
    })
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;