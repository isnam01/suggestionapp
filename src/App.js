import React, { useState } from "react";
import "./App.css";
import maroon from './songs/Maroon_5_-_Animals.mp3';
import magenta from './songs/DJ_Snake_-_Magenta_Riddim_(Audio).mp3';
import ved from './songs/Ritviz_-_Ved.mp3';
import tango from './songs/Tango_For_Taj_(Music).mp3';
import dichotomy from './songs/The_Dichotomy_Of_Fame_Featuring_Balesh_On_Shehnai,_Kabuli_On_Guitars.mp3';
import meeting from './songs/Meeting_Place_(Based_On_A_Poem_By_Rumi).mp3';
import aafat from './songs/Aafat_Waapas__Naezy__Official_Music_Video.mp3';
import independent from './songs/Independent_J_Trix_ft_Projekt_AZ_&_5aumit_Official_Music_Video.mp3';
import kaam from './songs/Kaam_25_-_DIVINE___Sacred_Games.mp3';
import kesariya from './songs/Kesariya-Balam-Seema-Mishra.mp3';
import chodhary from './songs/Chaudhary-Mame-Khan.mp3';
import aayat from './songs/Lyrical__Aayat___Full_Song_with_Lyrics___Bajirao_Mastani.mp3';
import paheli from './songs/Kaisi-Paheli-Zindagani-Sunidhi-Chauhan.mp3';
import ekladki from './songs/Ek-Ladki-Bheegi-Bhaagi-Si-Kishore-Kumar.mp3';
import battein from './songs/Ye-Tumhari-Meri-Baatein-Dominique-Cerejo.mp3';


export default function App() {
  const dict = {
    "Instrumental 🎶": [{song:"Tango For Taj 😍💞",artist:"Armaan Malik",link:tango},{song:"The Dichotomy Of Fame 🤩💖",artist:"Armaan Malik",link:dichotomy},{song:"Meeting Place 🤩💕",artist:"Armaan Malik",link:meeting}],
    "HipHop 🎧": [{song:"Aafat Waapas ❤",artist:"Armaan Malik",link:aafat},{song:"Independent J Trix ft Projekt",artist:"Armaan Malik",link:independent},{song:"Kaam 25",artist:"Armaan Malik",link:kaam}],
    "EDM 🎛": [{song:"Maroon 5 😍",artist:"Armaan Malik",link:maroon},{song:"Magenta Riddim 🥰",artist:"Armaan Malik",link:magenta},{song:"Ritviz -Ved 🥰",artist:"Armaan Malik",link:ved}],
    "Folk Music ✨": [{song:"Kesariya Balam 💘💘",link:kesariya},{song:"Chaudhary 💞💞",artist:"Armaan Malik",link:chodhary},{song:"Aayat 💞💞",artist:"Armaan Malik",link:aayat}],
    "Jazz 🎵": [{song:"Kaisi Paheli 😍",artist:"Armaan Malik",link:paheli},{song:"Ek Ladki 😍💓",artist:"Armaan Malik",link:ekladki},{song:"Yetumhari meri baatein 😍💓",artist:"Armaan Malik",link:battein}]
  };
  const [meaning, setmeaning] = useState("");
  const keys = Object.keys(dict);
  function handleclick(key) {
    setmeaning(dict[key]);
  }
  return (
    <div className="App">
      <div className="contents">
        <h2>Music Suggestion App for Music Lovers 😍😍😍</h2>
        <h2>🎧+🎶=💖</h2>
      <h4>
        {keys.map((key) => {
          return (
            <span className="types" key={key} onClick={() => handleclick(key)}>
              {key}
            </span>
          );
        })}
      </h4>
      <h3 className="songlist">
        {meaning
          ? meaning.map((val) => {
              return (
                <div className="song">
                  <span style={{"padding":"15px"}} key={val.song}>{val.song}</span>
                  <p>{val.artist}</p>
                  <audio controls  style={{"outline":"none"}}>
                    <source src={val.link} type="audio/ogg" />
                      Your browser does not support the audio element.
                  </audio>
              </div>
              )
            })
          : null}
      </h3>
    </div>
    </div>
  );
}
