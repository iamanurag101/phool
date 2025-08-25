"use client";

import "./styles.scss";

type Review = {
  id: string | number;
  name: string;
  handle: string;        
  avatar: string;        
  quote: string;
  date: string;          
};

const SAMPLE : Review[] = [
  {
    id: 1,
    name: "Aarav Mehta",
    handle: "@greenaarav",
    avatar: "/avatar.jpg",
    quote: "“I never thought my balcony could look like a mini-forest until I ordered from this nursery.”",
    date: "15.07.2025",
  },
  {
    id: 2,
    name: "Priya Nair",
    handle: "@plantpriya",
    avatar: "/avatar.jpg",
    quote: "“The money plant I bought is thriving, and it feels like my home has new energy now.”",
    date: "22.07.2025",
  },
  {
    id: 3,
    name: "Rohan Deshpande",
    handle: "@rohanroots",
    avatar: "/avatar.jpg",
    quote: "“My workspace feels calmer ever since I placed their snake plant on my desk.”",
    date: "28.07.2025",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    handle: "@leafyananya",
    avatar: "/avatar.jpg",
    quote: "“I’m amazed at how carefully packed the plants arrived — not a single leaf damaged.”",
    date: "02.08.2025",
  },
  {
    id: 5,
    name: "Kabir Sharma",
    handle: "@kabirgrows",
    avatar: "/avatar.jpg",
    quote: "“The herbs I ordered are fresh, aromatic, and my kitchen feels like a little farm now.”",
    date: "05.08.2025",
  },
];


export default function Reviews({
  items = SAMPLE,
}: { items?: Review[]; }) {
  return (
    <section className="reviews">
      <h2 className="heading">What our <span>Urban Foresters</span> have to say</h2>
      <div className="grid">
        {items.map((r) => (
          <article className="review-card" key={r.id}>
            <header className="head">
              <img className="avatar" src={r.avatar} alt={r.name} />
              <div className="id">
                <div className="name">{r.name}</div>
                <div className="handle">{r.handle}</div>
              </div>
            </header>

            <p className="quote">{r.quote}</p>

            <time className="date" dateTime={r.date}>
              {r.date}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
}