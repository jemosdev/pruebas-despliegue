import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                const contentType = response.headers.get("content-type");
                
                if (response.ok) {
                    if (contentType && contentType.includes("application/json")) {
                        const result = await response.json();
                        setData(result.data || []);
                    } else {
                        const text = await response.text();
                        throw new Error(`Expected JSON, but got: ${text.substring(0, 200)}`);
                } 
                } else {
                    const errorText = await response.text();
                    throw new Error(errorText || "Error fetching data");
                }
            } catch (error) {
                setError(error.message || "Error fetching data");
                setData([]);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export { useFetch };