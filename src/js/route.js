function Route(name, htmlName, defaultRoute) {
  try {
    if (!name || !htmlName) {
      throw 'error: name and htmlName params are mandatories';
    }
    this.constructor(name, htmlName, defaultRoute);
  } catch (e) {
    console.error(e);
  }
}

Route.prototype = {
  name: undefined,
  htmlName: undefined,
  default: undefined,
  constructor(name, htmlName, defaultRoute) { // Это просто функция конструктор
    this.name = name;
    this.htmlName = htmlName;
    this.default = defaultRoute;
  },
  isActiveRoute(hashedPath) { // Функция будет проверять по каждому маршруту, активен он или нет и получать актуальное положение окна
    return hashedPath.replace('#', '') === this.name;
  },
};
