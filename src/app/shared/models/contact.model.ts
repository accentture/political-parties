export class ContactModel {
    constructor(
        public names: string,
        public surnames: string,
        public emailOrMobileNumber: string,
        public password: any,
        public dateOfBirth: any,
        public gender: string
    ) {}
}