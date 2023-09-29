export const SHOW_TOAST = 'SHOW_TOAST';
export const CLEAR_TOAST = 'CLEAR_TOAST';

const subscriptions = {};
const getNextUniqueId = getIdGenerator();

export function subscribe(eventType, callback) {
    const id = getNextUniqueId();

    if (!subscriptions[eventType]) subscriptions[eventType] = {};

    subscriptions[eventType][id] = callback;

    return () => {
        if (!subscriptions?.[eventType]) return;
        delete subscriptions?.[eventType]?.[id];
        if (Object.keys(subscriptions[eventType]).length === 0) delete subscriptions[eventType];
    };
}

export function publish(eventType, arg) {
    if (!subscriptions[eventType]) return;

    Object.keys(subscriptions[eventType]).forEach((key) => subscriptions[eventType][key](arg));
}

function getIdGenerator() {
    let lastId = 0;
    return function getNextUniqueId() {
        lastId += 1;
        return lastId;
    };
}
