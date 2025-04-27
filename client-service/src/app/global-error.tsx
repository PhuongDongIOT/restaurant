'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

export default function GlobalError(props: {
    error: Error & { digest?: string };
}) {
    useEffect(() => {
        Sentry.captureException(props.error);
    }, [props.error]);

    return (
        <html lang={"vi"}>
            <body>
                <NextError statusCode={0} />
            </body>
        </html>
    );
}