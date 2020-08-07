export const checkLocalSession = () => {
    const localAuthJSON = localStorage.getItem('auth');
    if (localAuthJSON) {
        return JSON.parse(localAuthJSON).auth;
    }
    return false;
}