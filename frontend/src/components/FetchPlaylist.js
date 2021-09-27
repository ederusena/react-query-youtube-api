import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import DispList from './DispList';

const FetchPlaylist = () => {
  const [pageToken, setPageToken] = useState();
  const KEY = process.env.REACT_APP_HOST_API_KEY;

  const fetchPlaylist = async (key, pageToken) => {
    const { data } = await axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems',
      {
        params: {
          part: 'snippet',
          playlistId: 'PLE2-5jfAVETEL7wP6URPm-2znC7_8z56J',
          key: KEY,
          maxResults: 6,
          pageToken: pageToken,
        },
      }
      );
      return data
  }
  let { data, isLoading, error } = useQuery(
    ['playlist', pageToken], fetchPlaylist,
    // () => fetchPlaylist(KEY, pageToken),
    { keepPreviousData: true, staleTime: 5000 }
  );

  return (
    <div className='container'>
      <h3>Playlist musicas</h3>
      { error && <div>Algo saiu errado...</div>}

      { isLoading ? (
        <div>Carregando...</div>
      ) : (
        (
          <>
            <button
              className='btn btn-primary'
              onClick={() => setPageToken(data.prevPageToken)}
              disabled={!data.prevPageToken}
            >
              Pagina Anterior
            </button>
            <button
              className='btn btn-primary'
              onClick={() => setPageToken(data.nextPageToken)}
              disabled={!data.nextPageToken}
            >
              Proxima pagina
              </button>
            <DispList data={data} />
          </>
        )
      )}
    </div>
  );
};

export default FetchPlaylist;