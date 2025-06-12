import { useState } from 'react';
import Head from 'next/head';

const symbols = ['🍒', '💎', '🔔', '🍋', '7️⃣'];

export default function Home() {
  const [reels, setReels] = useState(['❔', '❔', '❔']);
  const [message, setMessage] = useState('Welcome to SpinVault!');

  const spin = () => {
    const newReels = [
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)]
    ];
    setReels(newReels);

    if (newReels.every(s => s === newReels[0])) {
      setMessage('🎉 JACKPOT! You win!');
    } else {
      setMessage('Try again!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <Head>
        <title>SpinVault Casino</title>
        <meta name="description" content="The ultimate online slot experience. Play now and win big with SpinVault." />
      </Head>

      {/* Navbar */}
      <header className="w-full py-4 px-6 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-700 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-yellow-400">🎰 SpinVault</h1>
        <button className="bg-yellow-500 hover:bg-yellow-400 px-4 py-1 rounded text-black font-semibold">Connect Wallet</button>
      </header>

      {/* Hero */}
      <section className="text-center mt-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to SpinVault</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Play high-stakes slots, win crypto, and enter the world of elite digital gaming. 100 Free Spins for new players!
        </p>
        <button onClick={spin} className="text-xl bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded shadow-lg font-bold">
          Spin Now
        </button>
      </section>

      {/* Slot Machine */}
      <section className="mt-16 text-center">
        <div className="flex justify-center gap-6 text-6xl mb-4">
          {reels.map((r, i) => <span key={i}>{r}</span>)}
        </div>
        <p className="text-2xl font-semibold mt-4">{message}</p>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-black bg-opacity-80 border-t border-gray-700 text-center text-sm text-gray-500">
        <p>© 2025 SpinVault Casino. All rights reserved.</p>
        <p className="mt-1">Play responsibly. 18+ only. Crypto-based gambling laws may apply in your region.</p>
      </footer>
    </div>
  );
}
