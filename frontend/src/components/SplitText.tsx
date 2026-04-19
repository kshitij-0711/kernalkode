import React from 'react';

/**
 * A utility to split a string into words, wrapping each word in an overflow-hidden wrapper,
 * and the word itself in a span that can be animated with GSAP via a common class (e.g. .word).
 */
interface SplitTextProps {
    text: string;
    wrapperClass?: string;
    wordClass?: string;
    containerClass?: string;
}

export function SplitText({ text, wrapperClass = "split-parent inline-block overflow-hidden", wordClass = "split-child inline-block", containerClass = "" }: SplitTextProps) {
    const words = text.split(' ');

    return (
        <span className={containerClass}>
            {words.map((word, index) => (
                <React.Fragment key={index}>
                    <span className={wrapperClass}>
                        <span className={wordClass}>
                            {word}
                        </span>
                    </span>
                    {/* Add a space after each word except the last one, to maintain flow */}
                    {index < words.length - 1 && ' '}
                </React.Fragment>
            ))}
        </span>
    );
}
