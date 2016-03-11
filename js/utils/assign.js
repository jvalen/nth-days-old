const assign = Object.assign || require('object.assign');

const assignToEmpty = (oldObject, newObject) => {
  return assign({}, oldObject, newObject);
};

export default assignToEmpty;
