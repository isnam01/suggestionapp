import React, { useState } from "react";
import "./App.css";
import soundfile from './Christina Perri - A Thousand Years.mp3';

export default function App() {
  const dict = {
    "Instrumental 🎶": [{song:"Faded 😍💞",artist:"Armaan Malik",link:soundfile},{song:"Ye Haseen Vadiyan 🤩💖",artist:"Armaan Malik",link:soundfile},{song:"Bahon ke Darmiyan 🤩💕",artist:"Armaan Malik",link:soundfile}],
    "HipHop 🎧": [{song:"buffalo says hello ❤",artist:"Armaan Malik",link:soundfile},{song:"hello bllo",artist:"Armaan Malik",link:soundfile}],
    "EDM 🎛": [{song:"hello aditi 😍",artist:"Armaan Malik",link:soundfile},{song:"hello bel 🥰",artist:"Armaan Malik",link:soundfile}],
    "Folk Music ✨": [{song:"Kesariya Balam 💘💘",link:"song"},{song:"Chaudhary 💞💞",artist:"Armaan Malik",link:soundfile}],
    "Jazz 🎵": [{song:"hello adi 😍",artist:"Armaan Malik",link:soundfile},{song:"hello bello",artist:"Armaan Malik",link:soundfile}]
  };
  const [meaning, setmeaning] = useState(dict["aditi"]);
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
