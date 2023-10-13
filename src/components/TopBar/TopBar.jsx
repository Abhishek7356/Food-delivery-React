import React, { useState } from 'react';
import './TopBar.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function TopBar() {

    const [showBasic, setShowBasic] = useState(false);

    return (
        <div className='navbarSection' style={{ letterSpacing: '1px' }}>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer className='container' fluid>
                    <MDBNavbarBrand href='#' className='fw-bold text-primary'>Foodie</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <Link to={'/'}><MDBNavbarLink active aria-current='page' href=''>
                                    Home
                                </MDBNavbarLink></Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Search food' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default TopBar