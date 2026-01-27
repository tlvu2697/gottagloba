import type React from "react";
import { createElement, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type OwnProps = {
  children: React.ReactNode;
  className?: string;
  mode?: ShadowRootInit["mode"];
  delegatesFocus?: boolean;
  as?: React.ElementType; // ← must be ElementType
};

type PolymorphicProps<E extends React.ElementType, P> = P &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P | "ref" | "children"> & {
    as?: E;
  };

export default function ShadowRootHost<E extends React.ElementType = "div">({
  children,
  className,
  mode = "open",
  delegatesFocus = false,
  as,
  ...rest
}: PolymorphicProps<E, OwnProps>) {
  const Tag = (as ?? "div") as React.ElementType;

  const hostRef = useRef<HTMLElement | null>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);
  const [shadowEl, setShadowEl] = useState<ShadowRoot | null>(null);

  const setHostRef = useCallback((node: Element | null) => {
    hostRef.current = (node as HTMLElement) ?? null;
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const existing = host.shadowRoot;
    if (existing) {
      shadowRef.current = existing;
      setShadowEl(existing);
      return;
    }

    if (!shadowRef.current) {
      const sr = host.attachShadow({ mode, delegatesFocus });
      shadowRef.current = sr;
      setShadowEl(sr);
    } else {
      setShadowEl(shadowRef.current);
    }
  }, [mode, delegatesFocus]);

  return createElement(
    Tag,
    // eslint-disable-next-line react-hooks/refs
    { ref: setHostRef, className, ...rest },
    shadowEl ? createPortal(children, shadowEl as unknown as Element) : null,
  );
}
