declare module "nativescript-couchbase" {
    
    export class Couchbase {
        constructor(databaseName: string, create?: boolean, encryptionKey?: string );
        closeDatabase():boolean;
        destroyDatabase();
        createDocument(data: Object, documentId?: string);
        getDocument(documentId: string);
        updateDocument(documentId: string, data: any);
        deleteDocument(documentId: string);
        createView(viewName: string, viewRevision: string, callback: any);
        executeQuery(viewName: string, options?: any);
        createPullReplication(remoteUrl: string);
        createPushReplication(remoteUrl: string);
        addDatabaseChangeListener(callback: any);
    }

}