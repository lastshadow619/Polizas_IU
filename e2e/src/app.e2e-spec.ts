import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Debe mostrar un Mensaje de Bienvenida', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Bienvenidos al Sistema de Control de Pólizas!');
  });
});
