import React, { useEffect } from 'react';


const BASE_URL = "https://rickandmortyapi.com/api";

interface Episode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

interface Character {
  created: string;
  episode: string[];
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
  type: string;
  url: string;
}

function getEpisodeId(link: string) {
  return link.match(/(\d+)/)![0];
}

function createUrl(length: number, urlCode: string) {
  const dataString: string = new Array(length).fill(0).map((item: number, index: number) => index + 1).join(',')
  return `${BASE_URL}/${urlCode}/${dataString}`
}

async function getData<T>(url: string) {
  try {
    const response = await fetch(url, { method: 'GET' })
    const result: Array<T> = await response.json();
    return result;
  } catch (e) {
    console.log(e)
    return []
  }
}

const episodesUrl = createUrl(51, "episode");
const characterUrl = createUrl(826, 'character')


const Task1 = () => {
  useEffect(() => {
    getData<Episode>(episodesUrl).then(episodes => {
      getData<Character>(characterUrl).then(characters => {
        const charactersHash = characters.reduce((acc, item) => {
          acc[item.id] = item
          return acc
        }, {} as any)

        const answer = episodes.map(item => {
          item.characters = item.characters.map(character => {
            const characterId = getEpisodeId(character);
            return charactersHash[characterId];
          })
          return item
        })
        console.log('answer', answer);
      })
    })
  },[])
  return (
    <div>
    </div>
  );
};

export default Task1;
