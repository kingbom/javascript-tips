const API = {
    getCustomer: () => Promise.resolve(),
    process: () => Promise.resolve()
}

const getInfo = async () => {
   const customer = await API.getCustomer();
   const process = await API.process(customer);
   console.log(`Customer is ${process}`);
}