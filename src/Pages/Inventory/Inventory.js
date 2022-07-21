import React from 'react';
import useAllFruits from '../../Hooks/useAllFruits/useALlFruits';
import InventoryManage from '../InventoryManage/InventoryManage';
import PagesHeader from '../PagesHeader/PagesHeader';
import './Inventory.css'

import auth from "../../firebase.init";
// import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [user] = useAuthState(auth);
    // const logout = () => {
    //   signOut(auth);
    // };
    const [products] = useAllFruits();
    return (
        <div>
        <PagesHeader></PagesHeader>
            {/* <h1 style={{textAlign:'center', margin:'50px auto'}}>Manage Your Inventories</h1> */}
            <div className='inventory-manage'>

            {user ? (
                <>
                  <Nav.Link
                  as={Link} to="/manage" style={{ fontSize:'30px',fontWeight:'600', color:'#58A43A' }}>
                    <i>Manage Items</i>
                  </Nav.Link>
                  <Nav.Link
                  as={Link} to="/add" style={{ fontSize:'30px', fontWeight:'600',color:'#58A43A' }}>
                   <i>Add Item</i> 
                  </Nav.Link>
                  <Nav.Link
                  as={Link} to="/myitem" style={{ fontSize:'30px',fontWeight:'600', color:'#58A43A' }}>
                   <i>My Item</i> 
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
        </div>
        <div className='inventory'>
            {products.map((p) => (
            <InventoryManage key={p.id} p={p}></InventoryManage>
          ))}
        </div>
        </div>
        
    );
};

export default Inventory;