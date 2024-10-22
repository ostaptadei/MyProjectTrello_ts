import BaseComponent from '../common.components/base.component.ts';
import { valuesForFields } from '../../../data/data.ts';

class BoardComponent extends BaseComponent {
  // Винесені локатори
  private readonly createSelectors: { [key: string]: string } = {
    list: '//*[@data-testid="list-composer-button"]',
    card: '//li[@data-list-id="66b47b03606ffbb4544dcced"]//div[@data-testid="list-footer"]',
  };

  private readonly addSelectors: { [key: string]: string } = {
    list: '//*[@data-testid="list-composer-add-list-button"]',
    card: '//*[@data-testid="list-card-composer-add-card-button"]',
  };

  private readonly inputSelectors: { [key: string]: string } = {
    list: '//textarea[contains(@placeholder, "Введіть назву")]',
    card: '//*[@data-testid="list-card-composer-textarea"]',
  };

  private readonly checkSelectors: { [key: string]: string } = {
    list: `//ol[@id="board"]//h2[text()="${valuesForFields.newListName}"]`,
    card: `//ol[@id="board"]//a[text()="${valuesForFields.newCardName}"]`,
    board: `//ul/div/li/a[text()="${valuesForFields.newBoardName}"]`,
    existedBoard: `//div[text()="${valuesForFields.nameExistedBoard}"]`,
  };

  constructor() {
    super('#content');
  }

  createBtn(name: 'list' | 'card') {
    return this.rootEL.$(this.createSelectors[name]); // Використовуємо локатор з поля
  }

  addBtn(name: 'list' | 'card') {
    return this.rootEL.$(this.addSelectors[name]); // Використовуємо локатор з поля
  }

  input(name: 'list' | 'card') {
    return this.rootEL.$(this.inputSelectors[name]); // Використовуємо локатор з поля
  }

  check(name: 'list' | 'card' | 'board' | 'existedBoard') {
    return this.rootEL.$(this.checkSelectors[name]); // Використовуємо локатор з поля
  }
}

export default BoardComponent;
