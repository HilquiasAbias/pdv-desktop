import { GenericValues } from "../generic-values";

export class DocumentType {
    public static getDocumentTypes(): GenericValues[] {
        return [
            {id: 2, description: 'CPF', value: 'CPF'},
            {id: 3, description: 'CNPJ', value: 'CNPJ'},
            {id: 4, description: 'Passaporte', value: 'PASSPORT'}
        ];
    }
}
