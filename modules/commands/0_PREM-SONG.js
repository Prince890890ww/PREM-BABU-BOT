const axios = require('axios');
const qs = require('qs');

module.exports.config = {
  name: "song",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Spotify se song search kar ke deta hai",
  commandCategory: "Music",
  usages: "music <song name>",
  cooldowns: 5,
};

// Spotify API Credentials
const SPOTIFY_CLIENT_ID = "41dd52e608ee4c4ba8b196b943db9f73";
const SPOTIFY_CLIENT_SECRET = "5c7b438712b04d0a9fe2eaae6072fa16";

// Function to get Spotify token
async function getSpotifyToken() {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const data = qs.stringify({
    grant_type: 'client_credentials'
  });

  const headers = {
    headers: {
      'Authorization': 'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  try {
    const response = await axios.post(tokenUrl, data, headers);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching Spotify token:', error.response ? error.response.data : error.message);
    return null;
  }
}

// Function to download song from Audfree
async function downloadSongFromAudfree(songUrl) {
    const apiKey = 'YOUR_AUDFREE_API_KEY'; // Replace with your actual API key

    try {
        const response = await axios.post('https://api.audfree.com/download', {
            url: songUrl,
            api_key: apiKey,
        });

        if (response.data.success) {
            return response.data.download_path; // Return the path of the downloaded song
        } else {
            console.error('Download failed:', response.data.message);
            return null;
        }
    } catch (error) {
        console.error('Error while downloading:', error);
        return null;
    }
}

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;

  const query = args.join(" ");
  if (!query) {
    return api.sendMessage("Kripya song ka naam bhi likho!", threadID, messageID);
  }

  try {
    // Get Spotify access token
    const token = await getSpotifyToken();
    if (!token) {
      return api.sendMessage('Spotify se token lene me gadbad hui!', threadID, messageID);
    }

    // Spotify API se song search karte hain
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: {
        q: query,
        type: 'track',
        limit: 1
      }
    });

    if (!response.data.tracks.items.length) {
      return api.sendMessage("Sorry, koi result nahi mila.", threadID, messageID);
    }

    const song = response.data.tracks.items[0];
    const songTitle = song.name;
    const songUrl = song.external_urls.spotify;
    const artists = song.artists.map(artist => artist.name).join(', ');

    // Download the song using Audfree
    const downloadPath = await downloadSongFromAudfree(songUrl);
    if (downloadPath) {
        return api.sendMessage(`🎶 Tumhara gana mil gaya!\n\n🎵 Song: ${songTitle}\n👨‍🎤 Artist: ${artists}\n📥 Downloaded: ${downloadPath}`, threadID, messageID);
    } else {
        return api.sendMessage("Song download nahi ho paya!", threadID, messageID);
    }

  } catch (error) {
    console.error("Spotify API error:", error.response ? error.response.data : error.message);
    return api.sendMessage('Spotify se song laane me gadbad hui: ' + (error.response ? error.response.data : error.message), threadID, messageID);
  }
};
