const config = {
    user: 'Test',
    password: 'foo',
    server: 'DESKTOP-9RS8PO6',
    database: 'TimeTracker',
    options: {
        trustServerCertificate: true, 
        trustedConnection: false, 
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports = config; 