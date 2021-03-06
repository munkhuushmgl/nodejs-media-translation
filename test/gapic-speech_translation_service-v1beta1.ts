// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const speechtranslationserviceModule = require('../src');

import {PassThrough} from 'stream';

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockBidiStreamingGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return () => {
    const mockStream = new PassThrough({
      objectMode: true,
      transform: (chunk: {}, enc: {}, callback: Callback) => {
        assert.deepStrictEqual(chunk, expectedRequest);
        if (error) {
          callback(error);
        } else {
          callback(null, response);
        }
      },
    });
    return mockStream;
  };
}
describe('v1beta1.SpeechTranslationServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient
        .servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient
        .apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port =
      speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient
        .port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    assert.strictEqual(client.speechTranslationServiceStub, undefined);
    await client.initialize();
    assert(client.speechTranslationServiceStub);
  });
  it('has close method', () => {
    const client = new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
      {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      }
    );
    client.close();
  });
  describe('streamingTranslateSpeech', () => {
    it('invokes streamingTranslateSpeech without error', done => {
      const client = new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.mediatranslation.v1beta1.IStreamingTranslateSpeechRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.streamingTranslateSpeech = mockBidiStreamingGrpcMethod(
        request,
        expectedResponse,
        null
      );
      const stream = client
        .streamingTranslateSpeech()
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(request);
    });
    it('invokes streamingTranslateSpeech with error', done => {
      const client = new speechtranslationserviceModule.v1beta1.SpeechTranslationServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.mediatranslation.v1beta1.IStreamingTranslateSpeechRequest = {};
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.streamingTranslateSpeech = mockBidiStreamingGrpcMethod(
        request,
        null,
        error
      );
      const stream = client
        .streamingTranslateSpeech()
        .on('data', () => {
          assert.fail();
        })
        .on('error', (err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
      stream.write(request);
    });
  });
});
