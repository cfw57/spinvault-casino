import { useState, useEffect } from 'react';
import Head from 'next/head';

const slotThemes = {
  "Fruit Party": ['🍓', '🍊', '🍇', '🍍', '🍒'],
  "Gold Cash": ['💰', '🏆', '💵', '💎', '🔔'],
  "Lucky 7": ['7️⃣', '🍋', '🍒', '🔔', '⭐']
};

export default function Home() {
  const [theme, setTheme] = useState('Fruit Party');
  const [reels, setReels] = useState(['❔', '❔', '❔']);
  const [message, setMessage] = useState('Welcome to SpinVault!');
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    setMessage('Spinning...');

    const currentSymbols = slotThemes[theme];
    let frame = 0;
    const interval = setInterval(() => {
      const newReels = [
        currentSymbols[Math.floor(Math.random() * currentSymbols.length)],
        currentSymbols[Math.floor(Math.random() * currentSymbols.length)],
        currentSymbols[Math.floor(Math.random() * currentSymbols.length)]
      ];
      setReels(newReels);
      frame++;
      if (frame > 15) {
        clearInterval(interval);
        setSpinning(false);
        if (newReels.every(s => s === newReels[0])) {
          setMessage('🎉 JACKPOT! You win!');
        } else {
          setMessage('Try again!');
        }
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans">
      <Head>
        <title>SpinVault Casino</title>
        <meta name="description" content="The ultimate online slot experience. Play now and win big with SpinVault." />
      </Head>

      {/* Navbar */}
      <header className="w-full py-4 px-6 bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] border-b border-gray-800 flex items-center justify-between shadow-md">
        <h1 className="text-3xl font-extrabold tracking-tight text-yellow-400">🎰 SpinVault</h1>
        <button className="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded text-black font-bold">Connect Wallet</button>
      </header>

      {/* Hero Banner */}
      <section className="bg-cover bg-center bg-[url('/casino-bg.jpg')] py-24 text-center text-white shadow-inner">
        <div className="bg-black bg-opacity-60 px-4 py-10 inline-block rounded-lg">
          <h2 className="text-5xl font-bold mb-4">Welcome to SpinVault</h2>
          <p className="text-xl max-w-xl mx-auto text-gray-300 mb-6">
            Experience next-generation crypto slots with thrilling rewards and daily jackpots.
          </p>
          <button onClick={spin} className="text-xl bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg shadow-xl font-bold">
            Start Spinning
          </button>
        </div>
      </section>

      {/* Slot Lobby */}
      <section className="py-16 px-4 md:px-12">
        <h3 className="text-3xl font-bold mb-8 text-center">🎮 Featured Slots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(slotThemes).map((name) => (
            <div
              key={name}
              className="bg-[#1f1f1f] hover:bg-[#2c2c2c] rounded-xl p-6 shadow-lg cursor-pointer border border-gray-700"
              onClick={() => setTheme(name)}
            >
              <h4 className="text-xl font-bold mb-2">{name}</h4>
              <div className="text-4xl flex gap-2">
                {slotThemes[name].slice(0, 3).map((symbol, i) => (
                  <span key={i}>{symbol}</span>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-400">Click to play</p>
            </div>
          ))}
        </div>
      </section>

      {/* Slot Machine */}
      <section className="mt-12 text-center bg-[#1b1b1b] py-12">
        <h3 className="text-2xl font-bold mb-6">🎰 Now Playing: {theme}</h3>
        <div className="flex justify-center gap-6 text-6xl mb-6">
          {reels.map((r, i) => <span key={i} className="transition-all duration-200 ease-in-out scale-105">{r}</span>)}
        </div>
        <p className="text-xl font-semibold mb-4">{message}</p>
        <button
          onClick={spin}
          disabled={spinning}
          className="text-lg bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded font-bold disabled:opacity-50"
        >
          {spinning ? 'Spinning...' : 'Spin Again'}
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-gradient-to-r from-black to-gray-900 text-center text-sm text-gray-500 border-t border-gray-700">
        <p>© 2025 SpinVault Casino. All rights reserved.</p>
        <p className="mt-1">Play responsibly. 18+ only. Crypto-based gambling laws may apply in your region.</p>
      </footer>
    </div>
  );
}
