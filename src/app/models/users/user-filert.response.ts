export class UserFilertResponse {
    pageSize: number;
    previous: number;
    next: number;
    total: number;
    data: UserFilertData[];

    constructor() {
        this.data = [];
    }
}

export class UserFilertData {
    id: string;
    name: string;
    active: boolean;
    document_type_id: number;
    created_at: Date;
    updated_at: Date;

    constructor() {
    }
}
