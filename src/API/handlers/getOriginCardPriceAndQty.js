import axios from 'axios';


export const priceAndQtyRequestToApi = async () => {
    const req = await axios.get('http://localhost:3000/api/v0/card-price/origincard');
    return await req;
}

