import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, } from '@material-ui/core/';
import Cart from './Cart';
import styled from 'styled-components';

const Header = () => {
    return(
        
      
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography style={ { color: '#000000', fontSize: 50, fontFamily: 'sans-serif', font: 'bold',  }}>
                Dio Shopping
            </Typography>
            <Link to="/">
                <ButtNome>Home</ButtNome>        
            </Link>
            <Link to="/contato">
                <ButtNome>Contato</ButtNome>
            </Link>
            <Cart />   

            
        </Grid>
        
    )
}



export default Header;


/* CSS */

const ButtNome = styled.button`

  align-items: center;
  appearance: button;
  background-color: #0276FF;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  font-family: "RM Neue",sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 10px 21px;
  text-align: center;
  text-transform: none;
  transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

`;




