import Image from "next/image";
import styles from "../header.module.css";

const { heroContent, heroWrapper, imageWrapper } = styles;

const IMAGE_URL =
  "https://www.perssondennis.com/images/articles/how-to-make-a-hero-image-in-nextjs/perfect-avocado.webp";

export default () => {
  return (
    <div className={heroWrapper}>
      <div className={imageWrapper}>
        <Image
          priority
          src={IMAGE_URL}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className={heroContent}>
        <h1>Hero Image</h1>
        <p>Next.js hero image example.</p>
      </div>
    </div>
  );
};
