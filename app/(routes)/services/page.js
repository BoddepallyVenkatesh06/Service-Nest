"use client";

import BusinessList from '../../_components/BusinessList';
import GlobalApi from '../../_services/GlobalApi';
import React, { useEffect, useState } from 'react';

const Services = () => {

    const [businessList, setBusinessList] = useState([]);
    
    useEffect(() => {
        getAllBusinessList();
      }, []);
    
      
      // get All Business List
      const getAllBusinessList = () => {
        GlobalApi.getAllBusinessList().then((resp) => {
          setBusinessList(resp.businessLists);
        });
      };

    return (
        <div className=''>
            <BusinessList businessList={businessList} title={"Popular Business"} />
        </div>
    );
}

export default Services;
