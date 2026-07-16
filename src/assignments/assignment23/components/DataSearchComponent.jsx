import { useState, useEffect, useMemo } from 'react';

const DataSearchComponent = () => {
    // 1. State for raw data, the user's search input, and loading status
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // 2. FETCHING: Use useEffect to get the data from your API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                // Simulating an API call to a placeholder service
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await response.json();

                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // The empty array ensures this only runs once when the component mounts

    // 3. SEARCHING: Use useMemo to filter the data
    const filteredData = useMemo(() => {
        console.log("Filtering data..."); // You will only see this when searchTerm or data changes

        // If there's no search term, return the original data immediately
        if (!searchTerm) return data;

        // Filter the data based on the search term (case-insensitive)
        return data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [data, searchTerm]); // React watches these two variables. If neither changes, it skips the filter.

    // 4. Render the UI
    return (
        <div style={{ padding: '20px', maxWidth: '400px', fontFamily: 'sans-serif' }}>
            <h2>User Directory</h2>

            <input
                type="text"
                placeholder="Search users by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
            />

            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {filteredData.length > 0 ? (
                        filteredData.map((user) => (
                            <li
                                key={user.id}
                                style={{ padding: '10px', borderBottom: '1px solid #ccc' }}
                            >
                                <strong>{user.name}</strong> - {user.email}
                            </li>
                        ))
                    ) : (
                        <p>No users found matching "{searchTerm}"</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default DataSearchComponent;