declare module "nativescript-couchbase" {
    
    export class Couchbase {
        constructor(databaseName: string, create: boolean, encryptionKey?: string);
        createDocument(data: Object, documentId?: string);
        getDocument(documentId: string);
        updateDocument(documentId: string, data: any);
        deleteDocument(documentId: string);
        destroyDatabase();
        closeDatabase():boolean;
        openDatabase(databaseName: string, encryptionKey?: string);
        createView(viewName: string, viewRevision: string, callback: any);
        executeQuery(viewName: string, options?: any);
        createPullReplication(remoteUrl: string);
        createPushReplication(remoteUrl: string);
        addDatabaseChangeListener(callback: any);
    }

}