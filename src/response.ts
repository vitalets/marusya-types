// See: https://vk.com/dev/marusia_skill_docs8

import { Session } from './request';
import { Card } from './images';
export * from './images';

export interface ResBody {
  response: Response;
  session: Session;
  version: '1.0';
  session_state?: Record<string, unknown>;
  user_state_update?: Record<string, unknown>;
}

export interface Response {
  text: string | string[];
  tts?: string;
  tts_type?: 'ssml';
  ssml?: string;
  card?: Card;
  buttons?: Button[];
  end_session: boolean;
  // todo: https://vk.com/dev/marusia_skill_docs11
  // audio_player
}

export interface Button {
  title: string;
  url?: string;
  payload?: unknown;
}
