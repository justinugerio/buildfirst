module.exports = function (match) {
  match('', 'home#index');
  match('items', 'items#index');
  match('items/add', 'items#add');
};
