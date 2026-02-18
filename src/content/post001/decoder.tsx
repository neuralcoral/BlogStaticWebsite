import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Demo } from '../../components/Demo';
import styles from './decoder.module.css';

interface InstructionPortProps {
    show: boolean;
    content: string;
    color: string;
    initialOffset: number; // Changed from initialX
    exitOffset: number;    // Changed from exitX
    isMobile: boolean;     // New prop to track orientation
}

const InstructionPort = ({ show, content, color, initialOffset, exitOffset, isMobile }: InstructionPortProps) => (
    <div className={styles.portContainer}>
        <AnimatePresence mode="wait">
            {show && (
                <motion.div
                    key="port-content"
                    // MAGIC HAPPENS HERE: If mobile, animate Y. If desktop, animate X.
                    initial={{ opacity: 0, x: isMobile ? 0 : initialOffset, y: isMobile ? initialOffset : 0 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: isMobile ? 0 : exitOffset, y: isMobile ? exitOffset : 0 }}
                    transition={{ duration: 0.4 }}
                    className={styles.portText}
                    style={{ color }}
                >
                    {content}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

interface AssemblerTransitionProps {
    assembly: string;
    binary: string;
}

export const AssemblerTransition = ({ assembly, binary }: AssemblerTransitionProps) => {
    const [isEncoding, setIsEncoding] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isAssembly, setIsAssembly] = useState(true);

    // 1. Setup a state to track if we are on mobile
    const [isMobile, setIsMobile] = useState(false);

    // 2. Add an effect to listen to the window size matching your CSS breakpoint (768px)
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Check immediately on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = () => {
        setIsProcessing(true);
        setIsAssembly(!isAssembly);
        setTimeout(() => {
            setIsEncoding(!isEncoding);
            setIsProcessing(false);
        }, 600);
    };

    return (
        <Demo>
            <div className={styles.assemblerRow}>
                {/* Input Side */}
                <InstructionPort
                    show={!isProcessing && isEncoding}
                    content={assembly}
                    color={'#ff5e7e'}
                    initialOffset={isEncoding ? 50 : -50}
                    exitOffset={50}
                    isMobile={isMobile} // Pass the state down
                />

                <motion.div
                    animate={isProcessing ? { scale: [1, 1.1, 1] } : {}}
                    className={`${styles.assemblerBox} ${isProcessing ? styles.processingGlow : ''}`}
                >
                    RISC-V ASSEMBLER
                </motion.div>

                {/* Output Side */}
                <InstructionPort
                    show={!isProcessing && !isEncoding}
                    content={binary}
                    color={'#00e5ff'}
                    initialOffset={-50}
                    exitOffset={-50}
                    isMobile={isMobile} // Pass the state down
                />
            </div>

            <button
                onClick={handleToggle}
                disabled={isProcessing}
                className={styles.actionButton}
                style={{ background: isEncoding ? '#00e5ff' : '#ff5e7e' }}
            >
                {isEncoding ? 'ENCODE' : 'DECODE'}
            </button>
        </Demo>
    );
};