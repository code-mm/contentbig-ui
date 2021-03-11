import React, {useState, useEffect} from 'react';
import {Column} from '@ant-design/charts';

const DemoColumn: React.FC = () => {
    var data = [
        {
            date: '2021-3-1',
            total: 100,
        },
        {
            date: '2021-3-2',
            total: 200,
        },
        {
            date: '2021-3-3',
            total: 300,
        },
        {
            date: '2021-3-4',
            total: 400,
        },
        {
            date: '2021-3-5',
            total: 500,
        },

    ];
    var config = {
        data: data,
        xField: 'date',
        yField: 'total',
        conversionTag: {},
    };
    return <Column {...config} />;
};

export default DemoColumn;