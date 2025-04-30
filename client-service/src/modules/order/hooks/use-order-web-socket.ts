import { WEB_SOCKET_URL } from '@/lib/cores/api';
import { useState, useEffect, useRef } from 'react';

interface WebSocketMessage {
    [key: string]: any; // Allows for any structure of message
}

interface UseOrderWebSocketResult {
    messages: string[];
    sendMessage: (message: WebSocketMessage) => void;
    isConnected: boolean;
}

function useOrderWebSocket(): UseOrderWebSocketResult {
    const [messages, setMessages] = useState<string[]>([]);
    const ws = useRef<WebSocket | null>(null);
    const [isConnected, setIsConnected] = useState<boolean>(false);

    useEffect(() => {
        const connect = () => {
            ws.current = new WebSocket(`${WEB_SOCKET_URL}socket`);

            ws.current.onopen = () => {
                console.log('WebSocket connected');
                setIsConnected(true);
                const subscribeMessage = JSON.stringify({
                    action: 'subscribe',
                    topic: 'order',
                });
                ws.current?.send(subscribeMessage); // Use optional chaining
            };

            ws.current.onmessage = (event: MessageEvent) => {
                try {                    
                    const data: string = event.data;
                    setMessages((prevMessages) => [...prevMessages, data]);
                } catch (error) {
                    console.error('WebSocket message parsing error:', error);
                }
            };

            ws.current.onclose = (event: CloseEvent) => {
                console.log('WebSocket disconnected', event.code, event.reason);
                setIsConnected(false);
                setTimeout(() => {
                    console.log('Attempting to reconnect...');
                    connect();
                }, 3000);
            };

            ws.current.onerror = (event: Event) => {
                console.error('WebSocket error:', event);
                ws.current?.close(); // Use optional chaining
            };
        };

        connect();

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const sendMessage = (message: WebSocketMessage): void => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(message));
        } else {
            console.error('WebSocket is not connected.');
        }
    };

    return { messages, sendMessage, isConnected };
}

export default useOrderWebSocket;
