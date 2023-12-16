export const localizePathByLang = (lang: string) => (path: string) => {
    if (lang === "en") {
        if (path !== "/") {
            return `/en${path}`;
        }
        return "/en";
    }
    return path;
};
