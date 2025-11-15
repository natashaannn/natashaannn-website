"use client";

import {
  Children,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

export type AnimateComponentProps = {
  /** Interval between frames in milliseconds */
  interval: number;
};

/**
 * Cycles through its children like animation frames.
 * Example:
 * <AnimateComponent interval={400}>
 *   <MicroMeow ...variant1 />
 *   <MicroMeow ...variant2 />
 *   <MicroMeow ...variant3 />
 * </AnimateComponent>
 */
export const AnimateComponent = ({
  children,
  interval,
}: PropsWithChildren<AnimateComponentProps>): ReactElement | null => {
  const frames = useMemo(() => Children.toArray(children), [children]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!frames.length) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, interval);

    return () => clearInterval(id);
  }, [frames, interval]);

  if (!frames.length) {
    return null;
  }

  const frame = frames[index] as ReactNode;

  return <>{frame}</>;
};
