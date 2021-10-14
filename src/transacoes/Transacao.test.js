import React from 'react';
import {render} from '@testing-library/react';
import Transacao from "./Transacao";

describe('Componente de transação de extrato' , () =>{
    it('O snapshot do compenent deve permanecer sempre o mesmo', 
    () => {
        const {container} =  render(<Transacao
        data="14/10/2021"
        tipo="saque"
        valor = "20.00"
        />)
      expect(container.firstChild).toMatchSnapshot();
    })
});