import { useState } from "react";
import "./App.css";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpeg";
import photo5 from "./assets/photo5.jpeg";
import photo6 from "./assets/photo6.jpeg";
// import photo7 from "./assets/photo7.jpeg";
import photo8 from "./assets/photo8.jpeg";
import photo9 from "./assets/photo9.jpeg";
import photo10 from "./assets/photo10.jpeg";
import works1 from "./assets/works1.jpeg";
import works2 from "./assets/works2.jpeg";
import works3 from "./assets/works3.jpeg";
import works4 from "./assets/works4.jpeg";

const photos = [
  { src: photo1, alt: "写真1", caption: "photo" },
  { src: photo2, alt: "写真2", caption: "photo" },
  { src: photo3, alt: "写真3", caption: "photo" },
  { src: photo4, alt: "写真4", caption: "photo" },
  { src: photo5, alt: "写真5", caption: "photo" },
  { src: photo6, alt: "写真6", caption: "photo" },
  // { src: photo7, alt: "写真7", caption: "photo" },
  // { src: photo8, alt: "写真8", caption: "photo" },
  { src: photo9, alt: "写真9", caption: "photo" },
  { src: photo10, alt: "写真10", caption: "photo" },
];
type Photo = {
  src: string;
  alt: string;
  caption: string;
};
export default function Portfolio() {
  const [page, setPage] = useState("profile");
  const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);
  const [starred, setStarred] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Portfolio</h1>
        <nav className="nav">
          <button
            className={page === "profile" ? "active" : ""}
            onClick={() => setPage("profile")}
          >
            PROFILE
          </button>
          <button
            className={page === "photo" ? "active" : ""}
            onClick={() => setPage("photo")}
          >
            PHOTO
          </button>
          <button
            className={page === "works" ? "active" : ""}
            onClick={() => setPage("works")}
          >
            WORKS
          </button>
          <button
            className={page === "link" ? "active" : ""}
            onClick={() => setPage("link")}
          >
            LINK
          </button>
        </nav>
        <span
          className={`star ${starred ? "star-on animate-pop" : ""}`}
          onClick={() => {
            setStarred(!starred);
          }}
        >
          ★
        </span>
      </header>

      <main>
        {page === "profile" && (
          <div className="profile">
            <div className="profile-image">
              <img src={photo8} alt="profile" className="photo-image1" />
            </div>
            <div className="profile-text">
              <p>1999年生まれ。</p>
              <p>東京在住。</p>
              <p>フロントエンドエンジニア。</p>
              <p>スキル： HTML / CSS / React / TypeScript</p>
              <p>ラジオとベトナム料理が好きです。</p>
              <p> ✉️ お問い合わせ：ikuno.dev@gmail.com</p>
            </div>
          </div>
        )}

        {page === "photo" && (
          <div className="photo-grid">
            {photos.map((photo, i) => (
              <img
                key={i}
                src={photo.src}
                alt={photo.alt}
                className="photo-image"
                onClick={() => setModalPhoto(photo)}
              />
            ))}
          </div>
        )}

        {page === "works" && (
          <div className="works">
            <section className="feature-card">
              <div className="image-stack">
                <img
                  src={works1}
                  alt="MACHIBLUEのWebサイトサムネイル"
                  className="feature-image base"
                />
                <img
                  src={works2}
                  alt="MACHIBLUEのWebサイトサムネイル"
                  className="feature-image overlay"
                />
              </div>

              <div className="feature-text">
                <h3 className="feature-title">
                  MACHIBLUE - バンド公式Webサイト
                </h3>
                <p className="feature-description">
                  STUDIOを使って余白・タイポグラフィ・写真の空気感にこだわり、
                  <br />
                  シンプルながらも深みのあるデザインに仕上げました。
                </p>
                <a
                  href="https://machiblue-band.studio.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-site-button"
                >
                  ▶ サイトを見る
                </a>
              </div>
            </section>

            <section className="feature-card">
              <div className="image-stack">
                <img
                  src={works3}
                  alt="Cafe QuartettoのWebサイトサムネイル"
                  className="feature-image base"
                />
                <img
                  src={works4}
                  alt="Cafe QuartettoのWebサイトサムネイル"
                  className="feature-image overlay"
                />
              </div>
              <div className="feature-text">
                <h3 className="feature-title">
                  Cafe Quartetto - カフェのWebサイト
                </h3>
                <p className="feature-description">
                  HTML5、CSS3を使用し作成し、明るく落ち着いた雰囲気に仕上げました。
                </p>
                <a
                  href="https://likesbook.github.io/cafe-quartetto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-site-button"
                >
                  ▶ サイトを見る
                </a>
              </div>
            </section>
          </div>
        )}

        {page === "link" && (
          <div className="link">
            {/* <h2>リンク</h2> */}

            <a href="https://github.com/likesbook" target="_blank">
              GitHub
            </a>
          </div>
        )}
      </main>

      {modalPhoto && (
        <div className="modal-overlay" onClick={() => setModalPhoto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={modalPhoto.src}
              alt={modalPhoto.alt}
              className="modal-image"
            />
            <p className="modal-caption">{modalPhoto.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
