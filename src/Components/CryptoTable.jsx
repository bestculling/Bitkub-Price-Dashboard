import React from 'react';
import CryptoRow from './CryptoRow';

const CryptoTable = ({ cryptocurrencies }) => {
    return (
        <table className="table-auto w-full text-left border-collapse border border-gray-700">
            <thead>
                <th className="text-gray-400 py-4 px-2 md:px-4">สกุลเงิน</th>
                <th className="text-gray-400 . py-4 px-2 md:px-4">ราคาล่าสุด (THB)</th>
                <th className="text-gray-400 py-4 px-2 md:px-4">Change (%)</th>
                <th className="text-gray-400 py-4 px-2 md:px-4">สูงสุด/วัน (THB)</th>
                <th className="text-gray-400 py-4 px-2 md:px-4">ต่ำสุด/วัน (THB)</th>
            </thead>
            <tbody>
                {cryptocurrencies.map((crypto, index) => (
                    <CryptoRow key={index} crypto={crypto} />
                ))}
            </tbody>
        </table>
    );
};

export default CryptoTable