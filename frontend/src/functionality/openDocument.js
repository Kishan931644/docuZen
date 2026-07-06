import Cookies from "universal-cookie";

const openDoc = async (docId) => {
    const cookies = new Cookies();
    let token = cookies.get("token") || localStorage.getItem("token");

    let response = await fetch(`${import.meta.env.VITE_REQUEST_TO_URL}/api/projects/getdocwhole`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({
            documentId: docId
        })
    });

    let result = await response.json();
    return result;
}

export default openDoc;