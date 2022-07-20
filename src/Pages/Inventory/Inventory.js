import React from 'react';
import useAllFruits from '../../Hooks/useAllFruits/useALlFruits';
import InventoryManage from '../InventoryManage/InventoryManage';
import PagesHeader from '../PagesHeader/PagesHeader';
import './Inventory.css'

const Inventory = () => {
    const [products] = useAllFruits();
    return (
        <div>
        <PagesHeader></PagesHeader>
            <h1 style={{textAlign:'center', margin:'50px auto'}}>Manage Your Inventories</h1>
        <div className='inventory'>
            {products.map((p) => (
            <InventoryManage key={p.id} p={p}></InventoryManage>
          ))}
        </div>
        </div>
    );
};

export default Inventory;