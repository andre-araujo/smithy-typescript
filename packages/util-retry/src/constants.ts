/**
 * @public
 *
 * The base number of milliseconds to use in calculating a suitable cool-down
 * time when a retryable error is encountered.
 */
export const DEFAULT_RETRY_DELAY_BASE = 100;

/**
 * @public
 *
 * The maximum amount of time (in milliseconds) that will be used as a delay
 * between retry attempts.
 */
export const MAXIMUM_RETRY_DELAY = 20 * 1000;

/**
 * @public
 *
 * The retry delay base (in milliseconds) to use when a throttling error is
 * encountered.
 */
export const THROTTLING_RETRY_DELAY_BASE = 500;

/**
 * @public
 *
 * Initial number of retry tokens in Retry Quota
 */
export const INITIAL_RETRY_TOKENS = 500;

/**
 * @public
 *
 * The total amount of retry tokens to be decremented from retry token balance.
 */
export const RETRY_COST = 5;

/**
 * @public
 *
 * The total amount of retry tokens to be decremented from retry token balance
 * when a throttling error is encountered.
 */
export const TIMEOUT_RETRY_COST = 10;

/**
 * @public
 *
 * The total amount of retry token to be incremented from retry token balance
 * if an SDK operation invocation succeeds without requiring a retry request.
 */
export const NO_RETRY_INCREMENT = 1;

/**
 * @public
 *
 * Header name for SDK invocation ID
 */
export const INVOCATION_ID_HEADER = "amz-sdk-invocation-id";

/**
 * @public
 *
 * Header name for request retry information.
 */
export const REQUEST_HEADER = "amz-sdk-request";
