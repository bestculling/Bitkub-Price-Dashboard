const fetchCryptocurrencies = async () => {
    try {
        const response = await fetch('https://api.bitkub.com/api/market/ticker');
        const data = await response.json();

        // Transform data into the format you need
        if (data) {
            return data; // Return the raw data or manipulate it if required
        } else {
            throw new Error("No data found");
        }
    } catch (err) {
        throw new Error('Error fetching data: ' + err.message);
    }
};

export { fetchCryptocurrencies };