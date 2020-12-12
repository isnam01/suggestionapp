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
import rock from './pic/rockstar.jpg';
import aafatp from './pic/aafat.jpg';
import inde from './pic/inde.jpg';
import kaam25 from './pic/kaam25.jpg';
import animals from './pic/animals.jpg';
import magentap from './pic/magenta.jpg';
import vedp from './pic/ved.jpg';
import kesariyap from './pic/kesariya.jpg';
import choudhary from './pic/choudhary.jpg';
import aayatp from './pic/aayat.jpg';
import kaisi from './pic/kaisi.jpg';
import ekldki from './pic/ekldki.jpg';
import yetumhari from './pic/yetumhari.jpg';

export default function App() {
  const dict = {
    "Instrumental 🎶": [{song:"Tango For Taj 😍💞",artist:"A.R. Rahman",link:tango,pic:rock},{song:"The Dichotomy Of Fame 🤩💖",artist:"A.R. Rahman",link:dichotomy,pic:rock},{song:"Meeting Place 🤩💕",artist:"A.R. Rahman",link:meeting,pic:rock}],
    "HipHop 🎧": [{song:"Aafat Waapas ❤",artist:"Naezy",link:aafat,pic:aafatp},{song:"Independent ",artist:"J Trix ft. Projekt AZ & 5aumit",link:independent,pic:inde},{song:"Kaam 25",artist:"Divine",link:kaam,pic:kaam25}],
    "EDM 🎛": [{song:"Animals 😍",artist:"Maroon 5",link:maroon,pic:animals},{song:"Magenta Riddim 🥰",artist:"DJ Snake",link:magenta,pic:magentap},{song:"Ved 🥰",artist:"Ritviz",link:ved,pic:vedp}],
    "Folk Music ✨": [{song:"Kesariya Balam 💘💘",artist:"Seema Mishra",link:kesariya,pic:kesariyap},{song:"Chaudhary 💞💞",artist:"Amit Trivedi ft. Mame Khan",link:chodhary,pic:choudhary},{song:"Aayat 💞💞",artist:"Arijit Singh",link:aayat,pic:aayatp}],
    "Jazz 🎵": [{song:"Kaisi Paheli 😍",artist:"Sunidhi Chauhan",link:paheli,pic:kaisi},{song:"Ek Ladki 😍💓",artist:"Kishore Kumar",link:ekladki,pic:ekldki},{song:"Ye tumhari meri baatein 😍💓",artist:"Dominique Serejo",link:battein,pic:yetumhari}]
  };
  const [meaning, setmeaning] = useState(dict["Instrumental 🎶"]);
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
                <div key={val.song} className="song">
                  <div>
                    <img src={val.pic} height="170px" width="170px" style={{margin:"8px"}}></img>
                  </div>
                  <div>
                    <span style={{"padding":"15px"}} key={val.song}>{val.song}</span>
                    <p>{val.artist}</p>
                    <audio controls  style={{"outline":"none"}}>
                      {val.link}.load()
                      <source src={val.link} type="audio/ogg" />
                        Your browser does not support the audio element.
                    </audio>
                  </div>
              </div>
              )
            })
          : null}
      </h3>
    </div>
    </div>
  );
}
