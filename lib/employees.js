import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import excuteQuery from './db';
import moment from 'moment';

export async function createEmployees({ fname,lname, DOB, email, password }) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex');
    const user = {
        id: uuidv4(),
        createdAt: moment().format( 'YYYY-MM-DD HH:mm:ss'),
        fname,
        lname,
        email,
        hash,
        salt,
        DOB,
        
    };

    try {
        const result = await excuteQuery({
            query: 'INSERT INTO employees ( FirstName,LastName,uuid,created, DOB, email_id, hash, salt,emp_role_id) VALUES(?,?, ?, ?, ?, ?,?,?,?)',
            values: [ user.fname,user.lname, user.id,user.createdAt.toString(), user.DOB, user.email, user.hash, user.salt,1],
        });
        console.log( result );
    } catch ( error ) {
        console.log( error );
    }

    return user;
}


export async function findEmployees({ email }) {
    try {
        console.log(email);
        const result = await excuteQuery({
            query: 'SELECT * FROM employees WHERE email_id = ?',
            values: [ email ],
        });
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

export async function validatePassword(user, inputPassword) {
    const inputHash = crypto
        .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
        .toString('hex');
    const passwordsMatch = user.hash === inputHash;
    return passwordsMatch;
}