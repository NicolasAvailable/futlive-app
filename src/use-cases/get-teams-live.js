





export const getTeamsLive = async() => {


    const resp = await fetch(`https://v3.football.api-sports.io/fixtures?live=all`,{
        method: 'GET',
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "c0285091595b8d13842d92ed2336b591"
        }
    });

    const data   = await resp.json()
    const matchs = data.response 
    console.log(matchs);
    return matchs;
}