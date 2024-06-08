'use client';

import Transition from '@/src/components/Transition';

export default function Template({ children }: { children: React.ReactNode }) {
    return <Transition>{children}</Transition>;
}
