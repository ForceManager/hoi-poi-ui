export const getFirstTwoInitials = (name) => {
    if (!name) return '';
    let initials = name.match(/\b\w/g) || [];
    const firstInitial = initials.shift();
    const lastInitial = initials.pop();
    initials = [firstInitial, lastInitial];
    initials = initials.join('').toUpperCase().substring(0, 2);
    return initials;
};

export const removeAccents = (data) => {
    return data.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
