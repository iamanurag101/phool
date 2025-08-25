"use client";

import Link from "next/link";
import "./styles.scss"

export default function StatsBanner() {
  return (
    <section className="stats-banner">
      <div className="inner">
        <ul className="stats">
          <li className="item">
            <div className="value">
              <span className="number">60</span>
              <span className="unit">+</span>
            </div>
            <p className="label">Plant varieties</p>
          </li>
          <li className="item">
            <div className="value">
              <span className="number">98</span>
              <span className="unit">%</span>
            </div>
            <p className="label">Orders delivered fresh</p>
          </li>
          <li className="item">
            <div className="value">
              <span className="number">10</span>
              <span className="unit">+</span>
            </div>
            <p className="label">Cities served</p>
          </li>
        </ul>

        <div className="blurb">
          <p className="text">
            We handpick healthy, nursery-grown plants and deliver them fresh
            with care instructions, so your new greens thrive from day one.
          </p>
          <Link className="cta" href="/catalogue">
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
}