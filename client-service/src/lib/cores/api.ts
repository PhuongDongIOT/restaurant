import { checkTokenExpired, clearCookieUserAuthenticated, getCookie, setCookieUserAuthenticated } from '../customs/cookies';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '@/constants/common';
import { delay } from '@/constants/mock-api';
import authService from '@/lib/services/auth.service';
import { stringify } from 'qs';
import { IApiOptions } from '../schemas/api.schema';

export const WEB_API_URL = process.env.WEB_API_URL ? process.env.WEB_API_URL : process.env.NEXT_PUBLIC_WEB_API_URL; // Store this as a constant
export const WEB_API_BLOG_URL = process.env.WEB_BLOG_API_URL ? process.env.WEB_BLOG_API_URL : process.env.NEXT_PUBLIC_WEB_API_BLOG_URL; 
export const WEB_API_PICTURE_URL = process.env.WEB_API_PICTURE_URL ? process.env.WEB_API_PICTURE_URL : process.env.NEXT_PUBLIC_WEB_API_PICTURE_URL; 
export const WEB_SOCKET_URL = process.env.WEB_SOCKET_URL ? process.env.WEB_SOCKET_URL : process.env.NEXT_PUBLIC_WEB_SOCKET_URL; 
export const WEB_AI_URL = process.env.WEB_AI_URL ? process.env.WEB_AI_URL : process.env.NEXT_PUBLIC_WEB_AI_URL; 

let isRefreshingToken = false;

const DELAY_MS = 200; //Avoid magic number

const redirectLogin = (): never => { // Explicit return type and avoid "throw"
  window.location.replace("/login");
  throw new Error("Redirecting to login"); // Prevents further execution
};

const refreshTokenIfNeeded = async (): Promise<string> => {
  const accessToken = getCookie(ACCESS_TOKEN_KEY);

  if (!accessToken) return accessToken; // No token, no refresh needed

  if (!checkTokenExpired(accessToken)) return accessToken; // Token is valid, no refresh needed

  const refreshToken = getCookie(REFRESH_TOKEN_KEY);

  if (!refreshToken || checkTokenExpired(refreshToken)) {
    clearCookieUserAuthenticated();
    return redirectLogin();
  }

  if (isRefreshingToken) {
    await delay(DELAY_MS);
    return refreshTokenIfNeeded(); // Recursive call for token refresh
  }

  try {
    isRefreshingToken = true;

    const { data } = await authService.refreshToken(accessToken, refreshToken);

    if (!data?.accessToken || !data?.refreshToken) {
      clearCookieUserAuthenticated();
      return redirectLogin();
    }

    setCookieUserAuthenticated(data.accessToken, data.refreshToken);
    return data.accessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    clearCookieUserAuthenticated();
    return redirectLogin(); // Even on error, redirect.  Consider different error handling.
  } finally {
    isRefreshingToken = false;
  }
};

const handleResponse = async (response: Response): Promise<any> => {
  try {
    const result = await response.json();
    
    if (!response.ok) {  // Use response.ok for HTTP status >= 200 and < 300
      if (response?.status === 401) {
        return redirectLogin(); //Already returning, no throw needed
      }
      // Status 403 doesn't need additional handle
      // It would be handled on component
      throw { httpCode: response?.status ?? 200, ...result };
    }
    return result;
  } catch (error) {
    console.error("Error parsing JSON response:", error);
    throw new Error("Failed to parse response"); //Or more informative message
  }
};

const handleError = async (error: any): Promise<never> => {
  // Type any because the catch block can catch all kinds of errors
  if (error?.httpCode >= 500) {
    console.error("Server error:", error); // Log detailed server errors
    throw new Error("Sorry, something went wrong.");
  } else {
    throw error; // Re-throw other errors for handling at the call site
  }
};

const handleHeaders = async (options?: IApiOptions): Promise<HeadersInit> => {
  let headers: HeadersInit = {
    // 'Content-Type': 'application/json',
    ...(options?.headers || {}),  // Existing headers
  };

  if (options?.replaceHeaders) {
    return options.replaceHeaders;
  }

  const accessToken = await refreshTokenIfNeeded();

  if (accessToken) {
    headers = {
      'Authorization': `Bearer ${accessToken}`,
      ...headers
    }
  }

  return headers;
};

const handleQueryParams = (options?: IApiOptions): string => {
  const params: Record<string, any> = {};  // Using Record for type safety

  if (options?.locale) params.locale = options.locale;

  if (options?.queryParams) Object.assign(params, options.queryParams); // Merging queryParams safely

  if (Object.keys(params).length > 0) return `?${stringify(params)}`;

  return '';
};

// Generic API functions.  'T' is the expected response type.
const apiCall = async <T>(urlPath: string, method: string, data?: object, options?: IApiOptions): Promise<T> => {
  const url = `${WEB_API_URL}${urlPath}${handleQueryParams(options)}`;

  const fetchOptions: RequestInit = {
    method,
    cache: 'no-cache',
    headers: await handleHeaders(options),
    ...(data ? { body: data as any } : {}),  // Conditionally add body
  };

  return fetch(url, fetchOptions)
    .then(handleResponse)
    .catch(handleError);
};

export const Api = {
  get: <T>(urlPath: string, options?: IApiOptions): Promise<T> => apiCall<T>(urlPath, 'GET', undefined, options),
  post: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiCall<T>(urlPath, 'POST', data, options),
  put: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiCall<T>(urlPath, 'PUT', data, options),
  patch: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiCall<T>(urlPath, 'PATCH', data, options),
  delete: <T>(urlPath: string, options?: IApiOptions): Promise<T> => apiCall<T>(urlPath, 'DELETE', undefined, options),
};

// Generic API functions.  'T' is the expected response type.
const apiPictureCall = async <T>(urlPath: string, method: string, data?: object, options?: IApiOptions): Promise<T> => {
  const url = `${WEB_API_PICTURE_URL}${urlPath}${handleQueryParams(options)}`;

  const fetchOptions: RequestInit = {
    method,
    cache: 'no-cache',
    headers: await handleHeaders(options),
    ...(data ? { body: data as any } : {}),  // Conditionally add body
  };

  return fetch(url, fetchOptions)
    .then(handleResponse)
    .catch(handleError);
};

export const ApiPicture = {
  get: <T>(urlPath: string, options?: IApiOptions): Promise<T> => apiPictureCall<T>(urlPath, 'GET', undefined, options),
  post: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiPictureCall<T>(urlPath, 'POST', data, options),
  put: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiPictureCall<T>(urlPath, 'PUT', data, options),
  patch: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiPictureCall<T>(urlPath, 'PATCH', data, options),
  delete: <T>(urlPath: string, options?: IApiOptions): Promise<T> => apiPictureCall<T>(urlPath, 'DELETE', undefined, options),
};


// Generic API functions.  'T' is the expected response type.
const apiBlogCall = async <T>(urlPath: string, method: string, data?: object, options?: IApiOptions): Promise<T> => {
  const url = `${WEB_API_BLOG_URL}${urlPath}${handleQueryParams(options)}`;

  const fetchOptions: RequestInit = {
    method,
    cache: 'no-cache',
    headers: await handleHeaders(options),
    ...(data ? { body: data as any } : {}),  // Conditionally add body
  };

  return fetch(url, fetchOptions)
    .then(handleResponse)
    .catch(handleError);
};

export const ApiBlog = {
  get: <T>(urlPath: string, options?: IApiOptions): Promise<T> => apiBlogCall<T>(urlPath, 'GET', undefined, options),
  post: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiBlogCall<T>(urlPath, 'POST', data, options),
  put: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiBlogCall<T>(urlPath, 'PUT', data, options),
  patch: <T>(urlPath: string, data?: object, options?: IApiOptions): Promise<T> => apiBlogCall<T>(urlPath, 'PATCH', data, options),
  delete: <T>(urlPath: string, options?: IApiOptions): Promise<T> => apiBlogCall<T>(urlPath, 'DELETE', undefined, options),
};

