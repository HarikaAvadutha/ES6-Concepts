const target = {
  name: 'Harry',
  age: '22',
};

const handler = {
  get: function (target, prop, receiver) {
    if (prop === 'name') {
      return 'Harika';
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Harika
console.log(proxy.age); // 22
