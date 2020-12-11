/**
 * Interface for the 'Widgets' data
 */
export interface WidgetsEntity {
  id: string | number;
  name: string;
  type: WidgetTypeEnum;
  image?: string;
  text?: string;
}

export enum WidgetTypeEnum {
  image = 'image',
  text = 'text',
  hello = 'hello'
}
