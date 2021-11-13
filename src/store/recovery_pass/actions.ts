export enum RecoveryActions {
    EMAIL_SEND = 'RECOVERY/EMAIL_SEND',
}

export const sendEmail = (email: string) => {
    return {
        type: RecoveryActions.EMAIL_SEND,
        email,
    }
}