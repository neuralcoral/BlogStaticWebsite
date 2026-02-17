import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Demo } from '../../components/Demo';

interface InstructionPortProps {
    show: boolean;
    content: string;
    color: string;
    initialX: number;
    exitX: number;
}

const InstructionPort = ({ show, content, color, initialX, exitX }: InstructionPortProps) => (
    <div style={{ flex: 1, textAlign: 'center', margin: '10px' }}>
        <AnimatePresence mode="wait">
            {show && (
                <motion.div
                    // Use a static key or a mode-based key so Framer
                    // tracks the specific "Input" or "Output" entity
                    key="port-content"
                    initial={{ opacity: 0, x: initialX }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: exitX }}
                    transition={{ duration: 0.4 }}
                    style={{ color, fontWeight: 'bold', fontFamily: 'monospace' }}
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
};
export const AssemblerTransition = ({assembly, binary}: AssemblerTransitionProps) => {
    const [isEncoding, setIsEncoding] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isAssembly, setIsAssembly] = useState(true);

    const handleToggle = () => {
        setIsProcessing(true);
        setIsAssembly(!isAssembly);
        // Timing the transformation
        setTimeout(() => {
            setIsEncoding(!isEncoding);
            setIsProcessing(false);
        }, 600);
    };

    return (
        <Demo>
            <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '100%', height: '100px', position: 'relative'
            }}>

                <InstructionPort
                    show={!isProcessing && isEncoding}
                    content={assembly}
                    color={isEncoding ? '#2ecc71' : '#3498db'}
                    initialX={isEncoding ? 50 : -50} // Comes from left when starting, from box when reversing
                    exitX={50}
                />

                <motion.div
                    animate={isProcessing ? { scale: [1, 1.1, 1],  } : {}}
                    style={{
                        width: '150px', height: '100px', background: '#34495e',
                        borderRadius: '8px', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', color: 'white', fontWeight: 'bold',
                        boxShadow: isProcessing ? '0 0 20px #e67e22' : 'none',
                        margin:'10px', zIndex: 2, fontSize:'20px', textAlign: 'center'
                    }}
                >
                    {isProcessing ? '⚙️' : 'RISC-V ASSEMBLER'}
                </motion.div>

                <InstructionPort
                    show={!isProcessing && !isEncoding}
                    content={binary}
                    color={!isEncoding ? '#2ecc71' : '#3498db'}
                    initialX={-50}
                    exitX={-50}
                />
            </div>

            <button
                onClick={handleToggle}
                disabled={isProcessing}
                style={{
                    padding: '12px 24px',
                    borderRadius: '6px',
                    border: 'none',
                    background: isEncoding ? '#2ecc71' : '#3498db',
                    color: '#fff',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: '0.2s',
                    display: 'block',
                    margin: '0 auto'
                }}
            >
                {isEncoding ? 'ENCODE' : 'DECODE'}
            </button>
        </Demo>
    );
};