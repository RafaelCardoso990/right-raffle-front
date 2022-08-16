import axios from "axios"

const BASE_URL = "https://right-raffle.herokuapp.com"


function createUser(body) {    
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    return promise
}
  
function login(body) {     
    const promise = axios.post(`${BASE_URL}/sign-in`, body)
    return promise
}

function getAllRaffles(config){
    const promise = axios.get(`${BASE_URL}/raffle`,config)
    return promise
}

function getRafflesById(id, config){
    const promise = axios.get(`${BASE_URL}/raffle/${id}`,config)
    return promise
}

function getNumberByIdAndAmount(amount,id,config){   
    const promise = axios.get(`${BASE_URL}/raffle/${id}?amount=${amount}`,config)
    return promise
}

function buyNumbersRaffles(body, config, raffleId){
    const promise = axios.post(`${BASE_URL}/buy/raffle/${raffleId}`, body, config)
    return promise
}

function getTransactionsByUserId(id,config){
    const promise = axios.get(`${BASE_URL}/transactions/${id}`, config)
    return promise
}

const API = {createUser ,login, getAllRaffles, getRafflesById, getNumberByIdAndAmount, buyNumbersRaffles, getTransactionsByUserId}
export default API
  