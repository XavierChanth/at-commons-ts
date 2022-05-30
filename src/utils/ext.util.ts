interface Array<T> {
    isEmpty: boolean;
    isNotEmpty: boolean;
}

Array.prototype.isEmpty = this.length === 0;
Array.prototype.isNotEmpty = this.length !== 0;

interface String {
    isEmpty: boolean;
    isNotEmpty: boolean;
}

String.prototype.isEmpty = this.length === 0;
String.prototype.isNotEmpty =  this.length !== 0;

interface Map<K, V> {
    /**
     * Puts the value to the key if the key or value of a key is absent.
     */
    putIfAbsent(key: K, ifAbsent: () => V): V;
}

Map.prototype.putIfAbsent = function (key, value: () => {}) {
    if (!this.has(key)) {
        this.set(key, value());
    }
    return this.get(key);
}