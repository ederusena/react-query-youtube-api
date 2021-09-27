import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import DispList from './DispList';

const FetchPlaylist = () => {
  const KEY = process.env.REACT_APP_HOST_API_KEY;
  
  const fetchPlaylist = async () => {
    const { data } = await axios.get(
      'https://www.googleapis.com/youtube/v3/playlistItems',
      {
        params: {
          part: 'snippet',
          playlistId: 'PLE2-5jfAVETEL7wP6URPm-2znC7_8z56J',
          key: KEY,
          maxResults: 6,
        },
      }
      );
      return data
  }
  const { data, isLoading, error } = useQuery('playlist', fetchPlaylist);

  return (
    <div className='container'>
      <h3>Playlist musicas</h3>
      { error && <div>Algo saiu errado...</div>}

      { isLoading ? (
        <div>Carregando...</div>
      ) : (
        <DispList data={data} />
      )}
    </div>
  );
};

export default FetchPlaylist;