const API = {
    getCustomer : () => 'Jaruwit'
}

const getCustomer = (fullName = 'Jaruwit') => {
    return API.getCustomer(fullName);
}

const getCustomer = (fullName = 'Jaruwit') => {
    return API.getCustomer(fullName);
}

const getCustomerRequireFullName = (fullName = requireFullName()) => {
    return API.getCustomer(fullName);
}

const requireFullName = () => {
    throw new Error('fullName parameter is require')
}