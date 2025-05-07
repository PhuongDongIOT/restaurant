// lib/redis.ts
import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_URL ?? "",
  port: 6379,
});

export default redis;
