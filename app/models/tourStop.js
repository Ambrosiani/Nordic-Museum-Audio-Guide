
import {
  realmDeleteHelper,
  realmDeleteAllHelper,
  realmObjectHelper,
  allRealmObjectsHelper,
  realmObjectIsInvalidHelper,
} from '../realm';

import { AudioContent } from './audioContent';
import { Durations } from './durations';

export class TourStop {
  static NAME = 'TourStop'

  static schema = {
    name: TourStop.NAME,
    primaryKey: 'uuid',
    properties: {
      uuid: { type: 'string' },
      order: { type: 'int' },
      floor: { type: 'string' },
      shortTitle: { type: 'string' },
      longTitle: { type: 'string' },
      shortCreditAccessibilityLabel: { type: 'string', optional: true },
      regions: { type: 'string' }, // Stored as String, but converted from Array
      category: { type: 'string', optional: true },
      imageURL: { type: 'string', optional: true },
      imageAccessibilityLabel: { type: 'string', optional: true },
      imageWidth: { type: 'int' },
      imageHeight: { type: 'int' },
      shortCredit: { type: 'string' },
      longCredit: { type: 'string' },
      tags: { type: 'string' }, // Stored as String, but converted from Array
      duration: { type: Durations.NAME },
      initialAudio: { type: 'string' },
      audioContent: { type: 'list', objectType: AudioContent.NAME },
    },
  }

  // inserting is omitted on purpose because realm inserts are expensive
  // so should be done as a single block.

  static realmDelete(uuidKey) {
    return realmDeleteHelper(TourStop.NAME, uuidKey);
  }

  static realmDeleteAll() {
    return realmDeleteAllHelper(TourStop.NAME);
  }

  static realmObject(uuidKey) {
    return realmObjectHelper(TourStop.NAME, uuidKey);
  }

  static allRealmObjects() {
    return allRealmObjectsHelper(TourStop.NAME);
  }

  static jsonAudioContent(realmObject) {
    return realmObject.audioContent
      .map((content) => {
        return AudioContent.json(content);
      });
  }

  static json(uuidKey) {
    const realmObject = TourStop.realmObject(uuidKey);

    if (realmObjectIsInvalidHelper(realmObject)) {
      return {};
    }

    return {
      uuid: realmObject.uuid,
      order: realmObject.order,
      floor: realmObject.floor,
      shortTitle: realmObject.shortTitle,
      longTitle: realmObject.longTitle,
      shortCreditAccessibilityLabel: realmObject.shortCreditAccessibilityLabel,
      regions: realmObject.regions.split(','),
      category: realmObject.category,
      imageURL: realmObject.imageURL,
      imageAccessibilityLabel: realmObject.imageAccessibilityLabel,
      imageWidth: realmObject.imageWidth,
      imageHeight: realmObject.imageHeight,
      shortCredit: realmObject.shortCredit,
      longCredit: realmObject.longCredit,
      tags: realmObject.tags.split(','),
      duration: realmObject.duration,
      initialAudio: realmObject.initialAudio,
      audioContent: TourStop.jsonAudioContent(realmObject),
    };
  }
}
