// axios API calls (or similar) to backend server would live here if we were running one
// seems like a good place to store the information to be rendered on the portfolio page
// in case such a thing ever existed in a database but there's just not enough data 
// here to warrant that.
const API = {
    getPortfolioProjectInfo:function(){
        return [
            {name:"Weather Dashboard"},
            {name:"Frustration."}
        ];
    // },
    // createPlayer:function(playerData){
    //     return axios.post(`${BASE_URL}/api/players`,playerData)
    // },
    // getPlayerById:function(id){
    //     return axios.get(`${BASE_URL}/api/players/${id}`)
    // },
    // deletePlayerById:function(id){
    //     return axios.delete(`${BASE_URL}/api/players/${id}`)
    // },
    // updatePlayerById:function(id,playerData) {
    //     return axios.put(`${BASE_URL}/api/players/${id}`,playerData)
    }
}
export default API
