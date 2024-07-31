import "./logo.css";
export interface LogoProps {
  imageURL: string;
  url: string;
  customClass?: string;
}
export function Logo({ imageURL, url, customClass }: LogoProps) {
  const finalClassList =
    customClass !== undefined ? `logo ${customClass}` : `logo`;
  return (
    <a href={url} target="_blank">
      <img src={imageURL} className={finalClassList} alt="Vite logo" />
    </a>
  );
}
