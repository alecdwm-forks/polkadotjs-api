// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import Enum from './codec/Enum';
import U8a from './codec/U8a';

// Enum to track the outcome for creation of an account
export default class NewAccountOutcome extends Enum {
  constructor (index?: U8a | Uint8Array | number) {
    super([
      'NoHint',
      'GoodHint',
      'BadHint'
    ], index);
  }
}
