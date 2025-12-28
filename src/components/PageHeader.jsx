import React from 'react';
import { motion as Motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div style={{ marginBottom: '4rem' }}>
            <Motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-obsidian)', fontFamily: 'var(--font-display)' }}
            >
                {title}
            </Motion.h1>
            {subtitle && (
                <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: '700px', opacity: 0.8, fontSize: '1.25rem' }}
                >
                    {subtitle}
                </Motion.p>
            )}
        </div>
    );
};

export default PageHeader;
