import React from 'react';

const CryptoRow = ({ crypto }) => {
    return (
        <tr className='hover:bg-gray-800 transition duration-200 border-b border-gray-700'>
            <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={crypto.logo} alt={`${crypto.name} logo`} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{crypto.symbol}</div>
                        <div className="text-gray-400">{crypto.name}</div>
                    </div>
                </div>
            </td>
            <td className="py-4 px-4 font-semibold">{crypto.price !== undefined ? crypto.price : 'N/A'}</td>
            <td className={`py-4 px-4 font-semibold ${crypto.change && crypto.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                {crypto.change !== undefined ? crypto.change : 'N/A'}
            </td>
            <td className="py-4 px-4 font-semibold">{crypto.high24hr !== undefined ? crypto.high24hr : 'N/A'}</td>
            <td className="py-4 px-4 font-semibold">{crypto.low24hr !== undefined ? crypto.low24hr : 'N/A'}</td>
        </tr>
    );
};

export default CryptoRow;