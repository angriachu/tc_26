import { Link } from "react-router-dom";

export default function Logo() {
  return <Link to="/" aria-label="TurboCart home" className="group inline-flex items-center gap-2.5 font-extrabold tracking-[-.04em] text-white">
    <img src={`${import.meta.env.BASE_URL}images/brand/turbocart-logo.png`} alt="TurboCart Hypermarket ERP" width="525" height="128" className="h-10 w-auto max-w-[164px] object-contain brightness-0 invert sm:h-11 sm:max-w-[184px]" />
  </Link>;
}
