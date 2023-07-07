import React from 'react'
import styled from 'styled-components' 

function Header() {
  return (
    <Nav>
        <Logo src="logo (1).svg"></Logo>
        <NavMenu>
            <a>  
                <img src="home-icon.svg" />
                <span>HOME</span>              
            </a>
            <a>  
                <img src="search-icon.svg" />
                <span>SEARCH</span>              
            </a>
            <a>  
                <img src="watchlist-icon.svg" />
                <span>WATCHLIST</span>              
            </a>
            <a>  
                <img src="ORIGINAL-icon.svg" />
                <span>ORIGINALS</span>              
            </a>
            <a>  
                <img src="movie-icon.svg" />
                <span>MOVIES</span>              
            </a>
            <a>  
                <img src="series-icon.svg" />
                <span>SERIES</span>              
            </a>
                
        </NavMenu>

        <UserImage src='IMG_0494.JPG'>
        
        </UserImage>
    </Nav>
  )
}

export default Header

let Nav = styled.nav`
    height: 70px;
    background-color:black;
    display:flex;
    align-items:center;
    padding:0 36px;
    justify-content: space-between;
    overflow-x:hidden;
    
    
    

`
let Logo = styled.img`
    width:80px;
   

`
 const NavMenu = styled.div`
    display:flex;
    justify-content:space-between;
    
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;

        img{
            height:20px;
            
        }
    
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position: relative;

            &:after {
                content: "";
                height:2px;
                background: white;
                position:absolute;
                left:0;
                right:0;
                bottom:-10px;
                opacity:0;
                
                transition:all 250ms cubic-bezier(0.1, 0.7, 1.0, 0.1);
                transform:scaleX(0);


            }
        }
        
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }   
 `

 let UserImage= styled.img`
    width:40px;
    height:40px;
    border-radius: 50%;
    
 `