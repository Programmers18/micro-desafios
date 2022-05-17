import { Injectable } from "@nestjs/common";

const ackErrors: string[] = ['E11000'];

@Injectable()
export class DesafiosErrorManager {
    async handler(error: any, channel: any, originalMsg: Record<string, any>): Promise<void> {
        const filterAckError = ackErrors.filter((ackError) =>
            error.message.includes(ackError),
        );
        if (filterAckError.length > 0) {
            await channel.ack(originalMsg);
        }
    }
}
