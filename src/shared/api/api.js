import axios from "axios";

const baseUrl ='https://myfakeapi.com/api'

export const carInstance = axios.create({
    baseURL: baseUrl,
})


export const getAllCars = async () => {
    const res = await carInstance.get("/cars/");
    console.log(res);
    return res.data.cars;
}

