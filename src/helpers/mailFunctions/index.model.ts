import { Response } from "express";

export type EncryptionTypeDef = "Unencrypted" | "SSL/TLS" | "STARTTLS";

export type ServerTypeDef = "POP3" | "IMAP";

export type PortTypeDef = 993 | 143 | 110 | 995;

export interface MailFuncDef {
    email: string;
    password: string;
    encryption: EncryptionTypeDef;
    serverType: ServerTypeDef;
    host: string;
}

export interface GetFuncInboxDef {
    email: string;
    password: string;
    encType: EncryptionTypeDef;
    port: PortTypeDef;
    host: string;
    getFrom?: number;
    errorHandler: (error: {
        message: string;
    }) => Response<any, Record<string, any>> | undefined;
    successHandler: (
        info: object,
    ) => Response<any, Record<string, any>> | undefined;
}

export interface PortDictDef {
    [key: string]: {
        [key: string]: PortTypeDef;
    };
}
