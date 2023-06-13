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
   * icon
   */
  icon: string | React.FC
  /**
   * placeholder
   */
  [key: string]: unknown
}
