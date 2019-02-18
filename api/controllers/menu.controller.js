import MenuService from '../services/menu.services';

const MenuController = {
  getMenu(req, res) {
    const allMenus = MenuService.getMenu();
    const response = {
      count: allMenus.length,
      meals: allMenus,
    };
    return res.json(response).status(200);
  },
};

export default MenuController;
