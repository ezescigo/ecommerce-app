import styled, {css} from 'styled-components';

export const Cover = styled.div`
  position: absolute;
  width: 100vw;
  height: 300vh;
  background: white;
  opacity: 0.6;
  display: none;
  cursor: pointer;
  z-index: 30;

  ${({active}) => active ? css`display: block` : null}
`
;

export const SearchBoxContainer = styled.div`
  border-radius: 20px;
  background-color: transparent;
  border: 0px;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #d9dde0;
  z-index: 40;

  .search-icon {
    width: 40px;
    height: 40px;
    color: white;
    margin: 5px;
  }
`;

export const SearchBox = styled.input.attrs({
  type: 'text',
  placeholder: 'Search',
})`
  font-family: 'Varela Round', 'Courier New', Courier, monospace;
  border-radius: 5px;
  background-color: transparent;
  border: 0px;
  color: #2b2929;
  font-size: 20px;
  font-weight: Semi-Bold;
  padding: 5px 10px;
  
  
  &:focus { 
    outline: none !important;
    
    /* border-color: #719ECE;
    box-shadow: 0 0 10px #719ECE; */

    ::placeholder {
      color: #7c7979;
    }
  }

  ::placeholder{
    display: none
  }
`;

export const SlideNavBar = styled.nav`
  width: 300px;
  right: 0;
  height: 100vh;
  display: flex;
  position: absolute;
  float: right;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  background-color: rgb(218, 223, 220);
  opacity: 1;
  z-index: 40;
  border-radius: 8px;
`