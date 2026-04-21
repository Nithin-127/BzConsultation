"use client";

import Link from "next/link";

export default function PageHeader() {
  return (
    <section className="about-page page-header">
      <div className="page-header__bg" />
      <div className="page-header__overlay" />
      <div className="container">
        <ul className="page-header__breadcrumb">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <span>About Us</span>
          </li>
        </ul>
        <h2 className="page-header__title">About Us</h2>
      </div>
    </section>
  );
}
