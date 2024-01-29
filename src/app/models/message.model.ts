export class MessageModel {
  msg!: string;
  severity!: 'success' | 'info' | 'warn' | 'error';
  time?: number;
}
