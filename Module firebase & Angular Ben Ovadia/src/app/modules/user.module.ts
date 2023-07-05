export class User {
    firstName: string;
    lastName:string;
    email: string;

    constructor( firstName: string, lastName:string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    userToObj () {
        return {firstName: this.firstName, lastName: this.lastName, email: this.email};
    }


}