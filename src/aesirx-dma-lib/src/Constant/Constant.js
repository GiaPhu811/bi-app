/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

const AUTHORIZATION_KEY = {
  TOKEN_TYPE: 'token_type',
  ACCESS_TOKEN: 'access_token',
  PRICING_PLAN_ACCESS_TOKEN: 'pricing_plan_access_token',
  PRICING_PLAN_TOKEN_TYPE: 'pricing_plan_token_type',
  PRICING_PLAN_AUTHORIZED_TOKEN_HEADER: 'pricing_plan_authorized_token_header',
  AUTHORIZED_TOKEN_HEADER: 'authorized_token_header',
  TOKEN_USER: 'token_user',
  TOKEN_USER_EXPIRE: 'token_user_expire',
  MEMBER_ID: 'member_id',
  MEMBER_FULL_NAME: 'member_full_name',
  MEMBER_EMAIL: 'member_email',
  AVATAR: 'avatar',
  LOGO: 'member_logo',
  ORGANISATION_ID: 'organisation_id',
  REFRESH_TOKEN: 'refresh_token',
  CUSTOM_SERVICE_ACCESS_TOKEN: 'custom_service_access_token',
  CUSTOM_SERVICE_TOKEN_TYPE: 'custom_service_token_type',
  CUSTOM_SERVICE_AUTHORIZED_TOKEN_HEADER: 'custom_service_authorized_header',
  WEBSERVICE_ACCESS_TOKEN: 'webservice_access_token',
  WEBSERVICE_TOKEN_TYPE: 'webservice_token_type',
  WEBSERVICE_AUTHORIZED_TOKEN_HEADER: 'webservice_authorized_header',
  TIMEZONE: 'timezone',
  FACEBOOK_ADS_APP_ACCESS_TOKEN: 'facebook_ads_app_access_token',
};

const AXIOS_CONFIGS = {
  CLIENT_ID: process.env.REACT_APP_CLIENT_ID || '',
  CLIENT_SECRET: process.env.REACT_APP_CLIENT_SECRET || '',
  BASE_ENDPOINT_URL: process.env.REACT_APP_ENDPOINT_URL || '',
  BASE_ENDPOINT_PRICING_PLAN_URL: process.env.REACT_APP_ENDPOINT_PRICING_PLAN_URL || '',
  USERNAME: process.env.REACT_APP_OAUTH_DEFAULT_USERNAME || '',
  PASSWORD: process.env.REACT_APP_OAUTH_DEFAULT_PASSWORD || '',
  PRICING_PLAN_CLIENT_ID: process.env.REACT_APP_PRICING_PLAN_CLIENT_ID || '',
  PRICING_PLAN_CLIENT_SECRET: process.env.REACT_APP_PRICING_PLAN_CLIENT_SECRET || '',
  BASE_ENDPOINT_SERVICE_URL: process.env.REACT_APP_ENDPOINT_SERVICE_URL || '',
  CUSTOM_SERVICE_CLIENT_ID: process.env.REACT_APP_CUSTOM_SERVICE_CLIENT_ID || '',
  CUSTOM_SERVICE_CLIENT_SECRET: process.env.REACT_APP_CUSTOM_SERVICE_CLIENT_SECRET || '',
  WEBSERVICE_ENDPOINT_URL: process.env.REACT_APP_WEBSERVICE_ENDPOINT_URL || '',
  WEBSERVICE_CLIENT_ID: process.env.REACT_APP_WEBSERVICE_CLIENT_ID || '',
  WEBSERVICE_CLIENT_SECRET: process.env.REACT_APP_WEBSERVICE_CLIENT_SECRET || '',
  LICENSE: process.env.REACT_APP_LICENSE || '',
  TEST_MODE: process.env.REACT_APP_TEST_MODE || '',
};

const GENERAL_CONFIG = {
  WEBSOCKET_ENDPOINT: process.env.REACT_APP_WEBSOCKET_ENDPOINT,
};

const AESIRX_CONFIGS = {
  ENABLE_PRICING_PLAN: process.env.REACT_APP_ENABLE_PRICING_PLAN,
  SOCIAL_LOGIN: {
    FACEBOOK_APP_ID: process.env.REACT_APP_FACEBOOK_APP_ID,
    GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    TWITTER_CONSUMER_KEY: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
  },
};

export { AUTHORIZATION_KEY, AXIOS_CONFIGS, AESIRX_CONFIGS, GENERAL_CONFIG };
