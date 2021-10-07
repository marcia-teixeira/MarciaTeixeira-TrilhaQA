//Ações de interação com a página para buscar produtos

const el = require('./Elements').ELEMENTS;


class Prodtotvs {

    Acessar(){
    //Vistar site e aceitar cookies:
    cy.visit(el.URL);
    cy.get(el.COOKIES).click()
   

    }
    LocProd(){
    //Localizar produto no site
    cy.get(el.CAMPOBUSCA).type('Meu Checklist - Organizando suas Tarefas{enter}')
    cy.get(el.PRODBUSCADO).click()
    cy.get(el.NOMEPRODUTOBUSCADO).should('have.text','Meu Checklist - Organizando suas Tarefas')
  
    }
    Realizarcompra(){
        //Escolher planos do produto/Escolher QTD de Executores/Planejadores/AdicionarCarinho:
            cy.get(el.PLANODOPROD).click()
            cy.get(el.EXECPROD).click({force:true})
            cy.get(el.PLANPROD).click({force:true})
            cy.get(el.ADDCARINHO).click({force:true})
           
        //Validar produt e preço no carinho:
            cy.get(el.NOMEPROD).should('have.text','Meu Checklist - Organizando suas Tarefas')
            cy.get(el.PREÇOASSINATURA).should('contain','R$265,37')
            cy.get(el.PREÇOADESAO).should('contain','R$1.133,02')
              
    
        }


}
export default new Prodtotvs();
