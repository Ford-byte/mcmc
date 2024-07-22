export const sanitizeData = (data) => {
    const sanitize = (input) => {
        if (typeof input === 'object' && input !== null) {
            const sanitizedObject = {};
            for (const key in input) {
                if (input.hasOwnProperty(key)) {
                    sanitizedObject[key] = sanitize(input[key]);
                }
            }
            return sanitizedObject;
        } else {
            return '';
        }
    };

    return sanitize(data);
};
