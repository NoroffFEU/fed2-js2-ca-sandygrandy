export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("user"));
}