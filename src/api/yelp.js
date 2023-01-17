import axios from 'axios'

export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers:{
    Authorization: 'Bearer 70KFcNbItaFj3NRQzxPZExvOQka05X3072WVR57oqa9b-Sx9C3-2vUC2MP9k32X2biEhPf085nCwd9MfevP1TniCClYCK7I8F-MuzbDAXs3rjLwtK0pG0eKcLBXEY3Yx'
}
});