import Cookies from "universal-cookie";

const GenerateDocument = async (editorRef) => {
    const cookies = new Cookies();
    let token = cookies.get("token") || localStorage.getItem("token");

    const result = await fetch(`${import.meta.env.VITE_REQUEST_TO_URL}/api/projects/generate-document`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: JSON.stringify({
                code: editorRef.current.getValue()
            }),
        }
    );

    const data = await result.json();

    return data;
}

export default GenerateDocument;