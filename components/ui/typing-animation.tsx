"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, MotionProps, useInView } from "motion/react"

import { cn } from "@/lib/utils"

interface TypingAnimationProps extends MotionProps {
  children?: string
  words?: string[]
  className?: string
  duration?: number
  typeSpeed?: number
  deleteSpeed?: number
  delay?: number
  pauseDelay?: number
  loop?: boolean
  as?: React.ElementType
  startOnView?: boolean
  showCursor?: boolean
  blinkCursor?: boolean
  cursorStyle?: "line" | "block" | "underscore"
}

export function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  ...props
}: TypingAnimationProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  
  const MotionComponent = useMemo(() => motion.create(Component, {
    forwardMotionProps: true,
  }), [Component])

  const [displayedText, setDisplayedText] = useState<string>("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing")
  
  const wordsToAnimate = useMemo(
    () => words || (children ? [children] : []),
    [words, children]
  )
  const hasMultipleWords = wordsToAnimate.length > 1

  const typingSpeed = typeSpeed || duration
  const deletingSpeed = deleteSpeed || typingSpeed / 2

  const shouldStart = startOnView ? isInView : true

  useEffect(() => {
    if (!shouldStart || wordsToAnimate.length === 0) return

    const timeoutDelay = phase === "typing" 
      ? (currentCharIndex === 0 ? delay : typingSpeed)
      : phase === "deleting" 
        ? deletingSpeed 
        : pauseDelay

    const timeout = setTimeout(() => {
      const currentWord = wordsToAnimate[currentWordIndex] || ""
      const graphemes = Array.from(currentWord)

      switch (phase) {
        case "typing":
          if (currentCharIndex < graphemes.length) {
            setDisplayedText(graphemes.slice(0, currentCharIndex + 1).join(""))
            setCurrentCharIndex(currentCharIndex + 1)
          } else {
            if (hasMultipleWords || loop) {
              setPhase("pause")
            }
          }
          break

        case "pause":
          setPhase("deleting")
          break

        case "deleting":
          if (currentCharIndex > 0) {
            setDisplayedText(graphemes.slice(0, currentCharIndex - 1).join(""))
            setCurrentCharIndex(currentCharIndex - 1)
          } else {
            setPhase("typing")
            setCurrentWordIndex((prev) => (prev + 1) % wordsToAnimate.length)
          }
          break
      }
    }, timeoutDelay)

    return () => clearTimeout(timeout)
  }, [
    currentCharIndex,
    currentWordIndex,
    phase,
    shouldStart,
    wordsToAnimate,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay,
    hasMultipleWords,
    loop
  ])

  return (
    <MotionComponent
      ref={ref}
      className={cn("inline-block", className)}
      {...props}
    >
      {displayedText}
      {showCursor && (
        <motion.span
          animate={blinkCursor ? { opacity: [1, 0] } : {}}
          transition={blinkCursor ? { duration: 0.5, repeat: Infinity, repeatType: "reverse" } : {}}
          className={cn(
            "inline-block ml-0.5 bg-current",
            cursorStyle === "line" && "w-[2px] h-[1.1em] align-middle",
            cursorStyle === "block" && "w-[0.6em] h-[1.1em] align-middle",
            cursorStyle === "underscore" && "w-[0.6em] h-[2px] align-baseline"
          )}
        />
      )}
    </MotionComponent>
  )
}
