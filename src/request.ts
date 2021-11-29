// See: https://vk.com/dev/marusia_skill_docs8

import { Nlu } from './nlu';
export * from './nlu';

export interface ReqBody {
  meta: Meta;
  request: Request;
  session: Session;
  state?: State;
  version: '1.0';
}

export interface Meta {
  locale: string;
  timezone: string;
  client_id: string;
  interfaces: {
    screen?: Record<string, never>;
  },
  _city_ru: string;
  test?: boolean;
}

export interface Request {
  command: string;
  original_utterance: string;
  type: 'SimpleUtterance' | 'ButtonPressed' | 'DeepLink';
  payload?: Record<string, unknown>;
  nlu?: Nlu | null;
}

export interface Session {
  message_id: number;
  session_id: string;
  skill_id: string;
  /** @deprecated */
  user_id: string;
  user?: {
    user_id: string;
  };
  new: boolean;
  application: {
    application_id: string;
    application_type: 'mobile' | 'speaker' | 'vk' | 'other' | 'web';
  }
  auth_token: string;
}

export interface State {
  session?: Record<string, unknown>;
  application?: Record<string, unknown>;
  user?: Record<string, unknown>;
}
