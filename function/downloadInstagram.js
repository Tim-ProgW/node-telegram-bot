const axios = require('axios');

async function instagramDownloader(url) {
          const options = {
                    method: 'GET',
                    url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
                    params: {
                              url: url,
                    },
                    headers: {
                              'X-RapidAPI-Key': '901af23752msh7c051f4139a8db7p13ac8djsn2345135172bb',
                              'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
                    }
          };

          try {
                    const response = await axios.request(options);
                    console.log(response.data.media);
                    return {
                              file_url: response.data.media
                    }
          } catch (error) {
                    console.error(error);
          }
}

module.exports = {
          instagramDownloader
}