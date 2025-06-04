import { useState } from "react";
import "./App.css";
import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpeg";
import photo5 from "./assets/photo5.jpeg";
import photo6 from "./assets/photo6.jpeg";
import photo7 from "./assets/photo7.jpeg";
import photo8 from "./assets/photo8.jpeg";
import photo9 from "./assets/photo9.jpeg";
import photo10 from "./assets/photo10.jpeg";

const photos = [
  { src: photo1, alt: "写真1", caption: "photo" },
  { src: photo2, alt: "写真2", caption: "photo" },
  { src: photo3, alt: "写真3", caption: "photo" },
  { src: photo4, alt: "写真4", caption: "photo" },
  { src: photo5, alt: "写真5", caption: "photo" },
  { src: photo6, alt: "写真6", caption: "photo" },
  { src: photo7, alt: "写真7", caption: "photo" },
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
            プロフィール
          </button>
          <button
            className={page === "photo" ? "active" : ""}
            onClick={() => setPage("photo")}
          >
            フォト
          </button>
          <button
            className={page === "link" ? "active" : ""}
            onClick={() => setPage("link")}
          >
            リンク
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

        {page === "link" && <div className="link">リンクページ準備中</div>}
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
