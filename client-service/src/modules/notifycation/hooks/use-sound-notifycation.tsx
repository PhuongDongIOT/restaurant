import { WEB_AI_URL } from "@/lib/cores/api";
import useOrderWebSocket from "@/modules/order/hooks/use-order-web-socket";
import { useEffect, useTransition } from "react";
import useSound from "use-sound";

export function useSoundNotifycation() {
    const [isPending, startTransition] = useTransition();
    const { messages } = useOrderWebSocket();

    const [play] = useSound('/audio/money.mp3', {
        volume: 0.75,
        interrupt: true,
    });

    useEffect(() => {
        async function handleSpeak(text: string) {

            try {
                const res = await fetch(`${WEB_AI_URL}api/tts?text=${encodeURIComponent(text)}`);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const blob = await res.blob();

                const contentType = res.headers.get('Content-Type');
                if (contentType && contentType.startsWith('audio/')) {
                    const audioUrl = URL.createObjectURL(blob);
                    const audio = new Audio(audioUrl);

                    return new Promise((resolve, reject) => {
                        audio.addEventListener('ended', resolve);
                        audio.addEventListener('error', reject);
                        audio.play().catch(reject);
                    });

                } else {
                    throw new Error(`Unsupported Content-Type: ${contentType}`);
                }

            } catch (error) {
                console.error('Error fetching or playing TTS audio:', error);
                play();
            }
        }
        startTransition(() => {
            handleSpeak(messages[messages.length - 1]);
        })


    }, [messages])

    return {
        isPending,
        play,
    };
}
