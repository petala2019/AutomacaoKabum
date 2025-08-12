describe('Remover produto do carrinho', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit('https://www.kabum.com.br/carrinho');
   
  });

  const login = () => {
    cy.visit('https://www.kabum.com.br/login');

    cy.get('input[name="login"]').type(Cypress.env('email'));
    cy.get('input[name="password"]').type(Cypress.env('senha')); 
    cy.get('button[type="submit"]').click();

  
  };

  it('Adicionar produto ao carrinho', () => {
    // Dado que o usuário está logado no marketplace
    login();

    // E o usuário está na página de um produto
    cy.visit('https://www.kabum.com.br/produto/714574');

    // Quando o usuário clica no botão "Adicionar ao Carrinho"
    cy.contains('button', 'ADICIONAR AO CARRINHO').click();

    // Então o produto é adicionado ao carrinho
    cy.get('.w-full.p-8 > .mt-8', { timeout: 10000 }).should('be.visible').click();
   
    //Então o usuario vai para o carrinho
    cy.get('#linkCarrinhoHeader').should('be.visible').then(($el) => {cy.wrap($el).click();

      //Então o usuário remove o produto do carrinho
      cy.get('#removerTodosProdutos').click();
      cy.get('.sc-gFqAkR > .border-transparent').click();

      // E o usuário vê uma mensagem de confirmação
      cy.contains('O seu carrinho está vazio.', { timeout: 5000 }).should('be.visible');
      
    });
  });
});