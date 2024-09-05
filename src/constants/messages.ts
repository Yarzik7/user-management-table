export enum MessageType {
  ERROR = 'error',
  INFO = 'info',
}

export const ERROR_MESSAGE: string = 'Failed to get users' as const;
export const NO_DATA_MESSAGE: string = 'No users found' as const;
