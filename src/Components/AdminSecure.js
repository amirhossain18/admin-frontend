import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HotDealAdmin from '../Components/HotDealAdmin/HotDealAdmin'
import BrandUploadPage from './BrandUploadPage/BrandUploadPage';
import Header from './Header/Header';
import PendingOrder from './Order/PendingOrder';
import ProductUploadPage from './ProductUploadPage/ProductUploadPage'
const AdminSecure = () => {
    return (
        <div>
          <Header/>
             <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="hot-deal" title="hot-deal">
       <HotDealAdmin/>
      </Tab>
      <Tab eventKey="brand-upload" title="brand-upload">
     <BrandUploadPage></BrandUploadPage>
      </Tab>
      <Tab eventKey="product-upload" title="product-upload" >
       <ProductUploadPage/>
      </Tab>
      <Tab eventKey="pending-order" title="pending-order" >
       <PendingOrder/>
      </Tab>
      <Tab eventKey="Final-order" title="Final-order" >
       <ProductUploadPage/>
      </Tab>
    </Tabs>
        </div>
    );
};

export default AdminSecure;