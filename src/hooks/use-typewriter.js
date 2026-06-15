"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through an array of strings with a typing / deleting effect.
 *
 * @param {string[]} words - phrases to cycle through
 * @param {object} options
 * @param {number} options.typingSpeed - ms per character while typing
 * @param {number} options.deletingSpeed - ms per character while deleting
 * @param {number} options.pause - ms to hold the full word before deleting
 */
export function useTypewriter(
  words,
  { typingSpeed = 90, deletingSpeed = 45, pause = 1800 } = {}
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const current = words[index % words.length];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? current.substring(0, text.length - 1)
        : current.substring(0, text.length + 1);

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
