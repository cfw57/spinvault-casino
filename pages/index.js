import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState("Welcome to SpinVault!")
  const [result, setResult] = useState(["❓", "❓", "❓"])
  const symbols = ["🍒", "💎", "🔔", "🍋", "7️⃣"]

  const spin = () => {
    const outcome = [
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      symbols[Math.floor(Math.random() * symbols.length)]
    ]
    setResult(outcome)
    setMessage(outcome.every(sym => sym === outcome[0]) ? "🎉 Jackpot!" : "Try again!")
  }

  return (
    <>
      <Head>
        <title>SpinVault</title>
      </Head>
      <main className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl mb-4 font-bold">🎰 SpinVault Slots</h1>
        <div className="text-6xl mb-4 flex gap-4">{result.map((s, i) => <span key={i}>{s}</span>)}</div>
        <button className="px-6 py-2 text-xl bg-yellow-500 rounded hover:bg-yellow-600" onClick={spin}>
          Spin
        </button>
        <p className="mt-4 text-xl">{message}</p>
      </main>
    </>
  )
}
