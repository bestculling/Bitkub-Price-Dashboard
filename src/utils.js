export const filterCryptocurrencies = (cryptocurrencies, searchTerm) => {
    return cryptocurrencies.filter(crypto =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
};