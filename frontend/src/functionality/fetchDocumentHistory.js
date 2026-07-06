import Cookies from "universal-cookie";

const fetchDocHistory = async () => {
    const cookies = new Cookies();
    let token = cookies.get("token") || localStorage.getItem("token");

    try {
        const response = await fetch(`${import.meta.env.VITE_REQUEST_TO_URL}/api/projects/get-all-document`, {
            method: "POST",
            headers: {
                "Authorization": `${token}`,
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result.data.Document || [];
    } catch (error) {
        console.error("Error fetching document history: ", error);
        return [];
    }
};

export default fetchDocHistory;