interface Array<T> {
    isEmpty: boolean;
    isNotEmpty: boolean;
}

Array.prototype.isEmpty = length === 0;
Array.prototype.isNotEmpty = length !== 0;

interface String {
    isEmpty: boolean;
    isNotEmpty: boolean;
}

String.prototype.isEmpty = length === 0;
String.prototype.isNotEmpty = length !== 0;

interface Map<K, V> {
    putIfAbsent(key: K, ifAbsent: () => V): V;
}

Map.prototype.putIfAbsent = function (key, value: () => {}) {
    if (!this.has(key)) {
        this.set(key, value());
    }
    return this.get(key);
}