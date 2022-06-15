// const clientId = process.env.CLIENT_ID;
const clientId = 'ef0706c270b549dba6dc98b78a3b40a5';
const redirectUri = 'http://localhost:3000';

let accessToken;

const Spotify = {

    getAccessToken() {
        if(accessToken) return accessToken;

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresTokenMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresTokenMatch) {
            accessToken = accessTokenMatch[1];

            const expiresIn = Number(expiresTokenMatch[1]);
            //Clean parameters in order to grab a new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            return accessToken;
        } else{
            const accessUrl =`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers: {
                Authorization:`Bearer ${accessToken}`
            }
        }).then(res => {
            return res.json();

        }).then(jsonRes => {
            if(!jsonRes.tracks) {
                return [];
            }
            return jsonRes.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                aru: track.uri,
            }))
        })
    },

    savePlaylist(name, trackUri) {
        if(!name || !trackUri.length) return;

        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userId;

        return fetch('https://api.spotify.com/v1/me', { headers: headers }
        ).then(res => res.json()
        ).then(jsonRes => {
            userId = jsonRes.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name})

            }).then(res => res.json()
            ).then(jsonRes => {
                const playlistId = jsonRes.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`),
                {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ uris: trackUri})
                }
            })
        })
    }
}

export default Spotify;

// /v1/users/{user_id}/playlists/{playlist_id}/tracks
