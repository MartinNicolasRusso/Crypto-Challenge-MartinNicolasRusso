export type CryptoTypes = {
  id: string;
  name: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
  symbol: string;
  image: string;
  market_data: Market_data;
  metrics: Metrics;
};

export type Market_data = {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
};

export type Metrics = {
  market_data: Market_Data;
};
