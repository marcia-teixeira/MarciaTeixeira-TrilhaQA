///<reference types="cypress" />
// Desafio QA
//Desafio Totvs - Márcia Teixeira

import Prodtotvs from '../support/Pages/Buscar'

describe('Desafio Totvs', () =>{
    
    it('Acessar site e comprar um produto',()=>{
   //Vistar site e aceitar cookies:
    
        Prodtotvs.Acessar();
  //Localizar produto e validar o produto buscado.
        Prodtotvs.LocProd();
  //Add produto no carinho e validar nome do produto e preço.
        Prodtotvs.Realizarcompra();
    
    })
});
