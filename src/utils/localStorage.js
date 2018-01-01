export const getSerializedToken = () => {
    try {
        const serializedToken = localStorage.getItem('jwtToken');
        if (serializedToken === null) {
            return undefined;
        }
        return serializedToken;
    } catch (err) {
        return undefined;
    }
}

export const serializeToken = (jwtToken) => {
    try {
        localStorage.setItem('jwtToken', jwtToken);
    } catch (err) {
        //ignore
    }
}

export const removeToken = (jwtToken) => {
    try {
        localStorage.removeItem('jwtToken');
    } catch (err) {
        //ignore
    }
}