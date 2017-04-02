import { AimTrainingAngularPage } from './app.po';

describe('aim-training-angular App', () => {
  let page: AimTrainingAngularPage;

  beforeEach(() => {
    page = new AimTrainingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
