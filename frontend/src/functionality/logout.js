import Cookies from "universal-cookie";

const logout = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") || localStorage.getItem("token");

    try {
        await fetch(`${import.meta.env.VITE_REQUEST_TO_URL}/api/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        });
    } finally {
        cookies.remove("token", { path: "/" });
        cookies.remove("role", { path: "/" });
        cookies.remove("isAdmin", { path: "/" });
        localStorage.removeItem("token");
    }
};

export default logout;
