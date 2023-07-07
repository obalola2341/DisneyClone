import React from 'react'
import styled from 'styled-components'
import Imgslider from "./Imgslider"
import Viewers from './Viewers'

function Home() {
  return (
    <Container>
      <Imgslider/>
      <Viewers/>
    </Container>
    
  )
}

export default Home

let Container = styled.main`
  
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x:hidden;

  
  
  &:before { 
    background: url("home-background.png") center center/ cover
    no-repeat fixed;
    content: "";
    
    position: absolute;
    top:0;
    left: 0;
    right:0;
    bottom:0;
    z-index:-1;
  }

`