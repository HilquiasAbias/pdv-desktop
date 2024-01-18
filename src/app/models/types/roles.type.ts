import { GenericValues } from "../generic-values";

export class RolesType {
    public static getUserRoles(): GenericValues[] {
        return [
            {id: 1, description: 'Administrador', value: 'ADMIN'},
            {id: 2, description: 'Frequentador', value: 'FREQUENTER'},
            {id: 3, description: 'Gestor ambiente', value: 'ENVIRONMENT_MANAGER'}
        ];
    }
}

