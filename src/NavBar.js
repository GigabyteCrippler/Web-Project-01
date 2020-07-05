import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
//import styled from 'styled-components';



// const Styles = styled.div`
//
// background-color: white ;
//
//  a.navbar-link :black ;
// .navbar-brand , .navbar-nav , .navbar-link{
//     color : #bbb ;
//
//     &:hover {
//         color:white ;
//     }
// } `
// ;
export const NavBar = () => (


        <Navbar expand="lg ">

            <Navbar.Brand href="/" >  </Navbar.Brand>

            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav " >

                <Nav className="ml-auto">
                  <p className = 'boo' > <Nav.Item><Nav.Link href="/"> Home</Nav.Link></Nav.Item> </p>
                <p className = 'foo'>    <Nav.Item><Nav.Link href="/about"> About</Nav.Link></Nav.Item> </p>
                <p className = 'bar'>  <Nav.Item><Nav.Link href="/contact"> Contact</Nav.Link></Nav.Item> </p>
                </Nav>

            </Navbar.Collapse>

        </Navbar>

)
