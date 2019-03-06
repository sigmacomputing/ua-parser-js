var assert      = require('assert');
var UAParser    = require('./../src/ua-parser');

describe('Returns', function () {
    it('[empty] parse() should returns JSON', function(done) {
        assert.deepEqual(UAParser(''),
            {
                browser: { name: undefined, version: undefined, major: undefined },
                cpu: { architecture: undefined },
                device: { vendor: undefined, model: undefined, type: undefined },
                engine: { name: undefined, version: undefined},
                os: { name: undefined, version: undefined }
            }
        );
        done();
    });

    it('[mobile] parse() should return JSON', function(done) {
        const userAgent =
"Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30";
        assert.deepEqual(UAParser(userAgent),
            {
                browser: { name: 'Android Browser', version: '4.0', major: '4' },
                engine: { name: 'WebKit', version: '534.30' },
                os: { name: 'Android', version: '4.0.2' },
                device: { vendor: 'Samsung', model: 'Galaxy Nexus', type: 'mobile' },
                cpu: { architecture: undefined }
            }
        );
        done();
    });

    it('[desktop] parse() should return JSON', function(done) {
        const userAgent =
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36";
        assert.deepEqual(UAParser(userAgent),
            {
                browser: { name: 'Chrome', version: '72.0.3626.109', major: '72' },
                engine: { name: 'Blink', version: undefined },
                os: { name: 'Mac OS', version: '10.14.3' },
                device: { vendor: undefined, model: undefined, type: undefined },
                cpu: { architecture: undefined }
            }
        );
        done();
    });
});
