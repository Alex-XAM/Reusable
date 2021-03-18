'use strict';

const fn = () => {
  const object1 = { name: 'Alex' };
  let object2 = { name: 'Alex' };
  object1.name = 'Oleg';
  object2.name = 'Oleg';
  object2 = { name: 'qwerty' };
};

module.exports = { fn };
