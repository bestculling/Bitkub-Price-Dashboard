import React, { useState, useEffect } from 'react';
import CryptoTable from './CryptoTable';
import cryptocurrencies from '../cryptocurrencies';
import { filterCryptocurrencies } from '../utils';
import { fetchCryptocurrencies } from '../api';
import { FaSearch } from 'react-icons/fa';

function CryptoApp() {
    const [searchTerm, setSearchTerm] = useState('');
    const [fetchedCryptocurrencies, setFetchedCryptocurrencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadCryptocurrencies = async () => {
        setLoading(true);
        try {
            const data = await fetchCryptocurrencies();
            const filteredData = cryptocurrencies.map(crypto => {
                const key = `THB_${crypto.symbol.toUpperCase()}`;
                const apiData = data[key];

                return {
                    symbol: crypto.symbol,
                    name: crypto.name,
                    logo: crypto.logo,
                    price: apiData?.last !== undefined ? apiData.last : 0,
                    change: apiData?.percentChange ? `${apiData.percentChange.toFixed(2)}%` : 'N/A',
                    high24hr: apiData?.high24hr !== undefined ? apiData.high24hr : 0,
                    low24hr: apiData?.low24hr !== undefined ? apiData.low24hr : 0,
                };
            });
            setFetchedCryptocurrencies(filteredData.filter(item => item.price !== undefined));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCryptocurrencies();
    }, []);

    const filteredCryptocurrencies = filterCryptocurrencies(
        fetchedCryptocurrencies.length > 0 ? fetchedCryptocurrencies : cryptocurrencies,
        searchTerm
    );

    return (
        <div className='p-4 md:p-8 text-white bg-[#293233] rounded-lg shadow-lg mx-auto max-w-screen-md'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h1 className='text-[#02D667] text- text-2xl text-center mb-4 md:mb-0'>ราคาตลาด</h1>
                <div className='relative w-full md:w-1/2'>
                    <input
                        type="text"
                        placeholder="ค้นหาเหรียญ..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="text-white bg-[#293233] p-2 pl-10 rounded-sm border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 w-full"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            {/* Handle loading and error states */}
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : error ? (
                <div className="text-red-500 text-center">{error}</div>
            ) : (
                <div className="h-[500px] overflow-y-auto">
                    <CryptoTable cryptocurrencies={filteredCryptocurrencies} />
                </div>
            )}
        </div>
    );
}

export default CryptoApp;