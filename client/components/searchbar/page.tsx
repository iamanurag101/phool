"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import "./styles.scss";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/catalogue?search=${encodeURIComponent(q)}&page=1`);
  }

  return (
    <div className="searchBar" style={{ backgroundImage: `url(/HeroImg.jpg)` }}>
        <div className="overlay">
            <form className="searchForm" onSubmit={onSubmit}>
                <div className="input-group">
                <Search className="icons"/>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                </div>
                <button className="search-btn" type="submit">Search</button>
            </form>
        </div>
    </div>
  );
}