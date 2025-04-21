import { REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY } from '@/constants/common';
import jsCookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export function getCookie(key: string) {
    return (jsCookies.get(key) || '') as string;
}

export function setCookie(key: string, value: string, expireSecond: number) {
    const d = new Date();
    d.setTime(d.getTime() + expireSecond * 1000);
    jsCookies.set(key, value, { expires: d });
}

export function getTokenExpireTime(token: string) {
    const decoded = jwtDecode<{ exp: number }>(token);
    if (!decoded || !decoded.exp) {
        return 0;
    }
    return decoded.exp * 1000;
}

export function checkTokenExpired(token: string) {
    return getTokenExpireTime(token) < new Date().getTime();
}

function getRemainingExpirationSeconds(expSeconds: number) {
    return (expSeconds - new Date().getTime()) / 1000;
}

export function setCookieUserAuthenticated(accessToken: string, refreshToken: string) {
    // Must to use the same refresh token expiration time for the both cookies.
    const seconds = getRemainingExpirationSeconds(getTokenExpireTime(refreshToken));
    setCookie(ACCESS_TOKEN_KEY, accessToken, seconds);
    setCookie(REFRESH_TOKEN_KEY, refreshToken, seconds);
}

export function clearCookieUserAuthenticated() {
    setCookie(ACCESS_TOKEN_KEY, '', -1);
    setCookie(REFRESH_TOKEN_KEY, '', -1);
}
