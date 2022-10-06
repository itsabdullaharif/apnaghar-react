import styled from "styled-components";
import HeaderImg from "../../Assets/AGK_White_Logo.png"
import userlogo from "../../Assets/user-logo.png"
import threelines from "../../Assets/Three-Lines.jpg"
import { useState } from "react";
import option from "./option.css"
import navImg from "../../Assets/navImg.jpg"


export const Header = styled.header`
justify-content: space-between;
background-color: #08375b;
max-width: 100%;
display: flex;
min-height: 3rem;
max-height: 9rem;
padding: 1rem 3rem 0 3rem;
background-image: url(${navImg});
@media(max-width:500px){
    padding: 0;
}
`
export const Img = styled.img`
width: 10rem;
@media(max-width:500px){
    position: absolute;
    right: 1rem;
    top: 1rem;
}
`
export const Options = styled.div`
color: white;
display: flex;
width: 30rem;
justify-content: space-between;
font-weight: 100;
@media(max-width:500px){
display: none;
}

`
export const LoginCont = styled.div`
display: flex;
justify-content: space-between;
width: 15rem;
@media(max-width:500px){
    display: none;
}
`
export const Login = styled.div`
width: 4rem;
border: 1px solid white;
height: 2rem;
border-radius: 5rem;
padding: .1rem;
display: flex;
align-items: center;
justify-content: center;
`
export const UserLogo = styled.img`
width: 1rem;
margin: 0 .2rem;

`
export const ThreeLines = styled.img`
width: 1rem;

`
export const Button = styled.button`
height: 2.5rem;
background-color: transparent;
color: white;
border: 1px solid white;
padding: 1rem;
border-radius: .5rem;
font-size: 1rem;
text-align: center;
`
export const Hamburger = styled.div`
display: none;
@media(max-width:500px){
    display: block;
   width: 100%;
   height: 100%;
   background-image: url(${navImg});
 color: white;
  position: absolute;
  top: 0rem;

   z-index: 3;
}
`
export const Lines = styled.div`
display: none;
@media(max-width:500px){
    display: block;
    padding: 1rem;
}
`
export const Line = styled.div`
width: 3rem;
height: .1rem;
background-color: white;
margin: .3rem 0 ;
`
export const LogoWrapper = styled.div`

`
export const Ul = styled.div`
padding: 0 1rem 1rem 1rem;
border: 1px solid black;
`
export const Li = styled.div`
margin-top: 1rem;
`
export const OptionsMble = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 4rem;

`

function HeaderComponents() {

    const [option, setOption] = useState(false);
    const [sidebar, setSidebar] = useState(true);

    return (
        <>
            <Header>
                <Lines onClick={() => setSidebar(!sidebar)}>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Lines>
                <div> <Img src={HeaderImg} /></div>


                <Options >
                    <h3>Dashboard</h3>
                    <h3>Leads</h3>
                    <h3>Appointment</h3>
                    <h3>My Properties</h3>
                </Options>

                <LoginCont>
                    <Button>+ Add Property</Button>
                    <Login>
                        <LogoWrapper onClick={() => setOption(!option)}>
                            <UserLogo src={userlogo} />
                            <ThreeLines src={threelines} />
                        </LogoWrapper>
                        <Ul className={option ? "show" : "hide"}>
                            <Li>Edit Profile</Li>
                            <Li>Log Out</Li>
                        </Ul>
                    </Login>
                </LoginCont>
            </Header>
            <Hamburger style={sidebar ? { left: `-100%` } : { left: `0%` }}>
                <Lines onClick={() => setSidebar(!sidebar)}>
                    <Line></Line>
                    <Line></Line>
                    <Line></Line>
                </Lines>
                <OptionsMble>
                    <Button>+ Add Property</Button>
                    <h3>Edit Profile</h3>
                    <h3>Dashboard</h3>
                    <h3>Leads</h3>
                    <h3>Appointment</h3>
                    <h3>My Properties</h3>
                    <h3>Log Out</h3>
                </OptionsMble>
            </Hamburger>
        </>
    );
}

export default HeaderComponents;