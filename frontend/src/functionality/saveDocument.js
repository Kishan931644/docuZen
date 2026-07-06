import Cookies from "universal-cookie";

const saveDocument = async (title, documentContent, code) => {
    const cookies = new Cookies();
    const token = cookies.get('token') || localStorage.getItem("token");

    let response = await fetch(`${import.meta.env.VITE_REQUEST_TO_URL}/api/projects/create-document`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify({
            documentName: title,
            documentContent: documentContent,
            referedCode: code
        })
    });

    let result = await response.json();

    return result;
}

export default saveDocument;