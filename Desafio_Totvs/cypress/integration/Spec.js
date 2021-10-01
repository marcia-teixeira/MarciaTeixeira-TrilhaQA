///<reference types="cypress" />
// Desafio QA
//Desafio Totvs - Márcia Teixeira

import Prodtotvs from '../support/Pages/Buscar'

describe('Desafio Totvs', () =>{
    
    it('Acessar site e comprar um produto',()=>{
   //Vistar site e aceitar cookies:
    //cy.visit('https://totvs.store')
    //cy.get('#btn-cookie-allow').click()

        Prodtotvs.Acessar();
        Prodtotvs.LocProd();
        Prodtotvs.Realizarcompra();

    //Buscar produto/acessar detalhes do produto e validar/Add carinho validar produto e preço:
       

    
    
    //cy.get('#search').type('Meu Checklist - Organizando suas Tarefas{enter}')
    //cy.get('[href="https://totvs.store/br/produto/parceiros-app-totvs-meu-checklist.html"] > .product-card-title').click()
    //cy.get('.base').should('have.text','Meu Checklist - Organizando suas Tarefas')
    //Escolher planos do produto/Escolher QTD de Executores/Planejadores/AdicionarCarinho:
    //cy.get('.bundle-actions > #bundle-range').click()
    //cy.get('[aria-hidden="false"] > a').click({force:true})
    //cy.get('[aria-hidden="false"] > a').click()
    //cy.get('[aria-hidden="false"] > a').click()
    //Validar produt e preço no carinho:
    //cy.get('.product-item-name > a').should('have.text','Meu Checklist - Organizando suas Tarefas')
    //cy.get(':nth-child(6) > .amount > .price').should('have.text','R$263,07')
    //cy.get(':nth-child(3) > .amount > .price').should('have.text','R$1.060,65')
    
    })
});