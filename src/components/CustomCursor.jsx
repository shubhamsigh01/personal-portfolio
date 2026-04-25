import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Custom cursor — replaces the default OS cursor with a premium dot + ring pair.
 * The outer ring follows with a spring delay (magnetic feel).
 * Grows on hover over interactive elements (links, buttons).
 *
 * IMPORTANT: This component hides the native cursor via CSS on non-touch devices.
 * Add `cursor-none` to <html> or <body> in index.css to apply globally.
 */
const CustomCursor = () => {
  const [pos, setPos]       = useState({ x: 0, y: 0 });
  const [ring, setRing]     = useState({ x: 0, y: 0 });
  const [hovering, setHover] = useState(false);
  const [clicking, setClick] = useState(false);
  const rafRef               = useRef(null);
  const targetRef            = useRef({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      targetRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Animate the ring with lerp for a spring effect
  useEffect(() => {
    let current = { x: 0, y: 0 };
    const animate = () => {
      current.x += (targetRef.current.x - current.x) * 0.15;
      current.y += (targetRef.current.y - current.y) * 0.15;
      setRing({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Detect hover over interactive elements
  useEffect(() => {
    const onOver  = (e) => { if (e.target.closest('a, button, [role="link"]')) setHover(true); };
    const onLeave = (e) => { if (!e.relatedTarget?.closest('a, button, [role="link"]')) setHover(false); };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onLeave);
    document.addEventListener('mousedown', () => setClick(true));
    document.addEventListener('mouseup',   () => setClick(false));
    return () => {
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  // Skip on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      {/* Inner dot — instant follow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width:  clicking ? 6 : 8,
          height: clicking ? 6 : 8,
          marginLeft: clicking ? -3 : -4,
          marginTop:  clicking ? -3 : -4,
          background: hovering ? 'rgb(34,211,238)' : 'white',
          transition: 'width 0.15s, height 0.15s, background 0.2s',
        }}
      />

      {/* Outer ring — spring-lagged */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border"
        style={{
          left: ring.x,
          top: ring.y,
          width:       hovering ? 48 : 32,
          height:      hovering ? 48 : 32,
          marginLeft:  hovering ? -24 : -16,
          marginTop:   hovering ? -24 : -16,
          borderColor: hovering ? 'rgba(34,211,238,0.6)' : 'rgba(255,255,255,0.25)',
          background:  hovering ? 'rgba(34,211,238,0.08)' : 'transparent',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background 0.3s',
        }}
      />
    </>
  );
};

export default CustomCursor;
