//KEY DN5KofgfldbH6zJkcLKf82QJSoX3KB3m
//trending
export const getGifs = async(category) => {
    console.log('Categoria',category)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PdOD6nhzpVWttnW2vTMvDzBjK4zv3aRK&q=${ category }&limit=10`
    console.log('URL',url)
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs= data.map(img => ({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }))
    return gifs
}