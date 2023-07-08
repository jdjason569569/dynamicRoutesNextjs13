import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Acerca de nosotros</Link>
        </li>
        <li>
          <Link href="/services">Servicios</Link>
        </li>
      </ul>
    </>
  );
}
