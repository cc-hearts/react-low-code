export interface MaterialType {
  /**
   * displayName
   */
  displayName: string

  /**
   * schema type
   */
  type: string

  /**
   * The group to which the component belongs
   */
  group: string

  /**
   * @name scehma props
   */
  attributes?: {
    label?: string
    props?: Record<string, any>
  }

  /**
   * icon
   */
  icon: string | React.FC
  /**
   * placeholder
   */
  [key: string]: unknown
}

export interface RenderSchema {
  Component: React.FC<any>
  attribute?: MaterialType['attributes']
  uuid: string
}
