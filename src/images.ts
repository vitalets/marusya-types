// see: https://vk.com/dev/marusia_skill_docs5
export type Card = BigImage | ItemsList | MiniApp | Link;

export interface BigImage {
  type: 'BigImage';
  image_id: number;
}

export interface ItemsList {
  type: 'ItemsList';
  items: ItemsListItem[];
}

export interface ItemsListItem {
  image_id: number;
}

export interface MiniApp {
  type: 'MiniApp';
  url: string;
}

export interface Link {
  type: 'Link';
  url: string;
  title: string;
  text: string;
  image_id: number;
}
