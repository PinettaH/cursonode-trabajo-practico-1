export const httpErrors = {
    BadRequest: {
        status: 400,
        code: 'BAD_REQUEST',
        message: 'Bad request'
    },
    Unauthorized: {
        status: 401,
        code: 'UNAUTHORIZED',
        message: 'Unauthorized'
    },
    PaymentRequired: {
        status: 402,
        code: 'PAYMENT_REQUIRED',
        message: 'Payment required'
    },
    Forbidden: {
        status: 403,
        code: 'FORBIDDEN',
        message: 'Forbidden'
    },
    NotFound: {
        status: 404,
        code: 'NOT_FOUND',
        message: 'Resource not found'
    },
    MethodNotAllowed: {
        status: 405,
        code: 'METHOD_NOT_ALLOWED',
        message: 'Method not allowed'
    },
    NotAcceptable: {
        status: 406,
        code: 'NOT_ACCEPTABLE',
        message: 'Not acceptable'
    },
    ProxyAuthenticationRequired: {
        status: 407,
        code: 'PROXY_AUTH_REQUIRED',
        message: 'Proxy authentication required'
    },
    RequestTimeout: {
        status: 408,
        code: 'REQUEST_TIMEOUT',
        message: 'Request timeout'
    },
    Conflict: {
        status: 409,
        code: 'CONFLICT',
        message: 'Conflict'
    },
    Gone: {
        status: 410,
        code: 'GONE',
        message: 'Gone'
    },
    LengthRequired: {
        status: 411,
        code: 'LENGTH_REQUIRED',
        message: 'Length required'
    },
    PreconditionFailed: {
        status: 412,
        code: 'PRECONDITION_FAILED',
        message: 'Precondition failed'
    },
    PayloadTooLarge: {
        status: 413,
        code: 'PAYLOAD_TOO_LARGE',
        message: 'Payload too large'
    },
    URITooLong: {
        status: 414,
        code: 'URI_TOO_LONG',
        message: 'URI too long'
    },
    UnsupportedMediaType: {
        status: 415,
        code: 'UNSUPPORTED_MEDIA_TYPE',
        message: 'Unsupported media type'
    },
    RangeNotSatisfiable: {
        status: 416,
        code: 'RANGE_NOT_SATISFIABLE',
        message: 'Range not satisfiable'
    },
    ExpectationFailed: {
        status: 417,
        code: 'EXPECTATION_FAILED',
        message: 'Expectation failed'
    },
    InternalServerError: {
        status: 500,
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error'
    },
    NotImplemented: {
        status: 501,
        code: 'NOT_IMPLEMENTED',
        message: 'Not implemented'
    },
    BadGateway: {
        status: 502,
        code: 'BAD_GATEWAY',
        message: 'Bad gateway'
    },
    ServiceUnavailable: {
        status: 503,
        code: 'SERVICE_UNAVAILABLE',
        message: 'Service unavailable'
    },
    GatewayTimeout: {
        status: 504,
        code: 'GATEWAY_TIMEOUT',
        message: 'Gateway timeout'
    },
    HTTPVersionNotSupported: {
        status: 505,
        code: 'HTTP_VERSION_NOT_SUPPORTED',
        message: 'HTTP version not supported'
    }
};