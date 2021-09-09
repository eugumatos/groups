import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const active = asPath === rest.href ? true : false;

  return (
    <Link {...rest}>
      { cloneElement(children, active && {
        pt: "1px",
        borderBottom: "2px solid #f5b533",
      }) }
    </Link>
  )
}