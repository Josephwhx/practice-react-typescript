import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";



describe('PasswordChecker test suite', () => {

    let sut: PasswordChecker

    beforeEach(() => {
        sut = new PasswordChecker();
    });

    afterEach(() => {

    });

    it('Should do nothing for the moment', () => {
        sut.checkPassword();
    });
    
});